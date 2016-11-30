# ember-background-video

This addon makes it easy to use [jquery-background-video](https://github.com/BGStock/jquery-background-video) plugin in an Ember application.

## Use

```hbs
{{#background-video
  mp4="demo.mp4"
  webm="demo.webm"
  ogv="demo.ogv"
  poster="demo.jpg"
}}

  // content goes here

{{/background-video}}
```

## Installation

* `git clone <repository-url>` this repository
* `cd ember-background-video`
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
