<template>
  <div class="app-container">
    <div class="flex jsb flex-center">
      <searchCom @toSearch='search' :searchResult='searchResult' placeholderText='请输入你要找的电话号码'></searchCom>
      <div class="mb20">
        <el-button type="primary" @click="openAdd">添加引导专员</el-button>
      </div>
    </div>
    <el-table :data="tableData" border v-loading="loading">
      <el-table-column prop="cattypeName" label="账号名称" align="center"></el-table-column>
      <el-table-column prop="cattypeName" label="国家/ 地区" align="center"></el-table-column>
      <el-table-column prop="cattypeName" label="联系电话" align="center"></el-table-column>
      <el-table-column prop="cattypeName" label="添加日期" align="center"></el-table-column>
      <el-table-column prop="cattypeName" label="账号开通日期" align="center"></el-table-column>
      <el-table-column prop="cattypeName" label="来源" align="center"></el-table-column>
    </el-table>
    <pages @changePage="changePage" :total="pageTotal" :page="page"></pages>
    <addAtt v-if="isAdd" @close="closeAdd" @refresh=""></addAtt>
  </div>
</template>

<script>
  import searchCom from '@/views/components/common/searchCom.vue'
  import pages from '@/views/components/common/pages'
  import addAtt from '@/views/choseGovernor/guideAttInfo/components/addAtt'
  export default {
    name: "index",
    components: {
      searchCom,
      pages,
      addAtt
    },
    data() {
      return {
        loading: false,
        tableData: [{
          cattypeName: '111'
        }],
        openRow: {},
        page: 1,
        pageTotal: 0,
        searchResult: 0,
        searchVal: '',
        isAdd: false
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
      openAdd() {
        this.isAdd = true
      },
      closeAdd() {
        this.isAdd = false
      }
    },
    created() {

    }
  }
</script>

<style scoped lang="scss">
</style>
