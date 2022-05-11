<template>
  <el-dialog title="服务定价设置" :visible.sync="isOpen" width="700px" @close="beforeClose" append-to-body>
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
      <el-row class="flex mb20">
        <div class="bold" style="width: 120px;">收取对象</div>
        <div>{{targetObject == 'supply'?'供方':'需方'}}</div>
      </el-row>
      <el-row class="flex mb20">
        <div class="bold" style="width: 120px;">收取方式</div>
        <el-input placeholder="请输入整数" v-model="collectRatio" style="width: 110px;" type="number"></el-input>
      </el-row>
      <el-row class="flex mb20 flex-center">
        <div class="bold" style="width: 120px;">收取比例</div>
        <div class="flex flex-center">
          <el-input placeholder="请输入整数" v-model="collectRatio" style="width: 110px;" type="number"></el-input>
          <div>%</div>
        </div>
      </el-row>
      <el-row>
        <div v-if="true">
          提示：这个型号的采购费用=供方的服务定价基数*采购数量+供方的服务定价基数*收取数值*采购数量
        </div>
        <div v-else>
          提示：这个型号的采购费用=供方的服务定价基数*采购数量+收取数值*采购数量
        </div>
      </el-row>
      <el-row class="flex mb20">
        <div class="bold" style="width: 120px;">起始时间</div>
        <el-input placeholder="请输入整数" v-model="collectRatio" style="width: 110px;" type="number"></el-input>
      </el-row>
      <el-row class="flex mb20">
        <div class="bold" style="width: 120px;">终止时间</div>
        <el-input placeholder="请输入整数" v-model="collectRatio" style="width: 110px;" type="number"></el-input>
      </el-row>
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
    },
    created() {

    }
  };
</script>

<style lang="scss" scoped>
</style>
