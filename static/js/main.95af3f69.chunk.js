(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(2),l=n.n(i),o=(n(13),n(3)),u=n(4),c=n(6),s=n(5),m=n(7),d=(n(15),["Karina","Tomasz","Bartek","Ola","Aleksandra","Janusz"]),f=function(e){var t=e.users;return t.length>0?r.a.createElement("ul",null,t.map(function(e){return r.a.createElement("li",{key:e},e)})):r.a.createElement("p",null,"NO RESULTS!")},h=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(c.a)(this,Object(s.a)(t).call(this))).takeValue=function(){var e=document.querySelector("#val");console.log("value: ",e.value),e.value=""},e.state={filteredArray:d},e}return Object(m.a)(t,e),Object(u.a)(t,[{key:"filterUsers",value:function(e){return new Promise(function(t){var n=250*(Math.random()+1);setTimeout(function(){var n=d.filter(function(t){return t.toLowerCase().includes(e.toLowerCase())});t(n)},n)})}},{key:"takeAndFilterValue",value:function(e){var t=this,n=e.target.value;this.filterUsers(n).then(function(e){return t.setState({filteredArray:e})}),null===n&&this.setState({filteredArray:d})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"ui input"},r.a.createElement("input",{type:"search",title:"co\u015b tam",id:"val"}),r.a.createElement("button",{onClick:this.takeValue},"Take Value"),r.a.createElement("input",{type:"search",onInput:this.takeAndFilterValue.bind(this)})),r.a.createElement(f,{users:this.state.filteredArray}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(17)}},[[8,2,1]]]);
//# sourceMappingURL=main.95af3f69.chunk.js.map