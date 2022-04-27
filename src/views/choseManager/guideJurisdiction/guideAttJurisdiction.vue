<template>
  <div class="app-container">
    <searchCom @toSearch='search' :searchResult='searchResult' placeholderText='请输入你要找的电话号码'></searchCom>
    <el-table :data="tableData" border v-loading="loading">
      <el-table-column prop="cattypeName" label="账号名称" align="center"></el-table-column>
      <el-table-column prop="cattypeName" label="账号开通日期" align="center"></el-table-column>
      <el-table-column prop="cattypeName" label="姓名" align="center"></el-table-column>
      <el-table-column prop="cattypeName" label="国家/ 地区" align="center"></el-table-column>
      <el-table-column prop="cattypeName" label="联系电话" align="center"></el-table-column>
      <el-table-column label="未合作机构数量" align="center">
        <template slot-scope="scope">
          <el-button type="text" @click="openDetail(scope.row,1)">{{scope.row.number1}}</el-button>
        </template>
      </el-table-column>
      <el-table-column label="未合作机构数量" align="center">
        <template slot-scope="scope">
          <el-button type="text" @click="openDetail(scope.row,2)">{{scope.row.number2}}</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import searchCom from '@/views/components/common/searchCom.vue'
  import pages from '@/views/components/common/pages'
  export default {
    name: "index",
    components: {
      searchCom,
      pages
    },
    data() {
      return {
        loading: false,
        tableData: [{
          cattypeName: '2313',
          number1: '100',
          number2: '200',
        }],
        openRow: {},
        page: 1,
        pageTotal: 0,
        searchResult: 0,
        searchVal: '',
      };
    },
    methods: {
      openDetail(row,status) {
        this.openRow = row
        row.pageStatus = status
        this.isDetail = true
        this.$router.push({
          path: "jurisdictionDetail",
          query: row,
        });
      },
      closeDetail() {
        this.isDetail = false
      },
      search(data) {
        this.searchVal = data
        this.page = 1
        //
      },
      changePage(page) {
        this.page = page
        //
      },
    },
    created() {

    }
  }
</script>

<style scoped lang="scss">
</style>
