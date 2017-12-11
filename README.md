# Org UI

[![Build Status](https://travis-ci.org/orgplace/orgui.svg?branch=master)](https://travis-ci.org/orgplace/orgui)

## Build

* Make
* PHP
* html-minifier
* less
  * glob
  * clean-css
  * autoprefix
* pygments

```
make
```

To check the result:

```
cd dist
python3 -m http.server
```

Open http://127.0.0.1:8000/ with your favorite browser.
