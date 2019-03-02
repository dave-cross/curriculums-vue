# Grid And Media Queries  
  
Always operate from outside to inside.   
  
Add media queries to the parent and change `grid-template-areas`. It’s more efficient and practical to re-arrange the grid (or turn it off completely) than it is to re-arrange the child elements. Autoprefixer will manage all our media query prefixes for us (unless we’re doing some truly unique changes).  
  
If your media queries are contained inside your grid rule block, some things don’t need to be passed into the query. Autoprefixer will pick up on `grid-gap` if it’s part of the same rule-set.  
  
