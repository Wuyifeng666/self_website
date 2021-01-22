<template lang="pug">
  .Home
    el-container
      el-header Header
      el-main
        router-view
      el-footer Footer
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
