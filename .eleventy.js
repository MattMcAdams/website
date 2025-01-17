const { DateTime } = require("luxon");
const fs = require("fs");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItFootnote = require("markdown-it-footnote");

module.exports = function (eleventyConfig) {
  /* =================================================================
  /* SECTION Configuration
  ================================================================= */

  // Add Plugins
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);

  // Data Deep Merge
  // https://www.11ty.dev/docs/data-deep-merge/
  eleventyConfig.setDataDeepMerge(true);

  // Enable Static Passthrough
  eleventyConfig.addPassthroughCopy({ "src/_static/": "/" });

  /* ==============================
  /* SECTION Markdown
  ============================== */

  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: false,
  }).use(markdownItAnchor, {
    permalink: true,
    permalinkClass: "direct-link",
    permalinkSymbol: "&sect;",
  }).use(markdownItFootnote);

  // Custom renderer for footnote back link
  markdownLibrary.renderer.rules.footnote_anchor = (tokens, idx) => {
    let n = Number(tokens[idx].meta.id + 1).toString();
    let id = `fnref${n}`;
    return ` <span class="footnote-backref"><a href="#${id}">↑</a></span>`;
  };

  eleventyConfig.setLibrary("md", markdownLibrary);

  /* !SECTION Markdown */
  /* ==============================
  /* SECTION BrowserSync Overrides (used only with --serve)
  ============================== */

  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, browserSync) {
        const content_404 = fs.readFileSync("dist/404.html");

        browserSync.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
          res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
          res.write(content_404);
          res.end();
        });
      },
    },
    ui: false,
    ghostMode: false,
  });

  /* !SECTION BrowserSync Overrides */
  /* !SECTION Configuration */
  /* =================================================================
  /* SECTION Filters
  ================================================================= */

  // Get the first `n` elements of a collection.
  // eleventyConfig.addFilter("head", (array, n) => {
  //   if (n < 0) {
  //     return array.slice(n);
  //   }
  //   return array.slice(0, n);
  // });
  // Return the smallest number argument
  eleventyConfig.addFilter("min", (...numbers) => {
    return Math.min.apply(null, numbers);
  });

  /* ==============================
  /* SECTION Dates
  ============================== */

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "dd LLLL yyyy"
    );
  });

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  /* !SECTION Dates */
  /* ==============================
  /* SECTION Tag Filters
  ============================== */

  // Filters out unwanted / utility tags
  function filterTagList(tags) {
    return (tags || []).filter(
      (tag) => ["posts", "projects"].indexOf(tag) === -1
    );
  }
  eleventyConfig.addFilter("filterTagList", filterTagList);

  /* !SECTION Tag Filters */
  /* !SECTION Filters */
  /* =================================================================
  /* SECTION Collection Functions
  ================================================================= */

  // Return a list of tags in a given collection
  function getTagList(collection) {
    let tagSet = new Set();
    collection.forEach((item) => {
      (item.data.tags || []).forEach((tag) => tagSet.add(tag));
    });
    return filterTagList([...tagSet]);
  }

  // Return a list of years in a given collection
  function getYearList(collection) {
    let years = new Set();
    collection.forEach((item) => {
      years.add(
        DateTime.fromJSDate(item.data.date, { zone: "utc" }).toFormat("yyyy")
      );
    });
    return [...years];
  }

  // Find collection item by URL
  // {%- set page1 = collections.projects | find("/slug/") -%}
  // <h2>{{ page1.data.title }}</h2>
  eleventyConfig.addFilter("find", function find(collection = [], slug = "") {
    return collection.find((post) => post.url === slug);
  });

  // Return an object with arrays of posts by tag from the provided collection
  function createCollectionsByTag(collection) {
    // set the result as an object
    let resultArrays = {};
    // loop through each item in the provided collection
    collection.forEach((item) => {
      // loop through the tags of each item
      item.data.tags.forEach((tag) => {
        // If the tag has not already been added to the object, add it as an empty array
        if (!resultArrays[tag]) {
          resultArrays[tag] = [];
        }
        // Add the item to the tag's array
        resultArrays[tag].push(item);
      });
    });
    // Return the object containing tags and their arrays of posts
    // { tag-name: [post-object, post-object], tag-name: [post-object, post-object] }
    return resultArrays;
  }

  // Return an object with arrays of posts by year from the provided collection
  function createCollectionsByYear(collection) {
    // set the result as an object
    let resultArrays = {};
    // loop through each item in the provided collection
    collection.forEach((item) => {
      year = DateTime.fromJSDate(item.data.date, { zone: "utc" }).toFormat(
        "yyyy"
      );
      if (!resultArrays[year]) {
        resultArrays[year] = [];
      }
      resultArrays[year].push(item);
    });
    // Return the object containing tags and their arrays of posts
    // { year: [post-object, post-object], year: [post-object, post-object] }
    return resultArrays;
  }

  /* !SECTION Collection Functions */
  /* =================================================================
  /* SECTION Collections
  ================================================================= */
  /* ==============================
  /* SECTION Posts
  ============================== */

  // set up collections for posts
  const POSTS = (collectionAPI) => {
    return collectionAPI.getFilteredByGlob("./src/posts/*/*.md");
  };
  // collections.posts => Returns list of all posts
  eleventyConfig.addCollection("posts", function (collectionAPI) {
    return POSTS(collectionAPI);
  });
  // collections.postTags => Returns list of all tags
  eleventyConfig.addCollection("postTags", function (collectionAPI) {
    return getTagList(POSTS(collectionAPI));
  });
  // collections.postsByTag[tag] => Returns list of all posts that match tag-name
  eleventyConfig.addCollection("postsByTag", function (collectionAPI) {
    return createCollectionsByTag(POSTS(collectionAPI));
  });
  // Create a collection for post years (required for the generation of archive pages)
  eleventyConfig.addCollection("postYears", function (collectionAPI) {
    return getYearList(POSTS(collectionAPI));
  });
  // Create a collection for posts by year
  eleventyConfig.addCollection("postsByYear", function (collectionAPI) {
    return createCollectionsByYear(POSTS(collectionAPI));
  });

  /* !SECTION Posts */
  /* ==============================
  /* SECTION Projects
  ============================== */

  // Set up collections for projects
  const PROJECTS = (collectionAPI) => {
    return collectionAPI.getFilteredByGlob("./src/projects/*/*.md");
  };
  // collections.projects => Returns list of all projects
  eleventyConfig.addCollection("projects", function (collectionAPI) {
    return PROJECTS(collectionAPI);
  });
  // collections.projectTags => Returns list of all tags
  eleventyConfig.addCollection("projectTags", function (collectionAPI) {
    return getTagList(PROJECTS(collectionAPI));
  });
  // collections.projectsByTag[tag] => Returns list of all projects that match tag-name
  eleventyConfig.addCollection("projectsByTag", function (collectionAPI) {
    return createCollectionsByTag(PROJECTS(collectionAPI));
  });

  /* !SECTION Projects */
  /* ==============================
  /* SECTION Sketchbook
  ============================== */

  // Setup collections for sketchbook
  const SKETCHBOOK = (collectionAPI) => {
    return collectionAPI.getFilteredByGlob("./src/sketchbook/*/*.md");
  };
  // collections.sketchbook => Returns list of all sketches
  eleventyConfig.addCollection("sketchbook", function (collectionAPI) {
    return SKETCHBOOK(collectionAPI);
  });
  // collections.sketchbookTags => Returns list of all tags
  eleventyConfig.addCollection("sketchbookTags", function (collectionAPI) {
    return getTagList(SKETCHBOOK(collectionAPI));
  });
  // collections.sketchbookByTag[tag] => Returns list of all sketches that match tag-name
  eleventyConfig.addCollection("sketchbookByTag", function (collectionAPI) {
    return createCollectionsByTag(SKETCHBOOK(collectionAPI));
  });
  // Create a collection for sketchbook years (required for the generation of archive pages)
  eleventyConfig.addCollection("sketchbookYears", function (collectionAPI) {
    return getYearList(SKETCHBOOK(collectionAPI));
  });
  // Create a collection for sketches by year
  eleventyConfig.addCollection("sketchbookByYear", function (collectionAPI) {
    return createCollectionsByYear(SKETCHBOOK(collectionAPI));
  });

  /* !SECTION Sketchbook */
  /* ==============================
  /* SECTION Logs
  ============================== */

  // Setup collection for logs
  const LOGS = (collectionAPI) => {
    return collectionAPI.getFilteredByGlob("./src/log/*/*.md");
  };
  // collections.logs => Returns list of all journal entries
  eleventyConfig.addCollection("logs", function (collectionAPI) {
    return LOGS(collectionAPI);
  });
  // Create a collection for journal years (required for the generation of archive pages)
  eleventyConfig.addCollection("logYears", function (collectionAPI) {
    return getYearList(LOGS(collectionAPI));
  });
  // Create a collection for log entries by year
  eleventyConfig.addCollection("logsByYear", function (collectionAPI) {
    return createCollectionsByYear(LOGS(collectionAPI));
  });

  /* !SECTION Logs */

  // collections.allContent => Returns list of all content
  eleventyConfig.addCollection("allContent", function (collectionAPI) {
    return collectionAPI.getFilteredByGlob([
      "./src/sketchbook/*/*.md",
      "./src/posts/*/*.md",
      "./src/projects/*/*.md",
      "./src/log/*/*.md",
    ]);
  });

  /* !SECTION Collections */
  /* =================================================================
  /* SECTION Shortcodes
  ================================================================= */

  eleventyConfig.addShortcode("lbrace", function () {
    return `{`;
  });

  eleventyConfig.addShortcode("rbrace", function () {
    return `}`;
  });

  /* !SECTION Shortcodes */
  /* =================================================================
  /* SECTION Return
  ================================================================= */

  return {
    // Control which files Eleventy will process
    // e.g.: *.md, *.njk, *.html, *.liquid
    templateFormats: ["md", "njk", "html", "liquid"],

    // Pre-process *.md files with:
    markdownTemplateEngine: "njk",

    // Pre-process *.html files with:
    htmlTemplateEngine: "njk",

    // Opt-out of pre-processing global data JSON files:
    dataTemplateEngine: false,

    // Set directories
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "dist",
    },
  };

  /* !SECTION Return */
};
