<template>
  <div class="imgCount" ref="imgShow">
    <div class="img-box"
         v-for="items in imgDateGroup()">
      <div class="img-title">
        <span class="chooseAll-box icon iconfont icon-ok" isChecked="false"
              @click="isAllChecked($event, items)">
        </span>
        <span>{{items[0].date.split(' ')[0].split('-')[0]}}年</span>
        <span>{{items[0].date.split(' ')[0].split('-')[1]}}月</span>
        <span>{{items[0].date.split(' ')[0].split('-')[2]}}日</span>
        <p class="open-status">收起</p>
      </div>
      <div class="img-show-box">
        <ul>
          <li v-for="item in items">
            <div class="every-img-box"
                 :style="`background-image:url(${item.src})`"
                 @mouseenter="moveover"
                 @mouseleave="moveout($event,item,items)"
                 @click="largeImg(item,items,imgDateGroup())">
              <div class="check-area"
                   :style="{display: checkShow}">
                <p class="icon iconfont icon-ok"
                   @click="imgChecked($event,item,items,imgDateGroup())">
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import bus from '@/components/common/bus.js'
export default {
  components: {
  },
  props: {
    fileActDatas: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      checkShow: ''
    }
  },
  methods: {
    filterDate() {
      let arr = [];

      return arr = Array.from(new Set(this.sliceImgDate()))
    },
    sliceImgDate() {
      let arr = [];
      let str = '';
      let len = this.fileActDatas.length;

      for (let i = 0; i < len; i++) {
        str = this.fileActDatas[i].date.split(' ')[0]
        arr.push(str)
      }
      return arr;
    },
    imgDateGroup() {

      // 将相同时间的数据放到同一个数组中
      let allArr = [];
      let arr = [];
      let flen = this.filterDate().length;
      let falen = this.fileActDatas.length;

      for (let i = 0; i < flen; i++) {
        for (let j = 0; j < falen; j++) {
          if (this.sliceImgDate()[j] == this.filterDate()[i]) {
            arr.push(this.fileActDatas[j])
          }
        }
        allArr.push(arr);
        arr = []
      }

      // 从数组中提取时间，并将相同时间过滤，然后按照指定格式将时间放到一个数组中
      let sortAllarr = [];
      let numArr = [];
      let splitArr = [];
      let alen = allArr.length;
      for (let i = 0; i < alen; i++) {
        splitArr.push(allArr[i][0])
      }
      for (var i = 0; i < splitArr.length; i++) {
        numArr.push(parseFloat(splitArr[i].date.split(' ')[0].split('-').join('')))
      }


      //  将数组中的时间按照先后顺序进行排序
      let numstr;
      for (let i = 0; i < flen; i++) {
          numstr = numArr[0]
          for (let j = 0; j < numArr.length; j++) {

            if (numstr < numArr[j] || numArr.length == 1) {
              numstr = numArr[j]
            }else {
              if (numstr < numArr[j]) {
                numstr = numArr[j];
              }
            }
          }
          sortAllarr.push(allArr[numArr.indexOf(numstr)]);
          allArr.splice(numArr.indexOf(numstr),1)
          numArr.splice(numArr.indexOf(numstr),1);
      }
      //  将排序好的时间 return 出来
      return sortAllarr

    },
    imgUpdataHeight() {
      let headerHeight = document.getElementsByClassName('driveHeader')[0].scrollHeight;
      let topBarHeight = document.getElementsByClassName('imgTopBar')[0].scrollHeight;
      let sumHeight = headerHeight + topBarHeight;

      return sumHeight;
    },
    moveover($event) {
      $event.target.childNodes[0].style.display = 'inline-block'
    },
    moveout($event,item) {
      if (!item.checked) {

        $event.target.childNodes[0].style.display = 'none'
      }
    },
    imgChecked($event,item,items,datas) {

      let allCheckOkEl = $event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.firstChild.firstChild;

      if (!item.checked) {
        item.checked = true
        $event.target.style.backgroundColor = '#3b8cff',
        $event.target.style.color = "#fff";
        for (let i = 0; i < items.length; i++) {
          if (!items[i].checked) {
            return allCheckOkEl.style.color = '#fff'
          }else {
            allCheckOkEl.style.color = '#3b8cff'
          }
        }
      }else {
        item.checked = false
        $event.target.style.backgroundColor = '#fff';
        $event.target.style.color = "#494f5d";
        allCheckOkEl.style.color = '#fff'
      }
      event.stopPropagation()
    },
    isAllChecked($event,items) {
      let targetEl = $event.target
      let itemImgEls = $event.target.parentNode.parentNode.lastChild.firstChild.childNodes
      let itemsLen = items.length

      if (targetEl.getAttribute('isChecked') == 'false') {
        targetEl.setAttribute('isChecked','true')
        targetEl.style.color = '#3b8cff'
        for (let i = 0; i < itemsLen; i++) {
          items[i].checked = true;
          itemImgEls[i].firstChild.firstChild.style.display = 'inline-block';
          itemImgEls[i].firstChild.firstChild.firstChild.style.backgroundColor = '#3b8cff';
          itemImgEls[i].firstChild.firstChild.firstChild.style.color = '#fff'
        }
      }else {
        targetEl.setAttribute('isChecked','false');
        targetEl.style.color = '#fff';
        for (let i = 0; i < itemsLen; i++) {
          items[i].checked = false;
          itemImgEls[i].firstChild.firstChild.style.display = 'none';
          itemImgEls[i].firstChild.firstChild.firstChild.style.backgroundColor = '#fff';
          itemImgEls[i].firstChild.firstChild.firstChild.style.color = '#ababab'
        }
      }
    },
    largeImg(item,items,data) {
      if (!item.checked) {
        bus.$emit('largeImgShowSta',true);
        bus.$emit('receiveImgDatas',[item,items,data])
      }
    }
  },
  mounted() {

    window.onresize = () => {

      let imgShow = this.$refs.imgShow;

      imgShow.style.height = window.innerHeight - this.imgUpdataHeight() + 'px'
    }
  }
}
</script>

