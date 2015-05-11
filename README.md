#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

URL2OBJ
=======

> It will take a URL and the object keys as arguments and convert it to an object. It support query params by using the names as obj keys.

```
url2obj( url, object keys, omit certain keys );
```

## Install

```sh
$ npm install --save url2obj
```


## Usage

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
