
/*
 * This interface is intended for the configuration of
 * the main end point domain of all incoming and outgoing requests in Dev mode.
 * 
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */

export const environment = {
  production: false,
  // url:  'http://cc.tilakat.com/api',
  // urlProd:  'http://cc.tilakat.com/api'
  url:  'http://dev.tilakat.com:8091/api',
  urlProd:  'http://dev.tilakat.com:8091/api',
  domainName:  'http://dev.tilakat.com:8091',
};

