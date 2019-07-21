// 封装关闭弹框前的统一确认函数
export default function (_this) {
  if (!_this.dialogState) {
    var state = window.confirm('有未保存的数据，是否要关闭当前输入框?')
    console.log(state)
    if ( state) {
      console.log('确定关闭----')
      _this.dialogState = false
    } else {
      console.log('取消关闭---')
      _this.dialogState = true
    }
  }
}
