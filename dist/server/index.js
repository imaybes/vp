!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=35)}([function(e,t){e.exports=require("react")},function(e,t,r){"use strict";r.d(t,"f",(function(){return a})),r.d(t,"j",(function(){return i})),r.d(t,"a",(function(){return c})),r.d(t,"c",(function(){return l})),r.d(t,"d",(function(){return u})),r.d(t,"e",(function(){return s})),r.d(t,"b",(function(){return p})),r.d(t,"g",(function(){return d})),r.d(t,"i",(function(){return m})),r.d(t,"h",(function(){return f}));var n=r(5);var o=process.env,a=o.PORT,i=o.SESSION_SECRET,c=o.CSRF_EXCEPTION,l=o.FB_APP_KEY,u=o.FB_APP_SECRET,s=o.FB_REDIRECT_URL,p="https://graph.facebook.com/v3.3",d="".concat(n.c,"/"),m="./".concat("dist","/server"),f=["/robots.txt","/sitemap.xml","/favicon.ico"];c||console.log("No CSRF exception defined"),a||console.log("No port defined.")},function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("immutable")},function(e,t){e.exports=require("lodash.get")},function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"c",(function(){return o})),r.d(t,"b",(function(){return a})),r.d(t,"d",(function(){return i}));var n=!0,o="//dkny.oss-cn-hangzhou.aliyuncs.com/2",a="canvas",i="lang"},function(e,t){e.exports=require("graphql")},function(e,t){e.exports=require("redux-actions")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("uuid")},function(e,t){e.exports={selected:"_3Vq2K",translationText:"_3Lcio",rotate:"_2Mrpm",iconWrapper:"_1uSJY"}},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("body-parser")},function(e,t){e.exports=require("axios")},function(e,t){e.exports=require("redux")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("child_process")},function(e,t){e.exports=require("helmet")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("cookie-parser")},function(e,t){e.exports=require("cookie-session")},function(e,t){e.exports=require("csurf")},function(e,t){e.exports=require("express-graphql")},function(e,t){e.exports=require("mysql")},function(e,t){e.exports=require("react-router")},function(e,t){e.exports=require("serialize-javascript")},function(e,t){e.exports={container:"_32jyT"}},function(e,t){e.exports=require("regenerator-runtime/runtime")},function(e,t){e.exports={spinContainer:"_3Vbkh",spinLoader:"_3Kppt","spinLoader-spin":"_3CdIW","spinLoader-normal-opacity":"j3l7M"}},function(e,t,r){var n={"./admin.js":31,"./color.js":32,"./user.js":33};function o(e){var t=a(e);return r(t)}function a(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=a,e.exports=o,o.id=30},function(e,t,r){"use strict";r.r(t);var n,o=r(7),a=r(3),i=r.n(a);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=i.a.fromJS({list:[],loading:!1}),u=Object(o.handleActions)((c(n={},"admin/getList",(function(e){return e.set("loading",!0)})),c(n,"admin/getList/success",(function(e,t){return e.merge({loading:!1,list:i.a.fromJS(t.payload)})})),c(n,"admin/getList/fail",(function(e){return e.merge({list:i.a.fromJS([]),loading:!1})})),c(n,"admin/decideColor/success",(function(e,t){return e.updateIn(["list"],(function(e){return e.filter((function(e){return e.get("id")!==t.payload}))})).set("loading",!1)})),n),l);t.default=u},function(e,t,r){"use strict";r.r(t);var n,o=r(7),a=r(3);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=Object(a.fromJS)({loading:!1,showVertical:!0,colorDef:{},liked:{},colorIdAllByDate:[],colorIdAllByLike:[],colorIdByMyOwn:[]}),l=Object(o.handleActions)((i(n={},"color/get",(function(e){return e.set("loading",!0)})),i(n,"color/get/success",(function(e,t){var r=t.payload,n=Object(a.List)(),o=Object(a.Map)();r.forEach((function(e){n=n.push(e.id),o=o.set(e.id,Object(a.fromJS)(e))}));var i=r.sort((function(e,t){return t.like-e.like})).map((function(e){return e.id}));return e.merge({colorIdAllByDate:n,colorIdAllByLike:Object(a.fromJS)(i),colorDef:o,loading:!1})})),i(n,"color/get/fail",(function(e){return e.merge({colorIdAllByDate:Object(a.List)(),colorIdAllByLike:Object(a.List)(),loading:!1})})),i(n,"color/toggleLike",(function(e,t){var r=t.payload,n=r.willLike,o=r.id;return(n?e.setIn(["liked",o],!0):e.deleteIn(["liked",o])).updateIn(["colorDef",o,"like"],(function(e){return e+(n?1:-1)}))})),i(n,"color/addNew/success",(function(e,t){var r=t.payload,n=r.id,o=e.setIn(["colorDef",n],Object(a.fromJS)(r));return(o=o.update("colorIdAllByDate",(function(e){return e.unshift(n)}))).update("colorIdAllByLike",(function(e){return e.push(n)}))})),i(n,"color/set/likes",(function(e,t){var r=t.payload.reduce((function(e,t){return e.set(t,!0)}),Object(a.Map)());return e.set("liked",r)})),i(n,"color/set/owns",(function(e,t){var r=t.payload;return e.set("colorIdByMyOwn",Object(a.List)(r))})),i(n,"color/setDirection",(function(e,t){var r=t.payload;return e.set("showVertical",r)})),n),c);t.default=l},function(e,t,r){"use strict";r.r(t);var n,o=r(7),a=r(3);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=Object(a.fromJS)({detail:null,facebookUrl:null,lang:null,loading:!1}),l=Object(o.handleActions)((i(n={},"user/auth",(function(e){return e.merge({loading:!0})})),i(n,"user/auth/success",(function(e,t){var r=t.payload;return e.merge({detail:Object(a.fromJS)(r),loading:!1})})),i(n,"user/auth/fail",(function(e){return e.merge({detail:null,loading:!1})})),i(n,"user/logoff",(function(e){return e.merge({detail:null})})),i(n,"user/logoff/success",(function(e,t){var r=t.payload;return e.merge({facebookUrl:r})})),i(n,"user/setLanguage",(function(e,t){var r=t.payload;return e.set("lang",r)})),n),c);t.default=l},function(e,t,r){"use strict";r.r(t);var n=r(12),o=r.n(n),a=r(1),i=process.env.PWD,c=a.h.reduce((function(e,t){return e[t]=!0,e}),{});t.default=function(e,t,r){var n=e.url;if(Object.prototype.hasOwnProperty.call(c,n)){var l=o.a.resolve(i,"".concat(a.i).concat(n));t.sendFile(l)}else r(404)}},function(e,t,r){"use strict";r.r(t);var n=r(17),o=(r(28),r(18)),a=r.n(o),i=r(19),c=r.n(i),l=r(13),u=r.n(l),s=r(20),p=r.n(s),d=r(21),m=r.n(d),f=r(1),g=r(4),b=r.n(g),v=r(10),h=r(14),y=r.n(h),E=function(e){return"https://www.facebook.com/v3.3/dialog/oauth?client_id=".concat(f.c,"&response_type=code&state=").concat(e,"&redirect_uri=").concat(f.e)},k=function(e,t){return Boolean(b()(e,"session.app.isAuth",!1)&&(t||b()(e,"session.app.dbInfo.id",null)))},w=function(e){var t=b()(e,"session.app.tokenInfo.access_token",null);return"string"==typeof t&&t.length>0?t:null},O=function(e){return k(e)&&b()(e,"session.app.dbInfo.isAdmin",!1)};function S(e,t,r,n,o,a,i){try{var c=e[a](i),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(n,o)}var L=function(e,t){var r=t.code;return{client_id:f.c,client_secret:f.d,code:r,redirect_uri:f.e}},C=function(){var e,t=(e=regeneratorRuntime.mark((function e(t,r){var n,o,a,i,c,l,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=b()(t,"query.code",null),o=b()(t,"query.state",null),a=b()(t,"params.oauth",null),i=b()(t,"session.app.oauthState",null),!n||!o||o!==i){e.next=14;break}return console.log("redirected by ".concat(a," auth...")),c=L(0,t.query),e.next=9,s=c,y()({baseURL:f.b,method:"get",url:"/oauth/access_token",params:s});case 9:l=e.sent,(u=l.data).access_token?t.session.app={oauth:a,isAuth:!0,tokenInfo:u}:t.session.app={isAuth:!1,authError:"get token failed."},e.next=16;break;case 14:console.log("inconsistant session, error msg in session"),t.session.app={isAuth:!1,authError:"Sorry, something error, please try again."};case 16:r.redirect("/");case 17:case"end":return e.stop()}var s}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){S(a,n,o,i,c,"next",e)}function c(e){S(a,n,o,i,c,"throw",e)}i(void 0)}))});return function(e,r){return t.apply(this,arguments)}}(),j=r(12),x=r.n(j),R=process.env.PWD,_=x.a.resolve(R,"".concat(f.i,"/error.html")),T=r(22),I=r.n(T)()(),N=r(23),P=r.n(N),A=r(6),D=r(24),q=r.n(D),M=process.env,B=M.SQL_HOST,U=M.SQL_PORT,F=M.SQL_USERNAME,W=M.SQL_PASSWORD,H=M.SQL_DATABASE,V=q.a.createPool({connectionLimit:4,multipleStatements:!1,host:B,port:U,user:F,password:W,database:H}),Q=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return new Promise((function(r,n){V.query(e,t,(function(e,t){e?(console.error(e),n(e)):r(t)}))}))};function J(e,t,r,n,o,a,i){try{var c=e[a](i),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(n,o)}function K(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){J(a,n,o,i,c,"next",e)}function c(e){J(a,n,o,i,c,"throw",e)}i(void 0)}))}}var G={user:function(e,t){return K(regeneratorRuntime.mark((function e(){var r,n,o,a,i,c,l,u,s,p,d,m,g,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=w(t),!k(t,!0)||!r){e.next=36;break}return n={access_token:r,fields:"id,name,picture"},e.prev=3,e.next=6,h=n,y()({baseURL:f.b,method:"get",url:"/me",params:h});case 6:return o=e.sent,a=o.data,i=a.name,c=a.id,e.next=11,Q("SELECT * FROM colorpk_user WHERE oauth = 'fb' AND oauthid = ?",[c]);case 11:if(1!==(l=e.sent).length){e.next=23;break}return u=l[0],s=u.isadmin,p=u.id,t.session.app.dbInfo={id:p,name:i,isAdmin:s||!1},e.next=17,Q("SELECT color_id FROM colorpk_userlike WHERE user_id= ?",[p]);case 17:return d=e.sent,e.next=20,Q("SELECT a.id FROM colorpk_color a WHERE a.userid=?",[p]);case 20:return m=e.sent,Q("UPDATE colorpk_user SET lastlogin=NOW() WHERE id=?",[p]),e.abrupt("return",{name:i,isadmin:s,img:b()(a,"picture.data.url",null),likes:d.map((function(e){return e.color_id})),owns:m.map((function(e){return e.id}))});case 23:return e.next=25,Q("INSERT INTO colorpk_user (oauth, name, oauthid, lastlogin) VALUES ('fb', ?, ?, NOW())",[i,c]);case 25:return g=e.sent,v=g.insertId,t.session.app.dbInfo={id:v,name:i,isAdmin:!1},e.abrupt("return",{name:i,isadmin:!1,img:b()(a,"picture.data.url",null),likes:[],owns:[]});case 31:return e.prev=31,e.t0=e.catch(3),e.abrupt("return",new A.GraphQLError(e.t0.toString()));case 34:e.next=37;break;case 36:return e.abrupt("return",null);case 37:case"end":return e.stop()}var h}),e,null,[[3,31]])})))()},color:function(e,t){return K(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n=e.category,O(t)||"ANONYMOUS"!==n){r.next=3;break}return r.abrupt("return",new A.GraphQLError("color error: no admin access"));case 3:o=null,r.t0=n,r.next="PUBLIC"===r.t0?7:"ANONYMOUS"===r.t0?11:15;break;case 7:return r.next=9,Q("SELECT a.* FROM colorpk_color a WHERE a.display=0 ORDER BY `id` DESC");case 9:return o=r.sent,r.abrupt("break",16);case 11:return r.next=13,Q("SELECT * FROM colorpk_color a WHERE a.display = 1");case 13:return o=r.sent,r.abrupt("break",16);case 15:return r.abrupt("break",16);case 16:return r.prev=16,r.abrupt("return",o.map((function(e){return{id:e.id,like:e.like,color:e.color,userid:e.userid,username:e.username,createdate:e.createdate}})));case 20:return r.prev=20,r.t1=r.catch(16),r.abrupt("return",new A.GraphQLError(r.t1.toString()));case 23:case"end":return r.stop()}}),r,null,[[16,20]])})))()},likeColor:function(e,t){return K(regeneratorRuntime.mark((function r(){var n,o,a,i,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.input,o=n.id,a=n.willLike,r.prev=1,k(t)&&(i=b()(t,"session.app.dbInfo.id",null),Q(a?"INSERT INTO colorpk_userlike (user_id, color_id) VALUES (?, ?)":"DELETE FROM colorpk_userlike WHERE user_id= ? AND color_id = ?",[i,o])),r.next=5,Q("UPDATE colorpk_color SET `like` = `like` ".concat(a?"+":"-","  1 WHERE id = ?"),[o]);case 5:return c=r.sent,r.abrupt("return",{status:1===c.affectedRows?0:1});case 9:return r.prev=9,r.t0=r.catch(1),r.abrupt("return",new A.GraphQLError(r.t0.toString()));case 12:case"end":return r.stop()}}),r,null,[[1,9]])})))()},createColor:function(e,t){return K(regeneratorRuntime.mark((function r(){var n,o,a,i,c,l,u,s,p;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n=e.input.color,o=k(t),a=b()(t,"session.app.dbInfo.name",null),i=b()(t,"session.app.dbInfo.id",null),l=(c=o&&a)?a:null,u=c?i:null,s=(10*Math.random()).toFixed(),27!==n.length){r.next=21;break}return r.prev=9,r.next=12,Q("INSERT INTO colorpk_color (`like`, color, userid, username, colortype, display, createdate) VALUES (?, ?, ?, ?, NULL, ?, NOW())",[s,n,u,l,c?0:1]);case 12:return p=r.sent,r.abrupt("return",{status:0,data:p.insertId});case 16:return r.prev=16,r.t0=r.catch(9),r.abrupt("return",new A.GraphQLError(r.t0.toString()));case 19:r.next=22;break;case 21:return r.abrupt("return",new A.GraphQLError("create error: invalid color input"));case 22:case"end":return r.stop()}}),r,null,[[9,16]])})))()},adjudicateColor:function(e,t){return K(regeneratorRuntime.mark((function r(){var n,o,a,i;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(O(t)){r.next=2;break}return r.abrupt("return",new A.GraphQLError("adjudicate error: no admin access"));case 2:return n=e.input,o=n.id,a=n.willLike,r.prev=3,r.next=6,Q(a?"UPDATE colorpk_color SET `display` = 0 WHERE id = ?":"DELETE FROM colorpk_color WHERE id = ?",[o]);case 6:return i=r.sent,r.abrupt("return",{status:1===i.affectedRows?0:1});case 10:return r.prev=10,r.t0=r.catch(3),r.abrupt("return",new A.GraphQLError(r.t0.toString()));case 13:case"end":return r.stop()}}),r,null,[[3,10]])})))()}},Y=Object(A.buildSchema)("\n  enum ColorCategory {\n    PUBLIC\n    ANONYMOUS\n  }\n\n  interface MutationResponse {\n    status: Int!\n  }\n\n  type Color {\n    id: ID!\n    like: Int!\n    color: String!\n    userid: ID\n    username: String\n    createdate: String\n  }\n\n  type User {\n    img: String\n    isadmin: Boolean\n    name: String\n    likes: [ID!]\n    owns: [ID!]\n  }\n\n  input LikeColorInputType {\n    id: ID!\n    willLike: Boolean!\n  }\n  \n  input CreateColorInputType {\n    color: String!\n  }\n\n  type LikeColorOutputType implements MutationResponse {\n    status: Int!\n  }\n\n  type AdjudicateColorOutputType implements MutationResponse {\n    status: Int!\n  }\n\n  type CreateColorOutputType implements MutationResponse {\n    status: Int!\n    data: ID!\n  }\n\n  type Mutation {\n    likeColor(input: LikeColorInputType!): LikeColorOutputType\n    createColor(input: CreateColorInputType!): CreateColorOutputType\n    adjudicateColor(input: LikeColorInputType!): AdjudicateColorOutputType\n  }\n  \n  type Query {\n    color(category: ColorCategory!): [Color]\n    user: User\n  }\n\n  schema {\n    query: Query\n    mutation: Mutation\n  } \n"),z=P()({schema:Y,rootValue:G,graphiql:!1,pretty:!1}),X=r(0),$=r.n(X),Z=r(3),ee=r(9),te=r(25),re=r(15),ne=r(16),oe=r(5),ae=r(2),ie=r.n(ae),ce=function(){return $.a.createElement(X.Fragment,null,$.a.createElement("meta",{property:"og:url",content:"https://react.colorpk.com"}),$.a.createElement("meta",{property:"og:site_name",content:"ColorPK v1"}),$.a.createElement("meta",{property:"og:title",content:"Your Best Color Picker"}),$.a.createElement("meta",{property:"og:description",content:"ColorPK - Faster lighter and nicer color palette | 全球最大色彩搭配网站 | 颜色搭配 | 艺术设计"}),$.a.createElement("meta",{property:"og:image",content:"".concat(oe.c,"/icon.png")}),$.a.createElement("meta",{property:"og:image:type",content:"image/png"}),$.a.createElement("meta",{property:"og:image:width",content:"1200"}),$.a.createElement("meta",{property:"og:image:height",content:"620"}),$.a.createElement("meta",{property:"twitter:site",content:"colorpk"}),$.a.createElement("meta",{property:"twitter:creator",content:"colorpk"}),$.a.createElement("meta",{property:"twitter:card",content:"summary_large_image"}),$.a.createElement("meta",{property:"twitter:title",content:"ColorPK"}),$.a.createElement("meta",{property:"twitter:description",content:"ColorPK - Faster lighter and nicer color palette | 全球最大色彩搭配网站 | 颜色搭配 | 艺术设计"}),$.a.createElement("meta",{property:"twitter:image:src",content:"".concat(oe.c,"/icon.png")}),$.a.createElement("meta",{property:"twitter:image:width",content:"1200"}),$.a.createElement("meta",{property:"twitter:image:height",content:"1200"}))},le=r(26),ue=r.n(le),se=function(e){var t=e.title,r=e.style,n=e.script,o=e.children,a=e.version,i=e.csrfToken,c=e.lastBuildDate,l=e.initState;return $.a.createElement("html",{lang:"en"},$.a.createElement("head",null,$.a.createElement("meta",{charSet:"utf-8"}),$.a.createElement("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),$.a.createElement(ce,null),$.a.createElement("title",null,t),$.a.createElement("meta",{name:"description",content:"ColorPK | Faster lighter and nicer than colorhunt | 全球最大色彩搭配网站 | 颜色搭配 | 艺术设计"}),$.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"}),$.a.createElement("meta",{name:"robots",content:"INDEX,FOLLOW"}),$.a.createElement("meta",{name:"keywords",content:"colorpk, colorpicker, color picker, palette, color combination"}),$.a.createElement("link",{rel:"shortcut icon",href:"//dkny.oss-cn-hangzhou.aliyuncs.com/3/fav.ico"}),$.a.createElement("link",{href:"".concat(r,"?").concat(a),rel:"stylesheet"}),$.a.createElement("script",{dangerouslySetInnerHTML:{__html:"if(window.location.hostname.indexOf('colorpk.com') > -1){(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5LX6LV3');} var initLoadTime = Date.now();window.addEventListener('_COLORPK_SCRIPT_READY', function(){window.dataLayer.push({'scriptLoadingTime': Date.now() - initLoadTime});console.log('server last build: ".concat(c,"');});\n          ")}})),$.a.createElement("body",null,$.a.createElement("noscript",null,$.a.createElement("iframe",{src:"https://www.googletagmanager.com/ns.html?id=GTM-5LX6LV3",height:"0",width:"0",style:{display:"none",visibility:"hidden"}})),$.a.createElement("div",{id:"app",dangerouslySetInnerHTML:{__html:o}}),$.a.createElement("div",{id:"csrf","data-token":i}),$.a.createElement("script",{dangerouslySetInnerHTML:{__html:"window.".concat("_REDUXSTATE_","=").concat(ue()(l))}}),$.a.createElement("script",{src:"".concat(n,"?").concat(a),type:"text/javascript"})))};se.propTypes={title:ie.a.string.isRequired,lastBuildDate:ie.a.string.isRequired,version:ie.a.string.isRequired,style:ie.a.string.isRequired,script:ie.a.string.isRequired,children:ie.a.string.isRequired,csrfToken:ie.a.string.isRequired,initState:ie.a.object.isRequired};var pe=se,de=r(27),me=r.n(de),fe=r(7),ge=r(8),be=r(11),ve=r.n(be),he=function(){return $.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24"},$.a.createElement("title",null,"translation"),$.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),$.a.createElement("path",{d:" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z "}))},ye=function(e){var t=e.languages,r=e.onChange;return $.a.createElement("div",{className:"navbar-dropdown"},t.map((function(e){return $.a.createElement("a",{className:"navbar-item",key:e.code,onClick:function(){r(e.code)}},e.name)})))};ye.propTypes={onChange:ie.a.func.isRequired,languages:ie.a.array.isRequired};var Ee=ye,ke=[{code:"en",name:"English",data:{language:"Language",popular:"Popular",latest:"Latest",more:"More",about:"About",newColor:"New Color",fbLogin:"Facebook Login",reportIssue:"Report an issue",download:"Download",submit:"Submit",reset:"Reset",return:"Return",profile:"Profile",like:"Like",admin:"Admin",logOut:"Log Out",facebook:"FaceBook",twitter:"Twitter",email:"E-Mail",noColorsToShow:"No colors to display"}},{code:"zh",name:"简体中文",data:{language:"多语言",popular:"最热",latest:"最新",more:"更多",about:"关于",newColor:"创建新颜色",fbLogin:"脸书账号登陆",reportIssue:"报告错误",download:"下载",submit:"添加",reset:"重置",return:"返回",profile:"我的颜色",like:"我的收藏",admin:"管理员",logOut:"注销",facebook:"脸书",twitter:"推特",email:"电邮",noColorsToShow:"没有可以显示的颜色"}},{code:"ja",name:"日本語",data:{language:"言語",popular:"人気のある",latest:"最新",more:"もっと",about:"約",newColor:"色をつくる",fbLogin:"Facebookでログイン",reportIssue:"問題を報告する",download:"ダウンロード",submit:"提出する",reset:"リセット",return:"戻る",profile:"プロフィール",like:"好む",admin:"管理者",logOut:"サインアウト",facebook:"FaceBook",twitter:"さえずり",email:"Eメール",noColorsToShow:"表示する色がありません"}},{code:"ko",name:"한국어",data:{language:"언어",popular:"인기 있는",latest:"최근",more:"더",about:"약",newColor:"몹시 떠들어 대다",fbLogin:"페이스 북 로그인",reportIssue:"보고 문제",download:"다운로드",submit:"제출하다",reset:"다시 놓기",return:"반환",profile:"윤곽",like:"인기 있는 말",admin:"관리자",logOut:"로그 아웃하다",facebook:"페이스 북",twitter:"지저귀다",email:"이메일",noColorsToShow:"표시 할 색상이 없습니다"}},{code:"es",name:"Español",data:{language:"idioma",popular:"popular",latest:"más reciente",more:"Más",about:"acerca de",newColor:"crear nuevo",fbLogin:"cuenta de Facebook",reportIssue:"informe de problema",download:"descargar",submit:"enviar",reset:"Reiniciar",return:"regreso",profile:"perfil",like:"favorita",admin:"administración",logOut:"cerrar sesión",facebook:"Facebook",twitter:"gorjeo",email:"correo electrónico",noColorsToShow:"No hay color para mostrar"}},{code:"ru",name:"Русский",data:{language:"Переводы",popular:"популярный",latest:"недавно",more:"Больше",about:"около",newColor:"Создайте",fbLogin:"Логин в фейсбук",reportIssue:"сообщить о проблемах",download:"скачать",submit:"Отправить",reset:"сброс",return:"вернуть",profile:"профиль",like:"любимый",admin:"админ",logOut:"выйти",facebook:"Facebook",twitter:"щебет",email:"Эл. адрес",noColorsToShow:"Нет цвета для отображения"}}],we=ke.map((function(e){return{code:e.code,name:e.name}})),Oe=ke.reduce((function(e,t){return e[t.code]=t.data,e}),{}),Se=$.a.createContext();function Le(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Ce(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Ce(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ce(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var je=ve.a.selected,xe=function(e){var t=e.url,r=e.detail,n=e.likeNum,o=e.showVertical,a=e.facebookUrl,i=e.languages,c=e.onLogout,l=e.onRedirect,u=e.onChangeLang,s=e.onChangeCanvasDirection,p=Le(Object(X.useState)(!1),2),d=p[0],m=p[1],f=Object(X.useContext)(Se),g=Boolean(r),b="/popular"===t,v=t in{"/latest":!0,"/":!0},h="/like"===t,y=g&&r.get("img"),E=y||"".concat(oe.c,"/icon.png"),k=function(){m(!1)},w=function(){m(!1),window.scrollTo(0,0)};return $.a.createElement("nav",{className:"navbar is-fixed-top",role:"navigation","aria-label":"main navigation"},$.a.createElement("div",{className:"navbar-brand"},$.a.createElement("div",{title:"click to rotate","aria-label":"click to rotate",className:"navbar-item ".concat(ve.a.iconWrapper),onClick:function(){m(!1),s(!o)}},$.a.createElement("img",{src:E,className:"".concat(y||o?"":ve.a.rotate),alt:"colorpk icon"})),$.a.createElement("a",{role:"nav toggle btn",className:"navbar-burger burger","aria-label":"nav menu","aria-expanded":"false",onClick:function(){return m((function(e){return!e}))}},$.a.createElement("span",{"aria-hidden":"true"}),$.a.createElement("span",{"aria-hidden":"true"}),$.a.createElement("span",{"aria-hidden":"true"}))),$.a.createElement("div",{className:"navbar-menu ".concat(d?"is-active":"")},$.a.createElement("div",{className:"navbar-start"},g?$.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},$.a.createElement("a",{className:"navbar-link ".concat(["/like","/portfolio"].includes(t)?je:"")},r.get("name")),$.a.createElement("div",{className:"navbar-dropdown"},$.a.createElement(ge.Link,{className:"navbar-item",to:"/portfolio",onClick:w},f.profile),$.a.createElement(ge.Link,{to:"/like",className:"navbar-item",onClick:w},f.like),r.get("isadmin")&&$.a.createElement(ge.Link,{to:"/adminpanel",className:"navbar-item",onClick:w},f.admin))):$.a.createElement(ge.Link,{to:"/like",className:"navbar-item ".concat(h?je:""),onClick:w},f.like,n>0&&" (".concat(n,")")),$.a.createElement(ge.Link,{to:"/popular",className:"navbar-item ".concat(b?je:""),onClick:k},f.popular),$.a.createElement(ge.Link,{to:"/latest",className:"navbar-item ".concat(v?je:""),onClick:k},f.latest),$.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},$.a.createElement("a",{className:"navbar-link"},f.more),$.a.createElement("div",{className:"navbar-dropdown"},$.a.createElement("a",{className:"navbar-item",href:"//www.colorpk.com"},"ColorPK v2.0"),$.a.createElement("a",{className:"navbar-item",href:"//www.colorpk.com/about"},f.about),$.a.createElement("hr",{className:"navbar-divider"}),$.a.createElement("a",{className:"navbar-item",href:"//github.com/im6/vp/issues"},f.reportIssue))),$.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},$.a.createElement("a",{className:"navbar-link"},$.a.createElement(he,null),$.a.createElement("span",{className:ve.a.translationText},f.language)),$.a.createElement(Ee,{languages:i,onChange:u}))),$.a.createElement("div",{className:"navbar-end"},$.a.createElement("div",{className:"navbar-item"},$.a.createElement("div",{className:"buttons"},$.a.createElement(ge.Link,{to:"/new",className:"button is-primary",onClick:w},f.newColor),"  ",g?$.a.createElement("button",{className:"button is-danger",onClick:function(e){e.preventDefault(),c(),l("/"),k()}},f.logOut):$.a.createElement("a",{className:"button is-info",href:a},f.fbLogin))))))};xe.propTypes={url:ie.a.string,detail:ie.a.object,facebookUrl:ie.a.string,likeNum:ie.a.number,showVertical:ie.a.bool,languages:ie.a.array.isRequired,onLogout:ie.a.func.isRequired,onRedirect:ie.a.func.isRequired,onChangeLang:ie.a.func.isRequired,onChangeCanvasDirection:ie.a.func.isRequired};var Re=xe,_e=Object(ge.withRouter)(Object(ee.connect)((function(e,t){var r=e.user,n=e.color,o=t.location,a=t.history,i=o.pathname,c=r.get("detail"),l=r.get("facebookUrl"),u=n.get("liked").size,s=n.get("showVertical");return{url:i,detail:c,likeNum:u,languages:we,facebookUrl:l,showVertical:s,onRedirect:a.push}}),(function(e){return{onLogout:function(){var t=Object(fe.createAction)("user/logoff");e(t())},onChangeLang:function(t){var r=Object(fe.createAction)("user/setLanguage");e(r(t))},onChangeCanvasDirection:function(t){var r=Object(fe.createAction)("color/setDirection");e(r(t))}}}))(Re)),Te=(r(29),$.a.memo((function(){return $.a.createElement("div",{className:"spinContainer"},$.a.createElement("div",{className:"spinLoader"}))})));function Ie(e){return(Ie="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ne(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Pe(e,t){return(Pe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Ae(e,t){return!t||"object"!==Ie(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function De(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function qe(e){return(qe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Me=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Pe(e,t)}(i,e);var t,r,n,o,a=(t=i,function(){var e,r=qe(t);if(De()){var n=qe(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return Ae(this,e)});function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=a.call(this,e)).state={loading:!0},t}return r=i,(n=[{key:"componentDidMount",value:function(){this.setState({loading:!1})}},{key:"render",value:function(){var e=this.state.loading,t=this.props.children;return $.a.createElement("div",{className:me.a.container},$.a.createElement(_e,null),e?$.a.createElement(Te,null):t)}}])&&Ne(r.prototype,n),o&&Ne(r,o),i}($.a.Component);Me.propTypes={children:ie.a.node};var Be=Me,Ue=Object(ee.connect)((function(e){return{lang:e.user.get("lang")}}))((function(e){var t=e.lang,r=e.children,n=Oe[t]||Oe.en;return $.a.createElement(Se.Provider,{value:n},r)})),Fe=r(30),We=Fe.keys().reduce((function(e,t){return e[t.replace(/\.js$/,"").replace(/^.\//,"")]=Fe(t).default,e}),{});function He(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ve(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?He(Object(r),!0).forEach((function(t){Qe(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):He(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Qe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Je=Object(v.v1)().substring(0,8),Ke=function(e,t){var r=k(e,!0),n={lang:e.cookies[oe.d],loading:!0};if(r)n=Ve({},n,{detail:{name:"loading",isadmin:O(e)}});else{var o=Object(v.v1)();e.session.app={oauthState:o},n=Ve({},n,{detail:null,facebookUrl:E(o)})}var a=void 0===e.cookies[oe.b]?oe.a:"1"===e.cookies[oe.b],i=Object(re.createStore)(Object(re.combineReducers)(We),{user:Object(Z.fromJS)(n),color:Object(Z.fromJS)({loading:!0,showVertical:a,colorDef:{},liked:{},colorIdAllByDate:[],colorIdAllByLike:[],colorIdByMyOwn:[]})}),c=$.a.createElement(te.StaticRouter,{location:e.url},$.a.createElement(ee.Provider,{store:i},$.a.createElement(Ue,null,$.a.createElement(Be,null)))),l=Object(ne.renderToString)(c),u=$.a.createElement(pe,{title:"".concat("ColorPK | Your Best Color Picker"),version:Je,style:"".concat(f.g,"main.css"),script:"".concat(f.g,"main.js"),csrfToken:e.csrfToken(),lastBuildDate:"4/12/2020, 2:14:08 PM EST",initState:i.getState()},l),s=Object(ne.renderToStaticMarkup)(u);t.status(200),t.send("<!DOCTYPE html>".concat(s))},Ge=c()();Ge.set("trust proxy",!0),Ge.use(a()()),Ge.use(u.a.json()),Ge.use(u.a.urlencoded({extended:!1})),Ge.use(p()()),Ge.use(m()({name:"session",keys:[f.j],maxAge:2592e5,httpOnly:!0,sameSite:"strict"}));var Ye=r(34).default;f.h.forEach((function(e){Ge.get(e,Ye)})),Ge.get("/_ah/:action",(function(e,t){var r=e.params.action;t.json({status:"".concat(r," - ok")})})),Ge.use((function(){for(var e=void 0,t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];b()(r[0],"body._csrf",null)===f.a?(console.log("csrf exception"),r[2]()):I.apply(e,r)})),Ge.post("/graphql",z),Ge.get("/auth/logout",(function(e,t){var r=b()(e,"session.app.dbInfo.name","unknown");console.log("logoff (".concat(r,"), delete session")),delete e.session.app;var n=Object(v.v1)();e.session.app={oauthState:n},t.json({url:E(n)})})),Ge.get("/auth/:oauth",C),["/","/latest","/popular","/color/:id","/new","/like"].forEach((function(e){Ge.get(e,Ke)})),Ge.get("/portfolio",(function(e,t,r){k(e)?r():r(401)}),Ke),Ge.get("/adminpanel",(function(e,t,r){O(e)?r():r(403)}),Ke),Ge.use((function(e,t){console.error("Error: 404, ".concat(e.url," not found")),t.status(400).sendFile(_)})),Ge.use((function(e,t,r,n){console.error("Error: ".concat(e.toString(),", ").concat(t.url)),"POST"===t.method?r.status(400).json({errors:!0}):r.status(400).sendFile(_)})),Ge.listen(f.f,(function(){return console.log("app (mode: ".concat("production",") is running on: http://localhost:").concat(f.f))})).timeout=5e3,Object(n.exec)("curl ifconfig.me",(function(e,t,r){e?console.error(r):console.log("public IP addr: ".concat(t))}))}]);