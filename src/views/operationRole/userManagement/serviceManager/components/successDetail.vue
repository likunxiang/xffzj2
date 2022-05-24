<template>
  <el-dialog title="" :visible.sync="isOpen" width="700px" @close="beforeClose">
    <div>
      <el-table :data="tableDataFirst" border>
        <el-table-column prop="nickName" label="账号名称" align="center"></el-table-column>
        <el-table-column prop="registerTime" label="账号开通日期" align="center"></el-table-column>
        <el-table-column prop="nickName" label="姓名" align="center"></el-table-column>
        <el-table-column prop="nation" label="国家/ 地区" align="center"></el-table-column>
        <el-table-column prop="phonenumber" label="联系电话" align="center"></el-table-column>
      </el-table>
      <chooseByteTitle @getByteGuid="getByteGuid" @toSearch="toSearch" @getLastGuid='getLastGuid'></chooseByteTitle>
      <searchCom @toSearch='search' :searchResult='searchResult' placeholderText='请输入你要找的机构名称'></searchCom>
      <el-table :data="tableData" border v-loading="loading">
        <el-table-column prop="orgName" label="姓名" align="center"></el-table-column>
        <el-table-column prop="nation" label="国家/ 地区" align="center"></el-table-column>
        <el-table-column prop="phonenumber" label="联系电话" align="center"></el-table-column>
        <el-table-column prop="phonenumber" label="任职机构" align="center"></el-table-column>
        <el-table-column prop="phonenumber" label="岗位类型" align="center"></el-table-column>
        <el-table-column prop="phonenumber" label="岗位名称" align="center"></el-table-column>
        <el-table-column prop="createTime" label="创建日期" align="center"></el-table-column>
      </el-table>
      <pages @changePage="changePage" :total="pageTotal" :page="page"></pages>
    </div>
  </el-dialog>
</template>

<script>
  import chooseByteTitle from '@/views/choseManager/agencyInformation/components/chooseByteTitle.vue'
  import searchCom from '@/views/components/common/searchCom.vue'
  import pages from '@/views/components/common/pages'
  export default {
    name: "index",
    components: {
      chooseByteTitle
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
        tableDataFirst: [],
        tableData: [],
        loading: false,
        guidList: [],
        lastOrgPathContentGuid: '0', // 最大层级机构字节内容guid
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
      getByteGuid(data) {
        this.guidList = data
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
      toSearch() {
        this.page = 1
        this.orgGetList()
      },
      getLastGuid(data) {
        console.log('1112', data);
        this.lastOrgPathContentGuid = data
      },
    },
    created() {
      this.tableDataFirst.push(this.row)
    }
  };
</script>

<style lang="scss" scoped>
</style>
