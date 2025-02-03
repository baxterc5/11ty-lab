module.exports = function(eleventyConfig) {
  // Ensure images and styles are copied to the output folder
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  // Shortcode for dynamic year
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};
