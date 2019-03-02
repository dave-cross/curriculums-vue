# Max-width with Grid

With grid we can manage the max-width from within our grid declarations. The secret is to use `minmax()` with a little calc magic for the _expected_ grid and have two additional columns (one on each side of the grid) set to `1fr` (14 columns in our example). The minmax values are calculated first and whatever remains is split between our outside columns.


```css{7}
.grid {
  /* gap reduction is $gap / (internal columns / internal gaps) === 12/11 === 1.09 */
  /* $gap: 2rem; */
  /* $container-max-width: 900px */
  /* grid-template-columns: 1fr repeat(12, minmax(0, #{($container-max-width / 12) - ($gap / [GAP REDUCTION])})) 1fr; */

  grid-template-columns: 1fr repeat(12, minmax(0, calc( (900px / 12) - (2rem / 1.09) ))) 1fr;
}
```

