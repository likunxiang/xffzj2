<template>
  <div class="app-container">
    <div class="flex jsb flex-center">
      <searchCom @toSearch='search' :searchResult='searchResult' placeholderText='请输入你要找的电话号码'></searchCom>
    </div>
    <el-table :data="tableData" border v-loading="loading">
      <el-table-column prop="cattypeName" label="账号名称" align="center"></el-table-column>
      <el-table-column prop="cattypeName" label="国家/ 地区" align="center"></el-table-column>
      <el-table-column prop="cattypeName" label="联系电话" align="center"></el-table-column>
      <el-table-column prop="cattypeName" label="添加日期" align="center"></el-table-column>
      <el-table-column prop="cattypeName" label="账号开通日期" align="center"></el-table-column>
      <el-table-column prop="cattypeName" label="来源" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="text" @click="delInfo(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pages @changePage="changePage" :total="pageTotal" :page="page"></pages>
    <delTips v-if="isTips" @close="closeDelTips"></delTips>
  </div>
</template>

<script>
  import searchCom from '@/views/components/common/searchCom.vue'
  import pages from '@/views/components/common/pages'
  import delTips from '@/views/choseManager/guideAttInfo/components/delTips'
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
        tableData: [{
          cattypeName: '111'
        }],
        openRow: {},
        page: 1,
        pageTotal: 0,
        searchResult: 0,
        searchVal: '',
        isTips: false,
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
      delInfo() {
        if(true) {
          // 已经开通了
          this.isTips = true
        } else {
          // 未开通，走删除
        }
      },
      closeDelTips() {
        this.isTips = false
      }
    },
    created() {

    }
  }
</script>

<style scoped lang="scss">
</style>
