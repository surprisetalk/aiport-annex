
var package = require('aiport-package');

// TODO: pile injection?
// TODO: require('aiport-dev').annex({...}) should intelligently interpret index
// KLUDGE
module.exports = annex_name => 
{
    var annexes = package.installed().annex;
    return annex_name in annexes 
	? Promise.resolve( require( "aiport-annex-" + annexes[ annex_name ] ).index )
	: Promise.reject( { code: 404, msg: "could not find annex named " + annex_name } );
};

