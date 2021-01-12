import config from './router.yaml'
import _ from 'lodash'
const routerMap = {}
const routerNameMap = {}
const result = JSON.parse(JSON.stringify(config))
const home = _.find(result, {name: 'Home'})
const cloneHome = JSON.parse(JSON.stringify(home))
cloneHome.children = []
const flattenRoutes = []
function setRoot (item, root) {
  routerMap[item.name] = item
  if (!item.children || item.children.length < 1) {
    return
  }
  for (let child of item.children) {
    child.root = root
    setRoot(child, root)
  }
}

for (let item of home.children) {
  item.root = item.name
  setRoot(item, item.name)
}


for (let i in result) {
  if (result[i].name === 'Home') {
    flattenRoutes.push(cloneHome)
  } else {
    flattenRoutes.push(result[i])
  }
}


export {routerMap, routerNameMap, flattenRoutes}
export default result