<style>
 .imgCount {
   width: 100%;
   height: auto;
   overflow-y: scroll;
 }
 .img-box {
   width: 100%;
   height: auto;
 }
 .img-title {
   width: 100%;
   height: 40px;
 }
 .img-title .chooseAll-box {
   position: relative;
   margin: 0 10px 0 20px;
   top: 10px;
   width: 13px;
   height: 13px;
   border: 1px solid #c9c9c9;
   font-size: 12px;
   font-weight: 900;
   color: #fff;
   text-align: center;
   line-height: 10px;
   border-radius: 2px;
   display: inline-block;
   cursor: pointer;
 }
 .img-title span {
   position: relative;
   top: 11px;
   font-size: 12px;
   color: #4e5971;
   display: inline-block;
   cursor: default;
 }
 .open-status {
   position: relative;
   top: 10px;
   margin-left: 10px;
   width: 40px;
   height: 20px;
   border: 1px solid #dbdbdb;
   border-radius: 11px;
   font-size: 12px;
   color: #4e5971;
   text-align: center;
   line-height: 20px;
   display: inline-block;
   cursor: pointer;
 }
 .img-show-box {
   width: 100%;
   height: auto;
 }
 .img-show-box ul {
   height: 100%;
   padding-left: 20px;
   width: 90%;
 }
 .img-show-box ul li {
   margin-right: 5px;
   margin-bottom: 5px;
   width: 156px;
   height: 156px;
   display: inline-block;
   cursor: pointer;
 }
 .every-img-box {
   position: relative;
   width: 100%;
   height: 100%;
   background-position: center;
   background-size: cover;
 }
 .check-area {
   position: absolute;
   width: 100%;
   height: 50px;
   background: #000;
   background: -webkit-linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,0));
   display: none
 }
 .check-area p {
   position: relative;
   top: 10px;
   left: 10px;
   width: 20px;
   height: 20px;
   text-align: center;
   background-color: #fff;
   border-radius: 50%;
   color: #ababab;
 }
 .active {
   display: block;
 }
</style>
