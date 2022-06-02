<template>
  <div class="app-container">
    <div class="flex flex-center mb20">
      <div class="mr10">年份</div>
      <el-date-picker v-model="value1" type="year" placeholder="选择年份">
      </el-date-picker>
    </div>
    <el-table :data="tableData" border v-loading="loading">
      <el-table-column prop="year" label="年份" align="center"></el-table-column>
      <el-table-column prop="mouth" label="月份" align="center"></el-table-column>
      <el-table-column prop="nickName" label="新增注册对象数量" align="center">
        <template slot-scope="scope">
          <el-button style="text-decoration: underline;" type="text" @click="openRegisterDetail(scope.row)">{{scope.row.objNumber}}</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="nickName" label="采购验收通过订单数量" align="center">
        <template slot-scope="scope">
          <el-button style="text-decoration: underline;" type="text" @click="openDemandOrder(scope.row)">{{scope.row.demandNumber}}</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="nickName" label="供应验收通过订单数量" align="center">
        <template slot-scope="scope">
          <el-button style="text-decoration: underline;" type="text" @click="openSupplyOrder(scope.row)">{{scope.row.supplyNumber}}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pages @changePage="changePage" :total="pageTotal" :page="page"></pages>
    <addRegisterObj v-if="isRegister" @close="closeRegisterDetail" :row="openRow"></addRegisterObj>
    <demandCheckOrder v-if="isDemand" @close="closeDemandOrder" :row="openRow"></demandCheckOrder>
    <supplyCheckOrder v-if="isSupply" @close="closeSupplyOrder" :row="openRow"></supplyCheckOrder>
  </div>
</template>

<script>
  import pages from '@/views/components/common/pages'
  import addRegisterObj from '@/views/serviceGovernor/serviceProgress/components/addRegisterObj'
  import demandCheckOrder from '@/views/serviceGovernor/serviceProgress/components/demandCheckOrder'
  import supplyCheckOrder from '@/views/serviceGovernor/serviceProgress/components/supplyCheckOrder'
  export default {
    name: "index",
    components: {
      pages,
      addRegisterObj,
      demandCheckOrder,
      supplyCheckOrder
    },
    data() {
      return {
        loading: false,
        tableData: [{
          year: '2022',
          mouth: '08',
          objNumber: '10',
          demandNumber: '20',
          supplyNumber: '30'
        }],
        page: 1,
        pageTotal: 0,
        value1: '',
        openRow: {},
        isRegister: false,
        isDemand: false,
        isSupply: false,
      };
    },
    methods: {
      changePage(page) {
        this.page = page
        //
      },
      openRegisterDetail(row) {
        this.openRow = row
        this.isRegister = true
      },
      closeRegisterDetail(row) {
        this.isRegister = false
      },
      openDemandOrder(row) {
        this.isDemand = true
        this.openRow = row
      },
      closeDemandOrder() {
        this.isDemand = false
      },
      openSupplyOrder(row) {
        this.isSupply = true
        this.openRow = row
      },
      closeSupplyOrder() {
        this.isSupply = false
      },

    },
    created() {

    }
  }
</script>

<style scoped lang="scss">
</style>
