import config from './router.yaml'
import _ from 'lodash'
const routerMap = {}
const routerNameMap = {}
const result = JSON.parse(JSON.stringify(config))
const home = _.find(result, {name: 'Home'})
const cloneHome = JSON.parse(JSON.stringify(home))
cloneHome.children = []
const flattenRoutes = []
const sectionAuthMap = {}
const companyAuthMap = {}
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

for (let i in routerMap) {
  const item = routerMap[i]
  routerNameMap[item.root] = routerNameMap[item.root] || []
  routerNameMap[item.root].push(item)
  const cloneItem = {}
  for (let attr in item) {
    if (attr !== 'children') {
      cloneItem[attr] = item[attr]
      setAuthMap(item.meta.auth)
    }
  }
  cloneHome.children.push(cloneItem)
}

for (let i in result) {
  if (result[i].name === 'Home') {
    flattenRoutes.push(cloneHome)
  } else {
    flattenRoutes.push(result[i])
  }
}

function setAuthMap (auth) {
  for (let key in auth) {
    const authItem = auth[key]
    if (authItem.sectionType) {
      sectionAuthMap[key] = authItem.sectionType
    }
    if (authItem.companyType) {
      companyAuthMap[key] = authItem.companyType
    }
  }
}

export {routerMap, routerNameMap, flattenRoutes, sectionAuthMap, companyAuthMap}
export default result
