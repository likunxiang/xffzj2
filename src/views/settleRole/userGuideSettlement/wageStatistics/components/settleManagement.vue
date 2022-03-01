<template>
  <el-dialog title="结算管理" :visible.sync="isOpen" width="900px" @close="beforeClose">
    <el-row class="mb20 flex flex-center">
      <div class="bold label">年份</div>
      <div>2021</div>
    </el-row>
    <el-row class="mb20 flex">
      <div class="bold label">申请提现月份</div>
      <div>06</div>
    </el-row>
    <el-row class="mb20 flex">
      <div class="bold label">申请笔数</div>
      <div>10000</div>
    </el-row>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="未结算" name="1">
        <el-row class="flex flex-center mb10">
          <el-input placeholder="请输入你要找的联系电话" clearable v-model="searchVal"
            @keyup.enter.native="search" style="width: 200px;margin-right: 20px;" @clear="clearSearch">
			<i class="el-icon-search el-input__icon" slot="suffix" @click="search" />
          </el-input>
          <div class="" v-if="searchVal">搜索结果：{{searchResult}}</div>
        </el-row>
        <el-row style="padding-bottom: 40px;">
          <el-table :data="tableData" border height="50vh">
            <el-table-column prop="username" label="姓名" align="center">
            </el-table-column>
            <el-table-column prop="phonenumber" label="联系电话" align="center">
            </el-table-column>
            <el-table-column prop="earnings" label="结算金额" align="center">
            </el-table-column>
            <el-table-column prop="month" label="计酬月份" align="center">
            </el-table-column>
            <el-table-column label="报酬信息" align="center">
              <template slot-scope="scope">
                <el-row>
                  <el-button type="text" @click="openReward(scope.row)">劳务报酬信息</el-button>
                </el-row>
              </template>
            </el-table-column>
          </el-table>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="已结算" name="3">
        <el-row class="flex flex-center mb10">
          <el-input placeholder="请输入你要找的联系电话" clearable v-model="searchVal"
            @keyup.enter.native="search" style="width: 200px;margin-right: 20px;" @clear="clearSearch">
			<i class="el-icon-search el-input__icon" slot="suffix" @click="search" />
          </el-input>
          <div class="" v-if="searchVal">搜索结果：{{searchResult}}</div>
        </el-row>
        <el-row style="padding-bottom: 40px;">
          <el-table :data="tableData" border height="50vh">
            <el-table-column prop="withdrawApplyDay" label="提现申请日期" align="center">
            </el-table-column>
            <el-table-column prop="username" label="姓名" align="center">
            </el-table-column>
            <el-table-column prop="phonenumber" label="联系电话" align="center">
            </el-table-column>
            <el-table-column prop="earnings" label="结算金额" align="center">
            </el-table-column>
            <el-table-column prop="month" label="计酬月份" align="center">
            </el-table-column>
            <el-table-column label="报酬信息" align="center">
              <template slot-scope="scope">
                <el-row>
                  <el-button type="text" @click="openReward(scope.row)">劳务报酬信息</el-button>
                </el-row>
              </template>
            </el-table-column>
            <el-table-column label="申请情况" align="center">
              <template slot-scope="scope">
                <el-row>
                  <el-button type="text" @click="openAccountNumber(scope.row)">申请账号信息</el-button>
                </el-row>
                <el-row>
                  <el-button type="text" @click="openEarnings(scope.row)">收益提现信息</el-button>
                </el-row>
              </template>
            </el-table-column>
          </el-table>
        </el-row>
      </el-tab-pane>
    </el-tabs>

    <!-- 劳务报酬信息 -->
    <el-dialog title="劳务报酬信息" :visible.sync="isReward" width="700px" @close="beforeCloseReward" append-to-body>
      <el-row style="padding-bottom: 40px;">
        <el-descriptions border column="1" size="medium">
          <el-descriptions-item label="年度" :labelStyle="{'text-align': 'center'}"
            :contentStyle="{'text-align': 'center'}">{{contentFromObj.year}}</el-descriptions-item>
          <el-descriptions-item label="计酬月份" :labelStyle="{'text-align': 'center'}"
            :contentStyle="{'text-align': 'center'}">{{contentFromObj.month}}</el-descriptions-item>
          <el-descriptions-item label="采购服务费用分成" :labelStyle="{'text-align': 'center'}"
            :contentStyle="{'text-align': 'center'}">{{contentFromObj.purchase}}</el-descriptions-item>
          <el-descriptions-item label="供应服务费用分成" :labelStyle="{'text-align': 'center'}"
            :contentStyle="{'text-align': 'center'}">{{contentFromObj.supply}}</el-descriptions-item>
          <el-descriptions-item label="引导服务费用分成" :labelStyle="{'text-align': 'center'}"
            :contentStyle="{'text-align': 'center'}">{{contentFromObj.guide}}</el-descriptions-item>
          <el-descriptions-item label="合计" :labelStyle="{'text-align': 'center'}"
            :contentStyle="{'text-align': 'center'}">{{contentFromObj.total}}</el-descriptions-item>
        </el-descriptions>
      </el-row>
    </el-dialog>
    <!-- 劳务报酬信息 end -->
    <!-- 申请账号信息 -->
    <userMessage v-if="isUserMessage" @close="closePersonalinformation" :row="openRow"></userMessage>
    <!-- 申请账号信息 end -->
    <!-- 收益提现信息 -->
    <el-dialog title="收益提现信息" :visible.sync="isEarnings" width="700px" @close="beforeCloseEarnings" append-to-body>
      <el-row style="padding-bottom: 40px;">
        <el-descriptions border column="1" size="medium">
           <el-descriptions-item label="提现金额" :labelStyle="{'text-align': 'center'}" :contentStyle="{'text-align': 'center'}">{{contentFromObj.year}}</el-descriptions-item>
           <el-descriptions-item label="提现申请时间" :labelStyle="{'text-align': 'center'}" :contentStyle="{'text-align': 'center'}">{{contentFromObj.withdrawSupplyTime}}</el-descriptions-item>
           <el-descriptions-item label="提现方式" :labelStyle="{'text-align': 'center'}" :contentStyle="{'text-align': 'center'}">{{contentFromObj.withdrawType == 1?'支付宝':(contentFromObj.withdrawType == 2?'微信':'银行卡')}}</el-descriptions-item>
           <el-descriptions-item label="国家/ 区号" :labelStyle="{'text-align': 'center'}" :contentStyle="{'text-align': 'center'}">中国大陆（+86）</el-descriptions-item>
           <el-descriptions-item label="绑定提现方式的手机号" :labelStyle="{'text-align': 'center'}" :contentStyle="{'text-align': 'center'}">{{contentFromObj.phonenumber}}</el-descriptions-item>
        </el-descriptions>
      </el-row>
    </el-dialog>
    <!-- 收益提现信息 end -->
  </el-dialog>
