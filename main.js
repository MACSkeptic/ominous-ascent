var requirejs = require('requirejs');

var app = requirejs('./lib/server');

app.configure(__dirname);
app.start();
