import { makeError, coatError } from "../Helpers/ErrorHandling/MakeError";

function SinkErrorFor(app) {
  app.srv.use((req, res, next) => {
    next(new makeError.NotFound());
  });

  app.srv.use((err, req, res, next) => {
    err = coatError(err);
    res.status(err.status || 500);
    res.send({
      status: err.status,
      message: err.message,
    });
  });
}

module.exports = SinkErrorFor