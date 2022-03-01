<template>
  <el-dialog title="选择父级场景" width="700px" :visible.sync="isOpen" @close="beforeClose" append-to-body>
    <div class="flex flex-center">
      <div class="bold my-label">品类类型</div>
      <div>{{pageTitle}}</div>
    </div>
    <div class="flex flex-center mt10 mb20">
      <div class="bold my-label">需求场景</div>
      <div>{{treeTitle}}</div>
    </div>
    <el-tree :data="tableData" :props="defaultProps" @node-expand="getSon" @node-click="fatherChoose" v-loading="loading">
    </el-tree>
    <span slot="footer" class="dialog-footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="submitFather" :disabled="!fatherScene.guid">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
  import {
    getTopParentNameList_1_0_1, // 获取顶级
    getChildNameList_1_0_1
  } from '@/api/categoryRole/classDefinition.js'
  export default {
    name: "index",
    props: {
      parentObj: {
        type: Object,
        default: () => {
          return {}
        }
      },
      parentId: {
        type: String,
        default: ''
      },
      byteType: {
        type: String,
        default: '',
      },
      level: {
        type: String,
        default: '',
      },
      pageTitle: {
        type: String,
        default: ''
      },
      treeTitle: {
        type: String,
        default: ''
      },
      guid: {
        type: String,
        default: ''
      },
      byteType: {
        type: String,
        default: '',
      },
    },
    data() {
      return {
        isOpen: true,
        searchVal: '',
        searchResult: 0,
        isToSearch: false,
        chooseRadio: 0,
        chooseList: [],
        tableData: [],
        fatherScene: {},
        defaultProps: {
          children: 'children',
          label: 'name',
        },
        loading: true
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
      fatherChoose(data) {
        console.log(data);

        if (this.byteType=='edit' && this.parentId === data.guid) {
          this.$message({
            type: 'error',
            message: '不可以选择本身!'
          })
          this.fatherScene = {}
          return
        }
        this.fatherScene = data
      },
      submitFather() {
        let data = this.fatherScene
        this.$emit('getFather', data)
        this.close()
      },
      chooseSubmit() {
        let id = this.chooseRadio
        let data = {}
        for (let i in this.chooseList) {
          if (id == this.chooseList[i].guid) {
            data = this.chooseList[i]
          }
        }
        console.log(data);
        this.$emit('getRadio', data)
        this.close()
      },

      getTableData() {
        getTopParentNameList_1_0_1({
          catreeGuid: this.guid
        }).then(res => {
          this.loading = false
          if (res.Tag.length) {
            let data = res.Tag[0].Table
            for (let i in data) {
              if (data[i].hasSon == '1') {
                data[i].children = [{
                  name: '加载中...'
                }]
              }
            }
            this.tableData = data
          } else {
            this.tableData = []
          }
          console.log('tableData', this.tableData);
          this.tableData = this.clone(this.tableData)
        })
      },
      getSon(data) {
        console.log('hasSon', data.hasSon);
        if (data.hasSon == '1') {
          this.getSonList(data)
        } else {
          return
        }

      },
      async getSonList(data) {
        let id = data.guid
        await getChildNameList_1_0_1({
          parentGuid: id,
        }).then(res => {
          console.log(res);
          if (res.Tag.length) {
            // let data = res.Tag[0].Table
            let arr = res.Tag[0].Table
            for (let i in arr) {
              if (arr[i].hasSon == '1') {
                arr[i].children = [{
                  name: '加载中...'
                }]
              }
            }
            data.children = arr
          } else {
            data.children = []
          }
        })
      },
    },
    created() {
      this.getTableData()
    }
  };
</script>

<style lang="scss" scoped>
  .my-label {
    width: 120px;
  }
</style>
