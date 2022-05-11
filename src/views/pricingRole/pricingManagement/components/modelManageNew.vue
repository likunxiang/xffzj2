<template>
  <el-dialog title="型号管理" :visible.sync="isOpen" width="700px" @close="beforeClose" append-to-body>
    <div>
      <el-table :data="tableData" border>
        <el-table-column prop="orgName" label="品类类型" align="center"></el-table-column>
        <el-table-column prop="createTime" label="品类名称" align="center"></el-table-column>
        <el-table-column prop="createTime" label="供方数量" align="center"></el-table-column>
      </el-table>
      <el-divider></el-divider>
      <el-row class="flex mb20 mt10">
        <div class="bold" style="width: 120px;">品类类型</div>
        <div>{{openRow.cattypeName}}</div>
      </el-row>
      <el-row class="flex mb20 mt10">
        <div class="bold" style="width: 120px;">品类名称</div>
        <div>{{openRow.categoryName}}</div>
      </el-row>
      <el-row class="flex mb20 mt10">
        <div class="bold" style="width: 120px;">收取范围</div>
        <div>按型号名称</div>
      </el-row>
      <el-divider></el-divider>
      <searchCom @toSearch='search' :searchResult='searchResult' placeholderText='请输入你要找的型号名称'></searchCom>
      <el-table :data="tableData" border>
        <el-table-column prop="orgName" label="型号名称" align="center"></el-table-column>
        <el-table-column prop="createTime" label="品类名称" align="center"></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button type="text" @click="openPricing(scope.row)">服务费用设置</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <pages @changePage="changePage" :total="pageTotal" :page="page"></pages>
  </el-dialog>
</template>

<script>
  import searchCom from '@/views/components/common/searchCom.vue'
  import pages from '@/views/components/common/pages'
  export default {
    name: "index",
    data() {
      return {
        isOpen: true,
        page: 1,
        pageTotal: 0,
        searchResult: 0,
        searchVal: '',
        tableData: []
      };
    },
    components: {
      searchCom,
      pages
    },
    methods: {
      close() {
        this.isOpen = false
        this.$emit('close')
      },
      beforeClose() {
        this.close()
      },
      openPricing() {

      },
      search(data) {
        this.searchVal = data
        this.page = 1
        //
      },
      changePage(page) {
        this.page = page
      }
    },
    created() {

    }
  };
</script>

<style lang="scss" scoped>
</style>
