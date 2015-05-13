'use strict';
var _ = require('underscore');
var keys        = null,
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

    objPath   = _.object( keys, path.split('/'));

    return _.omit( _.extend( objPath, objParams), omit );
}

module.exports = function ( url, _keys, _omit ) {
    if ( !url || !_keys ) {
        return 'you must pass an url and an array of keys or url format string';
    }

    var path   = decode( url.split('?')[0].substring(1) ),
        params = decode( url.split('?')[1] );

    var __keys = [],
        __omit = [];

    if ( typeof _keys === "string" ) {

        _keys.split('/').forEach(function ( elm ) {

            if ( elm.charAt("0") === ":" ) {

                __keys.push( elm.substring(1) );

            } else if ( elm ) {

                __keys.push( elm );
                __omit.push( elm );

            }

        });

    }

    keys = ( __keys.length ) ? __keys : _keys;
    omit = ( __omit.length ) ? __omit : _omit;

    return getValues( path, params );
};
