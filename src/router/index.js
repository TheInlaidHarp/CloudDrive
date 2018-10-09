import Vue from 'vue'
import Router from 'vue-router'
import cloudDrive from '@/components/pages/cloudDrive'
import driveCount from '@/components/pages/driveCount'
// import allFile from '@/components/common/allFile'
// import btFile from '@/components/common/btFile'
// import docFile from '@/components/common/docFile'
// import imgFile from '@/components/common/imgFile'
// import musicFile from '@/components/common/musicFile'
// import myShare from '@/components/common/myShare'
// import otherFile from '@/components/common/otherFile'
// import trashFile from '@/components/common/trashFile'
// import videoFile from '@/components/common/videoFile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'driveCount',
      component: driveCount
    }
    // {
    //   path: '/allFile',
    //   name: 'allFile',
    //   commponents: allFile
    // },
    // {
    //   path: '/btFile',
    //   name: 'btFile',
    //   commponents: btFile
    // },
    // {
    //   path: '/docFile',
    //   name: 'docFile',
    //   commponents: docFile
    // },
    // {
    //   path: '/imgFile',
    //   name: 'imgFile',
    //   commponents: imgFile
    // },
    // {
    //   path: '/musicFile',
    //   name: 'musicFile',
    //   commponents: musicFile
    // },
    // {
    //   path: '/myShare',
    //   name: 'myShare',
    //   commponents: myShare
    // },
    // {
    //   path: '/otherFile',
    //   name: 'otherFile',
    //   commponents: otherFile
    // },
    // {
    //   path: '/trashFile',
    //   name: 'trashFile',
    //   commponents: trashFile
    // },
    // {
    //   path: '/videoFile',
    //   name: 'videoFile',
    //   commponents: videoFile
    // }
  ]
})
