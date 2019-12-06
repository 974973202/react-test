const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();

const cors = require('@koa/cors');
app.use(cors())
const router = new Router();

router.get('/', async ctx => {
  ctx.body= {ok: 1, data: ['lzx', 'lz', 'l'], message: 'ok'}
  console.log(ctx)
})

app
  .use(router.routes())
  .use(router.allowedMethods());


app.listen(3333, (err) => {
  if(err) {
    console.log('server start fail' + err)
  } else {
    console.log('a koa server start success')
  }
})