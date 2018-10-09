<template>
  <div class="docFile">
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
    name: 'doctFile',
    data () {
      return {
        fileType: '全部文档',
        iconStyle: 'icon-wendang1'
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
.docFile {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
