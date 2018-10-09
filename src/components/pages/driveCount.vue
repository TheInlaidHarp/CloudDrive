<template>
  <div class="driveCount">
    <div class="leftNav-box pull-left">
      <leftNav v-bind:items="this.items"
               v-bind:fileDatas="this.fileDatas">
      </leftNav>
    </div>
    <div class="rightBody-box pull-left">
      <allFile :fileActDatas="fileDatas"
               v-if="this.items[0].checked">
      </allFile>

      <imgFile v-show="this.items[1].checked"
               :showLargeImg="showLargeImg"
               :fileActDatas="this.fileActDatas(fileDatas,[],{},'图片')">
      </imgFile>

      <docFile v-if="this.items[2].checked"
               :fileActDatas="this.fileActDatas(fileDatas,[],{},'文档')">
      </docFile>

      <videoFile v-if="this.items[3].checked"
                 :fileActDatas="this.fileActDatas(fileDatas,[],{},'视频')">
      </videoFile>

      <btFile v-if="this.items[4].checked"
              :fileActDatas="this.fileActDatas(fileDatas,[],{},'种子')">
      </btFile>

      <musicFile v-if="this.items[5].checked"
                 :fileActDatas="this.fileActDatas(fileDatas,[],{},'音乐')">
      </musicFile>

      <otherFile v-if="this.items[6].checked"
                 :fileActDatas="this.otherFileDatas(fileDatas,[],{})">
      </otherFile>

      <myShare v-show="this.items[7].checked">
      </myShare>

      <!-- <trashFile v-if="this.items[8].checked"
                 v-bind:fileDate="this.fileData">
      </trashFile> -->
    </div>
  </div>
</template>

