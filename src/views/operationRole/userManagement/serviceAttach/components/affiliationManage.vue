<template>
  <el-dialog title="归属主管管理" :visible.sync="isOpen" width="700px" @close="beforeClose">
    <div style="padding-bottom: 60px;">
      <el-table :data="tableDataFirst" border class="mb20">
        <el-table-column prop="nickName" label="账号名称" align="center"></el-table-column>
        <el-table-column prop="createTime" label="账号开通日期" align="center"></el-table-column>
        <el-table-column prop="nickName" label="姓名" align="center"></el-table-column>
        <el-table-column prop="nation" label="国家/ 地区" align="center"></el-table-column>
        <el-table-column prop="phonenumber" label="联系电话" align="center"></el-table-column>
        <el-table-column prop="phonenumber" label=" 所在地点" align="center"></el-table-column>
      </el-table>
      <div class="flex flex-center mb20">
        <div class="title-bg">服务主管招募成果</div>
        <div class="ml0">
          <el-button>授权归属主管</el-button>
          <el-button>脱离归属主管</el-button>
        </div>
      </div>
      <div class="flex flex-center mb20" v-if="true">
        <h6>主管信息</h6>
        <div>是指这个服务专员的管理权授权给哪个服务主管</div>
      </div>
      <div v-else>
        <searchCom @toSearch='search' :searchResult='searchResult' placeholderText='请输入你要找的电话号码或者姓名'></searchCom>
      </div>
      <el-table :data="tableData" border v-loading="loading">
        <el-table-column prop="nickName" label="姓名" align="center"></el-table-column>
        <el-table-column prop="nation" label="国家/ 地区" align="center"></el-table-column>
        <el-table-column prop="phonenumber" label="联系电话" align="center"></el-table-column>
        <el-table-column prop="phonenumber" label="所在地区" align="center"></el-table-column>
        <el-table-column prop="createTime" label="添加日期" align="center"></el-table-column>
        <el-table-column prop="registerTime" label="账号开通日期" align="center"></el-table-column>
      </el-table>
      <pages @changePage="changePage" :total="pageTotal" :page="page"></pages>
    </div>
  </el-dialog>
</template>

<script>
  import pages from '@/views/components/common/pages'
  import searchCom from '@/views/components/common/searchCom.vue'
  export default {
    name: "index",
    components: {
      pages,
      searchCom,
    },
    props: {
      row: {
        type: Object,
        default: () => {
          return {}
        }
      }
    },
    data() {
      return {
        isOpen: true,
        loading: false,
        tableData: [],
        tableDataFirst: [],
        openRow: {},
        page: 1,
        pageTotal: 0,
        searchResult: 0,
        searchVal: '',
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
      search(data) {
        this.searchVal = data
        this.page = 1
        this.getData()
        //
      },
      changePage(page) {
        this.page = page
        this.getData()
        //
      },
    },
    created() {
      this.tableDataFirst.push(this.row)
    }
  };
</script>

<style lang="scss" scoped>
</style>