<template>
  <div>
    <pan-thumb :image="image" />

    <el-button type="primary" icon="upload" style="position: absolute;margin-left: 40px;" @click="imagecropperShow=true">
      Change Avatar
    </el-button>

    <image-cropper
      v-show="imagecropperShow"
      :key="imagecropperKey"
      :width="50"
      :height="50"
      url="http://123.206.55.50:11000/upload"
      lang-type="en"
      @close="close"
      @crop-upload-success="cropSuccess"
    />
  </div>
</template>

<script>
import ImageCropper from '@/components/ImageCropper'
import PanThumb from '@/components/PanThumb'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    ImageCropper,
    PanThumb
  },
  data() {
    return {
      imagecropperShow: false,
      imagecropperKey: 0,
      image: 'https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191',
      userId: '',
      userName: '',
      userPwd: '',
      identityId: '',
      avatarImg: ''
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo
    })
  },
  created() {
    this.getInfo()
    this.userId = this.userInfo.user_id
  },
  methods: {
    ...mapActions({
      set_user: 'user/set_user',
      getInfo: 'user/getInfo'
    }),
    cropSuccess(e) {
      this.image = e[0].path
      this.imagecropperShow = false
      this.set_user({ user_id: this.userId })
    },
    close() {
      this.imagecropperShow = false
    }
  }
}
</script>
