<template>
  <div class="app-container">
    <div class="flex jsb flex-center">
      <searchCom @toSearch='search' :searchResult='searchResult' placeholderText='请输入你要找的电话号码'></searchCom>
    </div>
    <el-table :data="tableData" border v-loading="loading">
      <el-table-column prop="nickName" label="账号名称" align="center"></el-table-column>
      <el-table-column prop="registerTime" label="账号开通日期" align="center"></el-table-column>
      <el-table-column prop="nickName" label="姓名" align="center"></el-table-column>
      <el-table-column prop="nation" label="国家/ 地区" align="center"></el-table-column>
      <el-table-column prop="phonenumber" label="联系电话" align="center"></el-table-column>
      <el-table-column prop="phonenumber" label="所在地点" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="text" @click="toAffiliation(scope.row)">归属主管管理</el-button>
          <el-button type="text" @click="toStatistics(scope.row)">权限对象统计</el-button>
          <el-button type="text" @click="toResult(scope.row)">服务专员成果</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pages @changePage="changePage" :total="pageTotal" :page="page"></pages>
    <affiliationManage v-if="isAffiliation" @close="closeAffiliation" @refresh=""></affiliationManage>
    <jurisdictionObjStatistics v-if="isStatistics" @close=""></jurisdictionObjStatistics>
  </div>
</template>

<script>
  import searchCom from '@/views/components/common/searchCom.vue'
  import pages from '@/views/components/common/pages'
  import affiliationManage from '@/views/operationRole/userManagement/serviceAttach/components/affiliationManage'
  import jurisdictionObjStatistics from '@/views/operationRole/userManagement/serviceAttach/components/jurisdictionObjStatistics'
  export default {
    name: "index",
    components: {
      searchCom,
      pages,
      affiliationManage,
      jurisdictionObjStatistics
    },
    data() {
      return {
        loading: false,
        tableData: [],
        page: 1,
        pageTotal: 0,
        searchResult: 0,
        searchVal: '',
        openRow: {},
        isAffiliation: false,
        isStatistics: false,
        isResult: false,
      };
    },
    methods: {
      search(data) {
        this.searchVal = data
        this.page = 1
        //
      },
      changePage(page) {
        this.page = page
        //
      },
      toAffiliation(row) {
        this.isAffiliation = true
        this.openRow = row
      },
      closeAffiliation() {
        this.isAffiliation = false
      },
      toStatistics(row) {
        this.isStatistics = true
        this.openRow = row
      },
      closeStatistics() {
        this.isStatistics = false
      },
      toResult(row) {
        this.isResult = true
        this.openRow = row
      },
      closeResult() {
        this.isResult = false
      }
    },
    created() {

    }
  }
</script>

<style scoped lang="scss">
</style>
