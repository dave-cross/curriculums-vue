# Popular colour models and how they fail

A long time ago, we started with [named colours,](http://davidbau.com/colors/) but there were only so many and almost no way to memorize all the colours in that table.

So we expanded the range of colours with hexcode, 6 hexadecimal characters that represented R, G, and B. Each pair of characters formed a number from 0 to 255 for each colour and the mixing of these three colours gave us an assortment of available screen colours.

RGB moved that 256 range to a number (again, from 0 to 255).

And they work.

But for most devs, decoding hexcode and RGB in our heads is an impossible dream. We need to install design apps to get the correct colours for our designs.

What colour is `#bada55`?

How about `rgb(186, 218, 85)`?

They’re both the same yellow-green. The problem with hexcode and RGB is that they aren’t human-friendly. There’s no easy math that we can do in our heads for saying, “That’s a yellowish-green”.

And because there’s no easy math, we’re left reliant on apps and websites to display that colour for us.
