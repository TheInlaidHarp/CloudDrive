<template>
  <div class="fileState" ref="fileState">
    <div class="file-num">
      <span class="pull-left">{{fileType}}</span>
      <span class="pull-right">已全部加载, 共 {{fileActDatas.length}} 个</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'fileState',
    props: {
      fileActDatas: {
        type: Array,
        required: true
      },
      fileType: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="css">
</style>
