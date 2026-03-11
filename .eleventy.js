module.exports = function(eleventyConfig) {
  // Copy static files to _site
  eleventyConfig.addPassthroughCopy("*.html");      // all HTML files
  eleventyConfig.addPassthroughCopy("style.css");   // your CSS
  eleventyConfig.addPassthroughCopy("icons");       // your icons folder
eleventyConfig.addPassthroughCopy("gamesimage");       // your icons folder 2
eleventyConfig.addPassthroughCopy("gallery");       // your icons 
eleventyConfig.addPassthroughCopy("pagea");       // folder 3
eleventyConfig.addPassthroughCopy("pagec");       // folder 4


  return {
    dir: {
      input: ".",      // source files are in the root
      output: "_site"  // Eleventy builds here
    }
  };
};