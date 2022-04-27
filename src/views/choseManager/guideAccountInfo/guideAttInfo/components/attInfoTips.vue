<template>
  <el-dialog title="" :visible.sync="isOpen" width="700px" @close="beforeClose" :append-to-body="true">
    <div class="p20">
      <el-row class="flex flex-center mb10">
        <div class="my-label">姓名</div>
        <div>林都</div>
      </el-row>
      <el-row class="flex flex-center mb10">
        <div class="my-label">国家/地区</div>
        <div>中国大陆（+86）</div>
      </el-row>
      <el-row class="flex flex-center mb10">
        <div class="my-label">联系电话</div>
        <div>18650767213</div>
      </el-row>
      <el-row class="flex flex-center mb10">
        <div class="my-label">登录账号名称</div>
        <div>ydzy01</div>
      </el-row>
      <el-row class="flex flex-center mb10">
        <div class="my-label">登录密码</div>
        <div>123456</div>
      </el-row>
      <el-row class="flex flex-center mb10">
        <div>不要忘记电话通知这个引导专员，登录</div>
      </el-row>
    </div>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="close">知道了</el-button>
    </div>
  </el-dialog>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        isOpen: true,
      };
    },
    methods: {
      close() {
        this.isOpen = false
        this.$emit('close')
      },
      beforeClose() {
        this.close()
      },
    },
    created() {

    }
  };
</script>

<style lang="scss" scoped>
  .p20 {
    padding: 20px;
  }
  .my-label {
    width: 120px;
  }
</style>
