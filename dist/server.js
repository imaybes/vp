!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=17)}([function(e,t){e.exports=require("react")},function(e,t,n){"use strict";n.d(t,"f",function(){return a}),n.d(t,"i",function(){return o}),n.d(t,"j",function(){return i}),n.d(t,"a",function(){return c}),n.d(t,"c",function(){return s}),n.d(t,"d",function(){return u}),n.d(t,"e",function(){return l}),n.d(t,"l",function(){return p}),n.d(t,"b",function(){return m}),n.d(t,"h",function(){return d}),n.d(t,"k",function(){return f}),n.d(t,"g",function(){return h});var r=process.env,a="production",o=r.SERVER_PORT,i=r.SESSION_SECRET,c=r.CSRF_EXCEPTION,s=r.FB_APP_KEY,u=r.FB_APP_SECRET,l=r.FB_REDIRECT_URL,p="development"===a,m="https://graph.facebook.com/v3.3",d="localhost",f=p?"local":"dist",h=p?"/static/":"//dkny.oss-cn-hangzhou.aliyuncs.com/2/"},function(e,t){e.exports=require("lodash.get")},function(e,t){e.exports=require("mysql")},function(e,t){e.exports=require("graphql")},function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("uuid")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("body-parser")},function(e,t){e.exports=require("axios")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("helmet")},function(e,t){e.exports=require("cookie-parser")},function(e,t){e.exports=require("cookie-session")},function(e,t){e.exports=require("csurf")},function(e,t){e.exports=require("express-graphql")},function(e,t,n){e.exports=n(24)},function(e,t){e.exports=require("regenerator-runtime/runtime")},function(e,t,n){var r=n(20),a=n(22),o="string"==typeof r?[[e.i,r,""]]:r;(t=e.exports=r.locals||{})._getContent=function(){return o},t._getCss=function(){return""+r},t._insertCss=function(e){return a(o,e)}},function(e,t,n){(e.exports=n(21)(!1)).push([e.i,'.spinContainer{height:60px;display:flex;justify-content:center;align-items:center}@keyframes spinLoader-spin{0%{transform:rotate(0deg)}100%{transform:rotate(-2160deg)}}@keyframes spinLoader-normal-opacity{0%{opacity:1}45%{opacity:0}55%{opacity:0}100%{opacity:1}}.spinLoader{animation:1.25s spinLoader-spin cubic-bezier(0.46, -0.4, 0.2, 1.51) infinite both;width:40px;height:40px;border-radius:50%;overflow:hidden}.spinLoader:before,.spinLoader:after{content:"";position:absolute;width:100%;height:100%;border-radius:50%;top:0;left:0;box-sizing:border-box;border:20px solid black;border-top-color:#fa4248;border-left-color:#5ddbba;border-bottom-color:#ede670;border-right-color:#64c3f2}.spinLoader:before{filter:blur(2px)}.spinLoader:after{animation:1.25s spinLoader-normal-opacity cubic-bezier(0.46, -0.4, 0.2, 1.51) infinite both}\n',""])},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var a=(i=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),o=r.sources.map(function(e){return"/*# sourceURL=".concat(r.sourceRoot).concat(e," */")});return[n].concat(o).concat([a]).join("\n")}var i,c,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(n,"}"):n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},a=0;a<this.length;a++){var o=this[a][0];null!=o&&(r[o]=!0)}for(var i=0;i<e.length;i++){var c=e[i];null!=c[0]&&r[c[0]]||(n&&!c[2]?c[2]=n:n&&(c[2]="(".concat(c[2],") and (").concat(n,")")),t.push(c))}},t}},function(e,t,n){"use strict";
/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */var r={};e.exports=function(e,t){for(var n,a=void 0===t?{}:t,o=a.replace,i=void 0!==o&&o,c=a.prepend,s=void 0!==c&&c,u=a.prefix,l=void 0===u?"s":u,p=[],m=0;m<e.length;m++){var d=e[m],f=d[0],h=d[1],E=d[2],g=d[3],v=""+l+f+"-"+m;if(p.push(v),!r[v]||i){r[v]=1;var b=document.getElementById(v),y=!1;b||(y=!0,(b=document.createElement("style")).setAttribute("type","text/css"),b.id=v,E&&b.setAttribute("media",E));var k=h;g&&"function"==typeof btoa&&(k+="\n/*# sourceMappingURL=data:application/json;base64,"+(n=JSON.stringify(g),btoa(encodeURIComponent(n).replace(/%([0-9A-F]{2})/g,function(e,t){return String.fromCharCode("0x"+t)})))+"*/",k+="\n/*# sourceURL="+g.file+"?"+v+"*/"),"textContent"in b?b.textContent=k:b.styleSheet.cssText=k,y&&(s?document.head.insertBefore(b,document.head.childNodes[0]):document.head.appendChild(b))}else r[v]++}return function(e){e.forEach(function(e){if(--r[e]<=0){var t=document.getElementById(e);t&&t.parentNode.removeChild(t)}})}.bind(null,p)}},function(e,t,n){"use strict";n.r(t);var r=n(7),a=n.n(r),o=n(1),i=["main.js","main.css","newColor.js","newColor.css","adminPanel.js","adminPanel.css"],c=process.env.PWD;t.default=function(e,t,n){var r=e.params.fileName,s=a.a.resolve(c,"./".concat(o.k,"/public/").concat(r));i.includes(r)?t.sendFile(s):n(404)}},function(e,t,n){"use strict";n.r(t);n(18);var r=n(11),a=n.n(r),o=n(12),i=n.n(o),c=n(8),s=n.n(c),u=n(13),l=n.n(u),p=n(14),m=n.n(p),d=n(1),f=n(2),h=n.n(f),E=n(9),g=n.n(E),v=function(e){return"https://www.facebook.com/v3.3/dialog/oauth?client_id=".concat(d.c,"&response_type=code&state=").concat(e,"&redirect_uri=").concat(d.e)},b=function(e,t){return Boolean(h()(e,"session.app.isAuth",!1)&&(t||h()(e,"session.app.dbInfo.id",null)))},y=function(e){var t=h()(e,"session.app.tokenInfo.access_token",null);return"string"==typeof t&&t.length>0},k=function(e){return b(e)&&h()(e,"session.app.dbInfo.isAdmin",!1)};function w(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}var L=function(e,t){var n=t.code;return{client_id:d.c,client_secret:d.d,code:n,redirect_uri:d.e}},x=function(){var e,t=(e=regeneratorRuntime.mark(function e(t,n){var r,a,o,i,c,s,u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=h()(t,"query.code",null),a=h()(t,"query.state",null),o=h()(t,"params.oauth",null),i=h()(t,"session.app.oauthState",null),!r||!a||a!==i){e.next=14;break}return console.log("redirected by ".concat(o," auth...")),c=L(0,t.query),e.next=9,l=c,g()({baseURL:d.b,method:"get",url:"/oauth/access_token",params:l});case 9:s=e.sent,(u=s.data).access_token?t.session.app={oauth:o,isAuth:!0,tokenInfo:u}:t.session.app={isAuth:!1,authError:"get token failed."},e.next=16;break;case 14:console.log("inconsistant session, error msg in session"),t.session.app={isAuth:!1,authError:"Sorry, something error, please try again."};case 16:n.redirect("/");case 17:case"end":return e.stop()}var l},e)}),function(){var t=this,n=arguments;return new Promise(function(r,a){var o=e.apply(t,n);function i(e){w(o,r,a,i,c,"next",e)}function c(e){w(o,r,a,i,c,"throw",e)}i(void 0)})});return function(e,n){return t.apply(this,arguments)}}(),R=function(e,t,n){b(e)?n():n(401)},_=n(7),S=n.n(_),C=process.env.PWD,N=S.a.resolve(C,"./dist/error.html"),O=n(15),I=n.n(O)()(),T=function(e,t,n){d.l?console.log("".concat(e.method,": ").concat(e.originalUrl)):t.cookie("_csrf",e.csrfToken()),n()},j=n(16),P=n.n(j),A=n(6),M=n.n(A),q=n(3),F=n.n(q),U=n(4),D=process.env,W=D.SQL_HOST,B=D.SQL_PORT,H=D.SQL_USERNAME,Q=D.SQL_PASSWORD,z=D.SQL_DATABASE,K=F.a.createPool({connectionLimit:4,multipleStatements:!1,host:W,port:B,user:H,password:Q,database:z}),G=function(e){return new Promise(function(t,n){K.query(e,function(e,r){e?(console.error(e),n(e)):t(r)})})};function V(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function Y(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var o=e.apply(t,n);function i(e){V(o,r,a,i,c,"next",e)}function c(e){V(o,r,a,i,c,"throw",e)}i(void 0)})}}var X,J,$,Z,ee,te={auth:(ee=Y(regeneratorRuntime.mark(function e(t,n){var r,a,o,i,c,s,u,l,p,m,f,E,k,w,L,x,R,_;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!b(n,!0)||!y(n)){e.next=37;break}return r=h()(n,"session.app.tokenInfo.access_token",null),a={access_token:r,fields:"id,name,picture"},e.prev=3,e.next=6,t=a,g()({baseURL:d.b,method:"get",url:"/me",params:t});case 6:return o=e.sent,i=o.data,c=i.name,s=i.id,u="SELECT * FROM colorpk_user WHERE oauth = 'fb' AND oauthid = ".concat(Object(q.escape)(s)),e.next=12,G(u);case 12:if(1!==(l=e.sent).length){e.next=23;break}return p=l[0],m=p.isadmin,f=p.id,n.session.app.dbInfo={id:f,name:c,isAdmin:m||!1},E="SELECT color_id FROM colorpk_userlike WHERE user_id= ".concat(Object(q.escape)(f)),e.next=19,G(E);case 19:return k=e.sent,w="UPDATE colorpk_user SET lastlogin=NOW() WHERE id=".concat(Object(q.escape)(f)),G(w),e.abrupt("return",{__typename:"User",id:f,name:c,isadmin:m,img:h()(i,"picture.data.url",null),likes:k.map(function(e){return e.color_id})});case 23:return L="INSERT INTO colorpk_user (oauth, name, oauthid, lastlogin) VALUES ('fb', '".concat(c,"', '").concat(s,"', NOW())"),e.next=26,G(L);case 26:return x=e.sent,R=x.insertId,n.session.app.dbInfo={id:R,name:c,isAdmin:!1},e.abrupt("return",{user:{__typename:"User",id:R,name:c,isadmin:!1,img:h()(i,"picture.data.url",null),likes:[]}});case 32:return e.prev=32,e.t0=e.catch(3),e.abrupt("return",new U.GraphQLError(e.t0.toString()));case 35:e.next=40;break;case 37:return _=M.a.v1(),n.session.app={oauthState:_},e.abrupt("return",{__typename:"AuthFailResponse",url:v(_),error:h()(n,"session.app.authError",null),status:0});case 40:case"end":return e.stop()}var t},e,null,[[3,32]])})),function(e,t){return ee.apply(this,arguments)}),color:(Z=Y(regeneratorRuntime.mark(function e(t,n){var r,a,o,i,c;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.category,b(n)||!(["LIKES","PROFILE"].indexOf(r)>-1)){e.next=3;break}return e.abrupt("return",new U.GraphQLError("color error: no user defined"));case 3:if(k(n)||"ANONYMOUS"!==r){e.next=5;break}return e.abrupt("return",new U.GraphQLError("color error: no admin access"));case 5:a=h()(n,"session.app.dbInfo.id",null),o=Object(q.escape)(a),i=null,e.t0=r,e.next="PUBLIC"===e.t0?11:"LIKES"===e.t0?13:"PROFILE"===e.t0?15:"ANONYMOUS"===e.t0?17:19;break;case 11:return i="SELECT a.* FROM colorpk_color a WHERE a.display=0 ORDER BY `id` DESC",e.abrupt("break",20);case 13:return i="SELECT a.* FROM colorpk_color a\n          INNER JOIN \n          (SELECT color_id FROM colorpk_userlike WHERE user_id = ".concat(o,") b\n          ON id = b.color_id"),e.abrupt("break",20);case 15:return i="SELECT a.*, false as `liked` FROM colorpk_color a WHERE userid = ".concat(o," "),e.abrupt("break",20);case 17:return i="SELECT * FROM colorpk_color a WHERE a.display = 1",e.abrupt("break",20);case 19:return e.abrupt("break",20);case 20:return e.prev=20,e.next=23,G(i);case 23:return c=e.sent,e.abrupt("return",c.map(function(e){return{id:e.id,like:e.like,color:e.color,userid:e.userid,username:e.username,createdate:e.createdate}}));case 27:return e.prev=27,e.t1=e.catch(20),e.abrupt("return",new U.GraphQLError(e.t1.toString()));case 30:case"end":return e.stop()}},e,null,[[20,27]])})),function(e,t){return Z.apply(this,arguments)}),likeColor:($=Y(regeneratorRuntime.mark(function e(t,n){var r,a,o,i,c,s,u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.input,a=r.id,o=r.willLike,e.prev=1,b(n)&&(i=h()(n,"session.app.dbInfo.id",null),c=o?"INSERT INTO colorpk_userlike (user_id, color_id) VALUES (".concat(Object(q.escape)(i),", ").concat(Object(q.escape)(a),")"):"DELETE FROM colorpk_userlike WHERE user_id= ".concat(i," AND color_id = ").concat(Object(q.escape)(a)),G(c)),s="UPDATE colorpk_color SET `like` = `like` ".concat(o?"+":"-","  1 WHERE id = ").concat(Object(q.escape)(a)),e.next=6,G(s);case 6:return u=e.sent,e.abrupt("return",{status:1===u.affectedRows?0:1});case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",new U.GraphQLError(e.t0.toString()));case 13:case"end":return e.stop()}},e,null,[[1,10]])})),function(e,t){return $.apply(this,arguments)}),createColor:(J=Y(regeneratorRuntime.mark(function e(t,n){var r,a,o,i,c,s,u,l,p,m;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.input.color,a=b(n),o=h()(n,"session.app.dbInfo.name",null),i=h()(n,"session.app.dbInfo.id",null),c=a&&o?"'".concat(o,"'"):"NULL",s=a&&i?"".concat(i):"NULL",u="NULL"===s?1:0,l=(10*Math.random()).toFixed(),27!==r.length){e.next=22;break}return p="INSERT INTO colorpk_color (`like`, color, userid, username, colortype, display, createdate) VALUES (".concat(l,", '").concat(r,"', ").concat(s,", ").concat(c,", NULL, ").concat(u,", NOW())"),e.prev=10,e.next=13,G(p);case 13:return m=e.sent,e.abrupt("return",{status:0,data:m.insertId});case 17:return e.prev=17,e.t0=e.catch(10),e.abrupt("return",new U.GraphQLError(e.t0.toString()));case 20:e.next=23;break;case 22:return e.abrupt("return",new U.GraphQLError("create error: invalid color input"));case 23:case"end":return e.stop()}},e,null,[[10,17]])})),function(e,t){return J.apply(this,arguments)}),adjudicateColor:(X=Y(regeneratorRuntime.mark(function e(t,n){var r,a,o,i,c;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(k(n)){e.next=2;break}return e.abrupt("return",new U.GraphQLError("adjudicate error: no admin access"));case 2:return r=t.input,a=r.id,o=r.willLike,i=o?"UPDATE colorpk_color SET `display` = 0 WHERE id = ".concat(Object(q.escape)(a)):"DELETE FROM colorpk_color WHERE id = '".concat(a,"'"),e.prev=4,e.next=7,G(i);case 7:return c=e.sent,e.abrupt("return",{status:1===c.affectedRows?0:1});case 11:return e.prev=11,e.t0=e.catch(4),e.abrupt("return",new U.GraphQLError(e.t0.toString()));case 14:case"end":return e.stop()}},e,null,[[4,11]])})),function(e,t){return X.apply(this,arguments)}),logoff:function(e,t){var n=h()(t,"session.app.dbInfo.name","(unknow)");console.log("logoff ".concat(n,", delete session")),delete t.session.app;var r=M.a.v1();return t.session.app={oauthState:r},{url:v(r)}}},ne=Object(U.buildSchema)("\n  enum ColorCategory {\n    PUBLIC\n    LIKES\n    PROFILE\n    ANONYMOUS\n  }\n\n  interface MutationResponse {\n    status: Int!\n  }\n\n  type Color {\n    id: ID!\n    like: Int!\n    color: String!\n    userid: Int\n    username: String\n    createdate: String\n  }\n\n  type User {\n    id: ID!\n    img: String\n    isadmin: Boolean\n    name: String\n    likes: [Int!]\n  }\n\n  input LikeColorInputType {\n    id: ID!\n    willLike: Boolean!\n  }\n  \n  input CreateColorInputType {\n    color: String!\n  }\n\n  type LikeColorOutputType implements MutationResponse {\n    status: Int!\n  }\n\n  type AdjudicateColorOutputType implements MutationResponse {\n    status: Int!\n  }\n\n  type CreateColorOutputType implements MutationResponse {\n    status: Int!\n    data: ID!\n  }\n\n  type AuthFailResponse implements MutationResponse {\n    status: Int!\n    url: String!\n    error: String\n  }\n\n  union AuthOutputType = User | AuthFailResponse\n\n  type Mutation {\n    likeColor(input: LikeColorInputType!): LikeColorOutputType\n    createColor(input: CreateColorInputType!): CreateColorOutputType\n    adjudicateColor(input: LikeColorInputType!): AdjudicateColorOutputType\n    logoff: AuthFailResponse\n  }\n  \n  type Query {\n    color(category: ColorCategory!): [Color]\n    auth: AuthOutputType\n  }\n\n  schema {\n    query: Query\n    mutation: Mutation\n  } \n"),re=P()({schema:ne,rootValue:te,graphiql:d.l,pretty:d.l}),ae=n(0),oe=n.n(ae),ie=n(10),ce=n(5),se=n.n(ce),ue=function(){return oe.a.createElement(ae.Fragment,null,oe.a.createElement("meta",{property:"og:url",content:"https://react.colorpk.com"}),oe.a.createElement("meta",{property:"og:site_name",content:"ColorPK v1"}),oe.a.createElement("meta",{property:"og:title",content:"Your Best Color Picker"}),oe.a.createElement("meta",{property:"og:description",content:"ColorPK - Faster lighter and nicer color palette | 全球最大色彩搭配网站 | 颜色搭配 | 艺术设计"}),oe.a.createElement("meta",{property:"og:image",content:"http://dkny.oss-cn-hangzhou.aliyuncs.com/2/icon.png"}),oe.a.createElement("meta",{property:"og:image:type",content:"image/png"}),oe.a.createElement("meta",{property:"og:image:width",content:"1200"}),oe.a.createElement("meta",{property:"og:image:height",content:"620"}),oe.a.createElement("meta",{property:"twitter:site",content:"colorpk"}),oe.a.createElement("meta",{property:"twitter:creator",content:"colorpk"}),oe.a.createElement("meta",{property:"twitter:card",content:"summary_large_image"}),oe.a.createElement("meta",{property:"twitter:title",content:"ColorPK"}),oe.a.createElement("meta",{property:"twitter:description",content:"ColorPK - Faster lighter and nicer color palette | 全球最大色彩搭配网站 | 颜色搭配 | 艺术设计"}),oe.a.createElement("meta",{property:"twitter:image:src",content:"http://dkny.oss-cn-hangzhou.aliyuncs.com/2/icon.png"}),oe.a.createElement("meta",{property:"twitter:image:width",content:"1200"}),oe.a.createElement("meta",{property:"twitter:image:height",content:"1200"}))},le=function(e){var t=e.title,n=e.style,r=e.script,a=e.children,o=e.version;return oe.a.createElement("html",{lang:"en"},oe.a.createElement("head",null,oe.a.createElement("meta",{charSet:"utf-8"}),oe.a.createElement("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),oe.a.createElement(ue,null),oe.a.createElement("title",null,t),oe.a.createElement("meta",{name:"description",content:"ColorPK | Faster lighter and nicer than colorhunt | 全球最大色彩搭配网站 | 颜色搭配 | 艺术设计"}),oe.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"}),oe.a.createElement("meta",{name:"robots",content:"INDEX,FOLLOW"}),oe.a.createElement("meta",{name:"keywords",content:"colorpk, colorpicker, color picker, palette, color combination"}),oe.a.createElement("link",{rel:"shortcut icon",href:"//dkny.oss-cn-hangzhou.aliyuncs.com/3/fav.ico"}),oe.a.createElement("link",{href:"".concat(n,"?").concat(o),rel:"stylesheet"}),oe.a.createElement("script",{dangerouslySetInnerHTML:{__html:"if(window.location.hostname.indexOf('colorpk.com') > -1){\n            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n            })(window,document,'script','dataLayer','GTM-5LX6LV3');\n\n            var initLoadTime = Date.now();\n            window.addEventListener('_COLORPK_SCRIPT_READY', function(){\n              window.dataLayer.push({\n                'scriptLoadingTime': Date.now() - initLoadTime\n              });\n            });\n          }"}})),oe.a.createElement("body",null,oe.a.createElement("noscript",null,oe.a.createElement("iframe",{src:"https://www.googletagmanager.com/ns.html?id=GTM-5LX6LV3",height:"0",width:"0",style:{display:"none",visibility:"hidden"}})),oe.a.createElement("div",{id:"app",dangerouslySetInnerHTML:{__html:a}}),oe.a.createElement("script",{src:"".concat(r,"?").concat(o),type:"text/javascript"})))};le.propTypes={title:se.a.string.isRequired,version:se.a.string.isRequired,style:se.a.string.isRequired,script:se.a.string.isRequired,children:se.a.string.isRequired};var pe=le,me=(n(19),function(){return oe.a.createElement("div",{className:"spinContainer"},oe.a.createElement("div",{className:"spinLoader"}))}),de=function(){return oe.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24"},oe.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),oe.a.createElement("path",{d:" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z "}))},fe=function(e){var t=e.url,n=t.match(/^\/color\/\d+$/),r="/popular"===t,a=t in{"/latest":!0,"/":!0},o=n||t in{"/latest":!0,"/":!0,"/popular":!0,"/like":!0,"/portfolio":!0};return oe.a.createElement(ae.Fragment,null,oe.a.createElement("div",{className:"Cqiyx"},oe.a.createElement("nav",{className:"navbar is-fixed-top",role:"navigation","aria-label":"main navigation"},oe.a.createElement("div",{className:"navbar-brand"},oe.a.createElement("a",{className:"navbar-item",href:"/"},oe.a.createElement("img",{src:"//dkny.oss-cn-hangzhou.aliyuncs.com/2/icon.png",height:"32",width:"32",alt:"colorpk icon"})),oe.a.createElement("a",{role:"button",className:"navbar-burger burger","aria-label":"menu","aria-expanded":"false"},oe.a.createElement("span",{"aria-hidden":"true"}),oe.a.createElement("span",{"aria-hidden":"true"}),oe.a.createElement("span",{"aria-hidden":"true"}))),oe.a.createElement("div",{className:"navbar-menu "},oe.a.createElement("div",{className:"navbar-start"},oe.a.createElement("a",{className:"navbar-item ".concat(r?"_1-i7j":""),href:"/popular"},"Popular"),oe.a.createElement("a",{className:"navbar-item ".concat(a?"_1-i7j":""),href:"/latest"},"Latest"),oe.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},oe.a.createElement("a",{className:"navbar-link"},"More"),oe.a.createElement("div",{className:"navbar-dropdown"},oe.a.createElement("a",{className:"navbar-item",href:"//www.colorpk.com"},"ColorPK v2.0"),oe.a.createElement("a",{className:"navbar-item",href:"//www.colorpk.com/about"},"About"),oe.a.createElement("hr",{className:"navbar-divider"}),oe.a.createElement("a",{className:"navbar-item",href:"//github.com/im6/vp/issues"},"Report an issue"))),oe.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},oe.a.createElement("a",{className:"navbar-link"},oe.a.createElement(de,null),oe.a.createElement("span",{className:"_3QtW-"},"Language")),oe.a.createElement("div",{className:"navbar-dropdown"},oe.a.createElement("a",{className:"navbar-item"},"English"),oe.a.createElement("a",{className:"navbar-item"},"简体中文"),oe.a.createElement("a",{className:"navbar-item"},"日本語"),oe.a.createElement("a",{className:"navbar-item"},"한국어"),oe.a.createElement("a",{className:"navbar-item"},"Español"),oe.a.createElement("a",{className:"navbar-item"},"Русский")))),oe.a.createElement("div",{className:"navbar-end"},oe.a.createElement("div",{className:"navbar-item"},oe.a.createElement("div",{className:"buttons"},oe.a.createElement("a",{className:"button is-primary",href:"/new"},"New Color"),"  "))))),oe.a.createElement(me,null),o&&oe.a.createElement("div",{className:"_10E_t"},oe.a.createElement("div",{className:"_1oXEb"}))))};fe.propTypes={url:se.a.string.isRequired};var he=fe,Ee=M.a.v1().substring(0,8),ge=function(e,t,n){var r=oe.a.createElement(he,{url:e.path}),a=Object(ie.renderToString)(r),o=oe.a.createElement(pe,{title:"".concat(d.l?"(dev) ":"","ColorPK | Your Best Color Picker"),version:Ee,style:"".concat(d.g,"main.css"),script:"".concat(d.g,"main.js")},a),i=Object(ie.renderToStaticMarkup)(o);t.status(200),t.send("<!DOCTYPE html>".concat(i))},ve=a()();if(ve.set("x-powered-by",!1),ve.use(i()()),ve.use(s.a.json()),ve.use(s.a.urlencoded({extended:!1})),ve.use(l()()),ve.use(m()({name:"session",keys:[d.j],domain:d.l?"localhost":"react.colorpk.com",maxAge:2592e5,httpOnly:!0})),d.l){var be=n(23);ve.get("/static/:fileName",be.default)}else ve.use(function(){for(var e=void 0,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];h()(n[0],"body._csrf",null)===d.a?(console.log("csrf exception"),n[2]()):I.apply(e,n)});ve.use("/graphql",re),ve.get("/auth/:oauth",x),ve.get("/",T,ge),ve.get("/latest",T,ge),ve.get("/popular",T,ge),ve.get("/color/:colorId",T,ge),ve.get("/new",T,ge),ve.get("/like",T,R,ge),ve.get("/portfolio",T,R,ge),ve.get("/adminpanel",T,function(e,t,n){k(e)?n():n(403)},ge),ve.use(function(e,t,n){console.error("=====  resource(".concat(e.url,") not found  =====")),t.status(404).sendFile(N)}),ve.use(function(e,t,n,r){console.error("=====  Internal Error  ====="),console.log(e.toString()),n.status(e).sendFile(N)}),ve.listen(d.i,d.h,function(){console.log("app(mode: ".concat(d.f,") is running: http://").concat(d.h,":").concat(d.i))}).timeout=5e3}]);