const momentService = require('../service/moment.service')

class MomentController {
  async create(ctx, next) {
    // 1.获取用户传递过来信息
    const info = ctx.request.body
    // 2.将user信息存储到数据库中
    const result = await momentService.create(info)
    // 3.查看存储的结果, 告知前端创建成功
    ctx.body = {
      message: '发布成功~',
      data: result,
    }
  }
  async query(ctx, next) {
    const { size, offset } = ctx.request.body
    const result = await momentService.query(size, offset)
    ctx.body = {
      code: 200,
      data: result,
    }
  }
  async detail(ctx, next) {
    const { momentId } = ctx.request.params
    const result = await momentService.detail(momentId)
    ctx.body = {
      code: 200,
      data: result,
    }
  }
  async update(ctx, next) {
    const info = ctx.request.body
    const result = await momentService.update(info)
    console.log(result)
    ctx.body = {
      code: 200,
      data: result,
    }
  }
  async remove(ctx, next) {
    const { momentId } = ctx.request.params
    const result = await momentService.remove(momentId)
    ctx.body = {
      code: 200,
      data: result,
    }
  }
}

module.exports = new MomentController()
