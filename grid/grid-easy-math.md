# Easier math with Grid

I've noticed something else while using CSS Grid: alignment math seems to be easier. I assume this is because we plan the grid at a higher level on parent elements.

If I want to add padding to an element while still having everything line up, I have a couple options.

I can do some simple math based on the number of columns I've used:

```scss
$gap: 1rem;
// Math: Width - (total gap widths used) / (total columns) + (1 gap width)
padding: $gap calc((100% - #{$gap * 5})/6 + #{$gap});
```

<p class="codepen" data-height="442" data-theme-id="0" data-default-tab="result" data-user="davecross" data-slug-hash="947cda05cb9cf451dbe61bc67f5b7c7b" style="height: 442px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Grid padding based on known column count">
  <span>See the Pen <a href="https://codepen.io/davecross/pen/947cda05cb9cf451dbe61bc67f5b7c7b/">
  Grid padding based on known column count</a> by Dave Cross (<a href="https://codepen.io/davecross">@davecross</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Or I can add another grid inside the child container to do the math for me:

```scss
$gap: 1rem;
display: grid;
grid-gap: $gap;
grid-template-columns: repeat(6, 1fr);
grid-template-areas:". a a a a .";

> :first-child {grid-area: a;}
```

<p class="codepen" data-height="441" data-theme-id="0" data-default-tab="result" data-user="davecross" data-slug-hash="20c69eb34052d9ecfd02c4ec3b98a296" style="height: 441px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Grid in grid based on known column count">
  <span>See the Pen <a href="https://codepen.io/davecross/pen/20c69eb34052d9ecfd02c4ec3b98a296/">
  Grid in grid based on known column count</a> by Dave Cross (<a href="https://codepen.io/davecross">@davecross</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Getting columns in child elements is also pretty easy with CSS Columns and `column-gap`:

```scss
$gap: 1rem;
columns: 2;
column-gap: $gap;

```

<p class="codepen" data-height="503" data-theme-id="0" data-default-tab="result" data-user="davecross" data-slug-hash="9a778444cebb029859d7e00fb9bf0a7c" style="height: 503px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Grid with CSS columns">
  <span>See the Pen <a href="https://codepen.io/davecross/pen/9a778444cebb029859d7e00fb9bf0a7c/">
  Grid with CSS columns</a> by Dave Cross (<a href="https://codepen.io/davecross">@davecross</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

::: tip Tip
You should probably add `break-inside: avoid;` to CSS column children so they wrap to next column as expected.
:::

If you need to have child elements line up vertically, that math is easy too:

```scss
// On the flex container, add `justify-contents: space-between`
$gap: 1rem;
// Math: (100% / column-count) - (gap-width / (total columns / total gaps)
flex-basis: calc(50% - #{$gap/2});
```

<p class="codepen" data-height="488" data-theme-id="0" data-default-tab="result" data-user="davecross" data-slug-hash="48740dc811cde631c653a763a0d483ca" style="height: 488px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Grid with Flexbox columns">
  <span>See the Pen <a href="https://codepen.io/davecross/pen/48740dc811cde631c653a763a0d483ca/">
  Grid with Flexbox columns</a> by Dave Cross (<a href="https://codepen.io/davecross">@davecross</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Everything seems to get easier when using CSS Grid.

<codepen/>
