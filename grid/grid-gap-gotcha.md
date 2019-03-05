# Grid-Gap Gotcha  
  
Anything other than a centered gap will be off if column count isn’t equal. This is because the number of **gaps** have to be equal — Grid subtracts the gaps and distributes the remainder.   
  
The way to avoid these misalignments is to always have the same number of gaps and use `grid-template-auto` to _span_ columns.  
  
```  
  
  1fr    1fr    1fr  
+------+------+------+  
|      |      |      |  
|  a   |  b   |  c   |  
|      |      |      |  
+------+------+------+  
  
  2fr          1fr  
+------------+-------+  
|            |       |  
|  a         |  b    |  😒  
|            |       |  
+------------+-------+  
  
  1fr    1fr    1fr  
+------+------+------+  
|      |      |      |  
|  a   |  a   |  b   |  😀  
|      |      |      |  
+------+------+------+  
  
```  
  
<p class="codepen" data-height="385" data-theme-id="0" data-default-tab="result" data-user="davecross" data-slug-hash="12fd519a1e5f536d3e27ef8b9f702b90" style="height: 385px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Grid-Gap Gotcha">
  <span>See the Pen <a href="https://codepen.io/davecross/pen/12fd519a1e5f536d3e27ef8b9f702b90/">
  Grid-Gap Gotcha</a> by Dave Cross (<a href="https://codepen.io/davecross">@davecross</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

<codepen/>
