<template>
  <div class="leftNav pull-left">
      <ul>
          <li v-for="item in items"
              @click="checkedShow(item)"
              :class="{'item-box-checked' : item.checked}">
            <!-- <router-link :to="{path: item.path}"
                         :class="{'item-checked':item.checked}"> -->
              <i :class="item.className"></i>
              <span>{{item.message}}</span>
            <!-- </router-link> -->
          </li>
      </ul>
    </div>
</template>

<script>
  export default {
    name: 'leftNav',
    props: {
      items: {
        type: Array,
        required: true
      },
      fileDatas: {
        type: Array,
        required:true
      }
    },
    data () {
      return {
        fileData: [
          {
            name: '我的资源',
            size: '-',
            date: '2018-08-27 15:16',
            type: 'folder',
            childFile:[
              {
                name: 'Node',
                size: '-',
                date: '2018-08-27 15:18',
                type: 'folder',
                childFile: []
              },
              {
                name: 'Vue',
                size: '-',
                date: '2018-08-27 15:18',
                type: 'folder',
                childFile: []
              },
              {
                name: '123.jpg',
                size: '-',
                date: '2018-08-27 15:18',
                type: 'image',
                path: ''
              },
            ]
          },
          {
            name: '动漫',
            size: '-',
            date: '2018-08-27 15:16',
            type: 'folder',
            childFile:[
              {
                name: '海贼王',
                size: '-',
                date: '2018-08-27 15:18',
                type: 'folder',
                childFile: [
                  {
                    name: '黄金岛.mp4',
                    size: '-',
                    date: '2018-08-27 15:18',
                    type: 'video',
                    path: ''
                  }
                ]
              },
              {
                name: '秦时明月',
                size: '-',
                date: '2018-08-27 15:18',
                type: 'folder',
                childFile: [
                  {
                    name: '君临天下.mp4',
                    size: '-',
                    date: '2018-08-27 15:18',
                    type: 'video',
                    path: ''
                  }
                ]
              },
              {
                name: '123.jpg',
                size: '-',
                date: '2018-08-27 15:18',
                type: 'image',
                path: ''
              },
            ]
          },
          {
            name: '新建文件夹',
            size: '-',
            date: '2018-08-27 15:30',
            type: 'folder',
            childFile:[
              {
                name: '123.jpg',
                size: '-',
                date: '2018-08-27 15:18',
                type: 'image',
                path: ''
              },
              {
                name: '123.doc',
                size: '-',
                date: '2018-08-27 15:18',
                type: 'doc',
                path: ''
              },
              {
                name: '123',
                size: '-',
                date: '2018-08-27 15:18',
                type: 'BT',
                path: ''
              },
              {
                name: '七月上',
                size: '-',
                date: '2018-08-27 15:18',
                type: 'music',
                path: ''
              },
            ]
          }
        ]
      }
    },
    methods: {
      checkedShow (item) {
        setTimeout(function () {
          let headerHeight = document.getElementsByClassName('driveHeader')[0].scrollHeight;
          let topBarHeight = document.getElementsByClassName('imgTopBar')[0].scrollHeight;
          let imgShow = document.getElementsByClassName('imgCount')[0]
          let sumHeight = headerHeight + topBarHeight;
          imgShow.style.height = window.innerHeight - sumHeight + 'px'
        },17)
        
        for (let i = 0; i < this.fileDatas.length; i++) {
          this.fileDatas[i].checked = false;
        }
        for (let i = 0; i < this.items.length; i++) {
          this.items[i].checked = false;
        }
        item.checked = true;
      }
    }
  }
</script>

<style>
  .pull-left {
    float: left;
  }
  .leftNav {
    width: 179px;
  }
  .leftNav ul {
    height: auto;
    padding-top: 10px;
  }
  .leftNav ul li {
    position: relative;
    padding-left: 15px;
    width: 100%;
    height: 45px;
    cursor: pointer;
    color: #424e67;
    box-sizing: border-box;
  }
  .leftNav ul li:hover {
    background-color: #e4e9ec;
  }
  /* .leftNav ul li a {
    color: #424e67;
  } */
  .leftNav ul li i {
    position: absolute;
    top: 15px;
    left: 25px;
    font-size: 16px;
    /* color: #424e67; */
  }
  .leftNav ul li span {
    padding-left: 38px;
    width: 115px;
    height: 100%;
    line-height: 45px;
    display: inline-block;
  }
  .leftNav ul .item-box-checked {
    background-color: #e4e9ec;
    color: #3b8cff;
  }
  .leftNav ul li .item-checked {
    color: #3b8cff;
  }
</style>
