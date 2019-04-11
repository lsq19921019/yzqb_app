webpackJsonp([33],{15:function(e,t,a){try{(function(){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var a={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r]);return a}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),l=function(e,t,a){for(var r=!0;r;){var o=e,s=t,n=a;r=!1,null===o&&(o=Function.prototype);var i=Object.getOwnPropertyDescriptor(o,s);if(void 0!==i){if("value"in i)return i.value;var l=i.get;if(void 0===l)return;return l.call(n)}var d=Object.getPrototypeOf(o);if(null===d)return;e=d,t=s,a=n,r=!0,i=d=void 0}},d=a(2),u=r(d),c=a(16),p=a(10),h=(r(p),a(1)),f=function(e){function t(e,a){s(this,t),l(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e,a),this.state={}}return n(t,e),i(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.showTips,a=e.showOrHideSpinner,r=e.size,s=e.color,n=e.boxSize,i=(o(e,["showTips","showOrHideSpinner","size","color","boxSize"]),{display:a,width:"100%",maxWidth:h.qsParams.maxWidth?h.qsParams.maxWidth:"800px",height:h.qsParams.height?h.qsParams.height+"px":"100%",position:"fixed",right:0,bottom:0,margin:"0 auto",left:0,top:0,zIndex:996,background:"rgba(0,0,0,.4)"});return u.default.createElement("div",{style:i},u.default.createElement("div",{className:"SpinerBox",style:{overflow:"hidden",background:"rgba(22,22,22,0.8)",position:"absolute",top:"40%",left:"50%",width:""+n,height:""+n,borderRadius:"10px"}},u.default.createElement("div",{className:"newSpiner",style:{top:t?n/6+"px":(n-r)/2+"px"}},u.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:r,height:r,fill:s},u.default.createElement("path",{opacity:".25",d:"M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"}),u.default.createElement("path",{d:"M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z"}))),u.default.createElement("div",{style:{color:"#fff",textAlign:"center",width:"100%",fontSize:"13px",position:"absolute",top:""+2*n/3}},t)))}}]),t}(u.default.Component);t.default=f,f.contextTypes={history:function(){return c.PropTypes.history}},f.defaultProps={boxSize:120,size:48,showTips:"正在加载",color:"#fff"},e.exports=t.default}).call(this)}finally{}},19:function(e,t,a){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=e.task,a=e.callbacks;a=l({waitCode:d.noop,doneSucc:d.noop,doneFail:d.noop,doneTimeout:d.noop,doneLogin:d.noop,pendingTimeout:d.noop,doing:d.noop,error:d.noop,spiner:d.noop,showProgress:d.noop,importSucc:d.noop,onError:d.noop,errorCatch:d.noop,refreshImgCode:d.noop,setqrCodeTaskInfo:d.noop,doneScan:d.noop,zxBankSpiner:d.noop,showQrcodeInCrawlStatus:d.noop,hideQrCode:d.noop},a);var c,p=o(t),h=d.request.get(p+("?d="+Date.now())).set(l({},f.default.addDefaultHeaders())).set("Accept","application/json").set("Cache-Control","no-store");return c="carrier"==t.taskType?(0,d.guardTimeoutLongtime)(h):(0,d.guardTimeout)(h),c.then(function(e){var o=!1;if(a.setqrCodeTaskInfo&&"qrcode"==t.loginType&&a.setqrCodeTaskInfo(t),a.showProgress&&a.showProgress(e.body.description),"LOGIN"!=e.body.phase&&(a.doneLogin&&(o=a.doneLogin(t,e.body)),"alipay"==t.taskType&&"WAIT_CODE"!=e.body.phase_status&&a.hideQrCode&&a.hideQrCode(),s(t),(u.qsParams.quitOnLoginDone||u.qsParams.canLeave)&&"zhengxin"!=t.taskType))return o=!0,!1;switch("LOGIN"==e.body.phase&&"WAIT_CODE"!=e.body.phase_status&&a.doneScan&&a.doneScan(),e.body.phase_status){case v.WAIT_CODE:a.spiner&&a.spiner(),a.zxBankSpiner&&a.zxBankSpiner(),a.waitCode&&(o=a.waitCode(t,e.body));break;case v.CONTINUE:a.spiner&&a.spiner(),a.zxBankSpiner&&a.zxBankSpiner(),a.waitCode&&a.waitCode(t,e.body);break;case v.DONE_SUCC:e.body.finished===!0?(a.zxBankSpiner&&a.zxBankSpiner(),storage.setItem(t.taskType+"ImportStatus","succ"),setTimeout(function(){a.spiner&&a.spiner(),a.showProgress&&a.showProgress(""),b.default.refreshStatus("1",e.body.description)},3e3),a.importSucc&&a.importSucc(e.body),a.doneSucc&&a.doneSucc(t,e.body),o=!0,n(t)):a.doing&&(o=a.doing(t,e.body));break;case v.DONE_FAIL:a.hideQrCode&&a.hideQrCode(),storage.setItem(t.taskType+"ImportStatus","fail"),"LOGIN"===e.body.phase?("BALO-23001-10"==e.body.error_code&&a.doneTimeout&&a.doneTimeout(t,e.body),a.refreshImgCode(),b.default.refreshStatus("-4",e.body.description)):b.default.refreshStatus("0",e.body.description),a.zxBankSpiner&&a.zxBankSpiner(),setTimeout(function(){a.spiner&&a.spiner(),a.showProgress&&a.showProgress("")},3e3),a.doneFail&&a.doneFail(t,e.body),o=!0,i(t,e);break;case v.DONE_TIMEOUT:a.hideQrCode&&a.hideQrCode(),storage.setItem(t.taskType+"ImportStatus","fail"),"LOGIN"===e.body.phase?b.default.refreshStatus("-4",e.body.description,t.loginType,e.body.phase):b.default.refreshStatus("0",e.body.description,t.loginType,e.body.phase),a.doneTimeout&&a.doneTimeout(t,e.body),o=!0,i(t,e);break;case v.DOING:b.default.refreshStatus("2",e.body.description,t.loginType,e.body.phase),a.doing&&(o=a.doing(t,e.body));break;default:b.default.refreshStatus("-3","异常错误"),a.doneFail&&a.doneFail(t,e.body),o=!0,i(t,e)}"LOGIN"!=e.body.phase,o||setTimeout(function(){r({task:t,callbacks:a})},k)}).catch(function(e){var r=e&&e.body&&e.body.detail||e;b.default.alert("服务异常，请稍候再试！"+r),a.zxBankSpiner&&a.zxBankSpiner(),a.spiner&&a.spiner(),a.onError&&a.onError(t,e),a.error&&a.error(t,e),a.errorCatch&&a.errorCatch(e)})}function o(e){var t="";return t="bank"==e.taskType?p.default.checkImportState.replace("{taskid}",e.taskId):"carrier"==e.taskType?p.default.checkCarrierImportStatev2.replace("{taskid}",e.taskId):"chsi"==e.taskType?p.default.checkChsiImportState.replace("{taskid}",e.taskId):"fund"==e.taskType?p.default.checkFundImportState.replace("{taskid}",e.taskId):"email"==e.taskType||"qq"==e.taskType?p.default.checkEmailImportState.replace("{taskid}",e.taskId):"tax"==e.taskType?p.default.taxStatus.replace("{task_id}",e.taskId)+("?d="+Date.now()):"security"==e.taskType?p.default.checkSecurityImportState.replace("{taskid}",e.taskId)+("?d="+Date.now()):"alipay"==e.taskType||"wechat"==e.taskType?p.default.commonImportStateUrlv2.replace("{taskid}",e.taskId):"sametrade"==e.taskType?p.default.checkSametradeTaskStatus.replace("{task_id}",e.taskId):p.default.commonImportStateUrl.replace("{taskid}",e.taskId)}function s(e){b.default.mxHideWebView(),b.default.mxCanLeave(!0),b.default.loginDone=1,(u.qsParams.canLeave||u.qsParams.quitOnLoginDone)&&"zhengxin"!=e.taskType&&(console.log("finishImport"),b.default.finishImport(e.taskId,"2","登录认证成功","SUCC"),(0,y.default)({taskType:e.taskType}))}function n(e){b.default.finishImport(e.taskId,"1","认证成功","SUCC"),(0,y.default)({taskType:e.taskType})}function i(e,t){console.log("handleDoneFail"),"LOGIN"===t.body.phase?"zhengxin"!=e.taskType&&("qrcode"==e.loginType&&"DONE_TIMEOUT"==t.body.phase_status||b.default.alert(t.body.description)):(b.default.finishImport(e.taskId,"0",t.description,"FAIL"),u.qsParams.quitOnFail&&(0,y.default)({taskType:e.taskType}))}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},d=a(1),u=a(1),c=a(25),p=e(c),h=a(12),f=e(h),m=a(29),y=e(m),g=a(4),b=e(g),k=2500,v={DOING:"DOING",WAIT_CODE:"WAIT_CODE",DONE_SUCC:"DONE_SUCC",DONE_FAIL:"DONE_FAIL",DONE_TIMEOUT:"DONE_TIMEOUT"};t.STATE=v,t.default=r}).call(this)}finally{}},825:function(e,t,a){try{(function(){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),n=function(e,t,a){for(var r=!0;r;){var o=e,s=t,n=a;r=!1,null===o&&(o=Function.prototype);var i=Object.getOwnPropertyDescriptor(o,s);if(void 0!==i){if("value"in i)return i.value;var l=i.get;if(void 0===l)return;return l.call(n)}var d=Object.getPrototypeOf(o);if(null===d)return;e=d,t=s,a=n,r=!0,i=d=void 0}},i=a(2),l=t(i),d=(a(16),a(1)),u=a(4),c=t(u),p=a(14),h=t(p),f=a(19),m=t(f),y=a(8),g=a(9),b=t(g),k=a(54),v=(t(k),a(18)),x=(t(v),a(6)),w=t(x),T=a(7),E=t(T),S=a(13),P=t(S),C=a(5),I=t(C),O=a(15),_=t(O),N="taxImportTask",q="#58B5EB",D=function(e){function t(e,o){r(this,t),n(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e,o),this.creatTask=this.creatTask.bind(this),this.importSucc=this.importSucc.bind(this),this.handleJump=this.handleJump.bind(this),this.showspiner=this.showspiner.bind(this),this.setTaskStore=this.setTaskStore.bind(this),this.showProgress=this.showProgress.bind(this),this.hideDialog=this.hideDialog.bind(this),this.waitCode=this.waitCode.bind(this),this.handleProtocol=this.handleProtocol.bind(this),this.state={describe:"",describehtml:"",showspinner:"no",show_progress:"",succ:"no",TASK:"",showMsg:"none",callback:{},importFailed:!1,Type:"password",bgImg:"url("+a(20)+")"}}return o(t,e),s(t,[{key:"componentDidMount",value:function(){this.setState({callback:{spiner:this.showspiner,showProgress:this.showProgress,importSucc:this.importSucc,waitCode:this.waitCode,hideDialog:this.hideDialog,onError:this.onError.bind(this),doneFail:this.doneFail.bind(this)}}),c.default.refreshTitle("个人所得税认证");var e=h.default.get("tax",0,0,0);e&&e.loginParam&&(this.refs.username.value=e.loginParam.username,this.refs.truename?document.getElementById("truename").getElementsByTagName("input")[0].value=e.loginParam.truename:null)}},{key:"render",value:function(){var e=this,t=JSON.parse(d.qsParams.fields),a=this.props.params.area_code,r=this.list,o=this.type;r=JSON.parse(t.fields)[0].name.split(","),o=JSON.parse(t.fields)[0].value.split(",");for(var s=[],n=0;n<r.length;n++)s.push(l.default.createElement("option",{value:o[n]},r[n]));var i=l.default.createElement("select",{ref:"login_method",className:"login_method"},l.default.createElement("option",{value:"00"},"选择方式"),s),u=void 0!=d.qsParams.agreementEntryText?d.qsParams.agreementEntryText:"同意《用户使用协议》",p=d.qsParams.themeColor?"#"+d.qsParams.themeColor:q,h={color:d.qsParams.themeColor?"#"+d.qsParams.themeColor:q,textAlign:"center"};return l.default.createElement("div",null,"NO"==d.qsParams.showTitleBar||0==d.qsParams.showTitleBar||c.default.Device.SDK?null:l.default.createElement("div",{style:{height:"NO"==d.qsParams.showTitleBar||c.default.Device.SDK?0:44}},l.default.createElement(w.default,{title:t.taxName,left:l.default.createElement(E.default,{onTap:function(){b.default.call(e)}},l.default.createElement("i",{className:"ion-chevron-left"}))})),l.default.createElement("div",{className:"taxImport mx-view"},"no"==this.state.succ?l.default.createElement("div",null,l.default.createElement("h3",{style:{color:d.qsParams.themeColor?"#"+d.qsParams.themeColor:"rgb(126, 195, 235)"}},"个人所得税"),l.default.createElement("div",{className:"input-item",id:"userName"},i,l.default.createElement("span",{className:"selectSpan"}),l.default.createElement("input",{type:"text",ref:"username",placeholder:"请输入登陆账号"}),l.default.createElement("div",{onClick:function(){return e.clearValue("#userName")},className:"tex_box name"},l.default.createElement("span",{className:"textt"}))),1e5==a?l.default.createElement("div",{className:"input-item"},l.default.createElement(P.default,{type:"text",ref:"truename",id:"truename",label:"真实姓名",placeholder:"请输入真实姓名"}),l.default.createElement("div",{onClick:function(){return e.clearValue("#truename")},className:"tex_box name"},l.default.createElement("span",{className:"textt"}))):null,l.default.createElement("div",{className:"input-item"},l.default.createElement(P.default,{type:this.state.Type,ref:"pwd",label:"登录密码",placeholder:"请输入登陆密码",id:"password"}),l.default.createElement("div",{onClick:this.showPwd.bind(this),className:"tex_box"},l.default.createElement("span",{style:{backgroundImage:this.state.bgImg},className:"password password_show"}))),l.default.createElement("div",{style:{display:"NO"==d.qsParams.showAgreement||0==d.qsParams.showAgreement?"none":"block"},className:"protocol"},l.default.createElement("input",{id:"protocol",ref:"protocol",type:"checkbox",defaultChecked:!0}),l.default.createElement("label",{htmlFor:"protocol"},l.default.createElement("span",{style:{background:d.qsParams.themeColor?"#"+d.qsParams.themeColor:"rgb(126, 195, 235)"}})),l.default.createElement("a",{onClick:this.handleProtocol},u)),d.qsParams.tenantAgreementUrl&&"undefined"!=d.qsParams.tenantAgreementUrl?l.default.createElement("div",{className:"protocol"},l.default.createElement("input",{id:"tanent_protocol",ref:"tanent_protocol",type:"checkbox",defaultChecked:!0}),l.default.createElement("label",{htmlFor:"tanent_protocol"},l.default.createElement("span",{style:{background:d.qsParams.themeColor?"#"+d.qsParams.themeColor:"rgb(126, 195, 235)"}})),l.default.createElement("a",{onClick:this.handleTanentProtocol},d.qsParams.tenantAgreementEntryText||"同意《用户使用协议》")):null,l.default.createElement("button",{style:{background:d.qsParams.themeColor?"#"+d.qsParams.themeColor:"rgb(126, 195, 235)"},onClick:this.creatTask,className:"ver_correct"},"确定"),l.default.createElement("div",{style:{display:this.state.describe},onClick:this.hideDescribe,className:"show_describe_box"},l.default.createElement("div",{className:"show_describe"},this.state.describehtml)),"yes"!=this.state.showspinner||this.state.importFailed?null:l.default.createElement(_.default,{color:"#fff",showTips:this.state.show_progress})):l.default.createElement("div",{className:"finish-status succ",style:{paddingBottmo:"15px"}},l.default.createElement("svg",{width:"48",height:"48",viewBox:"0 0 48 48",style:{display:"block",margin:"15px auto 0"}},l.default.createElement("g",{className:"transform-group"},l.default.createElement("g",{transform:"scale(0.046875, 0.046875)"},l.default.createElement("path",{d:"M511.996387 9.862132c-277.328216 0-502.134255 224.813265-502.134255 502.137868 0 277.328216 224.80604 502.137868 502.134255 502.137868 277.320991 0 502.137868-224.809652 502.137868-502.137868C1014.137868 234.675397 789.320991 9.862132 511.996387 9.862132L511.996387 9.862132zM824.889692 388.748635l-351.388132 338.834686c-4.670966 4.663741-9.952445 8.337656-15.587949 11.028971-22.065166 15.761349-52.915939 13.75641-72.730516-6.061779l-150.897848-150.897848c-22.065166-22.065166-22.065166-57.832555 0-79.883271 22.054329-22.065166 57.821717-22.065166 79.886884 0l113.291695 113.28447 317.531758-306.192112c22.061554-22.061554 57.832555-22.061554 79.883271 0C846.954858 330.919692 846.954858 366.687081 824.889692 388.748635L824.889692 388.748635zM824.889692 388.748635",fill:p})))),l.default.createElement("p",{style:h},"验证成功"),d.qsParams.token?l.default.createElement(I.default,{types:"full",style:"width:50%;height:44px;",onTap:this.handleJump},"详情查询"):null),l.default.createElement("div",{style:{position:"absolute",top:0,width:"100%",height:"100%",background:"rgba(0,0,0,0.7)",display:this.state.showMsg}},l.default.createElement("div",{className:"tax_msg"},l.default.createElement("h3",{style:{width:"100%",lineHeight:"60px",textAlign:"center",fontWeight:100,borderTop:"1px solid #ededed"}},"短信验证码"),l.default.createElement("input",{ref:"smsCode",type:"text",style:{background:"rgba(220,220,220,0.4)",color:"rgb(129,129,129)",borderRgith:"none",borderLeft:"none",textIndent:"10px",height:"50px",width:"100%",outline:"none",border:"1px solid #ededed"},placeholder:"请输入短信验证码"}),l.default.createElement("div",{className:"tax_btn"},l.default.createElement("span",{onClick:function(){return e.hideDialog("sms")},style:{color:"#fd9426",width:"70px",height:"32px",border:"1px solid #fd9426",marginRight:"20px",textAlign:"center",lineHeight:"32px",borderRadius:"5px"}},"取消"),l.default.createElement("span",{onClick:function(){return e.submitCode("sms")},style:{color:"#fff",background:"#fd9426",textAlign:"center",lineHeight:"32px",width:"70px",height:"32px",border:"1px solid #fd9426",borderRadius:"5px"}},"确认")))),l.default.createElement("div",{style:{position:"absolute",top:0,width:"100%",height:"100%",background:"rgba(0,0,0,0.7)",display:"none"}},l.default.createElement("div",{className:"tax_pic"},l.default.createElement("h3",{style:{width:"100%",lineHeight:"40px",textAlign:"center",fontWeight:100,borderBottom:"1px solid #ededed"}},"请输入图片验证码"),l.default.createElement("div",{className:"tax_pic_box"},l.default.createElement("input",{ref:"imgCode",type:"text",style:{marginRight:"10px",background:"rgba(220,220,220,0.4)",color:"rgb(129,129,129)",borderRgith:"none",borderLeft:"none",textIndent:"10px",height:"50px",width:"80px",outline:"none",border:"1px solid #ededed"}}),l.default.createElement("span",{style:{width:"80px",height:"50px",border:"1px solid #ededed"}},l.default.createElement("img",{className:"pic_test_img",src:"",alt:""}))),l.default.createElement("div",{className:"tax_btn"},l.default.createElement("span",{style:{color:"#fd9426",width:"70px",height:"32px",border:"1px solid #fd9426",marginRight:"20px",textAlign:"center",lineHeight:"32px",borderRadius:"5px"}},"取消"),l.default.createElement("span",{style:{color:"#fff",background:"#fd9426",textAlign:"center",lineHeight:"32px",width:"70px",height:"32px",border:"1px solid #fd9426",borderRadius:"5px"}},"确认"))))))}},{key:"creatTask",value:function(){var e=this,t=this.setTaskStore,a=(this.callback,d.qsParams.fields,this.props.params.area_code),r=this.refs.username.value,o=this.refs.truename?this.refs.truename.getValue():"",s=this.refs.pwd.getValue(),n=518e3==a?"SHENZHENTAX":"TAX",i=this.refs.login_method.value;return"00"==i?void c.default.alert("请选择登陆类型"):""==r?void c.default.alert("请输入登录帐号"):this.refs.truename&&""==o?void c.default.alert("请输入真实姓名"):""==s?void c.default.alert("请输入登录密码"):this.refs.protocol.checked?this.refs.tanent_protocol&&!this.refs.tanent_protocol.checked?void setTimeout(function(){return c.default.alert("请勾选同意《用户使用协议》","")}):(this.setState({showspinner:"yes",importFailed:!1}),void(0,y.submitTaskHelper)({taskType:"tax",username:r,password:s,trueName:o,taskSubType:n,loginType:i,areaCode:a}).then(function(a){if(a.body.task_id){c.default.refreshStatus("2","创建任务成功"),c.default.mxSaveTaskId(a.body.task_id);var s={taskId:a.body.task_id,username:r,taskType:"tax",loginParam:{login_type:i,username:r,truename:o}};e.setState({TASK:s}),t(s),h.default.set(s.taskType,0,0,0,{loginParam:s.loginParam}),(0,m.default)({task:e.state.TASK,callbacks:e.state.callback})}}).catch(function(t){e.showspiner();var a=t&&t.body&&t.body.detail||"服务异常，请稍后重试!"+t;c.default.alert(a),console.log(t)})):void setTimeout(function(){return c.default.alert("请勾选同意《用户使用协议》","")})}},{key:"clearValue",value:function(e){document.querySelector(e).parentNode.querySelector("input").value=""}},{key:"showspiner",value:function(){this.setState({showspinner:"no"})}},{key:"showProgress",value:function(e){this.setState({showspinner:"yes",show_progress:e})}},{key:"setTaskStore",value:function(e){window.storage.setItem(N,JSON.stringify(e))}},{key:"importSucc",value:function(){this.setState({succ:"yes"})}},{key:"handleJump",value:function(){if(void 0==d.qsParams.token)return void c.default.alert("缺少token值");var e=this.state.TASK.taskId;window.location.href="https://api.51datakey.com/h5/result/tax/index.html?taskId="+e+"&token="+d.qsParams.token}},{key:"waitCode",value:function(e,t){return"sms"==t.input.type&&this.setState({showMsg:"block"}),!0}},{key:"showPwd",value:function(){"text"==this.state.Type?this.setState({Type:"password",bgImg:"url("+a(20)+")"}):this.setState({Type:"text",bgImg:"url("+a(36)+")"})}},{key:"hideDialog",value:function(e){this.refs.smsCode.value="","sms"==e&&this.setState({showMsg:"none"})}},{key:"submitCode",value:function(e){var t=this,a="";return"sms"==e&&(a=this.refs.smsCode.value),""==a?(c.default.alert("请输入验证码"),!1):(this.hideDialog(e),void(0,y.submitVCode)(a,this.state.TASK).then(function(e){(0,m.default)({task:t.state.TASK,isLogin:!1,callbacks:t.state.callback})}))}},{key:"handleProtocol",value:function(){var e=c.default.Device.SDK?0:d.qsParams.showTitleBar,t=d.qsParams.themeColor,a=d.qsParams.agreementUrl&&"undefined"!=d.qsParams.agreementUrl?d.qsParams.agreementUrl:"https://api.51datakey.com/h5/agreement.html?showTitleBar="+e+"&themeColor="+t;c.default.openWebView("用户使用协议",a,"","agreement")}},{key:"handleTanentProtocol",value:function(){var e=d.qsParams.tenantAgreementUrl&&"undefined"!=d.qsParams.tenantAgreementUrl?d.qsParams.tenantAgreementUrl:"";c.default.openWebView("用户使用协议",e,"","agreement")}},{key:"onError",value:function(){}},{key:"doneFail",value:function(){this.setState({importFailed:!0,show_progress:""})}}],[{key:"defaultProps",value:{setTaskStore:null},enumerable:!0}]),t}(l.default.Component);e.exports=D}).call(this)}finally{}}});