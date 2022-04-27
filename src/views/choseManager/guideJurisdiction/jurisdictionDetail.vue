<template>
  <div class="app-container">
    <div>
      <el-descriptions :colon="false" class="margin-top" :column="1" border>
        <el-descriptions-item label-class-name="my-label" label="账号名称">2020</el-descriptions-item>
        <el-descriptions-item label-class-name="my-label" label="账号开通日期">12</el-descriptions-item>
        <el-descriptions-item label-class-name="my-label" label="姓名">20</el-descriptions-item>
        <el-descriptions-item label-class-name="my-label" label="国家/区号">10</el-descriptions-item>
        <el-descriptions-item label-class-name="my-label" label="联系电话">200</el-descriptions-item>
        <el-descriptions-item label-class-name="my-label" label="未合作数量" v-if="pageStatus == 1">100</el-descriptions-item>
        <el-descriptions-item label-class-name="my-label" label="在合作数量" v-else>200</el-descriptions-item>
      </el-descriptions>
    </div>
    <el-divider></el-divider>
    <div>
      <div class="flex jsb flex-center">
        <searchCom @toSearch='search' :searchResult='searchResult' placeholderText='请输入你要找的机构'></searchCom>
        <div>
          <el-button type="primary" @click="recycleOrg" :disabled="!delList.length > 0">收回机构({{delList.length}})</el-button>
        </div>
      </div>
      <el-table :data="tableData" border v-loading="loading" @select-all="changeAll" @selection-change="changeOne">
        <el-table-column type="selection" align="center" />
        <el-table-column prop="cattypeName" label="机构名称" align="center"></el-table-column>
        <el-table-column prop="cattypeName" label="领取日期" align="center"></el-table-column>
        <el-table-column prop="cattypeName" label="合同终止日期" align="center"></el-table-column>
      </el-table>
      <pages @changePage="changePage" :total="pageTotal" :page="page"></pages>
    </div>
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
          cattypeName: '111'
        },{
          cattypeName: '222'
        },{
          cattypeName: '333'
        }],
        delList: [],
        openRow: {},
        page: 1,
        pageTotal: 0,
        searchResult: 0,
        searchVal: '',
        pageStatus: 1,
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
      recycleOrg() {
        // 回收机构
        this.$confirm('【' + this.delList.length + '】家机构你要回收？' , '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // 走回收接口
        }).catch(() => {
        });
      },
      changeAll(selection) {
        let arr = selection.map(item => item.guid)
        this.delList = arr
      },
      changeOne(selection, row) {
        let arr = selection.map(item => item.guid)
        this.delList = arr
      },
    },
    created() {
      this.pageStatus = this.$route.query.pageStatus
    }
  }
</script>

<style scoped lang="scss">
</style>
