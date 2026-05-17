import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import eleventySass from "eleventy-sass";
import markdownit from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";

export default function (eleventyConfig) {
  // Configure markdown-it with anchor plugin for heading IDs
  const markdownLib = markdownit({
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
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(eleventySass, {
    sass: {
      loadPaths: ["node_modules"],
      style: "compressed"
    }
  });
  eleventyConfig.addPlugin(feedPlugin, {
    type: "rss",
    outputPath: "/blog/feed.rss",
    collection: {
      name: "posts",
      limit: 10,
    },
    metadata: {
      language: "en",
      title: "ndumazet@ - Blog",
      subtitle: "Ramblings from Nicolas",
      base: "https://nicdumz.fr/blog/",
      author: {
        name: "Nicolas Dumazet",
        email: "",
      }
    }
  });

  // Passthrough copy for assets
  eleventyConfig.addPassthroughCopy("assets/images/**/*.gif");
  eleventyConfig.addPassthroughCopy("assets/images/**/*.jpg");
  eleventyConfig.addPassthroughCopy("assets/images/**/*.png");
  eleventyConfig.addPassthroughCopy("assets/favicon.svg");
  eleventyConfig.addPassthroughCopy("resume-dumazet.pdf");
  // For CloudFlare pages headers, see https://developers.cloudflare.com/pages/configuration/headers/
  eleventyConfig.addPassthroughCopy("_headers");

  // Collections - blog posts sorted by date (newest first)
  eleventyConfig.addCollection("posts", function (collectionApi) {
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
    templateFormats: ["html", "md", "liquid", "njk"],
    htmlTemplateEngine: "liquid",
    markdownTemplateEngine: "liquid"
  };
};
