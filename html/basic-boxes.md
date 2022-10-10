# Basic Boxes

Almost all HTML tags have a specific, semantic purpose. Using the right tag that describes its content is always the goal. 

Sometimes, you’ll have content that can’t be described by a tag. That is when the general purpose `<div>` or `<span>` become useful. 

When using either tag, it’s important to note that they don’t have any styles. Using a series of `<div>`s instead of `<p>` tags will result in your content being crowded together with no white space. Adding a `<span>` won’t change the look of the content unless we add custom styles. 

## `<div>`

`<div>` is used to designate a “division” of content. It is a “block” element, which means anything that comes before or after the `<div>` will appear **above and below** the content when displayed in the browser. 

```html
<p>paragraph one</p>
<div>I'll appear on my own line, with zero spacing</div>
<p>paragraph two</p>
```

## `<span>`

`<span>` is used for “spans” of text. Like `<b>` or `<strong>`, it is usually used inside text content or paragraphs to style something uniquely. It is an “inline” element, which means that anything that comes before or after a `<span>` will appear to the **left or right** of the content (on the same line) when displayed in the browser. 

```html
<p>a humble paragraph with <span>some unique text content</span> inside it</p>
```