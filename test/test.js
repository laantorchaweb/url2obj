'use strict';
var expect  = require('chai').expect,
    url2obj = require('../');

describe('url2obj node module', function () {

  it('should return an obj if enters proper arguments', function () {
      var obj1 = url2obj( '/6/api/listings/3', ['version', 'api', 'collection', 'id'], ['api'] );
      var obj2 = url2obj( '/6/api/listings/3', "/:id/api/:collection/:id" );

      expect( obj1 ).to.be.a('object');
      expect( obj2 ).to.be.a('object');

  });

  it('should return an obj if enters an url with query params', function () {
      var obj1 = url2obj( '/6/api/listings/3?sort=desc&limit=10', ['version', 'api', 'collection', 'id'], ['api'] );
      var obj2 = url2obj( '/6/api/listings/3?sort=desc&limit=10', "/:id/api/:collection/:id" );

      expect( obj1 ).to.be.a('object');
      expect( obj2 ).to.be.a('object');

  });

  it('should return an obj with keys and values', function () {
      var obj1 = url2obj( '/6/api/listings/3', ['version', 'api', 'collection', 'id'], ['api'] );
      var obj2 = url2obj( '/6/api/listings/3', "/:version/api/:collection/:id" );

      expect( obj1 ).to.deep.equal({
        version: "6",
        collection: "listings",
        id: "3"
      });

      expect( obj2 ).to.deep.equal({
        version: "6",
        collection: "listings",
        id: "3"
      });

  });

  it('should return an obj with keys and values and use query params as input', function () {
      var obj1 = url2obj( '/6/api/listings/3?sort=desc&limit=10', ['version', 'api', 'collection', 'id'], ['api'] );
      var obj2 = url2obj( '/6/api/listings/3?sort=desc&limit=10', "/:version/api/:collection/:id" );

      expect( obj1 ).to.deep.equal({
        version: "6",
        collection: "listings",
        id: "3",
        sort: "desc",
        limit: "10"
      });

      expect( obj2 ).to.deep.equal({
        version: "6",
        collection: "listings",
        id: "3",
        sort: "desc",
        limit: "10"
      });

  });

  it('should return an obj with without the omitted keys', function () {
      var obj1 = url2obj( '/6/api/listings/3?sort=desc&limit=10', ['version', 'api', 'collection', 'id'], ['version', 'api', 'collection'] );
      var obj2 = url2obj( '/6/api/listings/3?sort=desc&limit=10', "/version/api/collection/:id" );

      expect( obj1 ).to.deep.equal({
        id: "3",
        sort: "desc",
        limit: "10"
      });

      expect( obj2 ).to.deep.equal({
        id: "3",
        sort: "desc",
        limit: "10"
      });

  });

  it('should throw and error if no argument is passed', function () {
      var obj = url2obj();

      expect( obj ).to.be.equal('you must pass an url and an array of keys or url format string');

  });

});
