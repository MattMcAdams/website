---
title: Multi axis design tokens with Style Dictionary and SCSS
date: 2025-03-20

tags: ['css']
description: "Let's look at multi-axis design tokens and how to implement them with style dictionary"

thumbnail: null
cover_image: null
---

Design tokens help designers and developers stay on the same page when it comes to things like space and color. Some tokens may change in value for certain contexts, like reducing font sizes for smaller screens or changing colors for different themes. These alternate values are usually called "modes" and usually exist on a single axis. This is why tools like Figma often show variables in a table. The rows are for tokens and columns for modes. But what if you need to manipulate the values for another dimension?

## A practical example

Let's consider an application that supports light and dark mode, but also color themes within those. A good example of this is GitHub, where they offer a light and dark theme with additional options to help with different forms of color blindness. Complexity of the system grows exponentially with every mode you add and it can become overwhelming to describe them all.

This is a problem that the Design Token Community Group is currently tackling with the [Resolver Proposal](https://resolver-spec.netlify.app/info/rationale/).

While the DTCG spec isn't quite there, I thought I'd show how I've been managing these kind of tokens.

## Setup

I would recommend checking out the DTCG spec to see if it meets your needs and use it if it does. It doesn't quite work for the design system I was working on at the time of writing, so this is my solution.

I start with the color object which holds all color tokens. Inside that, I branch off for light and dark mode. Each mode has theme objects that hold categories for the actual color variables. I'm using semantic tokens and referencing colors from the color scales the design system uses.

Colors not defined in a theme set will default to the default color set for that mode. For this example, text colors for the `secondary` theme will be the same as those for the `default` theme, but the background colors will be different.

```json
{
  "color": {
    "light": {
      "default": {
        "text": {
          "default": {
            "value": "{colorReference.neutral.800}"
          },
          "link": {
            "value": "{colorReference.primary.500}"
          }
        },
        "background": {
          "surface": {
            "value": "#ffffff",
          },
          "element": {
            "value": "{colorReference.neutral.50}"
          }
        }
      },
      "secondary": {
        "background": {
          "surface": {
            "value": "{colorReference.neutral.50}"
          },
          "element": {
            "value": "{colorReference.neutral.100}"
          },
        }
      }
    },
    "dark": {
      "default": {
        "text": {
          "default": {
            "value": "{colorReference.neutral.50}"
          },
          "link": {
            "value": "#ffffff"
          }
        },
        "background": {
          "surface": {
            "value": "{colorReference.neutral.900}"
          },
          "element": {
            "value": "{colorReference.neutral.800}"
          }
        }
      },
      "secondary": {
        "text": {
          "default": {
            "value": "#ffffff"
          }
        },
        "background": {
          "surface": {
            "value": "{colorReference.neutral.800}"
          },
          "element": {
            "value": "{colorReference.neutral.700}"
          }
        }
      }
    }
  }
}
```

This is a very trimmed down example, but you should be able to get a sense for how the tokens change for different themes within the two modes. This can be expanded on to support more than "light" and "dark" modes, or more themes than "default" and "secondary".

For this system, I'm using SCSS to build the token names and insert the code. To help with this, I export this to an SCSS map with Style Dictionary. Below is my configuration.

```js
// style-dictionary.js
export default {
  source: ["tokens/**/*.json"],
  platforms: {
    scss: {
      transformGroup: "scss",
      files: [
        {
          destination: "./tokens/_index.scss",
          format: "scss/map-deep",
          options: {
            mapName: "tokens",
          },
        },
      ],
    },
  },
};
```

Then the SCSS map can be generated using:

```shell
style-dictionary build --config ./core/config/style-dictionary.js
```

### Helpers

Because the generated map is a deep map, I wrote this function to help access those values without nesting `map.get` over and over. I put it in it's own file so that it can be imported and used like the built-in SCSS functions.

```scss
// deep-map.scss
@function get($map, $parts) {
  @if meta.type-of($map) !='map' {
    @error '"#{$map}" is not a valid map';
  }

  $value: $map;

  @for $i from 1 through list.length($parts) {
    $key: list.nth($parts, $i);

    @if not map.has-key($value, $key) {
      @debug "Parts: #{$parts}";
      @error "#{$key} is not a valid key on the map: #{$value}.";
    }

    $value: map.get($value, $key);
  }

  @return $value;
}
```

This function loops through the maps and returns the value of the last key. To use it, you'd pass in the map you want to search and a list of keys. All keys should be a map. You'll see how I'm using this in the next example.

Next, I made a `color()` SCSS function to help me work with the CSS variables we'll eventually create. The goals for this function is to either return the value of a variable, the name of the variable, or a CSS `var()` with a fallback.

```scss
$colors: map.get($tokens, 'color') !default;

@function color(
  $group,
  $key,
  $format: 'default',
  $theme: 'default',
  $mode: 'light',
  $map: $colors
) {
  $name: '--color_#{$group}--#{$key}';

  @if not ($format == 'default' or $format == 'name' or $format == 'value') {
    @error '"#{$format}" is not a valid format. Expected "default", "name", or "value".';
  }

  @if map.has-key(deep-map.get($map, ($mode, $theme, $group)), $key) {
    $value: deep-map.get($map, ($mode, $theme, $group, $key));
    @if meta.type-of($value) == 'map' or meta.type-of($value) == 'list' {
      @error '#{$value} is not a valid CSS variable value.';
    }

    @if $format =='value' {
      @return $value;
    }
    @if $format =='name' {
      @return $name;
    }
    @return 'var(#{$name}, #{$value})';
  } @else {
    @error '#{$group}-#{$key} is not a valid color token.';
  }
}
```

Now in my CSS, I use this instead of a css `var()`. This makes sure the variable names are correct and provides a fallback value if the variables aren't loaded.

```scss
.example: {
  background: #{color('background', 'surface')};
  color: #{color('text', 'default')};
}

a {
  color: #{color('text', 'link')};
}
```

Now, to build the CSS variables themselves, I created a mixin. to loop through the variables in a given mode and theme.

```scss
@mixin color-variables($mode, $theme, $map: $colors) {
  @if meta.type-of(deep-map.get($map, ($mode, $theme))) == 'map' {
    @each $group, $vars in deep-map.get($map, ($mode, $theme)) {
      @each $key, $value in $vars {
        #{color($group, $key, 'name')}: #{$value};
      }
    }
  } @else {
    @error "Expected $theme to be a map. Got #{meta.type-of(deep-map.get($map, ($mode, $theme)))}";
  }
}
```

Using this to create the variables looks like this:

```scss
:root {
  @include color-variables('light', 'default');
}
// Iterate through each theme in the light color mode
@each $theme, $group in map.get($colors, 'light') {
  // Skip the default theme
  @if (not ($theme == 'default')) {
    // Build selector and color variables
    body:not(.color-mode--dark) .color-theme--#{$theme} {
      @include color-variables('light', $theme);
    }
  }
}
// Output dark theme color variables
body.color-mode--dark {
  @include color-variables('dark', 'default');
}
// Iterate through each theme in the dark color mode
@each $theme, $group in map.get($colors, 'dark') {
  // Skip the default theme
  @if (not ($theme =='default')) {
    // Build selector and color variables
    body.color-mode--dark .color-theme--#{$theme} {
      @include color-variables('dark', $theme);
    }
  }
}
```

## Conclusion

This will create the CSS variables required for mode switching, provide support for light and dark mode and let you theme specific sections without needing to re-define the colors for every component for every mode and theme.
