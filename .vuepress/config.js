module.exports = {
  title: "Today I Learned",
  description:
    "A series of guides for working as a modern front-end developer or designer",
  themeConfig: {
    search: false,
    nav: [
      { text: "Home", link: "/" },
      { text: "Colour", link: "/colour/" },
      { text: "Icons & SVG", link: "/icons-svg/" },
      { text: "CSS Grid", link: "/grid/" },
    ],
    sidebar: {
      "/html/": ["", "what-is-html", "html-quickstart", "basic-boxes"],

      "/colour/": [
        "",
        "current-colour-models",
        "hsl",
        "alpha",
        "hsl-is-not-hsb",
        "using-hsl-in-sketch",
        "hsl-and-sass",
        "sip-general",
        "sip-collecting",
        "sip-colour-profiles",
        "sip-creating-palettes",
        "sip-working-with-palettes",
        "sip-sharing-palettes",
        "sip-for-designers",
        "sip-for-developers",
        "sip-custom-formats",
        "contrast-app",
        "a11y-websites-tools",
      ],

      "/icons-svg/": [
        "",
        "iconjar-general",
        "iconjar-importing",
        "iconjar-sorting-and-tagging",
        "iconjar-sharing",
        "iconjar-viewing",
        "iconjar-exporting",
        "iconjar-designers",
        "iconjar-developers",
        "svgomg",
        "inline-svg",
        "css-currentcolor",
        "svg-vector-effect",
        "svg-preserveaspectratio",
        "svg-use",
      ],

      "/grid/": [
        "",
        "positioning-methods",
        "grid-with-autoprefixer",
        "flex-alternatives",
        "documenting-grid",
        "grid-syntax",
        "align-justify-place",
        "grid-video-hero-01",
        "at-supports-and-fallbacks",
        "grid-gap",
        "grid-functions",
        "positioning-along-tracks",
        "grid-video-hero-02",
        "grid-media-queries",
        "sketch-to-grid",
        "grid-gap-gotcha",
        "grid-wet-coding",
        "grid-margins-padding",
        "max-width-containers",
        "max-width-grid",
        "outside-padding-on-max-width-grid",
        "grids-in-grids",
        "grid-easy-math",
        "mobile-first",
        "mobile-first-grid",
        "grid-video-hero-03",
        "grid-card",
      ],
    },
  },
};
