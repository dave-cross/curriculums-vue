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

