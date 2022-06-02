<template>
  <el-dialog title="查看服务专员详情" :visible.sync="isOpen" width="700px" @close="beforeClose">
    <div style="padding-bottom: 60px;">
      <el-descriptions :colon="false" class="margin-top" :column="1" :border="true" style="margin-bottom: 20px;">
        <el-descriptions-item label-class-name="my-label" content-class-name="my-content" label="年份">{{row.year}}
        </el-descriptions-item>
        <el-descriptions-item label-class-name="my-label" content-class-name="my-content" label="月份">{{row.mouth}}
        </el-descriptions-item>
        <el-descriptions-item label-class-name="my-label" content-class-name="my-content" label="日期">{{row.mouth}}
        </el-descriptions-item>
        <el-descriptions-item label-class-name="my-label" content-class-name="my-content" label="账号名称">{{row.mouth}}
        </el-descriptions-item>
        <el-descriptions-item label-class-name="my-label" content-class-name="my-content" label="账号开通日期">{{row.mouth}}
        </el-descriptions-item>
        <el-descriptions-item label-class-name="my-label" content-class-name="my-content" label="姓名">{{row.mouth}}
        </el-descriptions-item>
        <el-descriptions-item label-class-name="my-label" content-class-name="my-content" label="国家/区号">{{row.mouth}}
        </el-descriptions-item>
        <el-descriptions-item label-class-name="my-label" content-class-name="my-content" label="联系电话">{{row.mouth}}
        </el-descriptions-item>
        <el-descriptions-item label-class-name="my-label" content-class-name="my-content" label="所在地点">{{row.mouth}}
        </el-descriptions-item>
        <el-descriptions-item label-class-name="my-label" content-class-name="my-content" label="新增注册对象数量" v-if="pageStatus == '1'">{{row.objNumber}}
        </el-descriptions-item>
        <el-descriptions-item label-class-name="my-label" content-class-name="my-content" label="采购验收通过订单数量" v-if="pageStatus == '2'">{{row.objNumber}}
        </el-descriptions-item>
        <el-descriptions-item label-class-name="my-label" content-class-name="my-content" label="供应验收通过订单数量" v-if="pageStatus == '3'">{{row.objNumber}}
        </el-descriptions-item>
      </el-descriptions>
      <el-divider></el-divider>
      <searchCom @toSearch='search' :searchResult='searchResult' placeholderText='请输入你要找的机构或者联系电话' v-if="pageStatus!='1'"></searchCom>
      <el-table :data="tableData" border v-loading="loading">
        <el-table-column prop="nickName" label="姓名" align="center"></el-table-column>
        <el-table-column prop="nation" label="国家/ 地区" align="center"></el-table-column>
        <el-table-column prop="phonenumber" label="联系电话" align="center"></el-table-column>
        <el-table-column prop="phonenumber" label="任职机构" align="center"></el-table-column>
        <el-table-column prop="phonenumber" label="岗位类型" align="center"></el-table-column>
        <el-table-column prop="phonenumber" label="岗位名称" align="center"></el-table-column>
        <el-table-column prop="createTime" label="创建日期" align="center"></el-table-column>
        <el-table-column prop="createTime" label="注册日期" align="center" v-if="pageStatus == '1'"></el-table-column>
        <el-table-column prop="nickName" label="采购需求成交订单数量" align="center" v-if="pageStatus == '2'">
          <template slot-scope="scope">
            <el-button style="text-decoration: underline;" type="text" @click="delInfo(scope.row)">{{scope.row.demandNumber}}</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="nickName" label="供应验收通过订单数量" align="center" v-if="pageStatus == '3'">
          <template slot-scope="scope">
            <el-button style="text-decoration: underline;" type="text" @click="delInfo(scope.row)">{{scope.row.demandNumber}}</el-button>
          </template>
        </el-table-column>
      </el-table>
      <pages @changePage="changePage" :total="pageTotal" :page="page"></pages>
    </div>
  </el-dialog>
</template>

<script>
  import searchCom from '@/views/components/common/searchCom.vue'
  import pages from '@/views/components/common/pages'
  export default {
    name: "index",
    components: {
      pages,
      searchCom
    },
    props: {
      row: {
        type: Object,
        default: () => {
          return {}
        }
      },
      pageStatus: {
        type: String,
        default: '1'
      }
    },
    data() {
      return {
        isOpen: true,
        loading: false,
        tableData: [],
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
      changePage(page) {
        this.page = page
        //
      },
      search(data) {
        this.searchVal = data
        this.page = 1
        //
      },
    },
    created() {

    }
  };
</script>

<style lang="scss" scoped>
</style>
