<template>
  <div class="videoFile">
    <topBar></topBar>
    <fileState :fileActDatas="fileActDatas"
               :fileType="this.fileType">
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
    name: 'videoFile',
    components: {
      topBar,
      fileState,
      fileShow
    },
    props: {
      // fileDatas: {
      //   type: Array,
      //   required: true
      // },
      fileActDatas: {
        type: Array,
        required: true
      }
    },
    data () {
      return {
        fileType: '全部视频'
      }
    }
  }
</script>

<style>
</style>
