# Positioning Methods  
  
### Multi-column  
  
Not a positioning system, but can be co-opted for vertical masonry style layouts.   
  
Columns will always be equal widths, so doesn’t work if you want “sidebars”.   
  
### Display: inline  
  
Requires sizing on child elements. Also requires all code in the block to be on a single line (no code formatting). Any returns are translated to spaces that will affect layout.   
  
### Position: *    
  
Position: absolute could work, but most position rules take content out of the normal flow of the document. This can result in content flowing under or over the positioned element (depending on `z-index` and source order).   
  
### Float: *  
  
We used float for years. It was one of the first methods we leaned on after table-based layout was declared bad. With floats, siblings have no communication with each other. Varying heights will occur and you’ll either need background images on the parent or some JS magic to make columns look the same height.   
  
### Display: table  
  
Display:table had a very short run, but was excellent. Technically, there’s nothing wrong with it. Code stays semantic, but you get all the benefits of old-school layouts. The browser does add _shadow DOM_ elements to the mark-up for “missing table elements”, but these happen in browser, so there’s no real cost to the user.   
  
I feel like people rejected this method for two reasons:  
  
1. We still have this stigma that tables are evil and now fight with making them look good from mobile to desktop.   
2. Flexbox arrived soon afterward.   
  
### Display: Flex    
  
Flexbox is amazing. It has so many powerful features built into. The challenge comes when you want flexible columns AND gaps. There is a new gap property for flex, but for now, we need extra margin and padding styles to achieve our grids.   
  
### Display: Grid    
  
The new kid. Makes grids so easy. That is it’s namesake after all. Supported all the way back to IE10, but not with the newer syntax. Missing features in IE like auto-flow make people scratch their heads at how to make it all work. But you can prefix and use feature detection to set fallbacks. Or you can use the strengths supported by all browsers and use flexbox for the rest.  
  
