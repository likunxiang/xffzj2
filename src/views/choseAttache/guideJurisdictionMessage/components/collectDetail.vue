<template>
  <el-dialog title="查看领取详情" :visible.sync="isOpen" width="700px" @close="beforeClose">
    <div style="padding-bottom: 40px;">
      <el-row class="mb20 flex flex-center">
        <div class="bold label">领取日期</div>
        <div>2022-04-01</div>
      </el-row>
      <el-row class="mb20 flex">
        <div class="bold label">领取数量</div>
        <div>20</div>
      </el-row>
      <h4 class="title-bg">机构列表</h4>
      <div v-for="(item,index) in orgList" class="mb10">{{item}}</div>
    </div>
  </el-dialog>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        isOpen: true,
        orgList: ['福建省华夏信融数据服务有限公司','中国建设银行股份有限公司福建分公司','中国工商银行股份有限公司福建分公司','中国农业银行股份有限公司福建分公司']
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
  .label {
    width: 80px;
  }
  .title-bg {
    background-color: #F2F2F2;
    padding: 10px;
  }
</style>
