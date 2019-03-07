# Grid Template Syntax

Unlike traditional layout methods where most of the positioning styles happen on the child elements, Grid builds from the outside in. We set up the grid on the parent element and then “hang” child elements on that grid.

To do this, we need to know 3 rules (in addition to `display: grid` for parent elements:

* `grid-template-columns`: tells the browser how wide each column is. We can use any traditional measure along with “auto” and `fr`.
* `grid-template-rows`: tells the browser how tall each row is.
* `grid-template-areas`: gives names to “sections” of rows and columns, making it really easy to put children on the grid. These names can be anything that makes sense to your team.

We won’t need all three rules for every layout. Generally, I only use `columns` and `areas` unless I need multiple rows.  

On the child elements, we use the all-powerful `grid-area`, which is like a Swiss Army knife for grid placement. In its simplest form, you tell a child which grid area to occupy.

```css{2}
.item {
  grid-area: a;
}
```  

<p class="codepen" data-height="400" data-theme-id="0" data-default-tab="css,result" data-user="davecross" data-slug-hash="12a923e8e7a99d9e790355b6afdf9888" style="height: 400px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Grid syntax basics">
  <span>See the Pen <a href="https://codepen.io/davecross/pen/12a923e8e7a99d9e790355b6afdf9888/">
  Grid syntax basics</a> by Dave Cross (<a href="https://codepen.io/davecross">@davecross</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

<codepen/>
