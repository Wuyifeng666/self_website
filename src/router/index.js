import Vue from 'vue'
import Router from 'vue-router'
// import { flattenRoutes } from './config'
import config from './router.yaml'
Vue.use(Router)
// const register = (opt) => {
//   let name = opt.name
//   let path = opt.path
//   let file = opt.file
//   if (!file) {
//     file = `${name}/${name}`
//   }
//   const result = {
//     path,
//     name,
//     meta: {
//       ...opt.meta,
//       root: opt.root
//     },
//     children: []
//   }
//   result.component = () =>
//     import('pages/' + file)
//   result.timeout = 30000
//   if (opt.children) {
//     opt.children.forEach(element => {
//       result.children.push(register(element))
//     })
//   }
//   return result
// }
console.log(JSON.parse(JSON.stringify(config)))
const routes = [
  {
    path: '/Home',
    component: import('@/components/pages/Home/Home')
  },
  {
    path: '/Index',
    component: import('@/components/pages/Index/Index')
  }
]
// flattenRoutes.forEach(element => {
//   routes.push(register(element))
// })
// 重写路由push方法
// const routerPush = Router.prototype.push
// Router.prototype.push = async function push (location) {
//   try {
//     await routerPush.call(this, location)
//   } catch (error) {

//   }
// }
export default new Router({
  routes
})
