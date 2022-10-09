# What is HTML?

"HTML" is an acronym for _hypertext markup language_. The important bit there is "markup language", which means we'll be adding "markup" as a way of telling the browser how we want our content to be displayed.

## Boxes and tags

I like to tell people that my job is to make boxes and put stuff in them. Similar to how Amazon has 90+ box sizes, we have access to 130+ tags that we can use to mark up our content. And just like Amazon, we mostly use a small subset of those tags in day to day work.

So, I create a _box_ called `<p>` and put some "paragraph" content into it. Or I create a _box_ called `<img>` and put an image url or link in it so it'll display the image on my website.

The basic structure of a tag — opening and closing angle brackets — looks like a box too: `<>`.

## Structure of a tag

All HTML tags start with an opening angle bracket, then have the tag name along with optional _attributes_, and finally a closing angle bracket. Most tags will also have a "closing" tag that will have a forward slash after the opening angle bracket.

This example shows an opening and closing paragraph tag:

```html
<p>some text content here</p>
```

Some tags don't need a closing tag. For those, we add a forward slash before the closing angle bracket. The image tag uses this syntax:

```html
<img src="path/to/your/file.jpg" />
```
