<template>
  <el-dialog title="服务经理成果" :visible.sync="isOpen" width="700px" @close="beforeClose">
    <div>
      <el-table :data="tableData" border v-loading="loading">
        <el-table-column prop="nickName" label="账号名称" align="center"></el-table-column>
        <el-table-column prop="registerTime" label="账号开通日期" align="center"></el-table-column>
        <el-table-column prop="nickName" label="姓名" align="center"></el-table-column>
        <el-table-column prop="nation" label="国家/ 地区" align="center"></el-table-column>
        <el-table-column prop="phonenumber" label="联系电话" align="center"></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button type="text" @click="toSuccess(scope.row)">服务经理服务成果</el-button>
          </template>
        </el-table-column>
      </el-table>
      <successDetail v-if="isSuccess" @close='closeSuccess'></successDetail>
    </div>
  </el-dialog>
</template>

<script>
  import successDetail from '@/views/operationRole/userManagement/serviceManager/components/serviceManageSuccess'
  export default {
    name: "index",
    props: {
      successDetail
    },
    data() {
      return {
        isOpen: true,
        tableData: [],
        loading: false,
        openRow: {},
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
      toSuccess(row) {
        this.isSuccess = true
        this.openRow = row
      },
      closeSuccess() {
        this.isSuccess = false
      }
    },
    created() {

    }
  };
</script>

<style lang="scss" scoped>
</style>
