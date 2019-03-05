# From Sketch to Grid (Why Grid?)

Where Grid has gotten interesting for me is in how I can match mock-ups with almost 1-to-1 efficiency. I do this by declaring my grid _exactly_ as the designer declared theirs in Sketch (or other apps that have grid layout systems). It’s very common to get a mock-up with a 12 column grid, so I start with code that looks like this (for a 3 column layout):

```css{4-5}
.grid {
  grid-gap: 2rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-areas: “a a a a b b b b c c c c”
}
```

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="result" data-user="davecross" data-slug-hash="2fd51ebcae089c877443ed17eaa54c8b" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="12 column grids">
  <span>See the Pen <a href="https://codepen.io/davecross/pen/2fd51ebcae089c877443ed17eaa54c8b/">
  12 column grids</a> by Dave Cross (<a href="https://codepen.io/davecross">@davecross</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

That might seem like overkill until you get a request from a designer that a child item should start 1 column left/right or span 5 columns instead of 4. Matching the mocked grid is future-proofing my work. With that grid in place, I can still use `grid-area: 1/1/1/span 7;` or some other variation. I might have to manage the prefixing myself, but that’s a small price to pay for maximum flexibility.

```css{4-6}
.child {
  /* Manage prefixing ourselves */
  /* If you use `grid-gap`, you must add columns/rows to gaps (which should total columns - 1) */
  -ms-grid-column: 15; /* 8 columns + 7 gaps */
  -ms-grid-column-span: 13; /* 7 columns + 6 gaps */
  grid-area: 1 / 8 / 1 / span 7;
}
```

![Sketch to Firefox](/images/grid/sketch-to-firefox.jpg)

::: tip Tip
Nobody is forcing you to make 2 dimensional grids. I feel like this is part of the confusion with them. Almost every tutorial I see has grids going horizontal **and** vertical. Most of my grids stay in one direction.

You'll notice that the grid in the image is set up as _half and half_, to which we then we make adjustments. My current workflow tries to generate base grids for as many _common_ layouts as possible so I don't have to make too many adjustments later.
:::
<p class="codepen" data-height="464" data-theme-id="0" data-default-tab="result" data-user="davecross" data-slug-hash="30994040906b4cb6ecb2d3a3b05cd6c9" style="height: 464px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Sketch to Grid">
  <span>See the Pen <a href="https://codepen.io/davecross/pen/30994040906b4cb6ecb2d3a3b05cd6c9/">
  Sketch to Grid</a> by Dave Cross (<a href="https://codepen.io/davecross">@davecross</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

<codepen/>
