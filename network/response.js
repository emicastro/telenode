/* eslint-disable no-param-reassign */
const statusMessages = {
  200: 'OK',
  201: 'Created',
  400: 'Invalid format',
  500: 'Internal error',
};

exports.success = (req, res, message, status) => {
  const statusCode = status;
  let statusMessage = message;
  if (!status) {
    status = 200;
  }
  if (!message) {
    statusMessage = statusMessages[status];
  }
  res.status(statusCode).send({
    error: '',
    body: statusMessage,
  });
};

exports.error = (req, res, message, status, details) => {
  // eslint-disable-next-line no-console
  console.error(`[response-error] ${details}`);
  const statusCode = status;
  let statusMessage = message;
  if (!status) {
    status = 500;
  }
  if (!message) {
    statusMessage = statusMessages[status];
  }
  res.status(statusCode).send({
    error: statusMessage,
    body: '',
  });
};
