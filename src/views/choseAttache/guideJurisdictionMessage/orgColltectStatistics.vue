<template>
  <div class="app-container">
    <el-table :data="tableData" border v-loading="loading">
      <el-table-column prop="cattypeName" label="领取日期" align="center"></el-table-column>
      <el-table-column prop="cattypeName" label="领取数量" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="text" @click="openCollectDetail(scope.row)">查看领取详情</el-button>
        </template>
      </el-table-column>
    </el-table>

    <collectDetail v-if="isCollect" @close="closeCollectDetail"></collectDetail>
    <pages @changePage="changePage" :total="pageTotal" :page="page"></pages>
  </div>
</template>

<script>
  import pages from '@/views/components/common/pages'
  import collectDetail from '@/views/choseAttache/guideJurisdictionMessage/components/collectDetail'
  export default {
    name: "index",
    components: {
      pages,
      collectDetail
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
        isCollect: false,
      };
    },
    methods: {
      openCollectDetail(row) {
        this.openRow = row
        this.isCollect = true
      },
      closeCollectDetail() {
        this.isCollect = false
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
