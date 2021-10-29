# HSL

With HSL (Hue, Saturation, Lightness), devs and designers have an easy way of coding colour values that is way easier to visualize; freeing dependence on apps

Hue is a value from 0 to 360 degrees (around a circle). 0 (and 360) is red. 120 is green. And 240 is blue. We still have an RGB model, but it’s easier to start visualizing colours as part of “rainbow” order.

![HSL Color Wheel](./files/HSL-color-wheel.png)

Saturation is from 0 to 100%. This determines whether the colour is grey, dull shades, or vibrant colour.

Lightness is also from 0 to 100%. 0% is black. 100% is white. 50% will show pure colour.

So, if we go back to our yellow-green example, we can quickly guess `hsl(75, 60%, 60%)`. 75 degrees being closer to yellow (at 60 degrees) than green (120 degrees). We dull it down and add a touch of white with saturation and lightness to round it out.

<p class="codepen" data-height="399" data-theme-id="0" data-default-tab="result" data-user="davecross" data-slug-hash="f4c3347c6cb3cd843790abbdac283c8f" style="height: 399px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="HSL sliders">
  <span>See the Pen <a href="https://codepen.io/davecross/pen/f4c3347c6cb3cd843790abbdac283c8f/">
  HSL sliders</a> by Dave Cross (<a href="https://codepen.io/davecross">@davecross</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Unlike a traditional colour wheel, the primary colours of this hue wheel are red, green, and blue. In an interesting twist, the secondary colours are cyan, magenta, and yellow (the primary colours of CMYK, used in print).

![Primary colors](./files/HSL-primary-colors.png)
![Seconday colors](./files/HSL-secondary-colors.png)

And there’s even more power in this colour wheel. All the “warm” colours are at the top (270-90) while all the “cool” colours are on the bottom of the wheel (90-270).

![Warm colors](./files/HSL-warm-colors.png)
![Cool colors](./files/HSL-cool-colors.png)

It’s easy to gain a comfortable mastery over HSL in under an hour. More importantly, it gives designers and developers a common, empirical method of describing colour in code. Any tools/methods that are cross-discipline are an immediate win in my books.

<p class="codepen" data-height="338" data-theme-id="0" data-default-tab="result" data-user="davecross" data-slug-hash="4a2e49cf95b616c43b25c423ece3f584" style="height: 338px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="hsl colorwheel">
  <span>See the Pen <a href="https://codepen.io/davecross/pen/4a2e49cf95b616c43b25c423ece3f584/">
  hsl colorwheel</a> by Dave Cross (<a href="https://codepen.io/davecross">@davecross</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

<codepen/>
