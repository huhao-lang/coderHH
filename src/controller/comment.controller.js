const commentService = require('../service/comment.service')
const { SERVICE_ERROR } = require('../config/error')
const create = async (ctx, next) => {
  const info = ctx.request.body
  try {
    const result = await commentService.create(info)
    ctx.body = {
      code: 200,
      data: result,
    }
  } catch (error) {
    ctx.app.emit('error', SERVICE_ERROR, ctx)
  }
}
const reply = async (ctx, next) => {
  const info = ctx.request.body
  try {
    const result = await commentService.reply(info)
    ctx.body = {
      code: 200,
      data: result,
    }
  } catch (error) {
    ctx.app.emit('error', SERVICE_ERROR, ctx)
  }
}

module.exports = {
  create,
  reply,
}
