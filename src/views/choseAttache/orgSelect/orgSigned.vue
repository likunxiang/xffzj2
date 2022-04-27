<template>
  <div class="app-container">
    <div class="flex jsb flex-center">
      <searchCom @toSearch='search' :searchResult='searchResult' placeholderText='请输入你要找的机构名称'></searchCom>
      <div class="mb20 flex">
        <div class="flex flex-center mr20">
          <div class="mr10">合作状态</div>
          <el-select v-model="statusValue" placeholder="请选择">
              <el-option
                v-for="item in statusList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
        </div>
        <div class="flex flex-center">
          <div class="mr10">合同终止倒计时</div>
          <el-select v-model="contractValue" placeholder="请选择">
              <el-option
                v-for="item in contractList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
        </div>
      </div>
    </div>
    <el-table :data="tableData" border v-loading="loading">
      <el-table-column prop="cattypeName" label="机构名称" align="center"></el-table-column>
      <el-table-column prop="cattypeName" label="创建日期" align="center"></el-table-column>
      <el-table-column prop="cattypeName" label="领取日期" align="center"></el-table-column>
      <el-table-column prop="cattypeName" label="合同终止日期" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="text" @click="openSignDetail(scope.row)">查看签约记录</el-button>
        </template>
      </el-table-column>
    </el-table>
    <signedDetail v-if="isDetail" @close="closeDetail"></signedDetail>
    <pages @changePage="changePage" :total="pageTotal" :page="page"></pages>
  </div>
</template>

<script>
  import searchCom from '@/views/components/common/searchCom.vue'
  import pages from '@/views/components/common/pages'
  import signedDetail from "@/views/choseAttache/orgSelect/components/signedDetail"
  export default {
    name: "index",
    components: {
      searchCom,
      pages,
      signedDetail
    },
    data() {
      return {
        loading: false,
        tableData: [{
          cattypeName: '中国建设银行股份有限公司福建分公司'
        }],
        openRow: {},
        page: 1,
        pageTotal: 0,
        searchResult: 0,
        searchVal: '',
        statusValue: '',
        statusList: [
          {
            value: 0,
            label: '不限'
          },
          {
            value: 1,
            label: '在合作'
          },{
            value: 2,
            label: '未合作'
          }
        ],
        contractValue: '',
        contractList: [
          {
            value: 0,
            label: '不限'
          },
          {
            value: 1,
            label: '30天'
          },
          {
            value: 2,
            label: '60天'
          },
          {
            value: 3,
            label: '90天'
          },
        ],
        isDetail: false,

      };
    },
    methods: {
      openSignDetail(row) {
        this.openRow = row
        this.isDetail = true
      },
      closeDetail() {
        this.isDetail = false
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
    },
    created() {

    }
  }
</script>

<style scoped lang="scss">
</style>
