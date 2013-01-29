define(function (require) {
  var requirejs = require('requirejs'),
      fs = require('fs');

  function respond(res, params) {
    res.writeHead(params.code, {
      'Content-Type': (params.code === 200 ? 'application/javascript;charset=UTF-8' : 'text/plain'),
      'Content-Length': params.contents.length
    });

    res.write(params.contents, 'utf8');
    res.end();
  }

  function respondWithJS(res) {
    return function (js) { respond(res, { code: 200, contents: js }); };
  }

  function respondWithError(res) {
    return function (error) { respond(res, { code: 500, contents: error.toString() }); };
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
