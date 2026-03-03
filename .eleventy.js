module.exports = function(eleventyConfig) {
  // Copy static files to _site
  eleventyConfig.addPassthroughCopy("*.html");      // all HTML files
  eleventyConfig.addPassthroughCopy("style.css");   // your CSS
  eleventyConfig.addPassthroughCopy("icons");       // your icons folder
eleventyConfig.addPassthroughCopy("gamesimage");       // your icons folder 2
eleventyConfig.addPassthroughCopy("pagea");       // your icons folder 2
eleventyConfig.addPassthroughCopy("pagec");       // your icons folder 2


  return {
    dir: {
      input: ".",      // source files are in the root
      output: "_site"  // Eleventy builds here
    }
  };
};