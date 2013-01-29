define(function (require) {
  var requirejs = require('requirejs'),
      fs = require('fs');

  function respond(res, code, contents) {
    res.writeHead(code, {
      'Content-Type': (code === 200 ? 'application/javascript;charset=UTF-8' : 'text/plain'),
      'Content-Length': contents.length
    });

    res.write(contents, 'utf8');
    res.end();
  }

  function respondWithJS(res) {
    return function (js) { respond(res, 200, js); };
  }

  function respondWithError(res) {
    return function (error) { respond(res, 500, error.toString()); };
  }

  function optimise(res, params) {
    requirejs.optimize(
      { baseUrl: params.baseUrl, name: params.name, out: respondWithJS(res) },
      function () {},
      respondWithError(res)
    );
  }

  function client(req, res) {
    optimise(res, { baseUrl: 'lib', name: 'client' });
  }

  return { client: client };
});
