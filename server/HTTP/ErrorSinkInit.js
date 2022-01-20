const { makeError, coatError } = require("../Helpers/ErrorHandling/MakeError");

function SinkErrorFor(app) {
  app.use((req, res, next) => {
    next(new makeError.NotFound());
  });

  app.use((err, req, res, next) => {
    err = coatError(err);
    res.status(err.status || 500);
    res.send({
      status: err.status,
      message: err.message,
    });
  });
}

module.exports = SinkErrorFor