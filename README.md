#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

URL2OBJ
=======

> It will take a URL and the object keys as arguments and convert it to an object. You can pass an array of keys or just a string with the url format.
It support query params by using the names as obj keys.

```
url2obj( url, object keys, omit certain keys );
```

## Install

```sh
$ npm install --save url2obj
```


## Usage

first argument is the url that you want to convert, then you can pass an array of keys and then an array of the keys that you want to omit on your obj

```js
var url2obj = require('url2obj');

var obj1 = url2obj( '/4/api/users/2', ['version', 'api', 'collection', 'id'], ['api'] );


// This will return an object like this:
{
  version: "4",
  collection: "users",
  id: "2"
}

var obj2 = url2obj( '/4/api/users/2?sort=desc&limit=10', ['version', 'api', 'collection', 'id'], ['api'] );


// If you have query params on your url it will use the names as keys:
{
  version: "4",
  collection: "users",
  id: "2",
  sort: "desc",
  limit: "10"
}
```

you have the option to pass only two arguments being the first one the url and the second one the format of your url, it will take the dynamic params as keys and omit the non dynamic ones.

```js
var url2obj = require('url2obj');

var obj1 = url2obj( '/6/api/listings/3', "/:version/api/:collection/:id" );


// This will return an object like this:
{
  version: "4",
  collection: "users",
  id: "2"
}

var obj2 = url2obj( '/6/api/listings/3?sort=desc&limit=10', "/:version/api/:collection/:id" );


// If you have query params on your url it will use the names as keys:
{
  version: "4",
  collection: "users",
  id: "2",
  sort: "desc",
  limit: "10"
}
```

```sh
# creates a browser.js
$ npm run browser
```


## License

MIT © [Sebastian Baroni](http://laantorcha.net)


[npm-image]: https://badge.fury.io/js/url2obj.svg
[npm-url]: https://npmjs.org/package/url2obj
[travis-image]: https://travis-ci.org/laantorchaweb/url2obj.svg?branch=master
[travis-url]: https://travis-ci.org/laantorchaweb/url2obj
[daviddm-image]: https://david-dm.org/laantorchaweb/url2obj.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/laantorchaweb/url2obj
