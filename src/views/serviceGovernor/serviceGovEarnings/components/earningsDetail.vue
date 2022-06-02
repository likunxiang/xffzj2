<template>
  <el-dialog title="详情" :visible.sync="isOpen" width="700px" @close="beforeClose">
    <div class="pb20">
      <el-descriptions :colon="false" class="margin-top" :column="1" border>
        <el-descriptions-item label-class-name="my-label" label="年月">18650767213</el-descriptions-item>
        <el-descriptions-item label-class-name="my-label" label="计酬月份">林都</el-descriptions-item>
        <el-descriptions-item label-class-name="my-label" label="服务对象采购服务收益">18650767213</el-descriptions-item>
        <el-descriptions-item label-class-name="my-label" label="服务对象供应服务收益">2021-09-18</el-descriptions-item>
        <el-descriptions-item label-class-name="my-label" label="个税代扣代缴">2021-09-18</el-descriptions-item>
        <el-descriptions-item label-class-name="my-label" label="实际收益">2021-09-18</el-descriptions-item>
      </el-descriptions>
      <div class="mt20">提示：订单验收通过所在的月份计提这些订单所产生的采购服务费用的劳务分成</div>
      <div class="mb10 mt10" style="width: 100%;display: flex;justify-content: center;">
        <el-button style="width: 100%;" type="primary" @click="withdrawDeposit">提现</el-button>
      </div>
      <div>没有提现账号或者更换提现账号，请点这里完善？</div>
    </div>
    <uploadIdentity v-if="isIdentity" @close="closeIdentity"></uploadIdentity>
    <accountNumber v-if="isAccount" @close="closeAccount"></accountNumber>
    <withdrawalSuccess v-if="isSuccess" @close="closeSuccess"></withdrawalSuccess>
  </el-dialog>
</template>

<script>
  import uploadIdentity from '@/views/serviceGovernor/serviceGovEarnings/components/uploadIdentity'
  import accountNumber from '@/views/serviceGovernor/serviceGovEarnings/components/accountNumber'
  import withdrawalSuccess from '@/views/serviceGovernor/serviceGovEarnings/components/withdrawalSuccess'
  export default {
    name: "index",
    props: {
      row: {
        type: Object,
        default: () => {
          return {}
        }
      }
    },
    components: {
      uploadIdentity,
      accountNumber,
      withdrawalSuccess
    },
    data() {
      return {
        isOpen: true,
        isIdentity: false,
        isAccount: false,
        isSuccess: false,
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
      withdrawDeposit() {
        if (false) {
          this.$confirm('个税缴纳需要，请完善【个人身份信息】', '', {
            confirmButtonText: '完善',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.isIdentity = true
          }).catch(() => {

          });
        } else if (false) {
          this.$confirm('你没有提现账号，请先提供', '', {
            confirmButtonText: '提供账号',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.isAccount = true
          }).catch(() => {

          });
        } else if(false) {
          this.$confirm('未到提现日，不能提现', '', {
            cancelButtonText: '返回',
            type: 'warning'
          }).then(() => {
          }).catch(() => {

          });
        } else {
          // 正常提交
          this.isSuccess = true
        }
      },
      closeIdentity() {
        this.isIdentity = false
      },
      closeAccount() {
        this.isAccount = false
      },
      closeSuccess() {
        this.isSuccess = false
      },
    },
    created() {

    }
  };
</script>

<style lang="scss" scoped>
  .title-bg {
    background-color: #F2F2F2;
    padding: 10px;
  }

  .my-label {
    width: 120px;
    font-weight: bold;
  }
</style>
