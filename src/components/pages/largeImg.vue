<template>
  <div class="largeImg">
    <div class="largeImg-box" ref="imgBox">
      <img v-show="this.item.active" class="largeImg-item" ref="itemImg"
           :src="this.item.src">
     <div class="changeImg-btn">
       <div class="img-pre"
            @mouseenter="imgPreOver"
            @mouseleave="imgPreLeave"
            @click = "imgPre">
         <p class="btn img-pre-btn" onselectstart="return false"><</p>
       </div>
       <div class="img-next"
            @mouseenter="imgNextOver"
            @mouseleave="imgNextLeave"
            @click="imgNext">
         <p class="btn img-next-btn" onselectstart="return false">></p>
       </div>
     </div>
    </div>

    <div class="close-btn">
      <i class="icon iconfont icon-colse"
         @click="closePage"></i>
    </div>

    <div class="alert-box">
      <span class="icon">!</span>
      <span class="msg">{{alertMsg}}</span>
    </div>
    <div class="img-msg-box" ref="imgMsg">
      <div class="img-msg-closeBtn"
           @click="closeImgMsg">×</div>
      <p class="img-msg-title">图片详情</p>
      <ul>
        <li>
          <p class="img-msg-key img-msg-type">分类</p>
          <p class="img-msg-type-value">图片</p>
        </li>
        <li>
          <span class="img-msg-key">文件名</span>
          <span class="img-msg-value">{{item.name}}</span>
        </li>
        <li>
          <span class="img-msg-key">所属文件夹</span>
          <span class="img-msg-value"></span>
        </li>
        <li>
          <span class="img-msg-key">地点</span>
          <span class="img-msg-value">{{item.place? item.place : "未知"}}</span>
        </li>
        <li>
          <span class="img-msg-key">时间</span>
          <span class="img-msg-value">{{item.date}}</span>
        </li>
        <li>
          <span class="img-msg-key">大小</span>
          <span class="img-msg-value">{{item.size}}</span>
        </li>
      </ul>
    </div>
    <div class="largeImg-footer">
      <div class="largeImg-footer-fn">
        <div class="footer-fn-left">
          <ul>
            <li>
              <i class="icon iconfont icon-08"
                 :title="`分享图片`"
                 @click="wantShare"></i>
            </li>
            <li>
              <i class="icon iconfont icon-trash"
                 :title="`删除图片`"
                 @click="wantDel"></i>
            </li>
            <li>
              <i class="icon iconfont icon-xiangqing1"
                 :title="`图片详情`"
                 @click="openImgMsg"></i>
            </li>
          </ul>
        </div>
        <span class="cut-symbol">|</span>
        <div class="footer-fn-right">
          <div class="thumbnail-box"
               @click="openThumb">
            <span>{{thumbStatus.msg}}</span>
            <i :class="thumbStatus.iconClass"></i>
          </div>
        </div>
      </div>
      <div class="footer-thumbnail">
        <ul>
          <li v-for="thumb in thumbImgDatas">
            <div class="thumbnail-item">
              <img class="thumbnali"
                   :src="thumb.src">
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="del-box" ref="delBox">
      <div class="del-header">
        <p>确认删除</p>
        <span @click="closeDel">×</span>
      </div>
      <div class="del-body">
        确认要把所选文件放入回收站吗？
        <br>
        删除的文件可在 10 天内通过回收站还原
      </div>
      <div class="del-btn">
        <p class="del-yes"
           @click="delYes">确定</p>
        <p class="del-no"
           @click="delNo">取消</p>
      </div>
    </div>
    <div class="share-box" ref='shareBox'>
      <div class="share-header">
        <p>确认分享</p>
        <span @click="closeShare">x</span>
      </div>
      <div class="share-body">
        确认分享所选文件吗？
      </div>
      <div class="share-btn">
        <p class="share-yes"
           @click="shareYes">确定</p>
        <p class="share-no"
           @click="shareNo">取消</p>
      </div>
    </div>
  </div>
