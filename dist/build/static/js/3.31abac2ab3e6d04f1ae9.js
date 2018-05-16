webpackJsonp([3],{509:function(e,s,t){t(532);var n=t(59)(t(536),t(526),null,null);e.exports=n.exports},518:function(e,s,t){s=e.exports=t(506)(!1),s.push([e.i,"",""])},526:function(e,s){e.exports={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"sub-page-wrap"},[t("h3",[e._v("Message 消息提示")]),e._v(" "),t("p",[e._v("常用于主动操作后的反馈提示。")]),e._v(" "),t("div",{staticClass:"panel panel-default"},[e._m(0),e._v(" "),t("div",{staticClass:"panel-body"},[t("button",{staticClass:"btn btn-default",on:{click:e.openBasic}},[e._v("打开消息提示")]),e._v(" "),t("button",{staticClass:"btn btn-default",on:{click:e.openVNode}},[e._v("VNode")]),e._v(" "),e._m(1),e._v(" "),t("pre",[e._v("        openBasic() {\n          this.$message('这是一条消息提示')\n        },\n        openVNode() {\n          const h = this.$createElement\n          this.$message({\n            message: h('p', null, [\n              h('span', null, '内容可以是 '),\n              h('i', { style: 'color: teal' }, 'VNode')\n            ])\n          })\n        }\n      ")])])]),e._v(" "),t("div",{staticClass:"panel panel-default"},[e._m(2),e._v(" "),t("div",{staticClass:"panel-body"},[t("button",{staticClass:"btn btn-default",on:{click:e.openSuccess}},[e._v("成功")]),e._v(" "),t("button",{staticClass:"btn btn-default",on:{click:e.openWarning}},[e._v("警告")]),e._v(" "),t("button",{staticClass:"btn btn-default",on:{click:e.openInfo}},[e._v("消息")]),e._v(" "),t("button",{staticClass:"btn btn-default",on:{click:e.openError}},[e._v("错误")]),e._v(" "),e._m(3),e._v(" "),t("pre",[e._v("        openSuccess() {\n          this.$message({\n            showClose: true, // 显示关闭按钮\n            duration: 0, // 为0是不会自动关闭\n            message: '恭喜你，这是一条成功消息',\n            type: 'success'\n          })\n        },\n        openWarning() {\n          this.$message({\n            message: '警告哦，这是一条警告消息',\n            type: 'warning'\n          })\n        },\n        openInfo() {\n          this.$message('这是一条消息提示')\n        },\n        openError() {\n          this.$message.error('错了哦，这是一条错误消息')\n        }\n      ")])])]),e._v(" "),t("div",{staticClass:"panel panel-default"},[e._m(4),e._v(" "),t("div",{staticClass:"panel-body"},[t("button",{staticClass:"btn btn-default",on:{click:e.openWithHtml}},[e._v("使用 HTML 片段")]),e._v(" "),e._m(5),e._v(" "),t("pre",[e._v("        openWithHtml() {\n          this.$message({\n            dangerouslyUseHTMLString: true,\n            message: '<strong>这是 <i>HTML</i> 片段</strong>'\n          })\n        }\n      ")])])]),e._v(" "),e._m(6),e._v(" "),e._m(7)])},staticRenderFns:[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"panel-heading"},[t("h4",{staticClass:"panel-title"},[e._v("基础用法")]),e._v(" "),t("p",[e._v("从顶部出现，3 秒后自动消失。")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"panel panel-default"},[t("div",{staticClass:"panel-body"},[e._v("\n          Element 注册了一个$message方法用于调用，Message 可以接收一个字符串或一个 VNode 作为参数，它会被显示为正文内容。       \n        ")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"panel-heading"},[t("h4",{staticClass:"panel-title"},[e._v("不同状态")]),e._v(" "),t("p",[e._v("用来显示「成功、警告、消息、错误」类的操作反馈。")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"panel"},[t("div",{staticClass:"panel-body"},[e._v("\n          当需要自定义更多属性时，Message 也可以接收一个对象为参数。比如，设置type字段可以定义不同的状态，默认为info。此时正文内容以message的值传入。同时，我们也为 Message 的各种 type 注册了方法，可以在不传入type字段的情况下像openError那样直接调用。\n        ")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"panel-heading"},[t("h4",{staticClass:"panel-title"},[e._v("使用 HTML 片段")]),e._v(" "),t("p",[e._v("message 属性支持传入 HTML 片段")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"panel"},[t("div",{staticClass:"panel-body"},[e._v("\n          将dangerouslyUseHTMLString属性设置为 true，message 就会被当作 HTML 片段处理。\n        ")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"panel panel-default"},[t("div",{staticClass:"panel-heading"},[t("h4",{staticClass:"panel-title"},[e._v("全局方法")])]),e._v(" "),t("div",{staticClass:"panel-body"},[e._v("\n      Element 为 Vue.prototype 添加了全局方法 $message。因此在 vue instance 中可以采用本页面中的方式调用 Message。\n    ")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"panel panel-default"},[t("div",{staticClass:"panel-heading"},[t("h4",{staticClass:"panel-title"},[e._v("单独引用")])]),e._v(" "),t("div",{staticClass:"panel-body"},[t("pre",[e._v("import Message from '@/components/message'")]),e._v(" "),t("p",[e._v("此时调用方法为 Message(options)。我们也为每个 type 定义了各自的方法，如 Message.success(options)。 并且可以调用 Message.closeAll() 手动关闭所有实例。")])])])}]}},532:function(e,s,t){var n=t(518);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);t(507)("35b2bfd9",n,!0)},536:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{}},methods:{openBasic:function(){this.$message("这是一条消息提示")},openVNode:function(){var e=this.$createElement;this.$message({message:e("p",null,[e("span",null,"内容可以是 "),e("i",{style:"color: teal"},"VNode")])})},openSuccess:function(){this.$message({showClose:!0,duration:0,message:"恭喜你，这是一条成功消息",type:"success"})},openWarning:function(){this.$message({message:"警告哦，这是一条警告消息",type:"warning"})},openInfo:function(){this.$message("这是一条消息提示")},openError:function(){this.$message.error("错了哦，这是一条错误消息")},openWithHtml:function(){this.$message({dangerouslyUseHTMLString:!0,message:"<strong>这是 <i>HTML</i> 片段</strong>"})}}}}});