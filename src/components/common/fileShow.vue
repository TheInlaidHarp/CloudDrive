<template>
  <div class="fileShow">
    <div class="dec-box" ref="decBox">
      <div class="show-dec-dirname pull-left">
        <p class="check-box"
           @click="isAllChecked">
          <i id="checkOK" class="icon iconfont icon-ok"
             v-if="checked"></i>
        </p>
        <span>文件名</span>
        <i class="icon iconfont icon-jiantou1"></i>
      </div>
      <div class="body-dec-size pull-left">
        <p>大小</p>
      </div>
      <div class="body-dec-date pull-left">
        <p>修改日期</p>
      </div>
    </div>
    <div class="file-box" ref="show">
      <dd class="file-item" v-for="fileData in fileActDatas">
        <div class="file-name pull-left">
          <p class="check-box"
             @click="isChecked(fileData)">
            <i id="checkOK" class="icon iconfont icon-ok"
               v-if="fileData.checked"></i>
          </p>
          <i class="icon iconfont"
             :class="iconStyle(fileData)"
             :style="iconColor(fileData)">
          </i>
          <span>{{fileData.name}}</span>
        </div>
        <div class="file-size pull-left">
          <span>{{fileData.size}}</span>
        </div>
        <div class="file-date pull-left">
          <span>{{fileData.date}}</span>
        </div>
      </dd>
    </div>
  </div>
</template>

<script>
export default {
  name: 'fileShow',
  props: {
    fileActDatas: {}
  },
  data () {
    return {
      checked: false
    }
  },
  computed: {
    cloneDatas () {
      let cloneFileDatas = {};
      cloneFileDatas = JSON.parse(JSON.stringify(this.fileActDatas));
      return cloneFileDatas;
    }
  },
  methods: {
    isChecked(item) {
      if (item.checked) {
        item.checked = false
      }else {
        item.checked = true
      }
    },
    isAllChecked () {
      if (!this.checked) {
        this.checked = true;
        for (let i = 0; i < this.fileActDatas.length; i++) {
          this.fileActDatas[i].checked = true;
        }
      }else {
        this.checked = false;
        for (let i = 0; i < this.fileActDatas.length; i++) {
          this.fileActDatas[i].checked = false;
        }
      }
    },
    iconStyle(item) {
      return item.iconStyle
    },
    iconColor(item) {
      if (item.iconStyle == 'icon-wenjianjia') {
        return 'color:#ffd65a'
      }else if (item.iconStyle == 'icon-wendang1') {
        return 'color:#74a8f9'
      }else if (item.iconStyle == 'icon-shipin1') {
        return 'color:#7f84e8'
      }else if (item.iconStyle == 'icon-btzhongzi1') {
        return 'color:#60c251'
      }else if (item.iconStyle == 'icon-yinyueclick') {
        return 'color:#c62410'
      }else if (item.iconStyle == 'icon-lianjie') {
        return 'color:#348cf0'
      }else if (item.iconStyle == 'icon-qitawenjian_xp') {
        return 'color:#bac9d6'
      }else if (item.iconStyle == 'icon-apk') {
        return 'color:#a1be54'
      }else if (item.iconStyle == 'icon-zip1') {
        return 'color:#689bd4'
      }
    },
    updataHeight() {
      let headerHeight = document.getElementsByClassName('driveHeader')[0].scrollHeight;
      let stateHeight = document.getElementsByClassName('fileState')[0].scrollHeight;
      let topBarHeight = document.getElementsByClassName('allFileCont-topBar')[0].scrollHeight;
      let decHeight = this.$refs.decBox.scrollHeight;
      let sumHeight = headerHeight + stateHeight + decHeight + topBarHeight;

      return sumHeight;
    }
  },
  watch: {
    fileActDatas: {
      handler (val, oval) {
        for (let i = 0; i < this.fileActDatas.length; i++) {
          if (!this.fileActDatas[i].checked) {
             return this.checked = false;
          }else {
            this.checked = true;
          }
        }
      },
      deep: true
    }
  },
  mounted () {

    window.onload = () => {
      let show = this.$refs.show;
      let showHeight = window.innerHeight - this.updataHeight() - 10;
      show.style.height = showHeight + 'px';
    }
    window.onresize = () => {
      let show = this.$refs.show;
      let showHeight = window.innerHeight - this.updataHeight() - 10;
      show.style.height = showHeight + 'px';
    }
  }
}
</script>

<style>
  .fileShow {
    position: relative;
    width: 100%;
    cursor: pointer;
    border-bottom: 1px solid #f3f7fd;
  }
  .dec-box {
    width: 100%;
    height: 100%;
    overflow:hidden;
  }
  .show-dec-dirname {
    position: relative;
    top: 0;
    width: 60%;
    height: 100%;
  }
  .show-dec-dirname:hover {
    background-color: #f6faff
  }
  .show-dec-dirname span {
    margin: 0 5px;
    font-size: 11px;
    color: #888;
    display: inline-block;
  }
  .show-dec-dirname .iconfont {
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
  .file-box {
    height: 540px;
    overflow: scroll;
  }
  .file-item {
    width: 100%;
    height: 43px;
    border-bottom: 1px solid #f6faff;
    cursor: pointer;
  }
  .file-item:hover {
    background-color: #f6faff;
  }
  .file-name {
    position: relative;
    width: 60%;
    height: 100%;
    line-height: 43px;
  }
  .file-name .check-box {
    top: 0;
  }
  .file-name i {
    margin-left: 10px;
    font-size: 20px;
    line-height: 43px;
  }
  .file-name span {
    position: relative;
    top: -3px;
    margin-left: 10px;
    font-size: 11px;
    color: #424e67;
    display: inline-block;
  }
  .file-name span:hover {
    color: #3b8cff;
  }
  .file-size {
    width: 16%;
    height: 100%;
  }
  .file-size:hover {
    background-color: #f6faff;
  }
  .file-size span {
    margin-left: 10px;
    font-size: 11px;
    color: #424e67;
    line-height: 43px;
  }
  .file-date {
    width: 23%;
    height: 100%;
  }
  .file-date:hover {
    background-color: #f6faff;
  }
  .file-date span {
    margin-left: 10px;
    font-size: 11px;
    color: #424e67;
    line-height: 43px;
  }
</style>
