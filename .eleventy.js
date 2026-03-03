module.exports = function(eleventyConfig) {
  // Copy static files to _site without modifying them
  eleventyConfig.addPassthroughCopy("*.html");    // copies all HTML files
  eleventyConfig.addPassthroughCopy("style.css"); // copies your CSS
  eleventyConfig.addPassthroughCopy("images");    // copies your images folder

  return {
    dir: {
      input: ".",    // read files from project root
      output: "_site" // build output goes here
    }
  };
};