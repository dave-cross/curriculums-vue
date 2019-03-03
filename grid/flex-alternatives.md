# Places where flex is currently better  
  
Flexbox and Grid can live together. This isn’t a “one or the other” deal. There are still times where you will want to use Flexbox instead of Grid. 

Masonry is a good example. Grids where the number of items is indeterminate are another. 

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="result" data-user="davecross" data-slug-hash="7843a8e162079e52e05ac5656b1fc522" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Flexbox Masonry">
  <span>See the Pen <a href="https://codepen.io/davecross/pen/7843a8e162079e52e05ac5656b1fc522/">
  Flexbox Masonry</a> by Dave Cross (<a href="https://codepen.io/davecross">@davecross</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

And what happens if you want those final items to stretch and fill the available space in ways that overlap grid columns? Grid can’t do that.  

<p class="codepen" data-height="414" data-theme-id="0" data-default-tab="result" data-user="davecross" data-slug-hash="c96cab3dca34dc8d6607300896884f3b" style="height: 414px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Flexbox stretch to fill width">
  <span>See the Pen <a href="https://codepen.io/davecross/pen/c96cab3dca34dc8d6607300896884f3b/">
  Flexbox stretch to fill width</a> by Dave Cross (<a href="https://codepen.io/davecross">@davecross</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

And people are still creating amazing things like the [Flexbox Albatross](http://www.heydonworks.com/article/the-flexbox-holy-albatross) that would require a bunch of media queries to do with Grid.
  
Don’t throw out older tools. They can still be useful.  

<codepen/>
