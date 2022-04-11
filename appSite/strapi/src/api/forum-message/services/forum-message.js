'use strict';

/**
 * forum-message service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::forum-message.forum-message');
