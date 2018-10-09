<template>
  <div id="app">
    <driveHeader></driveHeader>
    <driveCount></driveCount>
    <largeImg v-show="showLargeImg"
              :showLargeImg="showLargeImg"></largeImg>
  </div>
</template>

<script>
import driveHeader from '@/components/pages/driveHeader'
import driveCount from '@/components/pages/driveCount'
import largeImg from '@/components/pages/largeImg'
import bus from '@/components/common/bus.js'
export default {
  name: 'App',
  data () {
    return {
      showLargeImg: false,
      item: '',
      items: '',
      imgDatas: ''
    }
  },
  components: {
    driveHeader,
    driveCount,
    largeImg
  },
  methods: {
    changeShow(msg) {
      this.showLargeImg = msg;

    }
  },
  mounted () {
    bus.$on('largeImgShowSta',this.changeShow)
  }
}
</script>

<style>
  #app {
    width: 100%;
    height: 100%;
  }
</style>
