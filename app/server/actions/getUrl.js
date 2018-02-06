/**
 * @author oldj
 * @blog https://oldj.net
 */

'use strict'

const request = require('request');
const fs = require('fs');
//process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0'

module.exports = (svr, url) => {
  return new Promise((resolve, reject) => {
    if(!url.startsWith('http')){
      try {
        var body = fs.readFileSync(url).toString();
        resolve(body);
      } catch (e) {
        console.log(url)
        console.log(e)
        reject(e)
      }
    } else {
      request({
        url,
        rejectUnauthorized: false
      }, (err, res, body) => {
        if (err) {
          console.log(err)
          reject(err)
        } else {
          resolve(body)
        }
      });
    }
  })
}
