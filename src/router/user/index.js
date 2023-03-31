const KoaRouter = require('@koa/router')
const userRouter = new KoaRouter({ prefix: '/users' })

userRouter.post('/list', (cxt, next) => {
  console.log(cxt.request.body)
  cxt.body = 'users/list'
  next()
})

module.exports = {
  userRouter,
}
