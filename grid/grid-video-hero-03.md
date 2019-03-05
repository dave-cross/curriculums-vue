# Grid Source-ordered Hero  
  
Using Grid opens up some unique source order options.  
  
```  
+-------------+  
|             |  
|  a          |  
|             |  
+-------------+  
|             |  
|  b (image)  |  
|             |  
+-------------+  
|             |  
|  c          |  
|             |  
+-------------+  
  
  
+-----------+--------+  
|           |        |  
|  a        |  b     |  
|           |        |  
+-----------+        |  
|           |        |  
|  c        |        |  
|           |        |  
+-----------+--------+  
```  
  
<p class="codepen" data-height="509" data-theme-id="0" data-default-tab="result" data-user="davecross" data-slug-hash="1b2d336b1d012e04c9e6f209ad07a193" style="height: 509px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Grid Hero with Source Order">
  <span>See the Pen <a href="https://codepen.io/davecross/pen/1b2d336b1d012e04c9e6f209ad07a193/">
  Grid Hero with Source Order</a> by Dave Cross (<a href="https://codepen.io/davecross">@davecross</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

::: tip Tip
`::before` and `::after` are first-class citizens in Grid. If you dig into the demo code, you'll see I used one of them to create the fade on the image.
:::

<codepen/>
