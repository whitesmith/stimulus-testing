# Stimulus Starter

A preconfigured blank slate for exploring [Stimulus](https://github.com/stimulusjs/stimulus). Jump to [The Stimulus Handbook](https://stimulusjs.org/handbook/introduction) for an introduction.

---

We recommend [remixing `stimulus-starter` on Glitch](https://glitch.com/edit/#!/import/github/stimulusjs/stimulus-starter) so you can work entirely in your browser without installing anything:

[![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/import/github/stimulusjs/stimulus-starter)

Or, if you'd prefer to work from the comfort of your own text editor, you'll need to clone and set up `stimulus-starter`:

```
$ git clone https://github.com/stimulusjs/stimulus-starter.git
$ cd stimulus-starter
$ yarn install
$ yarn start
```

---

© 2018 Basecamp, LLC.

---

# Benchmarks

There are two versions: `index` uses stimulus to attach behaviour; `vanilla` uses pure JS.

- http://localhost:9000/index.html
- http://localhost:9000/index-10x.html
- http://localhost:9000/index-100x.html
- http://localhost:9000/index-1000x.html
- http://localhost:9000/vanilla.html
- http://localhost:9000/vanilla-10x.html
- http://localhost:9000/vanilla-100x.html
- http://localhost:9000/vanilla-1000x.html

## Results

### console.time / console.timeEnd (time to DOMContentLoaded + addEventListener)

| page | stimulus | vanilla |
| ---- | -------- | ------- |
| 1x   |    3.0   |   0.34  |
| 10x  |    4.0   |   0.45  |
| 100x |    8.5   |   0.75  |
| 1000x|    60.0  |   3.00  |

### Lighthouse performance audit

| page | stimulus PSI | stimulus EIL | vanilla PSI | vanilla EIL |
| ---- | ------------ | ------------ | ----------- | ----------- |
| 1x   |    1203      |     16       |    1182     |     16      |
| 10x  |    1209      |     16       |    1185     |     16      |
| 100x |    1331      |     16       |    1293     |     16      |
| 1000x|    1727      |     17       |    1895     |     16      |


- PSI: perceptual speed index
- EIL: estimated input latency
- all values in ms
