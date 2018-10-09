<template>
  <div class="musicFile">
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
    name: 'musicFile',
    data () {
      return {
        fileType: '全部音乐',
        iconStyle: 'icon-yinyueclick'
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
