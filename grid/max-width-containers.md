# A quick detour into max-width containers

In most frameworks, there’s a bit of code that looks like this:

```html
<div class="container">
  <div class="row">
    [ITEMS]
  </div>
</div>
```

The row will have some sort of `max-width` and `margin:auto` applied to center it horizontally. A full-width background can be applied to the container. Which works.

Another option that I picked up from Lea Verou is to start with this mark-up:

```html
<div class="container">
  [ITEMS]
</div>
```

Cleaner mark-up. From here, we use `calc()` and padding:

```css{3}
.container {
  background-color: skyblue;
  padding: 0 calc(50% - 300px);
}
```

I prefer the second version for its succinct code style, but whichever you use, be consistent.

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="result" data-user="davecross" data-slug-hash="20f9929a1e317fa90aa09d0bdd00c009" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="&amp;amp;quot;Row-less&amp;amp;quot; Container">
  <span>See the Pen <a href="https://codepen.io/davecross/pen/20f9929a1e317fa90aa09d0bdd00c009/">
  &amp;quot;Row-less&amp;quot; Container</a> by Dave Cross (<a href="https://codepen.io/davecross">@davecross</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

<codepen/>
