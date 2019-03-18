# Positioning Methods  
  
### Multi-column  
  
Not a positioning system, but can be co-opted for vertical masonry style layouts.   
  
Columns will always be equal widths, so doesn’t work if you want “sidebars”.   

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="result" data-user="davecross" data-slug-hash="caa8783509a4e0ef39968d05744f4adb" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="CSS Positioning Systems--Multi-Column">
  <span>See the Pen <a href="https://codepen.io/davecross/pen/caa8783509a4e0ef39968d05744f4adb/">
  CSS Positioning Systems--Multi-Column</a> by Dave Cross (<a href="https://codepen.io/davecross">@davecross</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
 
### Position: *    
  
Position: absolute could work, but most position rules take content out of the normal flow of the document. This can result in content flowing under or over the positioned element (depending on `z-index` and source order).   

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="result" data-user="davecross" data-slug-hash="53cb41bec788094cc084af223e926b6c" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="CSS Positioning Systems--Position">
  <span>See the Pen <a href="https://codepen.io/davecross/pen/53cb41bec788094cc084af223e926b6c/">
  CSS Positioning Systems--Position</a> by Dave Cross (<a href="https://codepen.io/davecross">@davecross</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

### Display: inline  
  
Requires sizing on child elements. Also requires all code in the block to be on a single line (no code formatting). Any returns are translated to spaces that will affect layout.   

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="result" data-user="davecross" data-slug-hash="6d397a4968f9548b1bd17854e5ac17fc" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="CSS Positioning Systems--Inline">
  <span>See the Pen <a href="https://codepen.io/davecross/pen/6d397a4968f9548b1bd17854e5ac17fc/">
  CSS Positioning Systems--Inline</a> by Dave Cross (<a href="https://codepen.io/davecross">@davecross</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

### Float: *  
  
We used float for years. It was one of the first methods we leaned on after table-based layout was declared bad. With floats, siblings have no communication with each other. Varying heights will occur and you’ll either need background images on the parent or some JS magic to make columns look the same height.   

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="result" data-user="davecross" data-slug-hash="93ea6f62cf75574588dd35f325b5f3f1" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="CSS Positioning Systems--Floats">
  <span>See the Pen <a href="https://codepen.io/davecross/pen/93ea6f62cf75574588dd35f325b5f3f1/">
  CSS Positioning Systems--Floats</a> by Dave Cross (<a href="https://codepen.io/davecross">@davecross</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

### Display: table  
  
Display:table had a very short run, but was excellent. Technically, there’s nothing wrong with it. Code stays semantic, but you get all the benefits of old-school layouts. The browser does add _shadow DOM_ elements to the mark-up for “missing table elements”, but these happen in browser, so there’s no real cost to the user.   
  
I feel like people rejected this method for two reasons:  
  
1. We still have this stigma that tables are evil and now fight with making them look good from mobile to desktop.   
2. Flexbox arrived soon afterward.   

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="result" data-user="davecross" data-slug-hash="9dd8ed61771e003991914266a1337b52" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="CSS Positioning Systems--Table">
  <span>See the Pen <a href="https://codepen.io/davecross/pen/9dd8ed61771e003991914266a1337b52/">
  CSS Positioning Systems--Table</a> by Dave Cross (<a href="https://codepen.io/davecross">@davecross</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

### Display: Flex    
  
Flexbox is amazing. It has so many powerful features built into. The challenge comes when you want flexible columns AND gaps. There is a new gap property for flex, but for now, we need extra margin and padding styles to achieve our grids.

There's a second issue with using Flexbox: it wasn't truly designed to accept widths. Using `width` locks an element to a fixed size, removing the "flexible" nature that Flexbox provides.

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="result" data-user="davecross" data-slug-hash="290629e78ad0566816a9a6598ad5409c" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="CSS Positioning Systems--Flexbox">
  <span>See the Pen <a href="https://codepen.io/davecross/pen/290629e78ad0566816a9a6598ad5409c/">
  CSS Positioning Systems--Flexbox</a> by Dave Cross (<a href="https://codepen.io/davecross">@davecross</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

### Display: Grid    
  
The new kid. Makes grids so easy. That is it’s namesake after all. Supported all the way back to IE10, but not with the newer syntax. Missing features in IE like auto-flow make people scratch their heads at how to make it all work. But you can prefix and use feature detection to set fallbacks. Or you can use the strengths supported by all browsers and use flexbox for the rest.  
  

<codepen/>
