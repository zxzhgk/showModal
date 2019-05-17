##showModal
 适用于uni-app  的跨端显示弹层，使用接口参数与uni-app 中的showModal参数一致
 显示模态弹窗，类似于标准 html 的消息框：alert、confirm。

##OBJECT参数说明

| 参数  | 类型 |必填	|说明|
| ------ |------ |------ |------ |
|title|	String|	是|	提示的标题	|
|content|	String|	是	|提示的内容	|
|showCancel|	Boolean|	否|	是否显示取消按钮，默认为 true	|
|cancelText	|String	|否	|取消按钮的文字，默认为"取消"，最多 4 个字符	|
|cancelColor|	HexColor|	否|	取消按钮的文字颜色，默认为"#000000"	H5、微信小程序、百度小程序|
|confirmText|	String	|否	|确定按钮的文字，默认为"确定"，最多 4 个字符	|
|confirmColor|	HexColor|	否|	确定按钮的文字颜色，H5平台默认为"#007aff"，微信小程序平台默认为"#3CC51F"，百度小程序平台默认为"#3c76ff"	H5、微信小程序、百度小程序|
|success|	Function|	否|	接口调用成功的回调函数	|
	 
##success返回参数说明

|参数	|类型	|说明|
| ------ |------ |------ |
|confirm|	Boolean|	为 true 时，表示用户点击了确定按钮|
|cancel	|Boolean|	为 true 时，表示用户点击了取消（用于 Android 系统区分点击蒙层关闭还是点击取消按钮关闭）|

~~~
this.$showModal({
  title: '提示',
  content: '这是一个模态弹窗',
  success(res) {
    if (res.confirm) {
      console.log('用户点击确定')
    } else if (res.cancel) {
      console.log('用户点击取消')
    }
  }
})
~~~
