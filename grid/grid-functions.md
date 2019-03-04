# Helper Functions for Column and Row Widths

There are a few different helper functions we can use to determine column (and row) measurements. The two I use constantly are:

* `repeat()`: repeats a series of columns
* `minmax()`: defines a minimum and maximum width of a column

If you have a series of columns that are all the same width, you could right out each width, but it's easier to use the repeat function.

```css
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
/* is the same as */
grid-template-columns: repeat(12, 1fr);
```

::: warning Note
IE's syntax is different for repeat, but Autoprefixer will take care of the translation for us.
:::

<p class="codepen" data-height="308" data-theme-id="0" data-default-tab="result" data-user="davecross" data-slug-hash="1424e901b7bcdd341dff164a1185be4a" style="height: 308px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Grid repeat()">
  <span>See the Pen <a href="https://codepen.io/davecross/pen/1424e901b7bcdd341dff164a1185be4a/">
  Grid repeat()</a> by Dave Cross (<a href="https://codepen.io/davecross">@davecross</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

We'll see a use of `minmax()` when we get to [Max-width with Grid](/grid/max-width-grid.md)

<codepen/>