<script>
  import leftNav from '@/components/common/leftNav'
  import allFile from '@/components/common/allFile'
  import btFile from '@/components/common/btFile'
  import docFile from '@/components/common/docFile'
  import imgFile from '@/components/common/imgFile'
  import musicFile from '@/components/common/musicFile'
  import myShare from '@/components/common/myShare'
  import otherFile from '@/components/common/otherFile'
  // import trashFile from '@/components/common/trashFile'
  import videoFile from '@/components/common/videoFile'
  import bus from '@/components/common/bus.js'
  export default {
    name: 'driveCount',
    components: {
      leftNav,
      allFile,
      btFile,
      docFile,
      imgFile,
      musicFile,
      myShare,
      otherFile,
      // trashFile,
      videoFile
    },
    props: {
      showLargeImg: {}
    },
    data () {
      return {
        items: [
          {message: '全部文件', path: '/allFile', className: 'icon iconfont icon-quanbuwenjian', checked: true},
          {message: '图片', path: '/imgFile', checked: false},
          {message: '文档', path: '/docFile', checked: false},
          {message: '视频', path: '/videoFile', checked: false},
          {message: '种子', path: '/btFile', checked: false},
          {message: '音乐', path: '/musicFile', checked: false},
          {message: '其他', path: '/otherFile', checked: false},
          {message: '我的分享', path: '/myShare', className: 'icon iconfont icon-08', checked: false},
          {message: '回收站', path: '/trashFile', className: 'icon iconfont icon-trash', checked: false},
        ],
        fileDatas: [
          {
            name: '我的资源',
            size: '-',
            date: '2018-08-27 15:16',
            type: '文件夹',
            iconStyle: 'icon-wenjianjia',
            checked: false,
            src: '',
            childFile: [],
            active: true
          },
          {
            name: '我的资源',
            size: '-',
            date: '2018-08-27 15:16',
            type: '文件夹',
            iconStyle: 'icon-wenjianjia',
            checked: false,
            src: '',
            childFile: [],
            active: true
          },
          {
            name: '我的资源',
            size: '-',
            date: '2018-08-27 15:16',
            type: '文件夹',
            iconStyle: 'icon-wenjianjia',
            checked: false,
            src: '',
            childFile: [],
            active: true
          },
          {
            name: '我的资源',
            size: '-',
            date: '2018-08-27 15:16',
            type: '文件夹',
            iconStyle: 'icon-wenjianjia',
            checked: false,
            src: '',
            childFile: [],
            active: true
          },
          {
            name: '我的资源',
            size: '-',
            date: '2018-08-27 15:16',
            type: '文件夹',
            iconStyle: 'icon-wenjianjia',
            checked: false,
            src: '',
            childFile: [],
            active: true
          },
          {
            name: '我的资源',
            size: '-',
            date: '2018-08-27 15:16',
            type: '文件夹',
            iconStyle: 'icon-wenjianjia',
            checked: false,
            src: '',
            childFile: [],
            active: true
          },
          {
            name: '我的资源',
            size: '-',
            date: '2018-08-27 15:16',
            type: '文件夹',
            iconStyle: 'icon-wenjianjia',
            checked: false,
            src: '',
            childFile: [],
            active: true
          },
          {
            name: '我的资源',
            size: '-',
            date: '2018-08-27 15:16',
            type: '文件夹',
            iconStyle: 'icon-wenjianjia',
            checked: false,
            src: '',
            childFile: [],
            active: true
          },
          {
            name: '我的资源',
            size: '-',
            date: '2018-08-27 15:16',
            type: '文件夹',
            iconStyle: 'icon-wenjianjia',
            checked: false,
            src: '',
            childFile: [],
            active: true
          },
          {
            name: '我的资源',
            size: '-',
            date: '2018-08-27 15:16',
            type: '文件夹',
            iconStyle: 'icon-wenjianjia',
            checked: false,
            src: '',
            childFile: [],
            active: true
          },
          {
            name: '我的资源',
            size: '-',
            date: '2018-08-27 15:16',
            type: '文件夹',
            iconStyle: 'icon-wenjianjia',
            checked: false,
            src: '',
            childFile: [],
            active: true
          },
          {
            name: '我的资源',
            size: '-',
            date: '2018-08-27 15:16',
            type: '文件夹',
            iconStyle: 'icon-wenjianjia',
            checked: false,
            src: '',
            childFile: [],
            active: true
          },
          {
            name: '我的资源',
            size: '-',
            date: '2018-08-27 15:16',
            type: '文件夹',
            iconStyle: 'icon-wenjianjia',
            checked: false,
            src: '',
            childFile: [],
            active: true
          },
          {
            name: '我的资源',
            size: '-',
            date: '2018-08-27 15:16',
            type: '文件夹',
            iconStyle: 'icon-wenjianjia',
            checked: false,
            src: '',
            childFile: [],
            active: true
          },
          {
            name: '我的资源',
            size: '-',
            date: '2018-08-27 15:16',
            type: '文件夹',
            iconStyle: 'icon-wenjianjia',
            checked: false,
            src: '',
            childFile: [],
            active: true
          },
          {
            name: '我的资源',
            size: '-',
            date: '2018-08-27 15:16',
            type: '文件夹',
            iconStyle: 'icon-wenjianjia',
            checked: false,
            src: '',
            childFile: [],
            active: true
          },
          {
            name: '我的资源',
            size: '-',
            date: '2018-08-27 15:16',
            type: '文件夹',
            iconStyle: 'icon-wenjianjia',
            checked: false,
            src: '',
            childFile: [],
            active: true
          },
          {
            name: '我的资源',
            size: '-',
            date: '2018-08-27 15:16',
            type: '文件夹',
            iconStyle: 'icon-wenjianjia',
            checked: false,
            src: '',
            childFile: [],
            active: true
          },
          {
            name: '我的资源',
            size: '-',
            date: '2018-08-27 15:16',
            type: '文件夹',
            iconStyle: 'icon-wenjianjia',
            checked: false,
            src: '',
            childFile: [],
            active: true
          },
          {
            name: '我的资源',
            size: '-',
            date: '2018-08-27 15:16',
            type: '文件夹',
            iconStyle: 'icon-wenjianjia',
            checked: false,
            src: '',
            childFile: [],
            active: true
          },
          {
            name: '我的资源',
            size: '-',
            date: '2018-08-27 15:16',
            type: '文件夹',
            iconStyle: 'icon-wenjianjia',
            checked: false,
            src: '',
            childFile: [],
            active: true
          },
          {
            name: '我的资源',
            size: '-',
            date: '2018-08-27 15:16',
            type: '文件夹',
            iconStyle: 'icon-wenjianjia',
            checked: false,
            src: '',
            childFile:[
              {
                name: 'Node',
                size: '-',
                date: '2018-08-27 15:18',
                type: '文件夹',
                iconStyle: 'icon-wenjianjia',
                checked: false,
                src: '',
                childFile: [],
                active: true
              },
              {
                name: 'Vue',
                size: '-',
                date: '2018-08-27 15:18',
                type: '文件夹',
                iconStyle: 'icon-wenjianjia',
                checked: false,
                src: '',
                childFile: [],
                active: true
              },
              {
                name: '456.jpg',
                size: '-',
                date: '2018-08-24 15:18',
                id: 1,
                type: '图片',
                checked: false,
                src: 'http://pic23.photophoto.cn/20120503/0034034456597026_b.jpg',
                childFile: [],
                active: true
              },
              {
                name: '456.jpg',
                size: '-',
                date: '2018-08-24 15:18',
                id: 2,
                type: '图片',
                checked: false,
                src: 'http://img4.imgtn.bdimg.com/it/u=344937781,3308213955&fm=27&gp=0.jpg',
                childFile: [],
                active: true
              },
              {
                name: '456.jpg',
                size: '-',
                date: '2018-08-24 15:18',
                id: 4,
                type: '图片',
                checked: false,
                src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536019715685&di=410964e2b31e5b0f1ffc3de38ce0852f&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F34fae6cd7b899e51fab3e9c048a7d933c8950d21.jpg',
                childFile: [],
                active: true
              },
              {
                name: '456.jpg',
                size: '-',
                date: '2018-08-24 15:18',
                id: 5,
                type: '图片',
                checked: false,
                src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536019715682&di=4a12820ed93844ecf53ec339e2d03163&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D356c0ad0c9fdfc03f175ebfbbc56ede1%2F9345d688d43f87945952b400d81b0ef41bd53a6b.jpg',
                childFile: [],
                active: true
              },
              {
                name: '456.jpg',
                size: '-',
                date: '2018-08-24 15:18',
                id: 6,
                type: '图片',
                checked: false,
                src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536019715680&di=1a53a8f730dadcc6165dbbe47f0054ec&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3De4c50805b6315c60579863ace5d8a166%2F35a85edf8db1cb134d6f9803d754564e92584b9f.jpg',
                childFile: [],
                active: true
              },
              {
                name: '456.jpg',
                size: '-',
                date: '2018-08-24 15:18',
                id: 8,
                type: '图片',
                checked: false,
                src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536019715676&di=6ddea920dd1cd592c294ae3e29f957a1&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F13%2F71%2F35%2F24k58PICSiB_1024.jpg',
                childFile: [],
                active: true
              },
              {
                name: '456.jpg',
                size: '-',
                date: '2018-08-24 15:18',
                id: 9,
                type: '图片',
                checked: false,
                src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536019715675&di=ab4b8214ca5b2c6e2fef1756e3ea649a&imgtype=0&src=http%3A%2F%2Ffile06.16sucai.com%2F2016%2F0518%2F8afcf55356494abfda0537fd5ccf8696.jpg',
                childFile: [],
                active: true
              },
              {
                name: '888.jpg',
                size: '-',
                date: '2018-08-31 15:18',
                id: 11,
                type: '图片',
                checked: false,
                src: 'http://img4.imgtn.bdimg.com/it/u=3217049559,2882637059&fm=26&gp=0.jpg',
                childFile: [],
                active: true
              },
              {
                name: '456.doc',
                size: '-',
                date: '2018-08-27 15:18',
                type: '文档',
                iconStyle: 'icon-wendang1',
                checked: false,
                src: '',
                childFile: [],
                active: true
              }
            ],
            active: true
          },
          {
            name: '动漫',
            size: '-',
            date: '2018-08-27 15:16',
            type: '文件夹',
            iconStyle: 'icon-wenjianjia',
            checked: false,
            src: '',
            active: true,
            childFile:[
              {
                name: '海贼王',
                size: '-',
                date: '2018-08-27 15:18',
                type: '文件夹',
                iconStyle: 'icon-wenjianjia',
                checked: false,
                src: '',
                active: true,
                childFile: [
                  {
                    name: '黄金岛.mp4',
                    size: '-',
                    date: '2018-08-27 15:18',
                    type: '视频',
                    iconStyle: 'icon-shipin1',
                    checked: false,
                    src: '',
                    active: true,
                    childFile: []
                  }
                ]
              },
              {
                name: '秦时明月',
                size: '-',
                date: '2018-08-27 15:18',
                type: '文件夹',
                iconStyle: 'icon-wenjianjia',
                checked: false,
                src: '',
                active: true,
                childFile: [
                  {
                    name: '君临天下.mp4',
                    size: '-',
                    date: '2018-08-27 15:18',
                    type: '视频',
                    checked: false,
                    iconStyle: 'icon-shipin1',
                    src: '',
                    active: true,
                    childFile: []
                  }
                ]
              },
              {
                name: '123.jpg',
                size: '-',
                date: '2018-08-27 15:18',
                id: 12,
                type: '图片',
                checked: false,
                src: 'http://img4.imgtn.bdimg.com/it/u=2944094007,2505799703&fm=27&gp=0.jpg',
                active: true,
                childFile: []
              },
              {
                name: '123.jpg',
                size: '-',
                date: '2018-08-13 15:18',
                id: 13,
                type: '图片',
                checked: false,
                src: 'http://pic34.photophoto.cn/20150112/0034034439579927_b.jpg',
                active: true,
                childFile: []
              },
              {
                name: '123.jpg',
                size: '-',
                date: '2018-08-27 15:18',
                id: 14,
                type: '图片',
                checked: false,
                active: true,
                src: 'http://pic5.photophoto.cn/20071228/0034034901778224_b.jpg',
                childFile: []
              },
            ]
          },
          {
            name: '新建文件夹',
            size: '-',
            date: '2018-08-27 15:30',
            type: '文件夹',
            iconStyle: 'icon-wenjianjia',
            checked: false,
            active: true,
            src: '',
            childFile:[
              {
                name: '123.jpg',
                size: '-',
                date: '2018-08-29 15:18',
                id: 15,
                type: '图片',
                checked: false,
                active: true,
                src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1507520852,1308238003&fm=26&gp=0.jpg',
                childFile: []
              },
              {
                name: '123.jpg',
                size: '-',
                date: '2018-08-29 15:18',
                id: 16,
                type: '图片',
                checked: false,
                active: true,
                src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3837535196,98900889&fm=200&gp=0.jpg',
                childFile: []
              },
              {
                name: '123.jpg',
                size: '-',
                date: '2018-08-29 15:18',
                id: 17,
                type: '图片',
                checked: false,
                active: true,
                src: 'http://img2.imgtn.bdimg.com/it/u=491423391,3643503125&fm=26&gp=0.jpg',
                childFile: []
              },
              {
                name: '123.jpg',
                size: '-',
                date: '2018-08-29 15:18',
                id: 18,
                type: '图片',
                checked: false,
                active: true,
                src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=916637560,4147286396&fm=26&gp=0.jpg',
                childFile: []
              },
              {
                name: 'helloworld.url',
                size: '-',
                date: '2018-08-27 15:18',
                type: '链接',
                iconStyle: 'icon-lianjie',
                checked: false,
                active: true,
                src: '',
                childFile: []
              },
              {
                name: 'vueCli',
                size: '-',
                date: '2018-08-27 15:18',
                type: 'Vue',
                checked: false,
                active: true,
                iconStyle: 'icon-qitawenjian_xp',
                src: '',
                childFile: []
              },
              {
                name: 'Android.apk',
                size: '-',
                date: '2018-08-27 15:18',
                type: '安卓',
                checked: false,
                active: true,
                iconStyle: 'icon-apk',
                src: '',
                childFile: []
              },
              {
                name: 'harp.zip',
                size: '-',
                date: '2018-08-27 15:18',
                type: '压缩包',
                checked: false,
                active: true,
                iconStyle: 'icon-zip1',
                src: '',
                childFile: []
              },
              {
                name: '123.doc',
                size: '-',
                date: '2018-08-27 15:18',
                type: '文档',
                iconStyle: 'icon-wendang1',
                checked: false,
                active: true,
                src: '',
                childFile: []
              },
              {
                name: '123',
                size: '-',
                date: '2018-08-27 15:18',
                type: '种子',
                iconStyle: 'icon-btzhongzi1',
                checked: false,
                active: true,
                src: '',
                childFile: []
              },
              {
                name: '七月上',
                size: '-',
                date: '2018-08-27 15:18',
                type: '音乐',
                iconStyle: 'icon-yinyueclick',
                checked: false,
                active: true,
                src: '',
                childFile: []
              }
            ]
          }
        ]
      }
    },
    methods: {
      fileActDatas (data,arr,json,fileType) {
        for (var i in data) {
          if (data[i].childFile.length == 0) {
            if (data[i].type == fileType){
              json = data[i]
              arr.push(json)
            }else {
              continue;
            }
          }else {
            this.fileActDatas(data[i].childFile,arr,json, fileType)
          }
        }
        return arr
      },
      otherFileDatas(data,arr,json) {
        for (var i in data) {
          if (data[i].childFile.length == 0) {
            if (data[i].type !== '文件夹' && data[i].type !== '文档' && data[i].type !== '视频' && data[i].type !== '音乐' && data[i].type !== '种子' && data[i].type !== '图片'){
              json = data[i]
              arr.push(json)
            }else {
              continue;
            }
          }else {
            this.otherFileDatas(data[i].childFile,arr,json)
          }
        }
        return arr
      }
    }
  }
</script>

<style>
  .driveCount {
    position: relative;
    width: auto;
    height: 100%;
    /* overflow: hidden; */
  }
  .rightBody-box {
    position: absolute;
    height: auto;
    min-width: 1100px;
    min-height: 600px;
    top: 0;
    left: 179px;
    bottom: 0;
    right: 10px;
    border-top: 1px solid #d8dfea;
    border-left: 1px solid #d8dfea;
    border-right: 1px solid #d8dfea;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-color: #fff;
    /* overflow: hidden; */
  }
</style>
