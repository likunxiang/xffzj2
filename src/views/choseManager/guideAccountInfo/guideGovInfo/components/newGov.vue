<template>
  <el-dialog :title="title" :visible.sync="isOpen" width="700px" @close="beforeClose">
    <div class="">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-row>
          <el-col :span="12">
            <el-form-item label="角色类型" prop="type">
              引导主管
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="归属部门" prop="deptId">
              <treeselect v-model="ruleForm.deptId" :options="deptOptions" :show-count="true" placeholder="请选择归属部门" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item v-if="ruleForm.userId == undefined" label="账号名称" prop="nickName">
              <el-input v-model="ruleForm.nickName" placeholder="请输入账号名称" maxlength="30" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item v-if="ruleForm.userId == undefined" label="登录密码" prop="password">
              <el-input v-model="ruleForm.password" placeholder="请输入登录密码" type="password" maxlength="20"
                show-password />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item v-if="ruleForm.userId == undefined" label="用户姓名" prop="name">
              <el-input v-model="ruleForm.name" placeholder="请输入用户姓名" maxlength="30" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item v-if="ruleForm.userId == undefined" label="国家/地区" prop="userName">
              中国大陆（+86）
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="联系电话" prop="userTel">
              <el-input v-model="ruleForm.userTel" placeholder="请输入联系电话" maxlength="30" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="状态" prop="status">
              <el-radio-group v-model="ruleForm.status">
                <el-radio v-for="dict in dict.type.sys_normal_disable" :key="dict.value" :label="dict.value">
                  {{dict.label}}
                </el-radio>
              </el-radio-group>
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
  import {
    treeselect
  } from "@/api/system/dept";
  import Treeselect from "@riophae/vue-treeselect";
  import "@riophae/vue-treeselect/dist/vue-treeselect.css";
  export default {
    name: "index",
    dicts: ['sys_normal_disable'],
    components: {
      Treeselect
    },
    props: {
      pageStatus: {
        type: String,
        default: '1'
      }
    },
    data() {
      return {
        isOpen: true,
        title: '',
        // 部门树选项
        deptOptions: undefined,
        ruleForm: {
          status: '0'
        },
        rules: {
          deptId: [{
            required: true,
            message: '必填',
            trigger: 'change'
          }],
          nickName: [{
            required: true,
            message: '必填',
            trigger: 'change'
          }],
          password: [{
            required: true,
            message: '必填',
            trigger: 'change'
          }],
          name: [{
            required: true,
            message: '必填',
            trigger: 'change'
          }],
          userTel: [{
            required: true,
            message: '必填',
            trigger: 'change'
          }],
          status: [{
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
            if (this.ruleForm.status === '1') {
              this.$confirm('停用后，该用户不能使用该账号登录。确认停用该账号！', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
              }).then(() => {
                // 提交表单

              }).catch(() => {
                this.$message({
                  type: 'info',
                  message: '已取消删除'
                });
              });
            }
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      /** 查询部门下拉树结构 */
      getTreeselect() {
        treeselect().then(response => {
          this.deptOptions = response.Tag;
        });
      },
      // 筛选节点
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      },
      // 节点单击事件
      handleNodeClick(data) {
        this.queryParams.deptId = data.id;
        this.getList();
      },
      // 当状态为停用时，先走这里

    },
    created() {
      this.getTreeselect();
      let pageStatus = this.pageStatus
      if (pageStatus == '1') {
        this.title = '新建引导主管'
      } else if (pageStatus == '2') {
        this.title = '修改'
      }
    }
  };
</script>

<style lang="scss" scoped>
</style>
