'use strict'

const lists = require('../mocks/lists')

const Controller = require('egg').Controller

class ListsController extends Controller {
  async index() {
    const { ctx } = this
    ctx.body = lists
  }
}

module.exports = ListsController
