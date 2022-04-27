<template>
  <el-dialog title="查看签约记录" :visible.sync="isOpen" width="700px" @close="beforeClose">
    <div style="padding-bottom: 20px;">
      <el-row class="mb20 flex flex-center">
        <div class="bold label">机构名称</div>
        <div>福建省华夏信融数据服务有限公司</div>
      </el-row>
      <el-row class="mb20 flex">
        <div class="bold label">领取日期</div>
        <div>2022-04-01 12：58</div>
      </el-row>
      <div class="flex flex-center">
        <el-button type="primary" @click="openSginForm">签约</el-button>
        <!-- <el-button type="primary" @click="openAdd">续约</el-button> -->
      </div>
      <div class="mt20">
        <el-table :data="tableData" border v-loading="loading">
          <el-table-column align="center" width="50" >
            <template slot-scope="scope">
              <div class="el-icon-question" style="font-size: 20px;" v-if="scope.$index > 1" @click="openQuestion"></div>
            </template>
          </el-table-column>
          <el-table-column type="index" label="序号" align="center" width="60">
          </el-table-column>
          <el-table-column prop="cattypeName" label="合同编号" align="center"></el-table-column>
          <el-table-column prop="startDate" label="合同起始日期" align="center"></el-table-column>
          <el-table-column prop="endDate" label="合同终止日期" align="center"></el-table-column>
          <el-table-column prop="time" label="合作时长" align="center"></el-table-column>
          <el-table-column label="操作" align="center" fixed="right" width="80">
            <template slot-scope="scope">
              <el-button type="text" @click="delSign(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <sginedForm v-if="isSgin" @close="closeSginForm" @refresh=""></sginedForm>
    <questionTips v-if="isQuestion" @close="closeQuestion"></questionTips>
  </el-dialog>
</template>

<script>
  import sginedForm from "@/views/choseAttache/orgSelect/components/sginedForm"
  import questionTips from "@/views/choseAttache/orgSelect/components/questionTips"
  export default {
    name: "index",
    components: {
      sginedForm,
      questionTips
    },
    data() {
      return {
        isOpen: true,
        loading: false,
        isSgin: false,
        isQuestion: false,
        tableData: [{
          cattypeName: '2022040200000001',
          startDate: '20220401',
          endDate: '20230331',
          time: '1年',
        },{
          cattypeName: '2022040200000001',
          startDate: '20220401',
          endDate: '20230331',
          time: '1年',
        },{
          cattypeName: '2022040200000001',
          startDate: '20220401',
          endDate: '20230331',
          time: '1年',
        },]
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
      delSign(row) {
        // 删除
        this.$confirm(
          '<p align="left">没有合同约定，合同期间，该机构将收不到采购需求。</p><p align="left">确认删除</p>',
          '删除合同', {
            confirmButtonText: '确认',
            dangerouslyUseHTMLString: true,
            cancelButtonText: '取消',
            type: 'warning',
          }).then(() => {
            //
        }).catch(() => {});
      },
      openSginForm() {
        this.isSgin = true
      },
      closeSginForm() {
        this.isSgin = false
      },
      openQuestion() {
        this.isQuestion = true
      },
      closeQuestion() {
        this.isQuestion = false
      }
    },
    created() {

    }
  };
</script>

<style lang="scss" scoped>
</style>
