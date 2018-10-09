<template>
  <div class="imgFile">
    <imgTopBar :items="imgTopBarData"></imgTopBar>
    <imgCount :fileActDatas="fileActDatas">
    </imgCount>
  </div>
</template>

<script>
import imgTopBar from '@/components/common/imgTopBar'
import imgCount from '@/components/common/imgCount'
  export default {
    name: 'imgFile',
    props: {
      fileActDatas: {
        type: Array,
        required: true
      }
    },
    components: {
      imgTopBar,
      imgCount
    },
    data () {
      return {
        imgTopBarData: [
          {message: '时光轴', checked: true},
          {message: '智能分类'},
          {message: '最近上传'}
        ]
      }
    },
    methods: {
    }
  }
</script>

<style>
  .imgFile {
    width: 100%;
    height: 100%;
  }
</style>
