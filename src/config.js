const environment = process.env.NODE_ENV;

if (!environment) {
  throw new Error('Provide NODE_ENV');
}

const shared = {
  port: 7302,
};

const config = {
  development: {
    apiURL: 'http://localhost:7402',
  },
  production: {
    apiURL: 'http://api.sunshower.poohitan.com',
  },
};

export default {
  ...shared,
  ...config[environment],
};
