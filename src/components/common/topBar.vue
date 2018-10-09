<template>
  <div class="topBar">
    <div class="allFileCont-topBar" ref="hello">
      <div class="topBar-box">
        <div v-for="item in items"
             v-bind:class="[item.first ? 'first-item' : 'topBar-item', 'pull-left']">
             <i v-bind:class="item.fontClass"></i>
             <span>{{item.message}}</span>
        </div>
        <div class="topBar-right pull-right">
          <div class="topBar-search">
            <div class="topBar-search-box">
              <input type="text" placeholder="搜索您的文件">
              <i class="icon iconfont icon-sou-suo"></i>
            </div>
            <span class="topBar-right-fn">
              <strong v-for='item in fontName'
              v-bind:class="item.fontClass"
              ></strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'topBar',
    data () {
      return {
        type: '文件',
        checked: false,
        items: [
          {message: '上传', fontClass: 'icon iconfont icon-shangchuan-copy', first: true},
          {message: '分享', fontClass: 'icon iconfont icon-08'},
          {message: '重命名', fontClass: 'icon iconfont icon-zhongmingming'},
          {message: '删除', fontClass: 'icon iconfont icon-trash'},
        ],
        fontName: [
          {fontClass: 'icon iconfont icon-paixu'},
          {fontClass: 'icon iconfont icon-pingpu'}
        ],
        folderItems: [
          {folderName: '我的资源', folderSize: '-', folderDate: '2018-08-27 03:15', checked: false},
          {folderName: '动漫', folderSize: '-', folderDate: '2018-08-27 03:15', checked: false},
          {folderName: '新建文件夹', folderSize: '-', folderDate: '2018-08-27 03:15', checked: false}
        ]
      }
    }
  }
</script>

<style scoped>
.pull-left {
    float: left;
  }
  .pull-right {
    float: right;
  }
  .allFileCont {
    position: absolute;
    height: auto;
    min-width: 1100px;
    min-height: 600px;
    top: 70px;
    left: 179px;
    bottom: 0;
    right: 10px;
    border-top: 1px solid #d8dfea;
    border-left: 1px solid #d8dfea;
    border-right: 1px solid #d8dfea;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-color: #fff;
    overflow: hidden;
  }
  .allFileCont-topBar {
    padding: 3px 0;
    width: 100%;
    height: 55px;
  }
  .topBar-box {
    padding: 13px 15px 6px;
    width: auto;
    height: 36px;
    overflow: hidden;
  }
  .topBar-item {
    margin: 0 5px;
    padding: 0 15px;
    width: auto;
    height: 32px;
    font-size: 13px;
    border-radius: 4px;
    line-height: 32px;
    cursor: pointer;
    border: 1px solid #c0d9fe;
    color: #3b8cff;
  }
  .topBar-item:hover {
    color: #78afff;
  }
  .first-item {
    margin: 0 5px;
    padding: 0 15px;
    width: auto;
    height: 32px;
    font-size: 13px;
    border-radius: 4px;
    line-height: 32px;
    cursor: pointer;
    border: 1px solid #3b8cff;
    background-color: #3b8cff;
    color: #fff;
  }
  .first-item span {
    margin: 0 5px;
    display: inline-block;
  }
  .first-item:hover {
    background-color: #4e97ff;
  }
  .topBar-search-box {
    margin-right: 8px;
    width: 255px;
    height: 30px;
    background-color: #f1f2f4;
    border-radius: 15px;
    display: inline-block;
  }
  .topBar-search-box input {
    margin-left: 15px;
    width: 185px;
    height: 30px;
    border: none;
    outline: none;
    font-size: 11px;
    color: #949494;
    background-color: #f1f2f4;
  }
  .topBar-search-box i{
    margin-left: 20px;
    color: #666;
    cursor: pointer;
    display: inline-block;
  }
  .topBar-search-box i:hover {
    color: #3b8cff;
  }
  .topBar-right-fn {
    width: auto;
    height: 30px;
    display: inline-block;
  }
  .topBar-right-fn strong {
    margin: 0 8px;
    color: #5F6F95;
    font-size: 20px;
    cursor: pointer;
    display: inline-block;
  }
  .topBar-right-fn strong:hover {
    color: #8490a9;
  }
  .file-num {
    margin: 5px 0;
    width: 100%;
    height: 16px;
  }
  .file-num span {
    margin: 0 20px;
    font-size: 12px;
    color: #666;
    display: inline-block;
  }
</style>