</template>

<script>
import bus from '@/components/common/bus.js'
export default {
  name: 'largeImg',
  data () {
    return {
      iconData: [
        {message: '分享图片', class:'icon iconfont icon-08'},
        {message: '删除图片', class:'icon iconfont icon-trash'},
        {message: '图片详情', class:'icon iconfont icon-xiangqing1'}
      ],
      item: '',
      imgDatas: '',
      alertMsg: '',
      thumbStatus : {
        msg: '展开缩略图',
        iconClass: 'icon iconfont icon-arrLeft-fill',
        isOpen: false
      }
    }
  },
  props: {
    showLargeImg: {}
  },
  methods: {
    receive (arr) {
      this.item = arr[0];
      // this.items = arr[1].slice(0);
      this.imgDatas = arr[2].slice(0);
    },
    closePage () {
      let thumb = document.getElementsByClassName('footer-thumbnail')[0];
      let thumbItem = document.getElementsByClassName('thumbnail-item')
      thumb.style.height = 0;
      thumb.style.marginBottom = 0;
      thumb.style.transition = 'height .5s';
      this.thumbStatus.msg = '展开缩略图';
      this.thumbStatus.iconClass = 'icon iconfont icon-arrLeft-fill';
      this.thumbStatus.isOpen = false;
      for (let i = 0; i < this.thumbImgDatas.length; i++) {
        thumbItem[i].style.border = 'none'
      }
      bus.$emit('largeImgShowSta', false)
    },
    imgPreOver () {
      let imgPreBtn = document.getElementsByClassName('img-pre-btn')[0];
      imgPreBtn.style.opacity = 1;
      imgPreBtn.style.backgroundColor = '#3b8cff';
    },
    imgPreLeave () {
      let imgPreBtn = document.getElementsByClassName('img-pre-btn')[0];
      imgPreBtn.style.opacity = '.8';
      imgPreBtn.style.backgroundColor = '#565656'
    },
    imgNextOver () {
      let imgNextBtn = document.getElementsByClassName('img-next-btn')[0]
      imgNextBtn.style.opacity = 1;
      imgNextBtn.style.backgroundColor = '#3b8cff';
    },
    imgNextLeave () {
      let imgNextBtn = document.getElementsByClassName('img-next-btn')[0];
      imgNextBtn.style.opacity = '.8';
      imgNextBtn.style.backgroundColor = '#565656'
    },
    imgPre () {
      let thumbItem = document.getElementsByClassName('thumbnail-item')
      if (this.openImgDatas.indexOf(this.item) == 0) {
        this.alertMsg = '已经是第一张啦'
        let alertBox = document.getElementsByClassName('alert-box')[0];
        alertBox.style.opacity = 1;
        setTimeout(function () {
          alertBox.style.opacity = 0;
          alertBox.style.transition = 'opacity .8s'
        }, 3000)
      }else {
        this.item = this.openImgDatas[this.openImgDatas.indexOf(this.item) - 1]
      }
      for (let i = 0; i < this.thumbImgDatas.length; i++) {
        thumbItem[i].style.border = 'none';
        if (this.item.id == this.thumbImgDatas[i].id) {
          thumbItem[i].style.border = '2px solid #3b8cff';
        }
      }
    },
    imgNext () {
      let thumbItem = document.getElementsByClassName('thumbnail-item')
      if (this.openImgDatas.indexOf(this.item) < this.openImgDatas.length - 1) {
        this.item = this.openImgDatas[this.openImgDatas.indexOf(this.item) + 1]
      }else {
        this.alertMsg = '已经是最后一张啦'
        let alertBox = document.getElementsByClassName('alert-box')[0];
        alertBox.style.opacity = 1;
        setTimeout(function () {
          alertBox.style.opacity = 0;
          alertBox.style.transition = 'opacity .8s'
        }, 3000)
      }
      for (let i = 0; i < this.thumbImgDatas.length; i++) {
        thumbItem[i].style.border = 'none';
        if (this.item.id == this.thumbImgDatas[i].id) {
          thumbItem[i].style.border = '2px solid #3b8cff';
        }
      }
    },
    openThumb () {
      let thumb = document.getElementsByClassName('footer-thumbnail')[0];
      let imgBox = document.getElementsByClassName('largeImg-box')[0];
      let footer = document.getElementsByClassName('largeImg-footer')[0];
      let thumbItem = document.getElementsByClassName('thumbnail-item')
      if (!this.thumbStatus.isOpen) {
        thumb.style.height = '60px';
        thumb.style.marginBottom = '8px';
        thumb.style.transition = 'height .5s';
        this.thumbStatus.msg = '收起缩略图';
        this.thumbStatus.iconClass = 'icon iconfont icon-sanb';
        this.thumbStatus.isOpen = true;
        for (let i = 0; i < this.thumbImgDatas.length; i++) {
          if (this.item.id == this.thumbImgDatas[i].id) {
            thumbItem[i].style.border = '2px solid #3b8cff';
          }
        }
      }else {
        thumb.style.height = 0;
        thumb.style.marginBottom = 0;
        thumb.style.transition = 'height .5s';
        this.thumbStatus.msg = '展开缩略图';
        this.thumbStatus.iconClass = 'icon iconfont icon-arrLeft-fill';
        this.thumbStatus.isOpen = false;
        for (let i = 0; i < this.thumbImgDatas.length; i++) {
          thumbItem[i].style.border = 'none'
        }
      }
      setTimeout(function () {
        imgBox.style.height = window.innerHeight - footer.offsetHeight - 30 + 'px';
      }, 600)
    },
    openImgMsg () {
      this.$refs.imgMsg.style.display = 'block';
      this.$refs.imgBox.style.width = window.innerWidth - this.$refs.imgMsg.scrollWidth + 'px'
    },
    closeImgMsg () {
      this.$refs.imgMsg.style.display = 'none';
      this.$refs.imgBox.style.width = '100%';
    },

    // 点击页面底部垃圾桶图标 显示删除框
    wantDel () {
      this.$refs.delBox.style.display = 'block'
    },

    // 点击删除框确定按钮 删除对应图片
    delYes () {
      this.$refs.delBox.style.display = 'none'
      for (let i = 0; i < this.openImgDatas.length; i++) {
        // console.log(i,this.openImgDatas[i].active)

        if (this.item.id == this.openImgDatas[i].id) {
          this.item.active = false
          this.item = this.openImgDatas[i + 1]
          break
        }
      }
    },
    // delYes () {
    //   for (let i = 0; i < this.imgDatas.length; i++) {
    //     for (let j = 0; j < this.imgDatas[i].length; j++) {
    //       if (this.item.id == this.imgDatas[i][j].id && this.imgDatas.length !== 1 && this.imgDatas[i].lenngth !== 1) {
    //         this.imgDatas[i].splice(j, 1)
    //         if (this.imgDatas[i].length == 0 && i !== this.imgDatas.length - 1) {
    //           this.imgDatas.splice(i, 1)
    //           this.item = this.imgDatas[i][0]
    //         }else if (this.imgDatas[i].length == 0 && i == this.imgDatas.length - 1) {
    //           this.imgDatas.splice(i, 1)
    //           this.item = this.imgDatas[i - 1][this.imgDatas[i - 1].length - 1]
    //           break
    //         }else if (j == this.imgDatas[i].length && i !== this.imgDatas.length - 1) {
    //           this.item = this.imgDatas[i + 1][0]
    //           break
    //         }else {
    //           this.item = this.imgDatas[i][j]
    //         }
    //       }else if (this.item.id == this.imgDatas[i][j].id && this.imgDatas.length == 1 && this.imgDatas[i].length == 1) {
    //         this.imgDatas = []
    //         this.imgDatas[i] = ''
    //         this.item = ''
    //       }
    //     }
    //   }
    //   this.$refs.delBox.style.display = 'none'
    // },

    // 点击删除框取消按钮 将删除框隐藏
    delNo () {
      this.$refs.delBox.style.display = 'none'
    },

    // 点击 x 图标 将删除框隐藏
    closeDel () {
      this.$refs.delBox.style.display = 'none'
    },

    // 点击 分享图标 显示分享框
    wantShare () {
      this.$refs.shareBox.style.display = 'block'
    },

    // 点击 分享框取消按钮 隐藏分享框
    shareNo () {
      this.$refs.shareBox.style.display = 'none'
    },

    // 点击分享框 x 图标 隐藏分享框
    closeShare () {
      this.$refs.shareBox.style.display = 'none'
    },

    // 点击分享框确定按钮  将所选文件信息传递给分享页面
    shareYes () {
      bus.$emit('share_info', this.item)
      this.$refs.shareBox.style.display = 'none'
    }
  },
  computed: {
    openImgDatas () {
      let data = this.imgDatas;
      let len = data.length;
      let openDatas = [];
      for (let i = 0; i < len; i++) {
        if (Array.isArray(data[i])) {
          for (let j = 0; j < data[i].length; j++) {
            openDatas.push(data[i][j])
          }
        }else {
          openDatas.push(data[i])
        }
      }
      return openDatas
    },
    thumbImgDatas () {
      let thumbArr = [];
      if (this.openImgDatas.indexOf(this.item) < 5) {
        thumbArr = this.openImgDatas.slice(0,9)
      }else if (this.openImgDatas.length - this.openImgDatas.indexOf(this.item) < 5) {
        thumbArr = this.openImgDatas.slice(this.openImgDatas.length - 9)
      }else {
        thumbArr = this.openImgDatas.slice(this.openImgDatas.indexOf(this.item) - 4, this.openImgDatas.indexOf(this.item) + 5)
      }
      return thumbArr
    }
  },
  mounted () {
    let imgBox = document.getElementsByClassName('largeImg-box')[0];
    let footer = document.getElementsByClassName('largeImg-footer')[0];
    window.onresize = () => {
      imgBox.style.height = window.innerHeight - footer.offsetHeight - 30 + 'px';
    };
    bus.$on('receiveImgDatas',this.receive)
  },
  watch: {
    showLargeImg: {
      handler(val, oval) {
        if (val) {
          let imgBox = document.getElementsByClassName('largeImg-box')[0];
          let footer = document.getElementsByClassName('largeImg-footer')[0];
          imgBox.style.height = window.innerHeight - footer.offsetHeight - 30 + 'px'
        }
      }
    }
  }
}
</script>

