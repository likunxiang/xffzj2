<template>
  <div class="app-container">
    <div class="flex jsb flex-center">
      <searchCom @toSearch='search' :searchResult='searchResult' placeholderText='请输入你要找的电话号码'></searchCom>
    </div>
    <el-table :data="tableData" border v-loading="loading">
      <el-table-column prop="nickName" label="姓名" align="center"></el-table-column>
      <el-table-column prop="nation" label="国家/ 地区" align="center"></el-table-column>
      <el-table-column prop="phonenumber" label="联系电话" align="center"></el-table-column>
      <el-table-column prop="phonenumber" label="所在地区" align="center"></el-table-column>
      <el-table-column prop="createTime" label="添加日期" align="center"></el-table-column>
      <el-table-column prop="registerTime" label="账号开通日期" align="center"></el-table-column>
      <el-table-column prop="phonenumber" label="来源" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="text" @click="delInfo(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pages @changePage="changePage" :total="pageTotal" :page="page"></pages>
    <delTips v-if="isTips" :row="openRow" @close="closeDelTips"></delTips>
  </div>
</template>

<script>
  import searchCom from '@/views/components/common/searchCom.vue'
  import pages from '@/views/components/common/pages'
  import delTips from '@/views/choseGovernor/guideAttInfo/components/delTips'
  export default {
    name: "index",
    components: {
      searchCom,
      pages,
      delTips
    },
    data() {
      return {
        loading: false,
        tableData: [],
        page: 1,
        pageTotal: 0,
        searchResult: 0,
        searchVal: '',
        isTips: false,
        openRow: {}
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
      delInfo(row) {
        if(row.userId) {
          // 已经开通了
          this.openRow = row
          this.isTips = true
        } else {
          // 未开通，走删除
          this.introducerDelete(row.introducerGuid)
        }
      },
      closeDelTips() {
        this.isTips = false
      },
    },
    created() {

    }
  }
</script>

<style scoped lang="scss">
</style>