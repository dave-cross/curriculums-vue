# HSL and Sass

When using Sass, it might confuse you to see your HSL colours converted to hexcode (or RGBA if you used HSLA with alpha != to 1).

In a twist of events, Sass implimented an `hsl()` (and `hsla()`) function early when IE8 was still a thing. The Sass devs haven't removed these funtions even though they aren't really needed anymore. But the Sass funtions don't output `hsl()`. They output hexcode.

Back when HSL was still new to browsers, Sass made the bold move of adding a function — called `hsl()` and `hsla()` that would convert your HSL variables to backward-compatible code. This means that if you use `hsl()` in any production code that gets passed through Sass, you'll get converted values.

Which means you'll have extra work if you want to access that in different ways.

Luckily, the solution to passing HSL values through without changing them is pretty easy: use `HSL()` or `HSLA()` (capital letters). Sass ignores capital-letter functions.

```
background-color: hsl(0,100%,50%); // outputs 'red'
background-color: HSL(0,100%,50%); // outputs 'HSL(0,100%,50%)
```
