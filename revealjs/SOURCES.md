# THEME CUSTOMIZATION

## FONTS

### 1. CUSTOM-FONT STYLE

[GOOGLE-FONTS-LINK](https://fonts.google.com/)

1. Select font type/style from the above link (or any other relevant link)      
![In our example we have selected Volkhov](./ss-1.png)
2. Now, copy the `@import` portion within the style tag, and paste it in the `custom.css` file.
3. Now, we can use the font, by declaring the font in the `custom.css` file.        
```css

:root {
    --r-main-font: 'Volkhov', serif;
    --r-heading-font: 'Volkhov', serif;
}

```

> Note that we can also import multiple fonts and use different fonts for different sections.

### 2. FONT-FORMATTING

We can customize size, width, shadow etc. attributes of fonts, and more specifically for each different heading 
h1,h2,..,p,blockquote etc.


Following is an example of css formatting of attributes in root.
```css

:root {
  --r-background-color: rgb(205, 243, 203); /* background color for slides */
  --r-main-font: 'Volkhov', serif;
  --r-main-font-size: 42px;     /* font-size */
  --r-main-color: #222;     /* color of font*/
  --r-block-margin: 20px;
  --r-heading-margin: 0 0 20px 0;   
  --r-heading-font: 'Volkhov', serif;
  --r-heading-color: #222;          /* color */
  --r-heading-line-height: 1.2;     /* height */
  --r-heading-letter-spacing: normal;   /* spacing */
  --r-heading-text-transform: uppercase;    /* this means the heading text will be in uppercase always */
  --r-heading-text-shadow: none;        /* shadow for headings*/
  --r-heading-font-weight: 600;     /* width/thickness/font-boldness */
  
  /* font-attributes for different h1,h2... */
  --r-heading1-text-shadow: none;
  --r-heading1-size: 2.5em;
  --r-heading2-size: 1.6em;
  --r-heading3-size: 1.3em;
  --r-heading4-size: 1em;
  --r-code-font: 'Volkhov', serif;      /* font-style for <code></code> tag */
  --r-link-color: #2a76dd;      /* color of the links <a> tag*/
  --r-link-color-dark: #1a53a1; /* color of link tags in dark theme*/
  --r-link-color-hover: #6ca0e8;    /* color of link on hovering*/
  --r-selection-background-color: #98bdef;     /* background color on selecting a text */
  --r-selection-color: #fff;    /* color of text on being selected */
}

```

***

## 