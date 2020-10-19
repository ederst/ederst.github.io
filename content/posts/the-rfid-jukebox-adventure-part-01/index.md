---
title: The RFID Jukebox Adventure (Part 1)
cover: ./image.jpg
date: 2020-10-01
description: My adventure of creating an RFID jukebox for my little one.
tags: ['post', 'arduino', 'rfid', 'phoniebox', 'tonuino', 'toniebox']
---

## Notes

### Part 1

Finding the project which i want to base the Box on; do not want to buy toniebox b/c too expensive and must be cloud; thb i find the toniebox a great idea.

Investigation:
* Existing (opensource) projects? Yes, look good to me:
  * PhonieBox
  * TonUINO
* Actually: Found out about TonUINO because my wife watched the video ().
* Both projects look promising (recent contributions, active communities), and rather easy to use and have a community based in Germany (they are the bastlers, especially the DDRlers)
* For both project I have incidentally nearly all the components at home (at least for "developing" a first prototype to test them)
* Where to put the stuff in?
  * My little one is an avid user of my record player (or at least wants to use it), we had to actually hide it b/c otherwise he would not let it go.
  * So my wife went on the "austrian craigslist" (willhaben.at) and found an old suitcase record player for cheap

(Link to the awesomesouce video)

#### Testing the PhonieBox

What you need:

* Raspberry PI
* Speakers or headphones which fits into 3.5mm audio jack
* RFID reader (optional)
* RFID cards/stickers (optional)
* Soundcard (optional)
* Buttons (optional)

##### The Good

* WebApp for controlling everything
* Everything can be done by RFID cards
* Admin via SSH
* Runs on Linux (Raspian)
* Versatile sources (Podcasts, NAS, SD Card)
* No soldering if everything is done with USB devices and/or breadboard cables (that's not how they are called)
* Simple setup and easy to use installer ("One-Click")

##### The Bad

* Slow initial startup, because boots OS
* Needs more power compared to an Arduino
* Different programming languages (C++, Python, PHP, JS, Bash Script)
  * Note: This is of course nothing "bad" per se (use the language which fits the purpose, blah blah), it is IMHO just more difficult to dive into the project if you want to modify stuff and do not know some of the languages used, compared to an Arudino base project where you "just" have to put up with some C/C++
* Probably related to me using only a Raspberry PI 1:
  * Starting music takes some time
  * Webapp has slow reaction time
  * Rather slow installation (took an hour on RP 1)
  * My recommendation would be: Use at least an RP 3
* More expensive than an Arduino project (at least if you do not have already all the components)
* Controlled shutdown needed (Filesystem on SD card might corrupt if not)

#### Testing the TonUINO

Ingredients:

* Arduino (Nano, UNO, Mega)
* DFPlayer Mini
* RFID reader
* RFID cards/stickers
* Speakers/Headphones with wires exposed
  * Or: Use a Headphone jack and connect it accodringly
* Buttons (optional)

Strictly speaking: You just need an Arduino and an RFID reader and a card for initial testing (commenting all the "MP3" parts in the code), because it is possible to watch/debug the functionality via the serial monitor of the Arduino IDE.

##### The Good

* Really simple setup and installation
  * IMHO even more simplistic than the PhonieBox
  * I'm speaking of the most basic setup here of course
* There are some pre-made circuits and bundles to make it even easier
  * TonUINO board
  * Headphone board
  * TonUINO starter kit by AZ Delivery
* Installation (uploading the Firmware) takes nearly no time at all
* Startup time is about 3 seconds
* Modifying the Firmware is simple when you already worked with Arduinos and know some programming stuff
* Cheaper to make (compared to the PhonieBox)
* No controlled shutdown needed (SD card of DF player is read only)
* Android app for writing RFID cards/stickers
  * The app however does not want to write some cards and stickers if they were not previously initialized with the TonUINO; don't know if this is a bug of the app or the cards/stickers.

##### The Bad

* Only controllable via Cards, Buttons, and Serial
  * It is surlely possible to add some kind of web interface as well, but you have to do it on your own or consult at least
* Knowing and digging into some basic electronics stuff
  * Striclty speaking not necessary but you will do it anyways ;))
  * I'm not really sure if this is bad per se, because: the more you know; but it will consume time
