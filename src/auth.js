const ALLOWED_AGENTS = ['curl', 'Chrome', 'Mozilla', 'Safari', 'Edg'];

exports.authenticateRequest = (req) => {
  const AUTH_TOKEN = req.headers.authorization
    ? req.headers.authorization.replace('Bearer ', '')
    : '';

  return !AUTH_TOKEN || AUTH_TOKEN !== process.env.PASS;
};

exports.authenticateUserAgent = (req) => {
  const USER_AGENT = req.headers['user-agent'];

  return !ALLOWED_AGENTS.some((agent) => USER_AGENT.includes(agent));
};
