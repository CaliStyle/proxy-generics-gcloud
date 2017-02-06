# proxy-generics-gcloud

[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Code Climate][codeclimate-image]][codeclimate-url]

Proxy Generic Data Store for Google Cloud.

Looking for [Proxy Engine?](https://github.com/calistyle/trailpack-proxy-engine)
Looking for [Proxy Generics?](https://github.com/calistyle/trailpack-proxy-generics)

## Install

```sh
$ npm install --save proxy-generics-gcloud
```

## Configure

```js
// config/proxyGenerics.js
module.exports = {
  // make the key gcloud, alternatively make the key data_store_provider to be the default data store provider  
  gcloud: {
      adapter: require('proxy-generic-gcloud'),
      options: {
          project_id: process.env.GLCOUD_PROJECT_ID,
          key_filename: process.env.GCLOUD_KEY_FILENAME, // NOTE: Must Be Fully Resolved Path
          bucket: process.env.GCLOUD_BUCKET
      }
  }
}
```

[npm-image]: https://img.shields.io/npm/v/proxy-generics-gcloud.svg?style=flat-square
[npm-url]: https://npmjs.org/package/proxy-generics-gcloud
[ci-image]: https://img.shields.io/circleci/project/github/CaliStyle/proxy-generics-gcloud/master.svg
[ci-url]: https://circleci.com/gh/CaliStyle/proxy-generics-gcloud/tree/master
[daviddm-image]: http://img.shields.io/david//trailpack-proxy-generics-gcloud.svg?style=flat-square
[daviddm-url]: https://david-dm.org/CaliStyle/proxy-generics-gcloud
[codeclimate-image]: https://img.shields.io/codeclimate/github/CaliStyle/proxy-generics-gcloud.svg?style=flat-square
[codeclimate-url]: https://codeclimate.com/github/CaliStyle/proxy-generics-gcloud

