<template>
  <el-dialog title="提现账号设置" :visible.sync="isOpen" width="700px" @close="beforeClose" append-to-body>
    <div v-if="step == '1'">
      <div class="title-bg mb10">提现账号设置</div>
      <div class="flex flex-center mb10">
        <div class="my-label">提现方式</div>
        <div>支付宝</div>
      </div>
      <div class="flex flex-center mb10">
        <div class="my-label">国家/区号</div>
        <div>中国大陆（+86）</div>
      </div>
      <div class="flex flex-center mb10">
        <div class="my-label">手机号码</div>
        <el-input v-model="phone" placeholder="请输入该提现方式的绑定手机号码"></el-input>
      </div>
    </div>
    <div v-if="step == '2'">
      <div class="title-bg mb10">提现账号验证确认</div>
      <div class="flex flex-center mb10">
        <div class="my-label">提现方式</div>
        <div>支付宝</div>
      </div>
      <div class="flex flex-center mb10">
        <div class="my-label">中国大陆（+86）</div>
        <div>{{phone}}</div>
      </div>
      <div class="flex flex-center mb10">
        <el-input style="width: 300px;margin-right: 20px;" v-model="code" placeholder="请输入该手机号收到的验证码"></el-input>
        <el-button type="button" class="yan" :disabled="disabled" @click="getMyCode()" >{{codeText}}</el-button>

      </div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="nextStep" v-if="step =='1'" :disabled="!phone">下一步</el-button>
      <el-button type="primary" @click="submit" v-if="step =='2'">保存</el-button>
    </span>
  </el-dialog>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        isOpen: true,
        phone: '',
        disabled: false,
        codeText: "获取验证码",
        code: '',
        step: '1'
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
      nextStep() {
        this.step = '2'
      },
      submit() {
        this.close()
      },
      //获取验证码
      getMyCode() {
        if (this.phone == "") {
          this.$message.error("手机号不得为空");
        } else {
          let maxNum = 45;
          let oldCodeText = this.codeText;
          this.codeText = `${maxNum}s重新发送`; //初始显示倒计时
          this.disabled = true;
          let codeCountDown = setInterval(() => {

            let countDownNum = maxNum--;
            this.codeText = `${countDownNum}s重新发送`;
            if (countDownNum == 0) {
              //倒计时结束
              this.codeText = oldCodeText;
              clearInterval(codeCountDown);
              this.disabled = false;
            }
          }, 1000);
        }
      }
    },
    created() {

    }
  };
</script>

<style lang="scss" scoped>
  .my-label {
    width: 120px;
  }
</style>
