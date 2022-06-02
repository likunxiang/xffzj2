<template>
  <div class="app-container">
    <chooseByteTitle @getByteGuid="getByteGuid" @toSearch="toSearch" @getLastGuid='getLastGuid'></chooseByteTitle>
    <div class="flex jsb flex-center">
      <searchCom @toSearch='search' :searchResult='searchResult' placeholderText='请输入你要找的电话号码'></searchCom>
    </div>
    <el-table :data="tableData" border v-loading="loading">
      <el-table-column prop="nickName" label="姓名" align="center"></el-table-column>
      <el-table-column prop="nation" label="国家/ 地区" align="center"></el-table-column>
      <el-table-column prop="phonenumber" label="联系电话" align="center"></el-table-column>
      <el-table-column prop="phonenumber" label="任职机构" align="center"></el-table-column>
      <el-table-column prop="phonenumber" label="岗位类型" align="center"></el-table-column>
      <el-table-column prop="phonenumber" label="岗位名称" align="center"></el-table-column>
      <el-table-column prop="createTime" label="创建日期" align="center"></el-table-column>
      <el-table-column prop="createTime" label="注册日期" align="center"></el-table-column>
    </el-table>
    <pages @changePage="changePage" :total="pageTotal" :page="page"></pages>
  </div>
</template>

<script>
  import searchCom from '@/views/components/common/searchCom.vue'
  import pages from '@/views/components/common/pages'
  import chooseByteTitle from '@/views/choseManager/agencyInformation/components/chooseByteTitle.vue'
  export default {
    name: "index",
    components: {
      searchCom,
      pages,
      chooseByteTitle
    },
    data() {
      return {
        loading: false,
        tableData: [],
        page: 1,
        pageTotal: 0,
        searchResult: 0,
        searchVal: '',
        guidList: [], // 字节内容guid列表
        lastOrgPathContentGuid: '0',  // 最大层级机构字节内容guid
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
      toSearch() {
        this.page = 1
        this.orgGetList()
      },
      getByteGuid(data) {
        this.guidList = data
      },
      getLastGuid(data) {
        console.log('1112',data);
        this.lastOrgPathContentGuid = data
      },
    },
    created() {

    }
  }
</script>

<style scoped lang="scss">
</style>
