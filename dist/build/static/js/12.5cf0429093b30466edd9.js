webpackJsonp([12],{549:function(t,e,n){var i=n(33)(n(897),n(788),null,null);t.exports=i.exports},727:function(t,e,n){e=t.exports=n(530)(!1),e.push([t.i,'.autoTbale{overflow:auto}.department table{width:100%;border-spacing:0;border-collapse:collapse}.department .table-bordered{border:1px solid #ddd}.department .table>thead>tr>th{text-align:center}.department .table>tbody>tr>td,.department .table>tbody>tr>th,.department .table>thead>tr>td,.department .table>thead>tr>th{border-top:1px solid #e7eaec;line-height:1.42857;padding:8px;vertical-align:middle}.department .table-bordered>tbody>tr{height:50px}.department .table-bordered>tbody>tr:hover{background:#ffb}.department .table-bordered>tbody>tr>td,.department .table-bordered>tbody>tr>th,.department .table-bordered>tfoot>tr>td,.department .table-bordered>tfoot>tr>th,.department .table-bordered>thead>tr>td,.department .table-bordered>thead>tr>th{border:1px solid #ddd}.department .table>thead>tr>th{border-bottom:1px solid #ddd}.department .table-bordered>thead>tr>td,.department .table-bordered>thead>tr>th{background-color:#f5f5f6}.department #hl-tree-table>tbody>.isDisable{color:#ccc}.department #hl-tree-table>tbody>.isDisable:hover{background:#fff}.department label{margin:0}.department .ms-tree-space{position:relative;top:1px;display:inline-block;font-style:normal;font-weight:400;line-height:1;width:15px;height:14px}.department .ms-tree-space:before{content:""}.department #hl-tree-table th>label{margin:0 4px}.department .taggolIcon{display:inline-block;width:13px;height:13px;font-size:12px;text-align:center;line-height:10px;border:1px solid #666;font-style:normal}.department .noborder{border-color:transparent}.department .textIcon{display:inline-block;padding:0 5px;font-size:16px}.department .actions{text-align:center;min-width:147px;color:#5a82be}.department .actions span{cursor:pointer;line-height:20px}.department .actions span:hover{text-decoration:underline}.department .actionsDisable{color:#ccc}',""])},728:function(t,e,n){n(730);var i=n(33)(n(731),n(729),null,null);t.exports=i.exports},729:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"autoTbale department",style:{width:t.tableWidth}},[n("table",{staticClass:"table table-bordered",attrs:{id:"hl-tree-table"}},[n("thead",[n("tr",[t._l(t.cloneColumns,function(e,i){return n("th",{key:i},[n("label",[t._v("\n            "+t._s(t.renderHeader(e,i))+"\n          ")])])}),t._v(" "),n("th",[t._v("操作")])],2)]),t._v(" "),n("tbody",t._l(t.initItems,function(e,i){return n("tr",{directives:[{name:"show",rawName:"v-show",value:t.show(e),expression:"show(item)"}],key:i,class:{"child-tr":e.parent,isDisable:1!=e.status}},[t._l(t.columns,function(o,a){return n("td",{key:o.key,style:t.tdStyle(o)},[n("label",{on:{click:function(n){t.toggle(i,e)}}},[a==t.iconRow()?n("span",[n("i",{domProps:{innerHTML:t._s(e.spaceHtml)}}),t._v(" "),e.children&&e.children.length>0?n("i",{staticClass:"taggolIcon"},[t._v("\n                "+t._s(e.expanded?"-":"+")+"\n              ")]):n("i",{staticClass:"taggolIcon noborder"})]):t._e(),t._v(" "),0==a?n("span",[0==i?n("i",{staticClass:"iconfont textIcon"},[t._v("")]):n("i",{staticClass:"iconfont textIcon"},[t._v(t._s("1"==e.tree_type?"":""))])]):t._e(),t._v("\n            "+t._s(t.renderBody(e,o))+"\n          ")])])}),t._v(" "),n("td",{staticClass:"actions",class:{actionsDisable:!1}},[t._t("operations",[n("span",[t._v("编辑")]),t._v(" "),n("span",[t._v("删除")]),t._v(" "),n("span",[t._v("禁用")])],{item:e})],2)],2)}))])])},staticRenderFns:[]}},730:function(t,e,n){var i=n(727);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(531)("5277f79f",i,!0)},731:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(92),o=n.n(i);e.default={name:"treeGrid",props:{columns:Array,items:{type:Array,default:function(){return[]}}},data:function(){return{initItems:[],cloneColumns:[],screenWidth:document.body.clientWidth,tdsWidth:0,timer:!1,dataLength:0}},computed:{tableWidth:function(){return this.tdsWidth>this.screenWidth&&this.screenWidth>0?this.screenWidth+"px":"100%"}},watch:{screenWidth:function(t){var e=this;this.timer||(this.screenWidth=t,this.timer=!0,setTimeout(function(){e.timer=!1},400))},items:function(){this.items&&(this.dataLength=this.Length(this.items),this.initData(this.deepCopy(this.items),1,null))},columns:{handler:function(){this.cloneColumns=this.makeColumns()},deep:!0}},mounted:function(){var t=this;this.items&&(this.dataLength=this.Length(this.items),this.initData(this.deepCopy(this.items),1,null),this.cloneColumns=this.makeColumns()),this.$nextTick(function(){t.screenWidth=document.body.clientWidth}),window.onresize=function(){return function(){window.screenWidth=document.body.clientWidth,t.screenWidth=window.screenWidth}()}},methods:{iconRow:function(){for(var t=0,e=this.columns.length;t<e;t++)if("selection"===this.columns[t].type)return 1;return 0},tdStyle:function(t){var e={};return t.align&&(e["text-align"]=t.align),t.width&&(e["min-width"]=t.width+"px"),e},makeColumns:function(){var t=this,e=this.deepCopy(this.columns);return this.tdsWidth=0,e.forEach(function(e,n){e._index=n,e._width=e.width?e.width:"",e._sortType="normal",t.tdsWidth+=e.width?parseFloat(e.width):0}),e},initData:function(t,e,n){var i=this;this.initItems=[];for(var a="",r=1;r<e;r++)a+='<i class="ms-tree-space"></i>';t.forEach(function(t,r){t=o()({},t,{parent:n,level:e,spaceHtml:a}),void 0===t.expanded&&(t=o()({},t,{expanded:!1})),void 0===t.show&&(t=o()({},t,{isShow:!1})),t=o()({},t,{load:!!t.expanded}),i.initItems.push(t),t.children&&t.expanded&&i.initData(t.children,e+1,t)})},show:function(t){return 1===t.level||t.parent&&t.parent.expanded&&t.isShow},toggle:function(t,e){for(var n=this,i=e.level+1,o="",a=1;a<i;a++)o+='<i class="ms-tree-space"></i>';e.children&&(e.expanded?(e.expanded=!e.expanded,this.close(t,e)):(e.expanded=!e.expanded,e.load?this.open(t,e):(e.load=!0,e.children.forEach(function(a,r){n.initItems.splice(t+r+1,0,a),n.$set(n.initItems[t+r+1],"parent",e),n.$set(n.initItems[t+r+1],"level",i),n.$set(n.initItems[t+r+1],"spaceHtml",o),n.$set(n.initItems[t+r+1],"isShow",!0),n.$set(n.initItems[t+r+1],"expanded",!1)}))))},open:function(t,e){var n=this;e.children&&e.children.forEach(function(e,i){e.isShow=!0,e.children&&e.expanded&&n.open(t+i+1,e)})},close:function(t,e){var n=this;e.children&&e.children.forEach(function(e,i){e.isShow=!1,e.expanded=!1,e.children&&n.close(t+i+1,e)})},initToggle:function(){this.toggle(0,this.initItems[0])},Length:function(t){var e=this,n=t.length;return t.forEach(function(t){t.children&&(n+=e.Length(t.children))}),n},renderHeader:function(t,e){return"renderHeader"in this.columns[e]?this.columns[e].renderHeader(t,e):t.title||"#"},renderBody:function(t,e,n){var i=e.key;if(/:/.test(i)){i=i.split(":")[t.tree_type-1],i=i.trim()}return"status"===i?"1"===t[i]||1===t[i]?"启用":"禁用":"tree_type"===i?"1"===t[i]||1===t[i]?"组织":"部门":t[i]},deepCopy:function(t){var e=this.type(t),n=null,i=null,o=null;if("array"===e)n=[];else{if("object"!==e)return t;n={}}if("array"===e){for(i=0,o=t.length;i<o;i++)n.push(this.deepCopy(t[i]));return n}if("object"===e){for(i in t)n[i]=this.deepCopy(t[i]);return n}},type:function(t){var e=Object.prototype.toString;return{"[object Boolean]":"boolean","[object Number]":"number","[object String]":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regExp","[object Undefined]":"undefined","[object Null]":"null","[object Object]":"object"}[e.call(t)]}},beforeDestroy:function(){window.onresize=null}}},788:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticStyle:{padding:"10px"}},[n("tree-grid",{attrs:{items:t.data,columns:t.columns},scopedSlots:t._u([{key:"operations",fn:function(e){return[n("span",{on:{click:function(n){t.edit(e.item)}}},[t._v("编辑")]),t._v(" "),n("span",{on:{click:function(n){t.remove(e.item)}}},[t._v("删除")]),t._v(" "),n("span",{on:{click:function(n){t.toForbid(e.item)}}},[t._v("禁用")]),t._v(" "),n("span",{on:{click:function(n){t.band(e.item)}}},[t._v("银行")]),n("br"),t._v(" "),n("span",{on:{click:function(n){t.addOrganization(e.item)}}},[t._v("新增组织")]),t._v(" "),n("span",{on:{click:function(n){t.addDepatment(e.item)}}},[t._v("新增部门")])]}}])})],1)])},staticRenderFns:[]}},897:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(728),o=n.n(i);e.default={data:function(){return{columns:[{title:"组织/部门名称",key:"department",width:"264"},{title:"编码",key:"code",width:"110"},{title:"简称",key:"easyName",width:"208"},{title:"类型",key:"type",width:"110"},{title:"法人/负责人",key:"head",width:"124"},{title:"状态",key:"status",width:"82"}],data:[{department:"河南邦元保值公司",code:"0001",type:"组织",status:"启用",head:"张三",easyName:"河南邦公司",children:[{department:"总经办",code:"00012",type:"组织",status:"启用",head:"张三",easyName:"河南邦公司"},{department:"深圳子公司",code:"123",type:"组织",status:"启用",head:"张三",easyName:"深圳子公司",children:[{department:"水贝直营店",code:"0012301",type:"组织",status:"启用",head:"张三",easyName:"水贝直营店",children:[{department:"白石洲专营店给",code:"123132",type:"部门",status:"启用",head:"张三",easyName:"白石洲专营店给",disabled:!0},{department:"西乡加盟店",code:"3321",type:"部门",status:"启用",head:"张三",easyName:"西乡加盟店"}]},{department:"河南邦元保值公司",code:"0001",type:"部门",status:"启用",head:"张三",easyName:"河南邦公司"}]},{department:"河南邦元保值公司",code:"0001",type:"部门",status:"启用",head:"张三",easyName:"河南邦公司"},{department:"河南邦元保值公司",code:"0001",type:"部门",status:"启用",head:"张三",easyName:"河南邦公司"}]}]}},components:{TreeGrid:o.a},methods:{edit:function(t){t.disabled||console.log(t)},remove:function(t){t.disabled||console.log(t)},toForbid:function(t){t.disabled||console.log(t)},band:function(t){t.disabled||console.log(t)},addOrganization:function(t){t.disabled||console.log(t)},addDepatment:function(t){t.disabled||console.log(t)}}}}});