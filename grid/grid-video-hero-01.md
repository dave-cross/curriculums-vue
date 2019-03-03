# Grid Video Hero

Creating the popular hero component with a background video has never been easier. 

The mark-up for this is very clean. Two child elements: one contains our text and the next is the video. 

```html
<div class=“parent”>
  <div class=“content”>[PUT WORDS HERE]</div>
  <video>{ADD SOURCE HERE]</video>
</div>
```

The styles are very direct:

```css
.parent {
  display:grid;
  grid-template-areas: “a”;
}
.parent > * {
  grid-area: a;
  align-self: center;
  justify-self: center;
}
.parent > *:first-child {
  z-index:2;
}
```

We could remove the `z-index` by putting the video ahead of the content — it really comes down to thinking about what your source order should be.

Notice how most of the styles are on the parent.  This is the power of Grid. We’re always trying to work from the outside in. 

Creating hero components this way doesn’t guarantee that items will maintain their overlap, but it’s definitely easier to write media queries.

<p class="codepen" data-height="421" data-theme-id="0" data-default-tab="result" data-user="davecross" data-slug-hash="f099fb29394f427429424d5e7c5f553f" style="height: 421px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Grid Video Hero">
  <span>See the Pen <a href="https://codepen.io/davecross/pen/f099fb29394f427429424d5e7c5f553f/">
  Grid Video Hero</a> by Dave Cross (<a href="https://codepen.io/davecross">@davecross</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

<codepen/>
