<template>
  <el-dialog :title="title" :visible.sync="isOpen" width="700px" @close="beforeClose" :close-on-click-modal="false">
    <el-row>
      <el-descriptions border :column="1" size="medium">
        <el-descriptions-item label="品类名称">{{categoryName}}</el-descriptions-item>
        <el-descriptions-item label="板块名称">{{fieldObj.plateName}}</el-descriptions-item>
        <el-descriptions-item label="板块类型">{{fieldObj.plateTypeName}}</el-descriptions-item>
        <el-descriptions-item label="字段名称">{{fieldObj.plateFieldName}}</el-descriptions-item>
        <el-descriptions-item label="字段名称来源">{{fieldObj.plateFieldSource=="1"?'固化':'自建'}}</el-descriptions-item>
      </el-descriptions>
    </el-row>
    <el-row>
      <p><span class="bold mr20">内容来源设置</span>
        <span>{{contentSources}}</span>
      </p>
    </el-row>

    <el-row v-if="fieldObj.catTreeCode=='demand'">
      <!-- 需方需方需方 -->
      <el-row>
        <el-row v-if="fieldObj.plateFieldContentSource == 0">
          <!-- 未设置 -->
        </el-row>
        <el-row v-else-if="fieldObj.plateFieldContentSource == 1">
          <el-row>
            <p class="bold">请选择</p>
          </el-row>
          <!-- 固化 -->

          <el-radio-group v-model="radioDemander">
            <el-row class="mb10">
              <el-radio :label="1">单选</el-radio>
            </el-row>
          </el-radio-group>
        </el-row>
        <el-row v-else-if="fieldObj.plateFieldContentSource == 2">
          <el-row>
            <p class="bold">请选择</p>
          </el-row>
          <!-- 自建 -->
          <el-radio-group v-model="radioDemander">
            <el-row class="mb10" v-for="(item,index) in demanderList" :key="index">
              <el-radio :label="item.id">{{item.name}}</el-radio>
            </el-row>
          </el-radio-group>
        </el-row>
        <el-row v-else>
          <el-row>
            <p class="bold">请选择</p>
          </el-row>
          <!-- 供方/需方 -->
          <!-- 自建和固化可选内容不同 -->
          <el-row v-if="fieldObj.plateFieldSource=='1'">
            <el-radio-group v-model="radioDemander">
              <el-row class="mb10">
                <el-radio :label="3">填写</el-radio>
              </el-row>
            </el-radio-group>
            <el-input type="textarea" placeholder="请输入需方填写时的注意点或者提示语" v-model="inputDemander"></el-input>
          </el-row>
          <el-row v-else>
            <el-radio-group v-model="radioDemander">
              <el-row class="mb10">
                <el-radio :label="3">填写</el-radio>
                <el-radio :label="4">图片上传</el-radio>
                <el-radio :label="5">文档上传</el-radio>
              </el-row>
            </el-radio-group>
            <el-input v-if="radioDemander==3" type="textarea" placeholder="请输入需要需方填写或者上传时的注意要点" v-model="inputDemander"></el-input>
            <!-- 是否能上传文档 -->
            <!-- <div v-if="radioDemander>3">
              <el-row>
                <p class="bold">是否需要下载待传文件模板</p>
              </el-row>
              <el-row>
                <el-radio-group v-model="radioDown">
                  <el-row class="mb10">
                    <el-radio :label="1">否</el-radio>
                    <el-radio :label="2">是</el-radio>
                  </el-row>
                </el-radio-group>
                <div>
                  <el-upload ref="upload" class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" show-file-list
                    multiple :limit="1" :on-progress="uploading" :on-success="uploadSuccess" :on-exceed="handleExceed"
                    :auto-upload="false" :before-upload="beforeUpload" :file-list="fileList">
                    <el-button size="small" type="primary">点击上传</el-button>
                  </el-upload>
                </div>
              </el-row>
            </div> -->
          </el-row>
        </el-row>
      </el-row>
    </el-row>
    <el-row v-else>
      <el-row v-if="fieldObj.plateFieldContentSource == 0">
        <!-- 未设置 -->
      </el-row>
      <el-row v-else-if="fieldObj.plateFieldContentSource == 1">
        <el-radio-group v-model="radioDemander">
          <el-row class="mb10">
            <el-radio :label="1">单选</el-radio>
          </el-row>
        </el-radio-group>
      </el-row>
      <el-row v-else-if="fieldObj.plateFieldContentSource == 2">
        <el-radio-group v-model="radioDemander">
          <el-row class="mb10">
            <el-radio :label="1">单选</el-radio>
          </el-row>
        </el-radio-group>
      </el-row>
      <el-row v-else-if="fieldObj.plateFieldContentSource == 3">
        <el-radio-group v-model="radioDemander">
          <el-row class="mb10">
            <el-radio :label="1">单选</el-radio>
            <el-radio :label="2">多选</el-radio>
          </el-row>
        </el-radio-group>
      </el-row>
      <el-row v-else-if="fieldObj.plateFieldContentSource == 4">
        <div v-if="fieldObj.plateFieldSource=='1'">
          <el-radio-group v-model="radioDemander">
            <el-row class="mb10">
              <el-radio :label="3">填写</el-radio>
            </el-row>
          </el-radio-group>
          <el-input type="textarea" placeholder="请输入需方填写时的注意点或者提示语" v-model="inputDemander"></el-input>
        </div>
        <div v-else-if="fieldObj.plateFieldSource=='2'">
          <el-radio-group v-model="radioDemander">
            <el-row class="mb10">
              <el-radio :label="3">填写</el-radio>
              <el-radio :label="4">图片上传</el-radio>
              <el-radio :label="5">文档上传</el-radio>
            </el-row>
          </el-radio-group>
          <el-input v-if="radioDemander==3" type="textarea" placeholder="请输入需要需方填写或者上传时的注意要点" v-model="inputDemander"></el-input>
          <!-- 是否能上传文档 -->
          <!-- <div v-if="radioDemander>3">
            <el-row>
              <p class="bold">是否需要下载待传文件模板</p>
            </el-row>
            <el-row>
              <el-radio-group v-model="radioDown">
                <el-row class="mb10">
                  <el-radio :label="1">否</el-radio>
                  <el-radio :label="2">是</el-radio>
                </el-row>
              </el-radio-group>
              <div>
                <el-upload ref="upload" class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" show-file-list
                  multiple :limit="1" :on-progress="uploading" :on-success="uploadSuccess" :on-exceed="handleExceed"
                  :auto-upload="false" :before-upload="beforeUpload" :file-list="fileList">
                  <el-button size="small" type="primary">点击上传</el-button>
                </el-upload>
              </div>
            </el-row>
          </div> -->
        </div>
      </el-row>
    </el-row>

    <span slot="footer" class="dialog-footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="submitDemander" :disabled="!radioDemander">确 定</el-button>
    </span>

    <batchImport v-if="isImport"></batchImport>
  </el-dialog>
