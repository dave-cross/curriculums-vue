# @supports And Fallbacks  
  
When I started using Grid, I was worried that I’d have to add a bunch of feature queries and fallbacks to support older browsers. This hasn’t been the case. The ways that I use Grid avoid the need for fallbacks.  
  
But there might be times in the future where this isn’t the case. A lot of sites will recommend using `@supports(display: grid)` for your feature query. This would work if we were just doing fallbacks for IE — while it supports Grid, it doesn’t support `@supports`, so the rules get ignored.  
  
But early versions of Edge also use the old Grid syntax **and** support `@supports`, so they’ll display errors if you try to use newer Grid syntax and feature queries.  
  
Luckily, the solution is just to change the feature query to `@supports( grid-auto-rows: 0)`, which tests against newer syntax rules instead of generic Grid support.  
  
----  
  
Another cool feature of CSS is how it will ignore rules that it doesn’t understand.  This means you could start with `display: flex` and add `display: grid` on the next line. Browsers that support Grid will use it and those that don’t will use Flexbox.  
  
