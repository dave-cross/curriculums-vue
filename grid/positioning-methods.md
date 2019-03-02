# Positioning Methods  
  
### Multi-column  
  
Not a positioning system, but can be co-opted for vertical masonry style layouts.   
  
Columns will always be equal widths, so doesn’t work if you want “sidebars”.   

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="result" data-user="davecross" data-slug-hash="caa8783509a4e0ef39968d05744f4adb" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="CSS Positioning Systems--Multi-Column">
  <span>See the Pen <a href="https://codepen.io/davecross/pen/caa8783509a4e0ef39968d05744f4adb/">
  CSS Positioning Systems--Multi-Column</a> by Dave Cross (<a href="https://codepen.io/davecross">@davecross</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
 
### Display: inline  
  
Requires sizing on child elements. Also requires all code in the block to be on a single line (no code formatting). Any returns are translated to spaces that will affect layout.   

<div class="codepen" data-height="265" data-theme-id="0" data-default-tab="result" data-prefill='{"title":"CSS Positioning Systems--Inline","tags":[],"stylesheets":[],"scripts":[]}'>
  <pre data-lang="html">
&lt;div class="inline">
  &lt;div>1 (inline)&lt;/div>&lt;div>2 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique ex ducimus voluptatum qui. Animi unde ut tenetur aliquid incidunt. Ratione nisi hic excepturi numquam illum aliquid earum vero nobis voluptatibus!&lt;/div>&lt;div>3&lt;/div>
&lt;/div>
&lt;div class="grid">
  &lt;div>1 (grid)&lt;/div>
  &lt;div>2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam illo beatae quod quae totam doloribus autem illum obcaecati, eum soluta reprehenderit earum ducimus cumque tempore, nesciunt quas pariatur rem ex.&lt;/div>
  &lt;div>3&lt;/div>
&lt;/div></pre>
  <pre data-lang="scss" data-option-autoprefixer>
// Turn on Autoprefixer's grid tools.
/* autoprefixer grid: on */
.inline {
  background-color: HSLA(360/8*2, 100%, 80%, 1.00);
  > div {
    display: inline-block;
    width: 25%;
    &:last-child {
      width: 50%;
    }
  }
}
.grid {
  background-color: HSLA(360/8*6, 100%, 80%, 1.00);
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  grid-template-areas:"a b c";
  > :nth-child(1){grid-area: a;}
  > :nth-child(2){grid-area: b;}
  > :nth-child(3){grid-area: c;}
}
// Not relevant to demo.
*,*::before,*::after {
  box-sizing: border-box;
}
body {
  font: 1em sans-serif;
  text-align: center;
  padding: 1rem;
}
div {
  min-height: 50px;
  border: 1px solid #000;
  &[class]:not(.cell) {
    margin-bottom: 2rem;
  }
}</pre>
</div>
  
### Position: *    
  
Position: absolute could work, but most position rules take content out of the normal flow of the document. This can result in content flowing under or over the positioned element (depending on `z-index` and source order).   
 
<div class="codepen" data-height="265" data-theme-id="0" data-default-tab="result" data-prefill='{"title":"CSS Positioning Systems--Position","tags":[],"stylesheets":[],"scripts":[]}'>
  <pre data-lang="html">
&lt;div class="position">
  &lt;div>1 (position)&lt;/div>
  &lt;div>2 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, quas. Quasi, pariatur reiciendis! Iure praesentium adipisci voluptatum voluptatem debitis incidunt voluptas placeat perferendis ab. Saepe quasi corrupti ipsam vitae fugiat!&lt;/div>
  &lt;div>3&lt;/div>
&lt;/div>
&lt;div class="grid">
  &lt;div>1 (grid)&lt;/div>
  &lt;div>2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam illo beatae quod quae totam doloribus autem illum obcaecati, eum soluta reprehenderit earum ducimus cumque tempore, nesciunt quas pariatur rem ex.&lt;/div>
  &lt;div>3&lt;/div>
&lt;/div></pre>
  <pre data-lang="scss" data-option-autoprefixer>
// Turn on Autoprefixer's grid tools.
/* autoprefixer grid: on */
.position {
  background-color: HSLA(360/8*1, 100%, 80%, 1.00);
  position: relative;
  > div {
    width: 25%;
    &:nth-of-type(2) {
      position: absolute;
      top: 0;
      left: 25%;
    }
    &:last-child {
      position: absolute;
      top: 0;
      right: 0;
      width: 50%;
    }
  }
}
.grid {
  background-color: HSLA(360/8*6, 100%, 80%, 1.00);
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  grid-template-areas:"a b c";
  > :nth-child(1){grid-area: a;}
  > :nth-child(2){grid-area: b;}
  > :nth-child(3){grid-area: c;}
}
// Not relevant to demo.
*,*::before,*::after {
  box-sizing: border-box;
}
body {
  font: 1em sans-serif;
  text-align: center;
  padding: 1rem;
}
div {
  min-height: 50px;
  border: 1px solid #000;
  &[class]:not(.cell) {
    margin-bottom: 2rem;
  }
}</pre>
</div>
 
### Float: *  
  
We used float for years. It was one of the first methods we leaned on after table-based layout was declared bad. With floats, siblings have no communication with each other. Varying heights will occur and you’ll either need background images on the parent or some JS magic to make columns look the same height.   

<div class="codepen" data-height="265" data-theme-id="0" data-default-tab="result" data-prefill='{"title":"CSS Positioning Systems--Floats","tags":[],"stylesheets":[],"scripts":[]}'>
  <pre data-lang="html">
&lt;div class="float">
  &lt;div>1 (float)&lt;/div>
  &lt;div>2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ut, pariatur corporis nemo error blanditiis autem repellat, repudiandae illum eaque, quidem dicta unde. Eius nostrum itaque dolore harum porro tempore?&lt;/div>
  &lt;div>3&lt;/div>
&lt;/div>
&lt;div class="grid">
  &lt;div>1 (grid)&lt;/div>
  &lt;div>2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam illo beatae quod quae totam doloribus autem illum obcaecati, eum soluta reprehenderit earum ducimus cumque tempore, nesciunt quas pariatur rem ex.&lt;/div>
  &lt;div>3&lt;/div>
&lt;/div></pre>
  <pre data-lang="scss" data-option-autoprefixer>
// Turn on Autoprefixer's grid tools.
/* autoprefixer grid: on */
.float {
  background-color: HSLA(360/8*3, 100%, 80%, 1.00);
  > div {
    float: left;
    width: 25%;
  }
  > div:last-child {
    width: 50%;
  }
  &::after {
    content: '';
    display: table;
    clear: both;
  }
}
.grid {
  background-color: HSLA(360/8*6, 100%, 80%, 1.00);
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  grid-template-areas:"a b c";
  > :nth-child(1){grid-area: a;}
  > :nth-child(2){grid-area: b;}
  > :nth-child(3){grid-area: c;}
}
// Not relevant to demo.
*,*::before,*::after {
  box-sizing: border-box;
}
body {
  font: 1em sans-serif;
  text-align: center;
  padding: 1rem;
}
div {
  min-height: 50px;
  border: 1px solid #000;
  &[class]:not(.cell) {
    margin-bottom: 2rem;
  }
}</pre>
</div>
  
### Display: table  
  
Display:table had a very short run, but was excellent. Technically, there’s nothing wrong with it. Code stays semantic, but you get all the benefits of old-school layouts. The browser does add _shadow DOM_ elements to the mark-up for “missing table elements”, but these happen in browser, so there’s no real cost to the user.   
  
I feel like people rejected this method for two reasons:  
  
1. We still have this stigma that tables are evil and now fight with making them look good from mobile to desktop.   
2. Flexbox arrived soon afterward.   

<div class="codepen" data-height="265" data-theme-id="0" data-default-tab="result" data-prefill='{"title":"CSS Positioning Systems-Multi-column","tags":[],"stylesheets":[],"scripts":[]}'>
  <pre data-lang="html">
&lt;div class="table">
  &lt;div>1 (table)&lt;/div>
  &lt;div>2 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident earum quos repellendus natus saepe numquam velit qui inventore, omnis vero reiciendis eveniet tempore laborum distinctio ea commodi atque necessitatibus expedita.&lt;/div>
  &lt;div>3&lt;/div>
&lt;/div>
&lt;div class="grid">
  &lt;div>1 (grid)&lt;/div>
  &lt;div>2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam illo beatae quod quae totam doloribus autem illum obcaecati, eum soluta reprehenderit earum ducimus cumque tempore, nesciunt quas pariatur rem ex.&lt;/div>
  &lt;div>3&lt;/div>
&lt;/div></pre>
  <pre data-lang="scss" data-option-autoprefixer>
// Turn on Autoprefixer's grid tools.
/* autoprefixer grid: on */
.table {
  background-color: HSLA(360/8*4, 100%, 80%, 1.00);
  display: table;
  width: 100%;
  > div {
    display: table-cell;
    height: 50px;
    width: 25%;
    vertical-align: middle;
  }
  > div:last-child {
    width: 50%;
  }
}
.grid {
  background-color: HSLA(360/8*6, 100%, 80%, 1.00);
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  grid-template-areas:"a b c";
  > :nth-child(1){grid-area: a;}
  > :nth-child(2){grid-area: b;}
  > :nth-child(3){grid-area: c;}
}
// Not relevant to demo.
*,*::before,*::after {
  box-sizing: border-box;
}
body {
  font: 1em sans-serif;
  text-align: center;
  padding: 1rem;
}
div {
  min-height: 50px;
  border: 1px solid #000;
  &[class]:not(.cell) {
    margin-bottom: 2rem;
  }
}</pre>
</div>
  
### Display: Flex    
  
Flexbox is amazing. It has so many powerful features built into. The challenge comes when you want flexible columns AND gaps. There is a new gap property for flex, but for now, we need extra margin and padding styles to achieve our grids.   

<div class="codepen" data-height="265" data-theme-id="0" data-default-tab="result" data-prefill='{"title":"CSS Positioning Systems-Flexbox","tags":[],"stylesheets":[],"scripts":[]}'>
  <pre data-lang="html">
&lt;div class="flex">
  &lt;div>1 (flex)&lt;/div>
  &lt;div>2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ducimus reprehenderit, id deserunt facere amet inventore minus quis eius. Cumque, unde a. Delectus aperiam id reiciendis. Dolorum illo error molestias.&lt;/div>
  &lt;div>3&lt;/div>
&lt;/div>
&lt;div class="grid">
  &lt;div>1 (grid)&lt;/div>
  &lt;div>2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam illo beatae quod quae totam doloribus autem illum obcaecati, eum soluta reprehenderit earum ducimus cumque tempore, nesciunt quas pariatur rem ex.&lt;/div>
  &lt;div>3&lt;/div>
&lt;/div></pre>
  <pre data-lang="scss" data-option-autoprefixer>
// Turn on Autoprefixer's grid tools.
/* autoprefixer grid: on */
.flex {
  background-color: HSLA(360/8*5, 100%, 80%, 1.00);
  display: flex;
  > div {
    flex: 1 25%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  > div:last-child {
    flex: 1 50%;
  }
}
.grid {
  background-color: HSLA(360/8*6, 100%, 80%, 1.00);
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  grid-template-areas:"a b c";
  > :nth-child(1){grid-area: a;}
  > :nth-child(2){grid-area: b;}
  > :nth-child(3){grid-area: c;}
}
// Not relevant to demo.
*,*::before,*::after {
  box-sizing: border-box;
}
body {
  font: 1em sans-serif;
  text-align: center;
  padding: 1rem;
}
div {
  min-height: 50px;
  border: 1px solid #000;
  &[class]:not(.cell) {
    margin-bottom: 2rem;
  }
}</pre>
</div>
  
### Display: Grid    
  
The new kid. Makes grids so easy. That is it’s namesake after all. Supported all the way back to IE10, but not with the newer syntax. Missing features in IE like auto-flow make people scratch their heads at how to make it all work. But you can prefix and use feature detection to set fallbacks. Or you can use the strengths supported by all browsers and use flexbox for the rest.  
  

<codepen/>
