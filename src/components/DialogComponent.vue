<template>
  <div>
    <h1>弹框组件</h1>
    <el-button type="primary" icon="el-icon-plus" @click="addUser">点击添加</el-button>
    <!--添加新用户的窗口-->
    <el-dialog :visible.sync="dialogState" title="添加用户" :modal="true" @>
      <el-form>
        <el-form-item label="用户名">
          <el-input placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input placeholder="请输入密码"/>
        </el-form-item>
        <el-form-item>
          <el-button type="info" @click="closeAddFalse">取消</el-button>
          <el-button type="primary" @click="closeAddTrue">确定</el-button>
        </el-form-item>
      </el-form>

    </el-dialog>
  </div>
</template>

<script>
  //引入关闭弹框的出来函数
  import enterDialog from '@/utils/dialogState.js'

  //弹框组件
    export default {
      name: "DialogComponent",
      data() {
        return {
          dialogState: false
        }
      },
      methods: {
        addUser() { // 打开添加用户窗口
          this.dialogState = true
        },
        closeAddFalse () { // 取消关闭窗口
          this.dialogState = false
        },
        closeAddTrue () { // 确定关闭
          this.dialogState = false
        }
      },
      beforeUpdate () {
        console.log(this.dialogState)
        enterDialog(this)
      },
      updated () {

      }
    }
</script>

<style scoped>

</style>
