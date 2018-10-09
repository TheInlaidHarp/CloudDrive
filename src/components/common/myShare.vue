<template>
  <div class="myShare">
    <div class="no-share"
         v-if="this.items.length == 0">
     <div class="no-share-box">
       <div class="no-share-icon-box">
         <div class="no-share-icon"></div>
       </div>
       <p>您还没有分享过文件/文件夹~</p>
     </div>
    </div>
    <div class="has-share"
         v-else>
     <div class="share-box">
       <p class="share-title">
         已加载1个链接分享
         <span class="font-weak">(分享失败超过1年以上的链接记录将被自动清理)</span>
         <span class="pull-right">已加载 {{this.items.length}} 个</span>
       </p>
       <div class="share-dec-box">
         <div class="share-dec share-dec-file">
           <p class="check-box">
             <i class="icon iconfont icon-ok"></i>
           </p>
           <span>分享文件</span>
         </div>
         <div class="share-dec share-dec-browseTimes">
           <span>浏览次数</span>
         </div>
         <div class="share-dec share-dec-saveTimes">
           <span>保存次数</span>
         </div>
         <div class="share-dec share-dec-downloadTimes">
           <span>下载次数</span>
         </div>
         <div class="share-dec share-dec-shareDate">
           <span>分享时间</span>
         </div>
         <div class="share-dec share-dec-invalidDate">
           <span>失效时间</span>
         </div>
       </div>
       <div class="share-item-box" v-for="item in items">
         <div class="share-item item-file">
           <p class="check-box">
             <i class="icon iconfont icon-ok"></i>
           </p>
           <span :class="['icon', 'iconfont',item.iconStyle ? item.iconStyle : 'icon-tupian1']"></span>
           <span class="item-file-name">{{item.name}}</span>
         </div>
         <div class="share-item item-browseTimes">
           <span>0次</span>
         </div>
         <div class="share-item item-saveTimes">
           <span>0次</span>
         </div>
         <div class="share-item item-downloadTimes">
           <span>0次</span>
         </div>
         <div class="share-item item-shareDate">
           <span>000</span>
         </div>
         <div class="share-item item-invalidDate">
           <span>永久有效</span>
         </div>
       </div>
     </div>
    </div>
  </div>
</template>

<script>
import bus from '@/components/common/bus.js'
export default {
  name: 'myShare',
  data () {
    return {
      items: []
    }
  },
  methods: {
    shareReceive (info) {
      this.items.push(info)
    }
  },
  mounted () {
    bus.$on('share_info', this.shareReceive)
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
.myShare {
  width: 100%;
  height: 100%;
}
.no-share {
  position: relative;
  width: 100%;
  height: 100%;
}
.no-share .no-share-box {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -110px;
  margin-left: -230px;
  width: 460px;
  height: 220px;
}
.no-share-box .no-share-icon-box {
  width: 100%;
  height: 150px;
}
.no-share-icon-box .no-share-icon {
  margin: 0 auto;
  width: 190px;
  height: 150px;
  background-image: url(https://ws2.sinaimg.cn/large/006tNbRwly1fv1kw0vqc1j305803l3yq.jpg)
}
.no-share-box p {
  margin: 30px 0;
  font-size: 16px;
  color: #424e67;
  text-align: center;
}
.has-share {
  width: 100%;
  height: 100%;
}
.share-box {

}
.share-box .share-title {
  padding: 0 15px;
  margin-top: 15px;
  margin-bottom: 5px;
  width: auto;
  height: 20px;
  font-size: 12px;
  color: #424e67;
  line-height: 20px;
}
.share-box span{
  display: inline-block;
}
.share-box .font-weak {
  color: #8e99b3;
}
.share-dec-box {
  width: 100%;
  height: 36px;
}
.share-dec-box .share-dec {
  position: relative;
  padding-left: 10px;
  height: 100%;
  display: inline-block;
  font-size: 12px;
  color: #888;
  line-height: 36px;
  cursor: pointer;
  box-sizing: border-box;
}
.share-dec-box .share-dec:hover {
  background-color: #f6faff;
}
.share-dec-box .share-dec .check-box {
  position: absolute;
  top: 10px;
  left: 15px;
  margin: 0;
  width: 12px;
  height: 12px;
  border: 1px solid #c9c9c9;
  display: inline-block;
  cursor: pointer;
}
.share-dec-box .share-dec .check-box i {
  position: absolute;
  top: -13px;
  color: #3b8cff;
  font-size: 12px;
  font-weight: 900;
  /* display: none; */
}
.share-dec-box .share-dec-file {
  width: 38%;
}
.share-dec-box .share-dec-browseTimes {
  width: 10%;
}
.share-dec-box .share-dec-saveTimes {
  width: 10%;
}
.share-dec-box .share-dec-downloadTimes {
  width: 10%;
}
.share-dec-box .share-dec-shareDate {
  width: 20%;
}
.share-dec-box .share-dec-invalidDate {
  width: 9%;
}
.share-dec-box .share-dec-file span{
  margin-left: 25px;
  display: inline-block;
}
.share-item-box {
  margin-top: -1px;
  width: 100%;
  height: 44px;
  border-top: 1px solid #f2f6fd;
  border-bottom: 1px solid #f2f6fd;
}
.share-item-box .share-item {
  padding-left: 10px;
  display: inline-block;
  font-size: 12px;
  line-height: 44px;
  box-sizing: border-box;
}
.share-item-box .item-file {
  position: relative;
  width: 38%;
}
.share-item-box .item-file span {
  position: absolute;
  top: -25px;
  left: 40px;
  font-size: 20px;
  color: #ff5400;
}
.share-item-box .item-file .item-file-name {
  margin-left: 30px;
  font-size: 12px;
  color: #000;
}
.share-item-box .item-browseTimes {
  width: 10%;
}
.share-item-box .item-saveTimes {
  width: 10%;
}
.share-item-box .item-downloadTimes {
  width: 10%;
}
.share-item-box .item-shareDate {
  width: 20%;
}
.share-item-box .item-invalidDate {
  width: 9%;
}
.share-item-box .share-item .check-box {
  position: absolute;
  top: -10px;
  left: 15px;
  margin: 0;
  width: 12px;
  height: 12px;
  border: 1px solid #c9c9c9;
  display: inline-block;
  cursor: pointer;
}
.share-item-box .share-item .check-box i {
  position: absolute;
  top: -17px;
  color: #3b8cff;
  font-size: 12px;
  font-weight: 900;
  /* display: none; */
}
</style>
