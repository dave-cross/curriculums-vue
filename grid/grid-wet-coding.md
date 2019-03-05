# Grid, Autoprefixer, and WET coding  
  
You’ll notice as you create the various grids of your project that you have to duplicate the same properties in the same place. The most common property to duplicate is `grid-gap`. Unfortunately, there’s no easy way to DRY this up. Autoprefixer needs to be absolutely explicit in order to generate prefixed code for us. If the `grid-gap` is outside of our grid class, Autoprefixer might not find it, resulting in incorrect prefixed versions of our grid.  
  
With Sass variables, we can limit the amount of correction time by setting the gap as a variable, while keeping that property next to the other grid rules in development.  
  
