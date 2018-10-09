<template>
  <div class="allFile">
    <div class="allFileCont-topBar" ref="allFileContTopBar">
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
  <fileState :fileActDatas="fileActDatas"
             :fileType="fileType">
  </fileState>
  <fileShow :fileActDatas="fileActDatas">
  </fileShow>
  </div>
</template>

<script>
  import fileState from '@/components/common/fileState'
  import fileShow from '@/components/common/fileShow'
  export default {
    name: 'allFile',
    components: {
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
        fileType: '全部文件',
        checked: false,
        items: [
          {message: '上传', fontClass: 'icon iconfont icon-shangchuan-copy', first: true},
          {message: '新建文件夹', fontClass: 'icon iconfont icon-xinjianwenjianjia'},
          {message: '分享', fontClass: 'icon iconfont icon-08'},
          {message: '重命名', fontClass: 'icon iconfont icon-zhongmingming'},
          {message: '删除', fontClass: 'icon iconfont icon-trash'},
        ],
        fontName: [
          {fontClass: 'icon iconfont icon-paixu'},
          {fontClass: 'icon iconfont icon-pingpu'}
        ]
      }
    },
    methods: {
      isChecked (item) {
        if (!item.checked) {
          item.checked = true;
        }else {
          item.checked = false;
        }
      },
      isAllChecked () {
        if (!this.checked) {
          this.checked = true;
          for (let i = 0; i < this.fileDatas.length; i++) {
            this.fileDatas[i].checked = true;
          }
        }else {
          this.checked = false;
          for (let i = 0; i < this.fileDatas.length; i++) {
            this.fileDatas[i].checked = false;
          }
        }
      }
    },
    watch: {
      fileDatas: {
        handler () {
          for (let i = 0; i < this.fileDatas.length; i++) {
            if (!this.fileDatas[i].checked) {
               return this.checked = false;
            }else {
              this.checked = true;
            }
          }
        },
        deep: true
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
  .allFile {
    height: 100%;
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
    padding: 0 10px;
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
  .allFileCont-body {
    height: 100%;
  }
  .body-dec {
    position: relative;
    width: 100%;
    height: 36px;
    cursor: pointer;
    border-bottom: 1px solid #f3f7fd;
  }
  .body-dec-dirname {
    position: relative;
    top: 0;
    width: 60%;
    height: 100%;
  }
  .body-dec-dirname:hover {
    background-color: #f6faff
  }
  .body-dec-dirname span {
    margin: 0 5px;
    font-size: 11px;
    color: #888;
    display: inline-block;
  }
  .body-dec-dirname .iconfont {
    font-size: 11px;
    line-height: 36px;
    color: #3b8cff;
  }
  .check-box {
    position: relative;
    top: 3px;
    margin-left: 20px;
    width: 12px;
    height: 12px;
    border: 1px solid #c9c9c9;
    display: inline-block;
  }
  .check-box #checkOK {
    position: absolute;
    left: 0;
    bottom: 1.5px;
    margin: 0;
    font-size: 12px;
    font-weight: 900;
    color: #3b8cff;
    line-height: 12px;
  }
  .body-dec-size {
    width: 16%;
    height: 100%;
  }
  .body-dec-size:hover {
    background-color: #f6faff;
  }
  .body-dec-size p {
    margin-left: 10px;
    font-size: 11px;
    color: #888;
    line-height: 36px;
  }
  .body-dec-date {
    width: 23%;
    height: 100%;
  }
  .body-dec-date:hover {
    background-color: #f6faff
  }
  .body-dec-date p {
    margin-left: 10px;
    font-size: 11px;
    color: #888;
    line-height: 36px;
  }
  .folder-box {
    height: inherit;
    overflow: scroll;
  }
  .folder-item {
    width: 100%;
    height: 43px;
    border-bottom: 1px solid #f6faff;
    cursor: pointer;
  }
  .folder-item:hover {
    background-color: #f6faff;
  }
  .folder-name {
    position: relative;
    width: 60%;
    height: 100%;
    line-height: 43px;
  }
  .folder-name .check-box {
    top: 0;
  }
  .folder-name i {
    margin-left: 10px;
    color: #ffd65a;
    font-size: 20px;
    line-height: 43px;
  }
  .folder-name span {
    position: relative;
    top: -3px;
    margin-left: 10px;
    font-size: 11px;
    color: #424e67;
    display: inline-block;
  }
  .folder-name span:hover {
    color: #3b8cff;
  }
  .folder-size {
    width: 16%;
    height: 100%;
  }
  .folder-size:hover {
    background-color: #f6faff;
  }
  .folder-size span {
    margin-left: 10px;
    font-size: 11px;
    color: #424e67;
    line-height: 43px;
  }
  .folder-date {
    width: 23%;
    height: 100%;
  }
  .folder-date:hover {
    background-color: #f6faff;
  }
  .folder-date span {
    margin-left: 10px;
    font-size: 11px;
    color: #424e67;
    line-height: 43px;
  }
</style>