</template>

<script>
  import {
    setSDOperation,
  } from '@/api/modelRoleApi/tradingContent.js'
  import batchImport from '@/views/modelRole/tradingContent/components/batchImport.vue' // 批量导入
  export default {
    name: "index",
    props: {
      type: {
        type: String,
        default: 'demand'
      },
      categoryName: {
        type: String,
        default: ''
      },
      fieldObj: {
        type: Object,
        default: () => {
          return {}
        }
      }
    },
    components: {
      batchImport
    },
    data() {
      return {
        isOpen: true,
        isImport: false,
        title: '',
        contentSources: '',
        radioDemander: 0,
        radioDown: 0, // 是否需要下载待传文件模板
        inputDemander: '', // 填写内容
        demanderList: [{
          id: 1,
          name: '单选'
        }],
        fileList: [{
          name: 'food.jpeg',
          url: ''
        }, {
          name: 'food2.jpeg',
          url: ''
        }], // 上传文件列表
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
      submitDemander() {

        if (this.radioDown == 2) {
          if (!this.fileList.length) {
            this.$message({
              type: 'error',
              message: '请选择上传文件'
            })
          } else {
            this.setSDOperation()
            this.close()
            this.submitUpload()
          }
        } else {
          this.setSDOperation()
          this.close()
        }
      },
      async setSDOperation() {
        let placeholder = ''
        if (this.radioDemander == 3) {
          placeholder = this.inputDemander
        }
        if (this.radioDemander > 3) {
          placeholder = this.fileList[0].url || this.inputDemander
        }
        await setSDOperation({
          plateFieldGuid: this.fieldObj.plateFieldGuid,
          operation: this.radioDemander,
          placeholder: placeholder,
        }).then(res => {
          this.$emit('refresh')
          this.close()
        })
      },


      // 上传文件
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      // 检验文件类型
      beforeUpload(file) {
        let radioDemander = this.radioDemander
        let isType = ''
        if (radioDemander == 4) {
          isType = 'image/jpeg'
        } else {
          isType = 'xls/xlsx'
        }
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isType) {
          this.$message.error('只能上传相应格式文件！');
        }
        if (!isLt2M) {
          this.$message.error('上传文件大小不能超过 2MB!');
        }
        return isType && isLt2M;
      },
      uploading() {
        const loading = this.$loading({
          lock: true,
          text: '文件上传中',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        this.loadingPop = loading
      },
      uploadSuccess(response, file, fileList) {
        this.loadingPop.close()
        this.$alert(response.msg, "导入结果", {
          dangerouslyUseHTMLString: true
        });
        this.isLead = false
      },
      submitUpload() {
        this.$refs.upload.submit();
      },
    },
    created() {
      this.radioDemander = parseInt(this.fieldObj.operation)
      if (this.type == "demand") {
        this.title = "需方操作设置"

      } else {
        this.title = "供方操作设置"
      }
      if (this.fieldObj.plateFieldContentSource == "0") {
        this.contentSources = '未设置'
      } else if (this.fieldObj.plateFieldContentSource == "1") {
        this.contentSources = '固化'
      } else if (this.fieldObj.plateFieldContentSource == "2") {
        this.contentSources = '自建'
      } else if (this.fieldObj.plateFieldContentSource == "3") {
        this.contentSources = '需方'
      } else {
        this.contentSources = '供方'
      }
      console.log(this.fieldObj);
      this.inputDemander = this.fieldObj.placeholder
    }
  };
</script>

<style lang="scss" scoped>
</style>
