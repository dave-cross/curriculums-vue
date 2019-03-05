# Grid And Media Queries  
  
Always operate from outside to inside.   
  
When building your media queries, try to add them to the parent and change `grid-template-areas`. It’s more efficient and practical to re-arrange the grid (or turn it off completely) than it is to re-arrange the child elements. Autoprefixer will manage all our media query prefixes for us (unless we’re doing some truly unique changes).  
  
If your media queries are contained inside your grid rule block, some things don’t need to be passed into the query. Autoprefixer will pick up on `grid-gap` if it’s part of the same rule-set.  
  
<p class="codepen" data-height="443" data-theme-id="0" data-default-tab="result" data-user="davecross" data-slug-hash="f03d2fe297e3f9989b242706c29cc645" style="height: 443px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Grid and Media Queries">
  <span>See the Pen <a href="https://codepen.io/davecross/pen/f03d2fe297e3f9989b242706c29cc645/">
  Grid and Media Queries</a> by Dave Cross (<a href="https://codepen.io/davecross">@davecross</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

With media queires and Grid, you'll quickly find that art-directing your layouts for different screen sizes is easy. In the following demo, all the children change order based on screen width.

<p class="codepen" data-height="336" data-theme-id="0" data-default-tab="result" data-user="davecross" data-slug-hash="358cc2711f47248d2cb6c0b8cd5fa062" style="height: 336px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Grid and Media Queries Extra">
  <span>See the Pen <a href="https://codepen.io/davecross/pen/358cc2711f47248d2cb6c0b8cd5fa062/">
  Grid and Media Queries Extra</a> by Dave Cross (<a href="https://codepen.io/davecross">@davecross</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

::: warning Note
You'll want to open these Codepen demos in a new tab to test the responsiveness. Do this by clicking "Edit on Codepen".
:::

<codepen/>
