# Ensuring a minimum outside "padding" on max-width grid

Michelle Barker ([CSS{IRL}](https://css-irl.info)) did an [excellent presentation about CSS Grid](https://noti.st/mbarker84/bJco6e/building-intelligent-layouts-with-css-grid#srhAj9j).

The thing that I took away from it was to use `minmax()` on our outside, "filler" columns. This would allow those columns to always have a minimum width for when you want a little extra space around your grid on "medium" screen sizes.

Add `minmax([MIN-OUTSIDE-PADDING - GAP-WIDTH], 1fr)` as sizing for outside columns to maintain a minimum _padding_ on grids.

```css
/* $gap: 20px; */
.grid {
  display: grid;
  grid-gap: 20px;
  
  /* Distance from screen edge to first "lettered" column should be a minimum of 30px. */
  /* 12 column grid math: (max-width - (11 * gap)) / 12 */
  /* Distance from last "lettered" column to screen edge should be a minimum of 30px. */
  grid-template-columns: minmax(10px, 1fr) repeat(12, minmax(0, calc((1024px - (11 * 20px)) / 12 ))) minmax(10px, 1fr);
  grid-template-areas: ". a a a a a a b b b b b b .";
}
```

In the above example, There would always be a 30px "margin/padding" on the grid parent. It isn't real margin or padding, but the design will look right.

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="result" data-user="davecross" data-slug-hash="4eb4bab51775a4dd9c9b15ed0ca374a5" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Grid with Max-width with Min-width outside columns">
  <span>See the Pen <a href="https://codepen.io/davecross/pen/4eb4bab51775a4dd9c9b15ed0ca374a5/">
  Grid with Max-width with Min-width outside columns</a> by Dave Cross (<a href="https://codepen.io/davecross">@davecross</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

<codepen/>
