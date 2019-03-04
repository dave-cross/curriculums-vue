# Positioning and sizing along rows/tracks

`Grid-area` does more than just area names. It also functions as shorthand for `grid-row` and `grid-column` (which are, themselves, shorthands for starting position and ending position of a grid item). 

If we were just using those two, we’d declare them like this:

```css{2-3}
.item {
  grid-row: 1/3; /* start and stop based on grid lines. */
  grid-column: 1/4;
}
```

Or:

```css{2-3}
.item {
  grid-row: 1/span 2; /* a little easier to understand. */
  grid-column: 1/span 3;
}
```

But with `grid-area`, we can declare it like this:

```css{2}
.item {
  grid-area: 1/1/span 2/span 3;
}
```

We can even use negative numbers to declare where a row or column should end

```css{2}
.item {
  grid-area: 1/3/1/-1; /* Start on column 3 and go to the end of the row. */
}
```

Note that we declare this in (English) reading direction: row start / column start / row end / column end. “Run before rise”, not the more mathematically correct “rise over run”. 

`grid-area` is really the secret ingredient for what I do with Grid, so it’s definitely worth reading through the MDN docs for it.

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="result" data-user="davecross" data-slug-hash="c7fcd8d1e83496657bcd3440d40b5560" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Grid grid-area">
  <span>See the Pen <a href="https://codepen.io/davecross/pen/c7fcd8d1e83496657bcd3440d40b5560/">
  Grid grid-area</a> by Dave Cross (<a href="https://codepen.io/davecross">@davecross</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

<codepen/>
