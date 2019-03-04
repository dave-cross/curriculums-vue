# Grid Split Video Hero  
  
You can get into some really complex layouts using all the techniques we’ve learned.   
  
While a basic video hero doesn’t need much to get it done, hero components are rarely designed so simply.   
  
But grid can still help us.  

```html
<div class="grid hero">
  <div class="hero__heading"></div>
  <div class="hero__cta"></div>
  <video autoplay playsinline muted loop class="media"></video>
</div>
```

```css
.grid {
  height: 75vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 75vh;
  grid-template-areas:"a b";
}

.hero__heading {
  grid-area: a;
  z-index: 2;
}

.hero__cta {
  grid-area: b;
  z-index: 2;
}

.media {    
  grid-area: 1/1/2/3;
}
```

This is all we need to get things into position. Everything else is aesthetic.

<p class="codepen" data-height="412" data-theme-id="0" data-default-tab="result" data-user="davecross" data-slug-hash="04f3455b8696e3ca227253450ef4705f" style="height: 412px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Grid Video Hero (split-grid)">
  <span>See the Pen <a href="https://codepen.io/davecross/pen/04f3455b8696e3ca227253450ef4705f/">
  Grid Video Hero (split-grid)</a> by Dave Cross (<a href="https://codepen.io/davecross">@davecross</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

<codepen/>
