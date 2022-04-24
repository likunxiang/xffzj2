<template>
  <el-dialog title="新建机构名称" :visible.sync="isOpen" width="700px" @close="beforeClose">
    <el-row class="mt20 pb20 flex flex-center">
      <div style="flex-shrink: 0;margin-right: 20px;">机构名称</div>
      <el-input placeholder="请输入机构名称" v-model="inputField" clearable></el-input>
    </el-row>
    <span slot="footer" class="dialog-footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="submitNew" :disabled="!inputField.trim()">保存</el-button>
    </span>
  </el-dialog>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        isOpen: true,
        inputField: ''
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
      submitNew() {
        let data =  this.inputField
        this.$emit('submitNewField',data)
        this.close()
      }
    },
    created() {

    }
  };
</script>

<style lang="scss" scoped>
</style>
