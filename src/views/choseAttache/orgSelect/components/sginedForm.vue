<template>
  <el-dialog title="签约" :visible.sync="isOpen" width="700px" @close="beforeClose" append-to-body>
    <div>
      <el-row class="mb20 flex flex-center">
        <div class="label mr20">机构名称</div>
        <div>福建省华夏信融数据服务有限公司</div>
      </el-row>
      <el-row class="mb20 flex">
        <div class="label mr20">领取日期</div>
        <div>2022-04-01 12：58</div>
      </el-row>

    </div>
    <div style="height: 800px;">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="110px" class="demo-ruleForm">
        <el-col :span="24">
          <div class="title-bg mb10">签约对象信息</div>
        </el-col>

        <el-col :span="18">
          <el-form-item label="机构名称">
            福建省华夏信融数据服务有限公司
          </el-form-item>
        </el-col>
        <el-col :span="18">
          <el-form-item label="机构地址" prop="address">
            <el-input v-model="ruleForm.address" placeholder="请填写合同上的机构地址" maxlength="30" />
          </el-form-item>
        </el-col>
        <el-col :span="18">
          <el-form-item label="法定代表人" prop="legal">
            <el-input v-model="ruleForm.legal" placeholder="请填写合同上的法定代表人姓名" maxlength="30" />
          </el-form-item>
        </el-col>
        <el-col :span="18">
          <el-form-item label="合同联系人" prop="linkman">
            <el-input v-model="ruleForm.linkman" placeholder="请填写合同上的联系人姓名" maxlength="30" />
          </el-form-item>
        </el-col>
        <el-col :span="18">
          <el-form-item label="国家/地区">
            中国大陆
          </el-form-item>
        </el-col>
        <el-col :span="18">
          <el-form-item label="联系电话" prop="phone">
            <el-input v-model="ruleForm.phone" placeholder="请填写合同上的电话" maxlength="30" />
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <div class="title-bg mb10">签约合作信息</div>
        </el-col>

        <el-col :span="18">
          <el-form-item label="合同编号" prop="contractNumber">
            <el-input v-model="ruleForm.contractNumber" placeholder="请填写合同上的合同编号" maxlength="30" />
          </el-form-item>
        </el-col>
        <el-col :span="18">
          <el-form-item label="合同起始日期" prop="contractStart">
            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.contractStart" value-format="yyyy-MM-dd" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="18">
          <el-form-item label="合同时长" prop="contractTime">
             <el-select v-model="ruleForm.contractTime" placeholder="请选择">
                <el-option
                  v-for="item in contractTimeList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="18">
          <el-form-item label="合同终止日期" prop="contractEnd">
            <el-input v-model="contractEnd" placeholder="由合同起始日期+合作时长" maxlength="30" readonly />
          </el-form-item>
        </el-col>
        <el-col>
          <el-upload style="text-align: left !important;" ref="upload" class="upload-demo" action="" :on-preview="handlePreview" :accept="accptSting"
            :on-remove="handleRemove" :on-change="changeFile" :before-remove="beforeRemove" show-file-list :on-success="uploadSuccess"
            multiple :http-request="uploadFile" :limit="1" :on-progress="uploading" :on-exceed="handleExceed"
            :auto-upload="false" :before-upload="beforeUpload" :file-list="fileList">
            <div style="text-align: left !important;">
              <el-button size="small" type="primary" >上传合同电子档案</el-button>
              <div>请将合同每个页面按照页数标号，拍照后，编写对应页码，压缩成合同包上传。文档命名格式：供方接单服务合作协议（机构名称）</div>
            </div>
          </el-upload>
        </el-col>

      </el-form>

    </div>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
  import "@riophae/vue-treeselect/dist/vue-treeselect.css";
  export default {
    name: "index",
    computed: {
      contractEnd() {
        console.log(this.ruleForm.contractStart.split('-'));

        if (this.ruleForm.contractStart && this.ruleForm.contractTime) {
          let contractStart = this.ruleForm.contractStart.split('-')
          this.ruleForm.contractEnd = parseInt(contractStart[0]) + parseInt(this.ruleForm.contractTime) + '-' + contractStart[1] + '-' + contractStart[2]
          return parseInt(contractStart[0]) + parseInt(this.ruleForm.contractTime) + '-' + contractStart[1] + '-' + contractStart[2]
        } else {
          return ''
        }



      }
    },
    data() {
      return {
        isOpen: true,
        ruleForm: {
          address: '',
          legal: '',
          linkman: '',
          phone: '',
          contractNumber: '',
          contractStart: '',
          contractTime: '',
          contractEnd: this.contractEnd,
        },
        rules: {
          address: [{
            required: true,
            message: '必填',
            trigger: 'change'
          }],
          legal: [{
            required: true,
            message: '必填',
            trigger: 'change'
          }],
          linkman: [{
            required: true,
            message: '必填',
            trigger: 'change'
          }],
          phone: [{
            required: true,
            message: '必填',
            trigger: 'change'
          }],
          contractNumber: [{
            required: true,
            message: '必填',
            trigger: 'change'
          }],
          contractStart: [{
            required: true,
            message: '必填',
            trigger: 'change'
          }],
          contractTime: [{
            required: true,
            message: '必填',
            trigger: 'change'
          }],
          contractEnd: [{
            required: true,
            message: '必填',
            trigger: 'change'
          }],

        },
        contractTimeList: [{
          value: 1,
          label: '1年',
        },{
          value: 2,
          label: '2年',
        },{
          value: 3,
          label: '3年',
        },{
          value: 4,
          label: '4年',
        },{
          value: 5,
          label: '5年',
        }],
        fileList: [], // 上传文件列表
        loading: false, // 上传文件提示
        accptSting: '', // 文件类型限制
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
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.ruleForm);
            alert('submit')
          } else {
            console.log('error submit!!');
            return false;
          }
        });
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
        if (file && file.status === "success") {
          return this.$confirm(`确定移除 ${ file.name }？`);
        }


      },
      // 检验文件类型
      beforeUpload(file) {
        console.log(9999,file);

        var testmsg = file.name.substring(file.name.lastIndexOf('.') + 1)
        console.log('testmsg', testmsg);
        const extension = testmsg === 'xls'
        const extension2 = testmsg === 'xlsx'
        const extension3 = testmsg === 'doc'
        const extension4 = testmsg === 'docx'
        const extension9 = testmsg === 'ppt'
        const extension10 = testmsg === 'pdf'
        const extension11 = testmsg === 'zip'
        const extension12 = testmsg === 'rar'
        const extension13 = testmsg === '7z'
        const extension14 = testmsg === 'txt'
        const extension15 = testmsg === 'csv'
        const extension5 = testmsg === 'png'
        const extension6 = testmsg === 'jpeg'
        const extension7 = testmsg === 'jpg'
        const extension8 = testmsg === 'gif'
        // 限制文件大小
        const isLt3M = file.size / 1024 / 1024 < 3
        const isLt50M = file.size / 1024 / 1024 < 50
        if (this.radioDemander == 4) {
          if (!extension5 && !extension6 && !extension7 && !extension8 && !extension && !extension2 && !extension3 && !extension4 && !extension9 && !extension10 && !extension11 && !extension12 && !extension13 && !extension14 && !extension15) {
            this.$message({
              message: '上传图片只能上传png、jpeg、jpg、gif、doc、docx、xls、xlsx、ppt、pdf、zip、rar、7z、txt、csv格式!',
              type: 'warning'
            });
            return extension5 || extension6 || extension7 || extension8 || extension || extension2 || extension3 || extension4 || extension9 || extension10 || extension11 || extension12 || extension13 || extension14 || extension15
          }
          if (!isLt50M) {
            this.$message({
              message: '上传文件大小不能超过 50MB!',
              type: 'warning'
            });
            return isLt50M
          }
          return extension5 || extension6 || extension7 || extension8 || extension || extension2 || extension3 || extension4 || extension9 || extension10 || extension11 || extension12 || extension13 || extension14 || extension15 || isLt50M
        } else if (this.radioDemander == 5) {
          if (!extension && !extension2 && !extension3 && !extension4 && !extension9 && !extension10 && !extension11 && !extension12 && !extension13 && !extension14 && !extension15) {
            this.$message({
              message: '上传文件只能上传doc、docx、xls、xlsx、ppt、pdf、zip、rar、7z、txt、csv格式!',
              type: 'warning'
            });
            return extension || extension2 || extension3 || extension4 || extension9 || extension10 || extension11 || extension12 || extension13 || extension14 || extension15
          }
          if (!isLt50M) {
            this.$message({
              message: '上传文件大小不能超过 50MB!',
              type: 'warning'
            });
            return isLt50M
          }
          return extension || extension2 || extension3 || extension4 || extension9 || extension10 || extension11 || extension12 || extension13 || extension14 || extension15 || isLt50M

        }




      },
      uploading() {
        console.log(888);
        const loading = this.$loading({
          lock: true,
          text: '文件上传中',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        this.loadingPop = loading
      },
      uploadSuccess(response, file, fileList) {
        this.setSDOperation()
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      // 选择文件
      changeFile(file, fileList) {
        console.log(file);
        this.fileList = fileList
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
        this.fileList = fileList
      },
      // 正经上传文件
      async uploadFile(item) {
        console.log(item);
        this.loading = true
        const response = await uploadImgToBase64(item.file)
        const base64File = response.result.replace(/.*;base64,/, '')
        // getNewId().then(res => {
        //   console.log(res);
        //   let guid = res
        //   this.fileNameGuid = res
        //   let FileName = res + '.csv'
        //   let FilePath = 'plate\\files\\'
        //   let data = base64File
        //   upLoadImgApi(data, FileName, FilePath).then(res => {
        //     if (res.OK == 'True') {
        //       this.web_guide_upload_phone()
        //     }
        //   })
        // })
        let FileName = item.file.name
        let FilePath = 'plate\\files\\'
        let data = base64File
        upLoadImgApi(data, FileName, FilePath).then(res => {
          // this.loading = false
          console.log(res);
          if (res.OK == 'True') {
            this.$message({
              type: 'success',
              message: res.Message
            })
            // this.$emit('refresh')
            // this.close()
          } else {
            this.$message({
              type: 'error',
              message: res.Message
            })
          }
        })

      },
      submitUpload() {
        this.$refs.upload.submit();
      },
    },
    created() {

    }
  };
</script>

<style lang="scss" scoped>
  .title-bg {
    background-color: #F2F2F2;
    padding: 10px;
    font-weight: bold;
  }
</style>
