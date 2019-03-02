# About alpha

For both RGB and HSL, we have the option of adding transparency directly.

To do this, use their siblings — rgba and hsla (respectively) — and add the fourth value from 0 ( fully transparent) to 1 ( fully opaque).

```css
rgba(255,255,255,.5)
hsla(0,100%,100%,.5)
```

::: warning Note
Remember that transparency mixes with whatever colours are behind it. This could result in unreadable text.
:::
