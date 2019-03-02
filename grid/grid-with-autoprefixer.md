# Using Grid today in Production (Autoprefixer)  
  
Autoprefixer is the glue that helps keep our code clean. There are going to be a few cases where we manually add prefixes for older browsers, but the basics of how we’ll use Grid will prefix themselves.  
  
As of version 9.3.1, Autoprefixer will prefix grids using a control comment. This means we can turn Grid prefixing on and off as needed (but I usually leave it on all the time).  
  
Ver. 9.4.4 adds “auto-flow”. It automatically generates the code to place children in IE, saving us a step when we build our grids. Codepen currently uses 9.3.1, so for a little while, I do this part manually.  

<div class="codepen" data-height="182" data-theme-id="0" data-default-tab="css" data-prefill='{"title":"Autoprefixer for Grid","tags":[],"stylesheets":[],"scripts":[]}'>
  <pre data-lang="html"></pre>
  <pre data-lang="scss" data-option-autoprefixer>// Turn on Autoprefixer's grid tools.
/* autoprefixer grid: on */
</pre>
</div>

<codepen/>
