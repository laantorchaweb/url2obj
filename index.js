'use strict';
var _ = require('underscore');
var keysPath    = null,
    omit        = null,
    keysParams  = [],
    valueParams = [];

function decode( str ) {
    if ( !str ) { return false; }

    return decodeURIComponent( str.replace(/\+/g, ' ') );
}

function handleParams ( params ) {
    var propNames = params.split('&');

    _.each( propNames, function ( val ) {

        keysParams.push( val.split('=')[0] );
        valueParams.push( val.split('=')[1] );

    });
}

function getValues ( path, params ) {
    var objPath, objParams;

    if ( params ) {

        handleParams( params );
        objParams = _.object( keysParams, valueParams );

    }
    console.log( keysPath);
    console.log( omit );
    objPath   = _.object( keysPath, path.split('/'));

    return _.omit( _.extend( objPath, objParams), omit );
}

module.exports = function ( url, keys, _omit ) {
    if ( !url || !keys ) {
        return 'you must pass an url and an array of keys';
    }

    var path   = decode( url.split('?')[0].substring(1) ),
        params = decode( url.split('?')[1] );

    keysPath = keys;
    omit     = _omit;

    return getValues( path, params );
};
