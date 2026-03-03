module.exports = function(eleventyConfig) {
  // Copy static files to _site
  eleventyConfig.addPassthroughCopy("*.html");      // all HTML files
  eleventyConfig.addPassthroughCopy("style.css");   // your CSS
  eleventyConfig.addPassthroughCopy("icons");       // your icons folder

  return {
    dir: {
      input: ".",      // source files are in the root
      output: "_site"  // Eleventy builds here
    }
  };
};