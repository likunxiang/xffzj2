<template>
  <el-dialog title="按型号名称收取管理" :visible.sync="isOpen" width="700px" @close="beforeClose">
    <div>
      <el-table :data="tableData" border>
        <el-table-column prop="orgName" label="品类类型" align="center"></el-table-column>
        <el-table-column prop="createTime" label="品类名称" align="center"></el-table-column>
        <el-table-column prop="createTime" label="供方数量" align="center"></el-table-column>
      </el-table>
      <el-divider></el-divider>
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <!-- <el-tab-pane label="机构供方" name="first">用户管理</el-tab-pane> -->
        <el-tab-pane label="个人供方" name="first">
          <searchCom @toSearch='search' :searchResult='searchResult' placeholderText='请输入你要找的联系电话'></searchCom>
          <el-table :data="tableData" border>
            <el-table-column prop="orgName" label="姓名" align="center"></el-table-column>
            <el-table-column prop="createTime" label="国家/地区" align="center"></el-table-column>
            <el-table-column prop="createTime" label="联系电话" align="center"></el-table-column>
            <el-table-column prop="createTime" label="注册日期" align="center"></el-table-column>
            <el-table-column prop="createTime" label="品类添加日期" align="center"></el-table-column>
            <el-table-column label="操作" align="center">
              <template slot-scope="scope">
                <el-button type="text" @click="modelManage(scope.row)">型号管理</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
      <pages @changePage="changePage" :total="pageTotal" :page="page"></pages>
    </div>
  </el-dialog>
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
        isOpen: true,
        activeName: 'first',
        page: 1,
        pageTotal: 0,
        searchResult: 0,
        searchVal: '',
        tableData: []
      };
    },
    methods: {
      close() {
        this.isOpen = false
        this.$emit('close')
      },
      beforeClose() {
        this.close()
      },
      handleClick(tab, event) {
        console.log(tab, event);
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
      modelManage() {
        
      }
    },
    created() {

    }
  };
</script>

<style lang="scss" scoped>
</style>
