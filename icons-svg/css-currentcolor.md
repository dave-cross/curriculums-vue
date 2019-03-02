# `currentColor`: The (Not So) Secret Ingredient

There are a number of CSS properties that produce colour. Most of them have an interesting initial value, `currentColor`.

`border-color`, `box-shadow`, `text-shadow`, `text-decoration`, and `outline` all have initial values of `currentColor`.

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="css,result" data-user="davecross" data-slug-hash="a8496efdaca49311e3aed0de6868d89a" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="currentColor example.">
  <span>See the Pen <a href="https://codepen.io/davecross/pen/a8496efdaca49311e3aed0de6868d89a/">
  currentColor example.</a> by Dave Cross (<a href="https://codepen.io/davecross">@davecross</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

That means we don't actually have to set a border colour if we want it to match the text color. Just set border width and style to get the desired effect.

<p class="codepen" data-height="243" data-theme-id="0" data-default-tab="result" data-user="davecross" data-slug-hash="JzopKy" style="height: 243px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Border color defaults">
  <span>See the Pen <a href="https://codepen.io/davecross/pen/JzopKy/">
  Border color defaults</a> by Dave Cross (<a href="https://codepen.io/davecross">@davecross</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

The secret is that `currentColor` can be used anywhere a colour is accepted. So, while kind of silly, you could set `background-color: currentColor;` and your text would be _invisible._

<p class="codepen" data-height="481" data-theme-id="0" data-default-tab="result" data-user="davecross" data-slug-hash="6f8c5acd144b9eeb07502fd38dabc4e6" style="height: 481px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Hiding text with currentColor">
  <span>See the Pen <a href="https://codepen.io/davecross/pen/6f8c5acd144b9eeb07502fd38dabc4e6/">
  Hiding text with currentColor</a> by Dave Cross (<a href="https://codepen.io/davecross">@davecross</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

For SVG, we can use `currentColor` for `fill` and `stroke` when we want icons to match surrounding text. Knowing about `currentColor` opens up a lot of possibilities when using SVG icons.

<p class="codepen" data-height="275" data-theme-id="0" data-default-tab="result" data-user="davecross" data-slug-hash="dd8bd1596c89e1310ebd6bb168ad4b8a" style="height: 275px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Inverting Buttons">
  <span>See the Pen <a href="https://codepen.io/davecross/pen/dd8bd1596c89e1310ebd6bb168ad4b8a/">
  Inverting Buttons</a> by Dave Cross (<a href="https://codepen.io/davecross">@davecross</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

<codepen/>
