<template lang="pug">
  .Home
    router-view
    van-tabbar(v-model='active' route)
      van-tabbar-item(icon='home-o' replace to="/Index") 主页
      van-tabbar-item(icon='search' replace to="/Index1") 标签
      van-tabbar-item(icon='friends-o' replace to="/Index2") 标签
      van-tabbar-item(icon='setting-o' replace to="/Setting") 设置
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      active: '0'
    }
  }
}
</script>

<style scoped>

</style>