* You will have to put up with soldering
* Codebase seems not as active as compared to codebase of the PhonieBox
* The codebase looks a bit hacky too me (probably like every Arduino project), but it still works OOB
* Mono output for the simplest setup
  * Probably not that important for kids, but somehow it bugs me a bit ;)
* Figuring out how to place the ports and the SD card to be accessible from the outside
  * Strictly speaking not necessary, but it is IMHO more of a PIA with this project as compared to the PhonieBox, because there is no SSH, or Web interface.
* DFPlayer needs a certain, strict filesystem

Ultimatively, I decided to go for a "TonUINO" because I have more "experience" with Arduino projects and all in all it looks more simplistic to me. Also, I want to not hassle with probable filesystem corruptions and the boot times and buying an RP 3 for more money than i can buy the components for the TonUINO.

#### Testing and dismanteling the record player

Disclaimer: Vinyl and Record player lovers please skip this, because it was also hard for me (even though the record player was not working 100% anymore and i did not want to fix this the slightest).

Testing: Play video

You don't hear it in the video but the quality is really bad, but it is awesome that it still works because it was listed as "defective".

### Part 2


### Part 3


## Stuff that don't matter

This is an example blog post. All your blog posts should be here: `content/posts`.

Websites like Reddit, StackOverflow, and GitHub had millions of people using Markdown. And Markdown started to be used beyond the web, to author books, articles, slide shows, letters, and lecture notes.

What distinguishes Markdown from many other lightweight markup syntaxes, which are often easier to write, is its readability. As Gruber writes:

> The overriding design goal for Markdown’s formatting syntax is to make it as readable as possible. The idea is that a Markdown-formatted document should be publishable as-is, as plain text, without looking like it’s been marked up with tags or formatting instructions.

## Frontmatter

Metadata for your Markdown.

In this post it looks like this:

```md
---
title: Full Blog Post Example
cover: ./image.jpg
date: 2019-11-05
description: All the usual blog post.
tags: ['post']
---
```

Read more about this setting here: [github.com/Chronoblog/gatsby-theme-chronoblog#posts](https://github.com/Chronoblog/gatsby-theme-chronoblog#posts)

## Markdown

This post is a `markdown` file and you can do everything in it that allows you to do markdown.

### Headers

```md
# This is an <h1> tag

## This is an <h2> tag

###### This is an <h6> tag
```

# This is an `<h1>` tag

## This is an `<h2>` tag

###### This is an `<h6>` tag

### Emphasis

```md
_This text will be italic_  
**This text will be bold**
```

_This text will be italic_  
**This text will be bold**

### Lists

```md
- Item 1
- Item 2
  - Item 2a
  - Item 2b
```

- Item 1
- Item 2
  - Item 2a
  - Item 2b

### Images

```md
![image-in-post](./image-in-post.jpg)
```

![image-in-post](./image-in-post.jpg)

### Links

```md
[github.com/Chronoblog/gatsby-theme-chronoblog](https://github.com/Chronoblog/gatsby-theme-chronoblog)
```

[github.com/Chronoblog/gatsby-theme-chronoblog](https://github.com/Chronoblog/gatsby-theme-chronoblog)

### Gatsby Links

```jsx
<Link to="posts-and-articles">posts-and-articles</Link>
```

Link: <Link to='posts-and-articles'>posts-and-articles</Link>

### Blockquotes

```md
As Kanye West said:

> We're living the future so
> the present is our past.
```

As Kanye West said:

> We're living the future so
> the present is our past.

### Inline code

**`js:`**

```js
const someFun = (text) => {
  console.log('some ' + text);
};
someFun('text');
```

**`css:`**

```css
.thing {
  font-size: 16px;
  width: 100%;
}
@media screen and (min-width: 40em) {
  font-size: 20px;
  width: 50%;
}
@media screen and (min-width: 52em) {
  font-size: 24px;
}
```

**`jsx:`**

```jsx
<Thing fontSize={[16, 20, 24]} width={[1, 1 / 2]} />
```

What distinguishes Markdown from many other lightweight markup syntaxes, which are often easier to write, is its readability.
