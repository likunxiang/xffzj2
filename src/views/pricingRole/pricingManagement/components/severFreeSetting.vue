<template>
  <el-dialog title="服务费用设置" :visible.sync="isOpen" width="700px" @close="beforeClose" append-to-body>
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
      <el-row class="flex mb20 mt10">
        <div class="bold" style="width: 120px;">型号名称</div>
        <div>华为P30</div>
      </el-row>
      <el-divider></el-divider>
      <el-button type="primary">新建服务定价</el-button>
      <el-table :data="tableData" border v-loading="loading">
        <el-table-column prop="orgName" label="创建日期" align="center"></el-table-column>
        <el-table-column prop="createTime" label="收取对象" align="center"></el-table-column>
        <el-table-column prop="createTime" label="收取方式" align="center"></el-table-column>
        <el-table-column prop="createTime" label="收取数值" align="center"></el-table-column>
        <el-table-column prop="createTime" label="起始时间" align="center"></el-table-column>
        <el-table-column prop="createTime" label="终止时间" align="center"></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button type="text" @click="openPricing(scope.row)">详情</el-button>
          </template>
          <template slot-scope="scope">
            <el-button type="text" @click="delPricing(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <pages @changePage="changePage" :total="pageTotal" :page="page"></pages>
    </div>
  </el-dialog>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        isOpen: true,
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
      openPricing() {

      },
      delPricing() {

      },
    },
    created() {

    }
  };
</script>

<style lang="scss" scoped>
</style>
