<template>
  <div class="app-container">
    <div class="flex jsb flex-center">
      <searchCom @toSearch='search' :searchResult='searchResult' placeholderText='请输入你要找的电话号码'></searchCom>
      <div class="mb20">
        <el-button type="primary" @click="openNew">新建引导专员</el-button>
      </div>
    </div>
    <el-table :data="tableData" border v-loading="loading">
      <el-table-column prop="cattypeName" label="账号名称" align="center"></el-table-column>
      <el-table-column prop="cattypeName" label="账号开通日期" align="center"></el-table-column>
      <el-table-column prop="cattypeName" label="姓名" align="center"></el-table-column>
      <el-table-column prop="cattypeName" label="国家/ 地区" align="center"></el-table-column>
      <el-table-column prop="cattypeName" label="联系电话" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="text" @click="updateInfo(scope.row)">修改</el-button>
          <el-button type="text" @click="delInfo(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <newAtt v-if="isNew" @close="closeNew" :pageStatus="pageStatus" @refresh=""></newAtt>
    <pages @changePage="changePage" :total="pageTotal" :page="page"></pages>
  </div>
</template>

<script>
  import searchCom from '@/views/components/common/searchCom.vue'
  import newAtt from '@/views/choseManager/guideAccountInfo/guideAttInfo/components/newAtt'
  import pages from '@/views/components/common/pages'
  export default {
    name: "index",
    components: {
      searchCom,
      pages,
      newAtt
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
        isNew: false,
        pageStatus: '1'
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
      openNew() {
        this.isNew = true
        this.pageStatus = '1'
      },
      updateInfo() {
        this.isNew = true
        this.pageStatus = '2'
      },
      closeNew() {
        this.isNew = false
      },
      delInfo() {
        this.$confirm('账号名称xuanbazhuanyuan1删除将自动收回该账号下的权限机构。确认删除。', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // 删除

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
    },
    created() {

    }
  }
</script>

<style scoped lang="scss">
</style>
