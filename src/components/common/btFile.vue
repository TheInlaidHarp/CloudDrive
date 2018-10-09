<template>
  <div class="btFile">
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
    name: 'btFile',
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
    },
    data () {
      return {
        fileType: '全部种子',
        iconStyle: 'icon-btzhongzi1'
      }
    }
  }
</script>

<style>
</style>
