webpackJsonp([42],{243:function(e,t,a){try{(function(){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){var a=[],r=!0,n=!1,l=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(a.push(o.value),!t||a.length!==t);r=!0);}catch(e){n=!0,l=e}finally{try{!r&&s.return&&s.return()}finally{if(n)throw l}}return a}return function(t,a){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l=a(2),o=r(l),s=a(1),u=a(8),i=a(9),d=r(i),c=a(4),f=r(c),m=a(14),p=r(m),h=a(13),y=r(h),g=a(5),v=r(g),E=a(18),b=r(E),P=a(6),S=r(P),k=a(7),w=r(k),T=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,q="zhixing",x="法院被执行人查询",U=o.default.createClass({displayName:"ImportForm",propTypes:{setTaskStore:l.PropTypes.func},getInitialState:function(){return{phoneInfo:null,unsupport:!1,showUnsupport:!1,isStart:!1,defaultUsername:""}},componentDidMount:function(){f.default.refreshTitle("法院被执行人查询")},componentWillUnmount:function(){this.unmount=!0},render:function(){var e=this,t=this.handleImport,a=this.handleProtocol,r=this.state,n=r.unsupport,l=r.showUnsupport,u=r.isStart,i=(r.defaultUsername,p.default.get(q,0,0,0)),c="";i&&i.loginParam&&(c=i.loginParam.phone);var f=void 0!=s.qsParams.agreementEntryText?s.qsParams.agreementEntryText:"同意《用户使用协议》",m=o.default.createElement(w.default,{onTap:d.default.bind(this,null)},o.default.createElement("i",{className:"ion-chevron-left"})),h=("YES"==this.props.isWeb?o.default.createElement(S.default,{title:x,left:m}):null,l?o.default.createElement("div",{className:"carrier-unsupport"},o.default.createElement("i",null),o.default.createElement("p",null,n)):o.default.createElement("div",null,o.default.createElement("div",{className:"input-item"},o.default.createElement(y.default,{type:"text",ref:"username",placeholder:"请输入姓名",label:"姓名",defaultValue:c,id:"zhixinname"}),o.default.createElement("div",{onClick:function(){return e.clearValue("#zhixinname")},className:"tex_box name"},o.default.createElement("span",{className:"textt"}))),o.default.createElement("div",{className:"input-item"},o.default.createElement(y.default,{type:"text",ref:"password",placeholder:"请输入身份证",id:"idcard",label:"身份证"}),o.default.createElement("div",{onClick:function(){return e.clearValue("#idcard")},className:"tex_box name"},o.default.createElement("span",{className:"textt"}))),o.default.createElement("div",{style:{display:"NO"==s.qsParams.showAgreement||0==s.qsParams.showAgreement?"none":"block"},className:"protocol"},o.default.createElement("input",{id:"protocol",ref:"protocol",type:"checkbox",defaultChecked:!0}),o.default.createElement("label",{htmlFor:"protocol"},o.default.createElement("span",{style:{background:s.qsParams.themeColor?"#"+s.qsParams.themeColor:"rgb(126, 195, 235)"}})),o.default.createElement("a",{onClick:a},f)),s.qsParams.tenantAgreementUrl&&"undefined"!=s.qsParams.tenantAgreementUrl?o.default.createElement("div",{className:"protocol"},o.default.createElement("input",{id:"tanent_protocol",ref:"tanent_protocol",type:"checkbox",defaultChecked:!0}),o.default.createElement("label",{htmlFor:"tanent_protocol"},o.default.createElement("span",{style:{background:s.qsParams.themeColor?"#"+s.qsParams.themeColor:"rgb(126, 195, 235)"}})),o.default.createElement("a",{onClick:this.handleTanentProtocol},s.qsParams.tenantAgreementEntryText||"同意《用户使用协议》")):null,o.default.createElement("div",{className:"page-wrapper"},o.default.createElement(v.default,{types:"full",onTap:t,disable:u,state:u,getState:function(e){switch(e){case!1:return"提交";case!0:return"登录中...";default:return"提交"}}}))));return o.default.createElement("div",null,o.default.createElement(b.default,null,h))},clearValue:function(e){document.querySelector(e).parentNode.querySelector("input").value=""},handleImport:function(){var e=this,t=this.props.onSubmitTaskDone,a=(this.state.phoneInfo,this.refs.username.getValue()),r=this.refs.password.getValue();if(!a)return void setTimeout(function(){return f.default.alert("请输入正确的姓名","")});if(""==r||!T.test(r))return void setTimeout(function(){return f.default.alert("请输入正确的身份证","")});if(!this.refs.protocol.checked)return void setTimeout(function(){return f.default.alert("请勾选同意《用户使用协议》","")});if(this.refs.tanent_protocol&&!this.refs.tanent_protocol.checked)return void setTimeout(function(){return f.default.alert("请勾选同意《用户使用协议》","")});this.setState({isStart:!0});var n=void 0;(0,u.submitTaskHelper)({taskType:q,username:a,password:r}).then(function(r){if(n=r,r.body.task_id){e.setState({isStart:!1}),f.default.refreshStatus("2","创建任务成功"),f.default.mxSaveTaskId(r.body.task_id);var l={taskId:r.body.task_id,username:a,mappingId:r.body.mapping_id,taskType:q,loginParam:{phone:a}};t(l)}}).catch(function(t){e.setState({isStart:!1});var a=t&&t.response&&t.response.body||{};a.errors&&a.errors[0]&&(10220011===a.errors[0].code||10220012===a.errors[0].code)?(f.default.refreshStatus("-2",a.errors[0].message),e.showUnsupport(a.errors[0].message)):(f.default.refreshStatus("-3","服务异常，创建任务失败"),e.handleError(t,a.detail))})},handleError:function(e){var t=arguments.length<=1||void 0===arguments[1]?"任务提交失败":arguments[1];try{t=e&&e.body&&e.body.detail||t}catch(e){}if("任务提交失败"==t){if(e&&e.message&&e.message.indexOf("the network is offline")!=-1)return void f.default.alert("网络开小差啦，请稍后再试");f.default.alert(t+"\n"+e)}else f.default.alert(t);this.setState({isStart:!1})},handleTanentProtocol:function(){var e=s.qsParams.tenantAgreementUrl&&"undefined"!=s.qsParams.tenantAgreementUrl?s.qsParams.tenantAgreementUrl:"";f.default.openWebView("用户使用协议",e,"","agreement")},handleProtocol:function(){var e=f.default.Device.SDK?0:s.qsParams.showTitleBar,t=s.qsParams.themeColor,a=s.qsParams.agreementUrl&&"undefined"!=s.qsParams.agreementUrl?s.qsParams.agreementUrl:"https://api.51datakey.com/h5/agreement.html?showTitleBar="+e+"&themeColor="+t;f.default.openWebView("用户使用协议",a,"","agreement")},handleForgetSMS:function(e){var t=n(e,3),a=t[0],r=t[1],l=t[2];f.default.confirm(r,"","取消,发送",function(e){2==e&&((0,s.isIOS)()?window.location.href="sms:"+l+"&body="+a:window.location.href="sms:"+l+"?body="+a)})},showUnsupport:function(e){this.setState({unsupport:e||this.state.unsupport,showUnsupport:!0})}});t.default=U,e.exports=t.default}).call(this)}finally{}}});