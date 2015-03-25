TwiStrug
========

TwiStrug is a companion application for [Twilight Struggle](http://en.wikipedia.org/wiki/Twilight_Struggle). It would not exist without [Twilight Strategy](http://twilightstrategy.com).

#### http://twistrug.jjt.io/

### Virtual Board

![TwiStrug Board](http://twistrug.jjt.io/images/home-board.jpg)

It's basically an on-screen version of the board, so if you add cards you'll be able to play a full game.

The board distorts geography in favour of a better usage of space; the board will fit on a Chromebook, and might be playable on an iPad (haven't tested it).

It's only for local play so far, but I might look into enabling a shared remote board and leaving the users to figure out the cards through ACTS or something similar. I don't know if I'll get to simulating the cards in-browser.

Features

* Keyboard shortcuts for everything except placing influence
* Action history with unlimited undo/redo capability
* On-screen dice
* Display of presence/domination/control for each region and aggregate for each superpower
* Display of number of controlled battlegrounds for each superpower

It's definitely beta, and don't be surprised if it doesn't work on lower versions of IE. Or higher versions of IE. Or a computer that has even heard of IE.

### Card Explorer

![TwiStrug Card Explorer](http://twistrug.jjt.io/images/home-cards.jpg)

Explore the cards and learn some strategies from the excellent [Twilight Strategy](http://twilightstrategy.com). I love *theory*'s site, but got overwhelmed that I had to look up 6 other cards for every card strategy page. So I made this to help myself learn.

### Dev/Deploy

`gulp watch` - Compilation, dev server, livereload
`gulp build` - Builds site to `dist/`
`env $(cat .s3_creds| xargs) s3_website push` - Put S3 info in `.s3_creds`, then put in local env and push with [s3_website](https://github.com/laurilehmijoki/s3_website).