<style scoped>
  /* .pull-left {
    float: left;
  }
  .pull-rigth {
    float: right;
  } */
  .largeImg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-color: rgba(0,0,0,.95);
  }
  .largeImg-box {
    position: relative;
    margin-top: 20px;
    width: auto;
    height: 600px;
    text-align: center;
  }
  .largeImg-item {
    width: auto;
    height: 100%;
    text-align: center;
    display: inline-block;
  }
  .close-btn {
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 20px;
    width: 50px;
    height: 50px;
  }
  .close-btn i {
    font-size: 20px;
    color: #fff;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
  }
  .changeImg-btn {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    min-width: 600px;
    height: 100%;
  }
  .img-pre {
    position: absolute;
    left: 0;
    margin-left: 50px;
    width: 200px;
    height: 100%;
    cursor: pointer;
  }
  .img-next {
    position: absolute;
    right: 0;
    margin-right: 50px;
    width: 200px;
    height: 100%;
    cursor: pointer;
  }
  .changeImg-btn .btn {
    position: absolute;
    top: 50%;
    margin-top: -25px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #565656;
    opacity: .5;
    color: #fff;
    line-height: 50px;
    text-align: center;
    font-size: 22px;
    font-weight: 900;
  }
  .changeImg-btn .img-next-btn {
    right: 0;
  }
  .largeImg-footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    min-width: 1200px;
    height: auto;
    min-height: 50px;
    background-color: #000;
    color: #fff;
  }
  .largeImg-footer-fn {
    margin: 0 auto;
    width: 50%;
    height: 100%;
  }
  .footer-fn-left {
    width: 69%;
    height: 100%;
    display: inline-block;
  }
  .footer-fn-left ul {
    width: 100%;
    height: 100%;
  }
  .footer-fn-left ul li {
    width: 32%;
    height: 100%;
    display: inline-block;
    line-height: 50px;
    text-align: center;
  }
  .footer-fn-left ul li i {
    font-size: 24px;
    color: #e4e4e4;
    cursor: pointer;
  }
  .footer-fn-left ul li i:hover {
    color: #fff;
    font-weight: 600;
  }
  .footer-fn-right {
    width: 27%;
    height: 100%;
    display: inline-block;
  }
  .cut-symbol {
    width: 1%;
    height: 100%;
    display: inline-block;
  }
  .thumbnail-box {
    margin: 0 auto;
    width: 50%;
    height: 100%;
    min-width: 100px;
    font-size: 14px;
    font-weight: 200;
    color: #e4e4e4;
    cursor: pointer;
  }
  .thumbnail-box:hover {
    font-weight: 400;
    color: #fff;
  }
  .thumbnail-box span:hover {
    color: #fff;
    font-weight: 600;
  }
  .footer-thumbnail {
    width: 100%;
    height: 0;
    background-color: #000;
    text-align: center;
  }
  .footer-thumbnail ul {
    width: 80%;
    height: 56px;
    display: inline-block;
  }
  .footer-thumbnail ul li {
    margin: 0 5px;
    width: 80px;
    height: 100%;
    display: inline-block;
    cursor: pointer;
  }
  .footer-thumbnail ul li .thumbnail-item {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 7px;
    background-color: #191919;
  }
  .footer-thumbnail ul li .thumbnail-item img {
    height: 100%;
    width: 100%;
    border-radius: 6px;
    opacity: .6;
  }
  .footer-thumbnail ul li .thumbnail-item img:hover {
    opacity: 1;
  }
  .alert-box {
    position: absolute;
    top: 30px;
    left: 50%;
    margin-left: -100px;
    width: 200px;
    height: 50px;
    border-radius: 2px;
    background-color: #ec6361;
    color: #fff;
    text-align: center;
    opacity: 0;
  }
  .alert-box span{
    display: inline-block;
  }
  .alert-box .icon {
    position: absolute;
    left: 30px;
    top: 50%;
    margin-top: -10px;
    width: 18px;
    height: 18px;
    border: 2px solid #fff;
    border-radius: 50%;
    line-height: 20px;
    text-align: center;
    font-size: 16px;
  }
  .alert-box .msg {
    margin-left: 20px;
    line-height: 50px;
    font-size: 14px;
  }
  .img-msg-box {
    position: absolute;
    top: 50%;
    right: 0;
    margin-top: -230px;
    padding: 30px 0 30px 25px;
    width: 280px;
    height: 460px;
    background-color: #222;
    display: none
  }
  .img-msg-box .img-msg-closeBtn {
    position: absolute;
    top: 30px;
    right: 20px;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 20px;
    font-size: 30px;
    color: #7a7a7a;
    display: inline-block;
    cursor: pointer;
  }
  .img-msg-box .img-msg-title {
    height: 30px;
    color: #fff;
    font-size: 16px;
    line-height: 30px;
    display: inline-block;
  }
  .img-msg-box .img-msg-key {
    color: #7a7a7a;
    font-size: 12px;
  }
  .img-msg-box .img-msg-type-value {
    margin-top: 10px;
    padding: 0 3px;
    width: 50px;
    height: 28px;
    background-color: #2f2f2f;
    color: #d4d4d4;
    font-size: 14px;
    text-align: center;
    line-height: 28px;
    border-radius: 20px;
    display: inline-block;
    display: inline-block;
  }
  .img-msg-box .img-msg-value {
    margin-left: 20px;
    color: #fff;
    font-size: 12px;
    display: inline-block;
  }
  .img-msg-box li {
    margin: 35px 0;
  }
  .del-box {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -110px;
    margin-left: -230px;
    width: 460px;
    height: 220px;
    border-radius: 4px;
    background-color: #fff;
    display: none;
  }
  .del-box .del-header {
    width: 100%;
    height: 45px;
    border-bottom: 1px solid #caddfd;
  }
  .del-header p {
    margin-left: 15px;
    line-height: 45px;
    font-size: 14px;
    color: #4f535f;
    font-weight: 300;
  }
  .del-header span {
    position: absolute;
    top: 0;
    right: 10px;
    width: 45px;
    height: 45px;
    font-size: 24px;
    text-align: center;
    line-height: 45px;
    color: #5f7094;
    cursor: pointer;
  }
  .del-box .del-body {
    padding: 30px 0;
    width: 100%;
    height: 40px;
    text-align: center;
    display: inline-block;
    font-size: 12px;
    color: #656565;
  }
  .del-box .del-btn {
    width: 100%;
    height: 35px;
    text-align: center;
    line-height: 35px;
  }
  .del-btn p {
    margin: 0 5px;
    width: 130px;
    height: 32px;
    text-align: center;
    line-height: 32px;
    font-size: 14px;
    border-radius: 5px;
    display: inline-block;
    cursor: pointer;
  }
  .del-btn .del-yes {
    border: 1px solid #3b8cff;
    background-color: #3b8cff;
    color: #fff;
  }
  .del-btn .del-no {
    border: 1px solid #cad4ff;
    color: #5589f7;
  }
  .del-btn .del-yes:hover {
    background-color: #5f97f8;
  }
  .del-btn .del-no:hover {
    color: #7fb1f6;
  }
  .share-box {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -110px;
    margin-left: -230px;
    width: 460px;
    height: 220px;
    border-radius: 4px;
    background-color: #fff;
    display: none;
  }
  .share-box .share-header {
    width: 100%;
    height: 45px;
    border-bottom: 1px solid #caddfd;
  }
  .share-header p {
    margin-left: 15px;
    line-height: 45px;
    font-size: 14px;
    color: #4f535f;
    font-weight: 300;
  }
  .share-header span {
    position: absolute;
    top: 0;
    right: 10px;
    width: 45px;
    height: 45px;
    font-size: 24px;
    text-align: center;
    line-height: 45px;
    color: #5f7094;
    cursor: pointer;
  }
  .share-box .share-body {
    padding: 30px 0;
    width: 100%;
    height: 40px;
    text-align: center;
    display: inline-block;
    font-size: 12px;
    color: #656565;
  }
  .share-box .share-btn {
    width: 100%;
    height: 35px;
    text-align: center;
    line-height: 35px;
  }
  .share-btn p {
    margin: 0 5px;
    width: 130px;
    height: 32px;
    text-align: center;
    line-height: 32px;
    font-size: 14px;
    border-radius: 5px;
    display: inline-block;
    cursor: pointer;
  }
  .share-btn .share-yes {
    border: 1px solid #3b8cff;
    background-color: #3b8cff;
    color: #fff;
  }
  .share-btn .share-no {
    border: 1px solid #cad4ff;
    color: #5589f7;
  }
  .share-btn .share-yes:hover {
    background-color: #5f97f8;
  }
  .share-btn .share-no:hover {
    color: #7fb1f6;
  }
</style>
