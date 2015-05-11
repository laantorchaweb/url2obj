'use strict';
var expect  = require('chai').expect,
    url2obj = require('../');

describe('url2obj node module', function () {

  it('should return an obj if enters an url', function () {
      var obj = url2obj( '/6/api/listings/3', ['version', 'collection', 'id'], 'api' );

      expect( obj ).to.be.a('object');

  });

  it('should return an obj if enters an url with query params', function () {
      var obj = url2obj( '/6/api/listings/3?sort=desc&limit=10', ['version', 'collection', 'id'], 'api' );

      expect( obj ).to.be.a('object');

  });

  it('should return an obj with keys and values', function () {
      var obj = url2obj( '/6/api/listings/3', ['version', 'collection', 'id'], 'api' );

      expect( obj ).to.deep.equal({
        version: "6",
        collection: "listings",
        id: "3"
      });

  });

  it('should return an obj with keys and values and use query params as input', function () {
      var obj = url2obj( '/6/api/listings/3?sort=desc&limit=10', ['version', 'collection', 'id'], 'api' );

      expect( obj ).to.deep.equal({
        version: "6",
        collection: "listings",
        id: "3",
        sort: "desc",
        limit: "10"
      });

  });

  it('should return an obj with without the omitted keys', function () {
      var obj = url2obj( '/6/api/listings/3?sort=desc&limit=10', ['version', 'collection', 'id'], ['version', 'collection', 'api'] );

      expect( obj ).to.deep.equal({
        id: "3",
        sort: "desc",
        limit: "10"
      });

  });

  it('should throw and error if no argument is passed', function () {
      var obj = url2obj();

      expect( obj ).to.be.equal('you must pass an url and an array of keys');

  });

});
