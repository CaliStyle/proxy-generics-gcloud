'use strict'

const _ = require('lodash')
const smokesignals = require('smokesignals')
// const path = require('path')

module.exports = _.defaultsDeep({
  pkg: {
    name: require('../package').name + '-test'
  },
  api: require('../api'),
  config: {
    main: {
      packs: [
        require('trailpack-proxy-generics')
      ]
    },
    proxyGenerics: {
      gcloud: {
        adapter: require('../'),
        options: {
          project_id: process.env.GCLOUD_PROJECT_ID,
          key_filename: process.env.GCLOUD_KEY_FILENAME,
          bucket: process.env.GCLOUD_BUCKET,
          host: process.env.GCLOUD_HOST
        }
      }
    }
  }
}, smokesignals.FailsafeConfig)


