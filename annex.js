
var path = require('path');
var _ = require('underscore');
var package = require('../aiport-package/package.js');

// TODO: pile injection?
// TODO: require('aiport-dev').annex({...}) should intelligently interpret index
// KLUDGE
module.exports = ( annex_name, params, query ) => 
{
    var root = path.dirname( require.main.filename ) + "/node_modules";
    var annexes = package.installed().annex;
    
    return _.contains( annexes, annex_name )
	// TODO: check if exists
	? require('../aiport-annex-package/package.js')( params, query )
	// ? require( root + "/aiport-annex-" + annex_name )( params, query )
	: Promise.reject( { code: 404, msg: "could not find annex named " + annex_name } );
};

