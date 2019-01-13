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

## Subtree

`js-gcl` directory is a subtree for [orgui-js-gcl](https://github.com/orgplace/orgui-js-gcl).

```
git remote add js-gcl git@github.com:orgplace/orgui-js-gcl.git
git subtree push --prefix js-gcl js-gcl master
```

