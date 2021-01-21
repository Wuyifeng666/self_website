<template lang="pug">
  .Index
    van-notice-bar(left-icon='volume-o' mode="closeable" scrollable text='在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。')
    van-swipe.my-swipe(:autoplay='3000' indicator-color='white')
      van-swipe-item 1
      van-swipe-item 2
      van-swipe-item 3
      van-swipe-item 4
    van-grid
      van-grid-item(icon='photo-o' text='文字')
      van-grid-item(icon='photo-o' text='文字')
      van-grid-item(icon='photo-o' text='文字')
      van-grid-item(icon='photo-o' text='文字')
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
