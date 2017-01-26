/* eslint no-console: [0] */
'use strict'

module.exports = class ProxyGenericsGcloud {
  constructor(options) {
    this.options = options
  }

  /**
   * Create Gcloud Instance
   * @returns {*} Gcloud Instance
   */
  gcloud() {
    return require('gcloud')(
      this.options.secret
    )
  }
}

