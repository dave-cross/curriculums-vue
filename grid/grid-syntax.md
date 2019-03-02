# Grid Template Areas

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

[[ codepen example ]]