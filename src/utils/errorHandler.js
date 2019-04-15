export const notFoundErrorHandler = (req, res) => {
  res.status(404).send({ error: 'Resource not found.' });
};

export const defaultErrorHandler = (error, req, res, next) => {
  res.status(error.status || 500).send({ error });
};
