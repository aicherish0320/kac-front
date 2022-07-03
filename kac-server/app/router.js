'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app
  router.get('/', controller.home.index)
  router.get('/category', controller.category.index)
  router.get('/pexels/lists', controller.lists.index)
}
