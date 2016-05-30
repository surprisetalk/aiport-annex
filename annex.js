
var package = require('aiport-package');

// TODO: pile injection?
// TODO: errors
// TODO: require('aiport-dev').annex({...}) should intelligently interpret index
// KLUDGE
module.exports = annex_name => require( "aiport-annex-" + package.installed().annex[ annex_name ] ).index;
