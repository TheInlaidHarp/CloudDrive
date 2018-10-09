<template>
  <div class="otherFile">
    <topBar></topBar>
    <fileState :fileActDatas="fileActDatas"
               :fileType="fileType">
    </fileState>
    <fileShow :fileActDatas="fileActDatas">
    </fileShow>
  </div>
</template>

<script>
  import topBar from '@/components/common/topBar'
  import fileState from '@/components/common/fileState'
  import fileShow from '@/components/common/fileShow'
  export default {
    name: 'otherFile',
    data () {
      return {
        fileType: '其他文件'
      }
    },
    components: {
      topBar,
      fileState,
      fileShow
    },
    props: {
      fileActDatas: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style>
</style>
