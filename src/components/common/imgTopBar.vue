<template>
  <div class="imgTopBar">
    <div class="topBar-box">
      <div v-for="item in items"
           v-bind:class="[item.checked ? 'imgTopBar-item-checked' : 'imgTopBar-item', 'pull-left']">
           <span class="imgTopBar-item-msg">{{item.message}}</span>
      </div>
      <div class="topBar-right pull-right">
        <div class="topBar-search">
          <div class="topBar-search-box">
            <input type="text" placeholder="通过名称、时间搜索你的图片">
            <i class="icon iconfont icon-sou-suo"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'imgTopBar',
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
  .imgTopBar {
    padding: 3px 0;
    width: 100%;
    height: 55px;
  }
  .topBar-box {
    padding: 13px 15px 6px;
    background-color: #fbfbfb;
    border-bottom: 1px solid #f2f2f2;
  }
  .imgTopBar-item {
    margin: 0 5px;
    padding: 0 15px;
    width: auto;
    height: 32px;
    font-size: 13px;
    line-height: 32px;
    cursor: pointer;
    color: #8e99b3;
  }
  .imgTopBar-item-checked {
    margin: 0 5px;
    padding: 0 15px;
    width: auto;
    height: 32px;
    color: #fff;
    font-size: 13px;
    line-height: 32px;
    background-color: #3b8cff;
    border: 1px solid #3b8cff;
    border-radius: 4px;
    cursor: pointer;
  }
  .imgTopBar-item-msg {
    display: inline-block;
    margin: 0 5px;
  }
</style>
