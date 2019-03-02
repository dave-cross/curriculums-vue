# SVG preserveAspectRatio  
  
Depending on use case (and whether you've used `viewBox` or actual `width` and `height` for initial sizing of your SVG), you might find SVGs scale funny. Some images or icons will always be centered and shrink or expand to the maximum size without cropping. Normally, being centered without cropping is what you want, but you can control this placement with `preserveAspectRatio`. `preserveAspectRatio` is like `object-fit` or `background-position` for SVGs, but with way more power. You can decide on positioning and whether an svg will scale to fit its bounds or crop.

There are just a handful of options, but they can be combined in multiple ways:

* `none`: Don't maintain a ratio. This results in stretched images. Used by itself.
* `x[Min/Mid/Max]Y[Min/Mid/Max]`: (watch the capital letters) Used to declare positioning. Always combined with...
* `[meet/slice]`: Used to determine if the SVG is `contained` in the bounding area or `covers` (is cropped by) the bounding area.

```
preserveAspectRatio="xMidYMid meet" // The default. This happens if this property isn't set.
preserveAspectRatio="xMinYMid meet" // Lock SVG to left-center side of bounds.
preserveAspectRatio="xMidYMin meet" // Lock SVG to top-center of bounds.
preserveAspectRatio="xMidYMid slice" // Lock SVG to center and scale (be cropped) to fill space.
preserveAspectRatio="none" // No aspect ratio. SVG will stretch to edges of bounds.
```

<p class="codepen" data-height="313" data-theme-id="0" data-default-tab="html,result" data-user="davecross" data-slug-hash="a3bec2b83dd37954cb68cecabca95636" style="height: 313px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="preserveAspectRatio demo">
  <span>See the Pen <a href="https://codepen.io/davecross/pen/a3bec2b83dd37954cb68cecabca95636/">
  preserveAspectRatio demo</a> by Dave Cross (<a href="https://codepen.io/davecross">@davecross</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

`preserveAspectRatio` isn't limited to the parent SVG. You can create interesting effects by making pieces of an SVG preserve different aspect ratios (open the following demo in a new window and try resizing it).

<p class="codepen" data-height="317" data-theme-id="0" data-default-tab="result" data-user="davecross" data-slug-hash="10e608a6ef4b5401e371973943374446" style="height: 317px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="preserveAspectRatio demo">
  <span>See the Pen <a href="https://codepen.io/davecross/pen/10e608a6ef4b5401e371973943374446/">
  preserveAspectRatio demo</a> by Dave Cross (<a href="https://codepen.io/davecross">@davecross</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

<codepen/>
