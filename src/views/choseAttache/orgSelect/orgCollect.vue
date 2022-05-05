<template>
  <div class="app-container">
    <searchCom @toSearch='search' :searchResult='searchResult' placeholderText='请输入你要找的机构名称'></searchCom>
    <el-table :data="tableData" border v-loading="loading">
      <el-table-column prop="orgName" label="机构名称" align="center"></el-table-column>
      <el-table-column prop="createTime" label="创建日期" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="text" @click="getOrg(scope.row)">领取</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pages @changePage="changePage" :total="pageTotal" :page="page"></pages>
  </div>
</template>

<script>
  import searchCom from '@/views/components/common/searchCom.vue'
  import pages from '@/views/components/common/pages'
  import {
    getOrgInfoList,
    collectOrg
  } from '@/api/choseAttacheApi/choseAttacheCom.js'
  export default {
    name: "index",
    components: {
      searchCom,
      pages
    },
    data() {
      return {
        loading: false,
        tableData: [],
        openRow: {},
        page: 1,
        pageTotal: 0,
        searchResult: 0,
        searchVal: '',
      };
    },
    methods: {
      openDetail(row) {
        this.openRow = row
        this.isDetail = true
      },
      closeDetail() {
        this.isDetail = false
      },
      search(data) {
        this.searchVal = data
        this.page = 1
        this.getOrgInfoList()
        //
      },
      changePage(page) {
        this.page = page
        this.getOrgInfoList()
        //
      },
      getOrg(row) {
        collectOrg({
          orgNameGuid: row.orgNameGuid,
          curUserId: this.$store.state.user.adminId,
        }).then(res => {
          if(res.OK == 'True') {
            if (res.Tag[0] > 0) {
              this.$message({
                type: 'success',
                message: '领取成功!'
              });
              this.getOrgInfoList()
            } else {
              this.$confirm(
                '<p align="left">【' + row.orgName + '】<br>已经被领取，请重新领取。</p>',
                '', {
                  confirmButtonText: '知道了',
                  dangerouslyUseHTMLString: true,
                  cancelButtonText: '取消',
                  showCancelButton: false,
                  type: 'warning',
                  center: true
                }).then(() => {

              }).catch(() => {});
            }
          }
        })
      },
      async getOrgInfoList() {
        this.loading = true
        await getOrgInfoList({
          orgName: this.searchVal,
          curUserId: this.$store.state.user.adminId,
          size: '20',
          page: this.page
        }).then(res => {
          this.loading = false
          if(res.OK == 'True') {

            console.log(res);
            if (res.Tag.length > 0) {
              let data = res.Tag[0].Table
              this.tableData = data
            } else {
              this.tableData = []
            }
            this.searchResult = this.tableData.length
            this.pageTotal = this.tableData.length > 0 ? (this.page - 1) * 20 + 21 : (this.page - 1) * 20 + 1
          }
        })
      },
    },
    created() {
      this.getOrgInfoList()
    }
  }
</script>

<style scoped lang="scss">
</style>
