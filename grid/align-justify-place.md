# Align, justify, and place(-self)  
  
You can control how the children size and position themselves within a grid-area by using several commands. Affect all items by adding the command (postfixed like `*-items`) to the parent. Or affect only specific children by adding the command to the child directly (postfixed like `*-self`).  
  
* `align-*`: aligns across the flow (usually the flow is rows, so `align` does vertical alignment)  
* `justify-*`: aligns with the flow (like `text-align` if flow is rows)  
* `place-*`: shorthand for justify and align (not supported in older browsers)  

In a surprise twist, `align-items` on Grid isn’t supported by IE, but using `align-self` will prefix correctly. So, you might see this work-around:  
  
```css{2}
.grid > * {  
  align-self: start;  
}  
```  
 
<p class="codepen" data-height="446" data-theme-id="0" data-default-tab="result" data-user="davecross" data-slug-hash="94474d104e1f5290eac7c49c63a96856" style="height: 446px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Grid align, justify, and place.">
  <span>See the Pen <a href="https://codepen.io/davecross/pen/94474d104e1f5290eac7c49c63a96856/">
  Grid align, justify, and place.</a> by Dave Cross (<a href="https://codepen.io/davecross">@davecross</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

<codepen/>

