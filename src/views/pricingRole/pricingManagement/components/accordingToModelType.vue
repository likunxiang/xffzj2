<template>
  <el-dialog title="按型号类型收取管理" :visible.sync="isOpen" width="700px" @close="beforeClose">
    <div>
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
        <div>按型号类型</div>
      </el-row>
      <el-divider></el-divider>
      <el-button type="primary">新建服务定价</el-button>
      <el-table :data="tableData" border v-loading="loading">
        <el-table-column prop="orgName" label="创建日期" align="center"></el-table-column>
        <el-table-column prop="createTime" label="收取对象" align="center"></el-table-column>
        <el-table-column prop="createTime" label="收取方式" align="center"></el-table-column>
        <el-table-column prop="createTime" label="收取数值" align="center"></el-table-column>
      </el-table>
      <pages @changePage="changePage" :total="pageTotal" :page="page"></pages>
    </div>
  </el-dialog>
</template>

<script>
  import pages from '@/views/components/common/pages'
  export default {
    name: "index",
    components: {
      searchCom,
      pages
    },
    openRow: {
      type: Object,
      default: () => {
        return {}
      }
    },
    data() {
      return {
        isOpen: true,
        page: 1,
        pageTotal: 0,
        tableData: [],
        loading: false,
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
      changePage(page) {
        this.page = page
        //
      },
    },
    created() {

    }
  };
</script>

<style lang="scss" scoped>
</style>
