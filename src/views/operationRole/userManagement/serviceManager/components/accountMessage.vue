<template>
  <el-dialog title="账号信息管理" :visible.sync="isOpen" width="700px" @close="beforeClose">
    <div>
      <el-table :data="tableData" border v-loading="loading">
        <el-table-column prop="nickName" label="账号名称" align="center"></el-table-column>
        <el-table-column prop="registerTime" label="账号开通日期" align="center"></el-table-column>
        <el-table-column prop="nickName" label="姓名" align="center"></el-table-column>
        <el-table-column prop="nation" label="国家/ 地区" align="center"></el-table-column>
        <el-table-column prop="phonenumber" label="联系电话" align="center"></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button type="text" @click="updateInfo(scope.row)">修改</el-button>
            <el-button type="text" @click="delInfo(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <pages @changePage="changePage" :total="pageTotal" :page="page"></pages>
      <newGov v-if="isNew" @close="closeNew" :pageStatus="pageStatus" :row="openRow" @refresh="getList"></newGov>
      <delPop v-if="isDel" @close="closeDelPop" :row="openRow" @refresh="getList"></delPop>
    </div>
  </el-dialog>
</template>

<script>
  import pages from '@/views/components/common/pages'
  import newGov from '@/views/operationRole/userManagement/serviceManager/components/newGov'
  import delPop from '@/views/operationRole/userManagement/serviceManager/components/delPop'
  export default {
    name: "index",
    components: {
      pages,
      newGov,
      delPop
    },
    data() {
      return {
        isOpen: true,
        loading: false,
        tableData: [],
        page: 1,
        pageTotal: 0,
        pageStatus: '2',
        openRow: {},
        isDel: false,
        isNew: false,
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
      changePage(page) {
        this.page = page
        //
      },
      updateInfo(row) {
        this.isNew = true
        this.openRow = row
        this.pageStatus = '2'
      },
      closeNew() {
        this.isNew = false
      },
      delInfo(row) {
        this.openRow = row
        this.isDel = true
      },
      closeDelPop() {
        this.isDel = false
      },
      getList() {

      }
    },
    created() {

    }
  };
</script>

<style lang="scss" scoped>
</style>
