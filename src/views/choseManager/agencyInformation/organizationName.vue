<template>
  <div class="app-container">

    <div class="flex jsb flex-center">
      <searchCom @toSearch='search' :searchResult='searchResult' placeholderText='请输入你要找的机构名称'></searchCom>
      <div>
        <el-button type="primary" @click="openNew">新建机构名称</el-button>
        <el-button type="primary" @click="openImport">批量新建机构名称</el-button>
      </div>
    </div>
    <el-table :data="tableData" border v-loading="loading">
      <el-table-column prop="cattypeName" label="机构名称" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="text" @click="editOrg(scope.row)">编辑机构名称</el-button>
          <el-button type="text" @click="delPOrg(scope.row)">删除机构名称</el-button>
        </template>
      </el-table-column>
    </el-table>

    <pages @changePage="changePage" :total="pageTotal" :page="page"></pages>
    <newOrganization v-if="isNew" @close="closeNew" @refresh=""></newOrganization>
    <batchOrganization v-if="isImport" @close="closeImport" @refresh=""></batchOrganization>
    <editOrganization v-if="isEdit" @close="closeEdit" @refresh=""></editOrganization>
  </div>
</template>

<script>
  import searchCom from '@/views/components/common/searchCom.vue'
  import pages from '@/views/components/common/pages'
  import newOrganization from '@/views/choseManager/agencyInformation/components/newOrganization'
  import batchOrganization from '@/views/choseManager/agencyInformation/components/batchOrganization'
  import editOrganization from '@/views/choseManager/agencyInformation/components/editOrganization'
  export default {
    name: "index",
    components: {
      newOrganization,
      batchOrganization,
      editOrganization,
      searchCom,
      pages
    },
    data() {
      return {
        loading: true,
        tableData: [],
        openRow: {},
        page: 1,
        pageTotal: 0,
        searchResult: 0,
        searchVal: '',
        isNew: false,
        isImport: false,
        isEdit: false
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
      },
      closeNew() {
        this.isNew = false
      },
      openImport() {
        this.isImport = true
      },
      closeImport() {
        this.isImport = false
      },
      editOrg(row) {
        this.openRow = row
        this.isEdit = true
      },
      closeEdit() {
        this.isEdit = false
      },
      delOrg(row) {
        if (true) {
          // 已注册或已签约
          this.$confirm(
            '<p align="left">机构名称</p><p align="left">已注册或者已签约，不能删除。</p>',
            '提示', {
              confirmButtonText: '知道了',
              dangerouslyUseHTMLString: true,
              cancelButtonText: '取消',
              showCancelButton: false,
              type: 'warning',
              center: true
            }).then(() => {
              //
          }).catch(() => {});
        } else {
          this.$confirm(
            '<p align="left">机构名称</p><p align="left">删除后，全网不可见这个机构的有关信息。确认删除？</p>',
            '提示', {
              confirmButtonText: '确认',
              dangerouslyUseHTMLString: true,
              cancelButtonText: '取消',
              type: 'warning',
              center: true
            }).then(() => {
              //
          }).catch(() => {});
        }

      },
    },
    created() {

    }
  }
</script>

<style scoped lang="scss">
</style>
