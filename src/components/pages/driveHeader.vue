<template>
  <div class="driveHeader">
    <div class="header-logo pull-left">
      <i class="icon iconfont icon-yun"></i>
    </div>
    <div class="header-nav pull-left">
      <ul>
        <li class="header-nav-item pull-left" v-for="item in items">
          <p
            v-bind:class="{'item-checked': item.checked}"
            v-on:click="checkedShow(item)">
            {{item.message}}
          </p>

        </li>
      </ul>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
      name: 'Header',
      data () {
        return {
          items : [
            {message: '网盘',checked: true},
            {message: '分享',checked: false},
            {message: '更多',checked: false}
          ],
        }
      },
      methods: {
        checkedShow(item) {
          for (let i = 0; i < this.items.length; i++) {
            this.items[i].checked = false
          }
          item.checked = true
        }
      }
    }
</script>

<style>
.pull-left {
    float: left;
  }
  .pull-right {
    float: right;
  }
  .driveHeader {
    padding: 0;
    margin: 6px 0;
    width: auto;
    height: 50px;
  }
  .header-logo {
    padding: 0 34px 0 20px;
    width: 140px;
    height: 50px;
    text-align: center;
    cursor: pointer;
  }
  .header-logo i {
    font-size: 60px;
    color: #3177f2;
  }
  .header-nav-item {
    margin: 0 25px;
    width: 36px;
    height: 46px;
    cursor: pointer;
  }
  .header-nav-item p {
    line-height: 50px;
    text-align: center;
    color: #424e67;
  }
  .header-nav-item p:hover {
    color: #6b7589;
  }
  .header-nav-item .item-checked {
    color: #3b8cff;
    border-bottom: 4px solid #3b8cff;
  }
</style>
