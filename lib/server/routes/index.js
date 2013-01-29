define(function () {
  function index(req, res) {
    res.render('index', { title: 'Express' });
  }

  return index;
});
