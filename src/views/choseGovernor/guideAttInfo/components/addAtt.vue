<template>
  <el-dialog title="添加引导专员" :visible.sync="isOpen" width="700px" @close="beforeClose">
    <div style="padding-top: 20px;">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
        <el-row>
          <el-col :span="18">
            <el-form-item label="姓名" prop="name">
              <el-input v-model="ruleForm.name" placeholder="请输入姓名" maxlength="30" />
            </el-form-item>
          </el-col>
          <el-col :span="18">
            <el-form-item label="国家/地区">
              中国大陆（+86）
            </el-form-item>
          </el-col>
          <el-col :span="18">
            <el-form-item label="联系电话" prop="phone">
              <el-input v-model="ruleForm.phone" placeholder="请输入手机号码" maxlength="30" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
      <el-button @click="close">取 消</el-button>
    </div>
  </el-dialog>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        isOpen: true,
        ruleForm: {
          name: '',
          phone: ''
        },
        rules: {
          name: [{
            required: true,
            message: '必填',
            trigger: 'change'
          }],
          phone: [{
            required: true,
            message: '必填',
            trigger: 'change'
          }],
        }

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
            alert('submit')
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    },
    created() {

    }
  };
</script>

<style lang="scss" scoped>
</style>
