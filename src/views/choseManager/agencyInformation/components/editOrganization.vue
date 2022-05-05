<template>
  <el-dialog title="编辑机构名称" :visible.sync="isOpen" width="700px" @close="beforeClose">
    <el-row class="mt20 pb20 flex flex-center">
      <div style="flex-shrink: 0;margin-right: 20px;">机构名称</div>
      <el-input placeholder="请输入机构名称" v-model="inputField" clearable></el-input>
    </el-row>
    <span slot="footer" class="dialog-footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="submitNew" :disabled="!inputField.trim() || inputField==row.orgName">保存</el-button>
    </span>
  </el-dialog>
</template>

<script>
  import {
    orgUpdateOrgName,
  } from '@/api/choseManagerApi/choseManagerCom.js'
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
        this.orgUpdateOrgName()
      },
      async orgUpdateOrgName() {
        await orgUpdateOrgName({
          orgNameGuid: this.row.orgNameGuid,
          orgName: this.inputField,
          curUserId: this.$store.state.user.adminId,
          deptId: this.$store.state.user.deptId
        }).then(res  => {
          if(res.OK == 'True') {

            console.log(res);
            if (res.Tag[0] > 0) {
              this.$message({
                type: 'success',
                message: '操作成功!'
              });
              this.$emit('refresh')
              this.close()
            } else {
              this.$message({
                type: 'error',
                message: '机构名称已存在!'
              });
            }

          }
        })
      }
    },
    created() {
      this.inputField = this.row.orgName
    }
  };
</script>

<style lang="scss" scoped>
</style>