</template>

<script>
  import userMessage from "@/views/components/common/autonymMessage.vue"
  import { withdrawStatistic,getEarningsMonthOfYear,withdrawDoneDetail } from '@/api/settleRoleApi/userGuideSettlement.js'
  export default {
    name: "index",
    components: {
      userMessage
    },
    data() {
      return {
        isOpen: true,
        searchVal: '',
        searchResult: 0,
        isUserMessage: false, // 申请账号信息开关
        isReward: false, // 劳务报酬信息开关
        isEarnings: false, // 收益提现信息开关，
        activeName: "1",
        tableData: [{
          date: '2021-06-30',
          name: '张三',
          tel: '（+86)18650767213',
          settle: '4588.00',
          month: '2021-04',
        }],
        contentFromObj: {
          year: '2020',
          month: '12',
          purchase: '1800.00',
          supply: '2000.00',
          guide: '10000.00',
          total: '13800.00'
        },
        earningObj: {} // 收益提现信息
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
      search() {
        this.searchResult = 1
      },
	  clearSearch() {
	    this.searchVal = ''
	    this.search()
	  },
      // 劳务报酬信息相关
      openReward(row) {
        this.isReward = true
        this.getEarningsMonthOfYear(row.month)
      },
      closeReward() {
        this.isReward = false
      },
      beforeCloseReward() {
        this.closeReward()
      },
      // 劳务报酬信息相关 end
      // 收益提现信息
      openEarnings(row) {
        this.isEarnings = true
        this.withdrawDoneDetail(row.month)
      },
      closeEarnings() {
        this.isEarnings = false
      },
      beforeCloseEarnings() {
        this.closeEarnings()
      },
      openAccountNumber(row) {
        this.isUserMessage = true
      },
      closeAccountNumber() {
        this.isUserMessage = false
      },
      async withdrawStatistic() {
        await withdrawStatistic({
          withdrwaStatus: this.activeName,
          year: this.row.year,
          month: this.row.month
        }).then(res => {
          this.tableData = res.Tag[0].Table
        })
      },
      async getEarningsMonthOfYear(month) {
        await getEarningsMonthOfYear({
          year: this.row.year,
          month: month
        }).then(res => {
          this.contentFromObj = res.Tag
          this.contentFromObj.total = parseFloat(res.Tag[0].Table[0].purchaseEarnings) + parseFloat(res.Tag[0].Table[0].supplyEarnings) + parseFloat(res.Tag[0].Table[0].guideEarnings)
          console.log(res);
        })
      },
      async withdrawDoneDetail(month) {
        await withdrawDoneDetail({
          userId: '',
          year: this.row.year,
          applyMonth: month
        }).then(res => {
          this.earningObj = res.Tag[0].Table
          console.log(res);
        })
      }
    },
    created() {
      this.withdrawStatistic()
      this.getRoleList()
    }
  };
</script>

<style lang="scss" scoped>
  .label {
    width: 120px;
  }

  .my-label {
    text-align: center !important;
    background-color: #1890FF;
  }
</style>
