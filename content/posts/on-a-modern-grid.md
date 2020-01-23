---
title: On a modern grid
date: 2020-01-23
published: false
tags: ['code']
series: false
cover_image:
canonical_url: false
description: "Back in October, Marvin Danig made a fantastic blog post on the state of responsive web design and the future of CSS frameworks. I wanted to continue some of his points and see how a responsive first grid system might look."
---

Back in October, [Marvin Danig](https://dev.to/marvindanig/toucaan-rethinking-css-frameworks-394p) made a fantastic blog post on the state of responsive web design and the future of CSS frameworks. I wanted to continue some of his points and see how a responsive first grid system might look.

## The current grid
Before we get into the deep end of building a grid, I wanted to review some of the systems we have today and the pain points associated with them.

- Multiple media queries are needed to control grid columns at multiple breakpoints
- Unnecessary clutter from wrapper divs and repeated class names

The range of device sizes are growing faster than we can keep up with them. This was originally addressed by adding a breakpoint for small screens... then a breakpoint for tablet sized screens... then a breakpoint for large screens as the web finds itself on more and more devices.

It doesn't make sense to continually adjust the design to adapt to so many displays individually. Marvin outlines this problem in his article and his solution changed how I think about design for the web. His solution, in short, was to use screen orientation instead of size. Portrait or landscape.

Another problem with existing grid systems is the reliance on wrapper elements and class names. This is a little more tricky to deal with, but we'll look at a few solutions below.

## CSS Grid

Marvin hinted at this being the answer to all our grid related problems and that it should replace flexbox and floats. There is some merit to this and CSS grid is extremely powerful, but having tried building a "responsive by default" and highly flexible grid have shown that it might not be the best tool for the job. CSS experts have also said that CSS grid was never intended to replace flexbox.

That being said, CSS grid has a part to play in this system. First, let's look at some initial ideas.

```css
```

This little line packs a ton of punch. This allows us to arrange all children in the `.grid` container as equally sized grid items, with as many columns as will fit while making sure no column is smaller than 250px.

This is extremely light weight and would work well for a gallery or similar layout of identical items. The only problem with this is that the minimum width of each column is static and must be set based on the developers knowledge of the content. What if you want a grid of blog posts *and* a grid of images. 250px might be fine for the images, but too small for the blog posts. You could duplicate this code as many times as needed to fit the different use cases, but it still feels too rigid.

CSS grid works in situations like these, but it truly shines in bigger picture use cases, such as laying out the entire webpage, or the content in an individual component. It's fantastic for rearranging content too.

The problem with CSS grid is that it's only half as powerful as its potential. Developers must know what content will be laid out beforehand, making it hard to use it as the basis of a framework grid system. If we had features like [container queries](), you can quickly see how this idea can become much more flexible.

## Flexbox

Flexbox has its own problems, mostly with its implementation in [internet explorer](). Besides that, flexbox is, no pun intended, extremely flexible. It gives us the ability to automatically fit as many items on a single row as possible, or limit the max number of items per row. Flexbox grids also give us the freedom to make an item larger or smaller than the other items in its row.

Sounds like a dream, so what's the problem? Well, Flexbox isn't great at dealing with the gaps between items. `grid-gap` doesn't exist for flexbox, so we have to rely on the margins of the flex items themselves. This gets extremely hairy when you get into it, involving lots of math (and css variables if you want different gap sizes).

[Bulma]() offers my favorite implementations of the flexbox grid, but in my opinion, it's overly complicated for its best use case, and it relies on fixed media queries mentions earlier. Essentially, the grid logic looks something like this:

```css
```

Now the last problem I have this with I'm on the fence about. It still bothers me that each grid item must have a class. One of the appeals of CSS grid is that child items *just work*. Sure you could use the universal selector, but it somehow still feels like bad practice because of [selector performance](), even though that myth has been [largely debunked]().

## Layout vs grid

I believe this entire problem comes from the terms "grid" and "layout" being used interchangeably. Granted layouts were made according to a grid for decades, but the tools we have today allow us to separate the two.

### Layout

For the layout of a website or UI elements, CSS grid seems like the most logical solution. Using the grid to name areas and position content is a powerful and semantic way to position elements with a high degree of control.

These layouts can be changed using media queries. If you've been paying attention, you probably know what I'm about to suggest next. Instead of using hard breakpoints, use screen orientation instead.

```css
```

I'm not saying to never use hard breakpoints, that is breakpoints using `min-width`, but asking that you consider using a more meaningful media query *first*

I think grid is best used to thoughtfully layout content during the design phase, be it of a new component or website, and tailored to the use case. No framework can do this for you.

### Grid

Now we get into the meat of it. I propose you use flexbox to arrange an array of similar content. You can even make some media queries for screen orientation and use css variables to accomplish some smart adjustments.

I'm going to springboard off of Bulma's system in creating this. Some of the key features here though is that we have the ability to control:

- The max number of items per row
- The gap between items
- The behavior of the grid on portrait vs horizontal screens
- The size of individual items if needed

```css
```

### One last idea

Before I close out this article, I wanted to show one more grid solution that uses CSS grid. Similar to above, we can use CSS custom properties to adjust values inside the grid. If we replace a few key parts of our CSS grid based system at the very beginning with a handful of variables, it becomes much more versatile.

```css
```

I want to highlight the key differences of this grid and the one built with flexbox above. The flexbox system gives you control over the number of columns present and allows fine control over individual grid items if needed. This system does not give you either of those options. Instead, it puts more focus on the content and the space needed for the content to look good. You can set the minimum width for the content, but you can never accurately specify a max number of columns without the use of container queries or JavaScript while keeping the "responsive by default" aspect of the system. (If you can, I'd love to see a demo!)

If you have components that use a different layout for portrait and landscape, you could also add another CSS variable to this system to control the min width of the items in portrait and landscape mode individually, which could prove to be quite powerful.

## Final thoughts

Both of these systems have problems if you need to support internet explorer (and here's a great article on why you shouldn't), because these systems either rely on [CSS grid]() or [custom properties](), which IE never properly implemented.

At the end of the day, the fact of the matter is that there is no one-size-fits-all grid system. But I'm pretty happy with the ideas here, and look forward to seeing how the landscape of CSS evolves in the future.