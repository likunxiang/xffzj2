<template>
  <el-dialog title="查看付款证明" :visible.sync="isOpen" width="700px" @close="beforeClose" append-to-body>
    <el-row style="padding-bottom: 40px;">
      <div class="title-bg mb10">账号信息</div>
      <el-form :model="ruleForm" ref="ruleForm" label-width="80px" label-position="top">
        <el-form-item label="提交日期" prop="imgUrl">
          <span>2021-09-18</span>
        </el-form-item>
        <el-form-item label="付款证明" prop="imgUrl">
          <el-image style="width: 100px; height: 100px" :src="url" fit="fit"></el-image>
        </el-form-item>
      </el-form>
      <div class="title-bg mb10">适用规则</div>
      <div>《违约处罚缴纳规则》</div>
    </el-row>
  </el-dialog>
</template>

<script>
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
    data() {
      return {
        isOpen: true,
        ruleForm: {
          explain: '感谢每一份努力9999',
          imgUrl: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        },
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
  .title-bg {
    background-color: #F2F2F2;
    padding: 10px;
    font-weight: bold;
  }
</style>
