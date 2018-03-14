/** * @file * @author jhh678 * @date 2017/7/10 */
<template>
  <div class="sub-page-wrap">
    <h3>组件demo页面</h3>
    <section class="panel panel-default">
      <div class="panel-heading">生成二维码</div>
      <div class="panel-body">
        <b-input v-model="qrcodeText" placeholder="请输入二维码内容">
          <div slot="append" @click="createQRcode">生成二维码</div>
        </b-input>
        <div class="qrcode-img" ref="qrcodeImg">

        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { localStore } from '@/utils'
import QRCode from '@/utils/qrcode'

export default {
  name: 'Demo',
  components: {},
  data() {
    return {
      qrcode: null,
      userInfo: null
    }
  },
  created() {
    this.userInfo = localStore.get('userInfo')
  },
  methods: {
    createQRcode() {
      if (this.qrcodeText) {
        if (!this.qrcode) {
          this.qrcode = new QRCode(this.$refs.qrcodeImg, {
            text: this.qrcodeText,
            width: 128,
            height: 128,
            colorDark: '#000000',
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.H
          })
        } else {
          this.qrcode.makeCode(this.qrcodeText)
        }
      } else {
        this.$message({
          message: '请先输入内容',
          type: 'warning'
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.panel-item {
  padding-bottom: 15px;
}
.qrcode-img {
  height: 130px;
  text-align: center;
}
</style>
