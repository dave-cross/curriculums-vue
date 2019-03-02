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
  grid-template-columns:1fr;
  grid-template-areas: “a”;
  align-items: center;
  justify-items: center;
}
.parent > * {
  grid-area: a;
}
.parent > *:first-child {
  z-index:2;
}
```

We could remove the `z-index` by putting the video ahead of the content — it really comes down to thinking about what your source order should be.

Notice how most of the styles are on the parent.  This is the power of Grid. We’re always trying to work from the outside in. 

Creating hero components this way doesn’t guarantee that items will maintain their overlap, but it’s definitely easier to write media queries.

