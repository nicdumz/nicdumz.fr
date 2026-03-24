const eleventyPluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const eleventySass = require("eleventy-sass");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function(eleventyConfig) {
  // Configure markdown-it with anchor plugin for heading IDs
  const markdownLib = markdownIt({
    html: true,
    linkify: true,
    typographer: true
  }).use(markdownItAnchor, {
    permalink: false,  // Don't add permalink links, just IDs
    tabIndex: false,   // Don't add tabindex attribute
    slugify: (s) => {
      // Match Jekyll's slug generation: lowercase, replace non-word chars with dash, trim trailing dashes
      return s.toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_]+/g, '-')
        .replace(/^-+|-+$/g, '');
    }
  });
  eleventyConfig.setLibrary("md", markdownLib);

  // Plugins
  eleventyConfig.addPlugin(eleventyPluginSyntaxHighlight);
  eleventyConfig.addPlugin(eleventySass, {
    sass: {
      loadPaths: ["node_modules"],
      style: "compressed"
    }
  });

  // Passthrough copy for assets
  eleventyConfig.addPassthroughCopy("assets/images");
  eleventyConfig.addPassthroughCopy("assets/favicon.svg");
  eleventyConfig.addPassthroughCopy("resume-dumazet.pdf");

  // Collections - blog posts sorted by date (newest first)
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("_posts/*.md")
      .sort((a, b) => b.date - a.date);
  });

  // Add limit filter for Liquid templates (e.g., latest 5 posts)
  eleventyConfig.addFilter("limit", (array, limit) => {
    return array.slice(0, limit);
  });

  // Environment variable for production checks (Google Analytics, etc.)
  eleventyConfig.addGlobalData("environment", process.env.ELEVENTY_ENV || "development");

  // Ignore README files
  eleventyConfig.ignores.add("**/README.md");
  eleventyConfig.ignores.add("AGENTS.md");

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    },
    templateFormats: ["html", "md", "liquid"],
    htmlTemplateEngine: "liquid",
    markdownTemplateEngine: "liquid"
  };
};
