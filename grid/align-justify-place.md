# Align, justify, and place(-self)  
  
You can control how the children size and position themselves within a grid-area by using several commands. Affect all items by adding the command (postfixed like `*-items`) to the parent. Or affect only specific children by adding the command to the child directly (postfixed like `*-self`).  
  
* `align-*`: aligns across the flow (usually the flow is rows, so `align` does vertical alignment)  
* `justify-*`: aligns with the flow (like `text-align` if flow is rows)  
* `place-*`: shorthand for justify and align (not supported in older browsers)  

[[ add codepen example ]]

In a surprise twist, `align-items` on Grid isn’t supported by IE, but using `align-self` will prefix correctly. So, you might see this work-around:  
  
```css{2}
.grid > * {  
  align-self: start;  
}  
```  
  
