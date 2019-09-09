!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=16)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("lodash.get")},function(e,t){e.exports=require("mysql")},function(e,t){e.exports=require("graphql")},function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("uuid")},function(e,t){e.exports=require("body-parser")},function(e,t){e.exports=require("axios")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("helmet")},function(e,t){e.exports=require("cookie-parser")},function(e,t){e.exports=require("cookie-session")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("csurf")},function(e,t){e.exports=require("express-graphql")},function(e,t,n){e.exports=n(22)},function(e,t){e.exports=require("regenerator-runtime/runtime")},function(e,t,n){var r=n(19),a=n(21),o="string"==typeof r?[[e.i,r,""]]:r;(t=e.exports=r.locals||{})._getContent=function(){return o},t._getCss=function(){return""+r},t._insertCss=function(e){return a(o,e)}},function(e,t,n){(e.exports=n(20)(!1)).push([e.i,'.spinContainer{height:60px;display:flex;justify-content:center;align-items:center}@keyframes spinLoader-spin{0%{transform:rotate(0deg)}100%{transform:rotate(-2160deg)}}@keyframes spinLoader-normal-opacity{0%{opacity:1}45%{opacity:0}55%{opacity:0}100%{opacity:1}}.spinLoader{animation:1.25s spinLoader-spin cubic-bezier(0.46, -0.4, 0.2, 1.51) infinite both;width:40px;height:40px;border-radius:50%;overflow:hidden}.spinLoader:before,.spinLoader:after{content:"";position:absolute;width:100%;height:100%;border-radius:50%;top:0;left:0;box-sizing:border-box;border:20px solid black;border-top-color:#fa4248;border-left-color:#5ddbba;border-bottom-color:#ede670;border-right-color:#64c3f2}.spinLoader:before{filter:blur(2px)}.spinLoader:after{animation:1.25s spinLoader-normal-opacity cubic-bezier(0.46, -0.4, 0.2, 1.51) infinite both}\n',""])},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var a=(i=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot).concat(e," */")}));return[n].concat(o).concat([a]).join("\n")}var i,c,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(n,"}"):n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},a=0;a<this.length;a++){var o=this[a][0];null!=o&&(r[o]=!0)}for(var i=0;i<e.length;i++){var c=e[i];null!=c[0]&&r[c[0]]||(n&&!c[2]?c[2]=n:n&&(c[2]="(".concat(c[2],") and (").concat(n,")")),t.push(c))}},t}},function(e,t,n){"use strict";
/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */var r={};function a(e){e.forEach((function(e){if(--r[e]<=0){var t=document.getElementById(e);t&&t.parentNode.removeChild(t)}}))}e.exports=function(e,t){for(var n,o=void 0===t?{}:t,i=o.replace,c=void 0!==i&&i,s=o.prepend,u=void 0!==s&&s,l=o.prefix,p=void 0===l?"s":l,m=[],d=0;d<e.length;d++){var f=e[d],h=f[0],E=f[1],g=f[2],b=f[3],v=""+p+h+"-"+d;if(m.push(v),!r[v]||c){r[v]=1;var y=document.getElementById(v),k=!1;y||(k=!0,(y=document.createElement("style")).setAttribute("type","text/css"),y.id=v,g&&y.setAttribute("media",g));var w=E;b&&"function"==typeof btoa&&(w+="\n/*# sourceMappingURL=data:application/json;base64,"+(n=JSON.stringify(b),btoa(encodeURIComponent(n).replace(/%([0-9A-F]{2})/g,(function(e,t){return String.fromCharCode("0x"+t)}))))+"*/",w+="\n/*# sourceURL="+b.file+"?"+v+"*/"),"textContent"in y?y.textContent=w:y.styleSheet.cssText=w,k&&(u?document.head.insertBefore(y,document.head.childNodes[0]):document.head.appendChild(y))}else r[v]++}return a.bind(null,m)}},function(e,t,n){"use strict";n.r(t);n(17);var r=n(9),a=n.n(r),o=n(10),i=n.n(o),c=n(6),s=n.n(c),u=n(11),l=n.n(u),p=n(12),m=n.n(p),d=process.env,f=d.SERVER_PORT,h=d.SESSION_SECRET,E=d.CSRF_EXCEPTION,g=d.FB_APP_KEY,b=d.FB_APP_SECRET,v=d.FB_REDIRECT_URL,y="https://graph.facebook.com/v3.3",k="//dkny.oss-cn-hangzhou.aliyuncs.com/2/",w=n(1),L=n.n(w),x=n(7),R=n.n(x),_=function(e){return"https://www.facebook.com/v3.3/dialog/oauth?client_id=".concat(g,"&response_type=code&state=").concat(e,"&redirect_uri=").concat(v)},S=function(e,t){return Boolean(L()(e,"session.app.isAuth",!1)&&(t||L()(e,"session.app.dbInfo.id",null)))},O=function(e){var t=L()(e,"session.app.tokenInfo.access_token",null);return"string"==typeof t&&t.length>0},C=function(e){return S(e)&&L()(e,"session.app.dbInfo.isAdmin",!1)};function N(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}var T=function(e,t){var n=t.code;return{client_id:g,client_secret:b,code:n,redirect_uri:v}},I=function(){var e,t=(e=regeneratorRuntime.mark((function e(t,n){var r,a,o,i,c,s,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=L()(t,"query.code",null),a=L()(t,"query.state",null),o=L()(t,"params.oauth",null),i=L()(t,"session.app.oauthState",null),!r||!a||a!==i){e.next=14;break}return console.log("redirected by ".concat(o," auth...")),c=T(0,t.query),e.next=9,l=c,R()({baseURL:y,method:"get",url:"/oauth/access_token",params:l});case 9:s=e.sent,(u=s.data).access_token?t.session.app={oauth:o,isAuth:!0,tokenInfo:u}:t.session.app={isAuth:!1,authError:"get token failed."},e.next=16;break;case 14:console.log("inconsistant session, error msg in session"),t.session.app={isAuth:!1,authError:"Sorry, something error, please try again."};case 16:n.redirect("/");case 17:case"end":return e.stop()}var l}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){N(o,r,a,i,c,"next",e)}function c(e){N(o,r,a,i,c,"throw",e)}i(void 0)}))});return function(e,n){return t.apply(this,arguments)}}(),j=function(e,t,n){S(e)?n():n(401)},P=n(13),A=n.n(P),M=process.env.PWD,q=A.a.resolve(M,"./dist/error.html"),F=n(14),U=n.n(F)()(),D=function(e,t,n){t.cookie("_csrf",e.csrfToken()),n()},B=n(15),H=n.n(B),W=n(5),Q=n.n(W),z=n(2),K=n.n(z),G=n(3),V=process.env,Y=V.SQL_HOST,X=V.SQL_PORT,J=V.SQL_USERNAME,$=V.SQL_PASSWORD,Z=V.SQL_DATABASE,ee=K.a.createPool({connectionLimit:4,multipleStatements:!1,host:Y,port:X,user:J,password:$,database:Z}),te=function(e){return new Promise((function(t,n){ee.query(e,(function(e,r){e?(console.error(e),n(e)):t(r)}))}))};function ne(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function re(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){ne(o,r,a,i,c,"next",e)}function c(e){ne(o,r,a,i,c,"throw",e)}i(void 0)}))}}var ae,oe,ie,ce,se,ue={auth:(se=re(regeneratorRuntime.mark((function e(t,n){var r,a,o,i,c,s,u,l,p,m,d,f,h,E,g,b,v,k;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!S(n,!0)||!O(n)){e.next=37;break}return r=L()(n,"session.app.tokenInfo.access_token",null),a={access_token:r,fields:"id,name,picture"},e.prev=3,e.next=6,t=a,R()({baseURL:y,method:"get",url:"/me",params:t});case 6:return o=e.sent,i=o.data,c=i.name,s=i.id,u="SELECT * FROM colorpk_user WHERE oauth = 'fb' AND oauthid = ".concat(Object(z.escape)(s)),e.next=12,te(u);case 12:if(1!==(l=e.sent).length){e.next=23;break}return p=l[0],m=p.isadmin,d=p.id,n.session.app.dbInfo={id:d,name:c,isAdmin:m||!1},f="SELECT color_id FROM colorpk_userlike WHERE user_id= ".concat(Object(z.escape)(d)),e.next=19,te(f);case 19:return h=e.sent,E="UPDATE colorpk_user SET lastlogin=NOW() WHERE id=".concat(Object(z.escape)(d)),te(E),e.abrupt("return",{__typename:"User",id:d,name:c,isadmin:m,img:L()(i,"picture.data.url",null),likes:h.map((function(e){return e.color_id}))});case 23:return g="INSERT INTO colorpk_user (oauth, name, oauthid, lastlogin) VALUES ('fb', '".concat(c,"', '").concat(s,"', NOW())"),e.next=26,te(g);case 26:return b=e.sent,v=b.insertId,n.session.app.dbInfo={id:v,name:c,isAdmin:!1},e.abrupt("return",{user:{__typename:"User",id:v,name:c,isadmin:!1,img:L()(i,"picture.data.url",null),likes:[]}});case 32:return e.prev=32,e.t0=e.catch(3),e.abrupt("return",new G.GraphQLError(e.t0.toString()));case 35:e.next=40;break;case 37:return k=Q.a.v1(),n.session.app={oauthState:k},e.abrupt("return",{__typename:"AuthFailResponse",url:_(k),error:L()(n,"session.app.authError",null),status:0});case 40:case"end":return e.stop()}var t}),e,null,[[3,32]])}))),function(e,t){return se.apply(this,arguments)}),color:(ce=re(regeneratorRuntime.mark((function e(t,n){var r,a,o,i,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.category,S(n)||!(["LIKES","PROFILE"].indexOf(r)>-1)){e.next=3;break}return e.abrupt("return",new G.GraphQLError("color error: no user defined"));case 3:if(C(n)||"ANONYMOUS"!==r){e.next=5;break}return e.abrupt("return",new G.GraphQLError("color error: no admin access"));case 5:a=L()(n,"session.app.dbInfo.id",null),o=Object(z.escape)(a),i=null,e.t0=r,e.next="PUBLIC"===e.t0?11:"LIKES"===e.t0?13:"PROFILE"===e.t0?15:"ANONYMOUS"===e.t0?17:19;break;case 11:return i="SELECT a.* FROM colorpk_color a WHERE a.display=0 ORDER BY `id` DESC",e.abrupt("break",20);case 13:return i="SELECT a.* FROM colorpk_color a\n          INNER JOIN \n          (SELECT color_id FROM colorpk_userlike WHERE user_id = ".concat(o,") b\n          ON id = b.color_id"),e.abrupt("break",20);case 15:return i="SELECT a.*, false as `liked` FROM colorpk_color a WHERE userid = ".concat(o," "),e.abrupt("break",20);case 17:return i="SELECT * FROM colorpk_color a WHERE a.display = 1",e.abrupt("break",20);case 19:return e.abrupt("break",20);case 20:return e.prev=20,e.next=23,te(i);case 23:return c=e.sent,e.abrupt("return",c.map((function(e){return{id:e.id,like:e.like,color:e.color,userid:e.userid,username:e.username,createdate:e.createdate}})));case 27:return e.prev=27,e.t1=e.catch(20),e.abrupt("return",new G.GraphQLError(e.t1.toString()));case 30:case"end":return e.stop()}}),e,null,[[20,27]])}))),function(e,t){return ce.apply(this,arguments)}),likeColor:(ie=re(regeneratorRuntime.mark((function e(t,n){var r,a,o,i,c,s,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.input,a=r.id,o=r.willLike,e.prev=1,S(n)&&(i=L()(n,"session.app.dbInfo.id",null),c=o?"INSERT INTO colorpk_userlike (user_id, color_id) VALUES (".concat(Object(z.escape)(i),", ").concat(Object(z.escape)(a),")"):"DELETE FROM colorpk_userlike WHERE user_id= ".concat(i," AND color_id = ").concat(Object(z.escape)(a)),te(c)),s="UPDATE colorpk_color SET `like` = `like` ".concat(o?"+":"-","  1 WHERE id = ").concat(Object(z.escape)(a)),e.next=6,te(s);case 6:return u=e.sent,e.abrupt("return",{status:1===u.affectedRows?0:1});case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",new G.GraphQLError(e.t0.toString()));case 13:case"end":return e.stop()}}),e,null,[[1,10]])}))),function(e,t){return ie.apply(this,arguments)}),createColor:(oe=re(regeneratorRuntime.mark((function e(t,n){var r,a,o,i,c,s,u,l,p,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.input.color,a=S(n),o=L()(n,"session.app.dbInfo.name",null),i=L()(n,"session.app.dbInfo.id",null),c=a&&o?"'".concat(o,"'"):"NULL",s=a&&i?"".concat(i):"NULL",u="NULL"===s?1:0,l=(10*Math.random()).toFixed(),27!==r.length){e.next=22;break}return p="INSERT INTO colorpk_color (`like`, color, userid, username, colortype, display, createdate) VALUES (".concat(l,", '").concat(r,"', ").concat(s,", ").concat(c,", NULL, ").concat(u,", NOW())"),e.prev=10,e.next=13,te(p);case 13:return m=e.sent,e.abrupt("return",{status:0,data:m.insertId});case 17:return e.prev=17,e.t0=e.catch(10),e.abrupt("return",new G.GraphQLError(e.t0.toString()));case 20:e.next=23;break;case 22:return e.abrupt("return",new G.GraphQLError("create error: invalid color input"));case 23:case"end":return e.stop()}}),e,null,[[10,17]])}))),function(e,t){return oe.apply(this,arguments)}),adjudicateColor:(ae=re(regeneratorRuntime.mark((function e(t,n){var r,a,o,i,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(C(n)){e.next=2;break}return e.abrupt("return",new G.GraphQLError("adjudicate error: no admin access"));case 2:return r=t.input,a=r.id,o=r.willLike,i=o?"UPDATE colorpk_color SET `display` = 0 WHERE id = ".concat(Object(z.escape)(a)):"DELETE FROM colorpk_color WHERE id = '".concat(a,"'"),e.prev=4,e.next=7,te(i);case 7:return c=e.sent,e.abrupt("return",{status:1===c.affectedRows?0:1});case 11:return e.prev=11,e.t0=e.catch(4),e.abrupt("return",new G.GraphQLError(e.t0.toString()));case 14:case"end":return e.stop()}}),e,null,[[4,11]])}))),function(e,t){return ae.apply(this,arguments)}),logoff:function(e,t){var n=L()(t,"session.app.dbInfo.name","(unknow)");console.log("logoff ".concat(n,", delete session")),delete t.session.app;var r=Q.a.v1();return t.session.app={oauthState:r},{url:_(r)}}},le=Object(G.buildSchema)("\n  enum ColorCategory {\n    PUBLIC\n    LIKES\n    PROFILE\n    ANONYMOUS\n  }\n\n  interface MutationResponse {\n    status: Int!\n  }\n\n  type Color {\n    id: ID!\n    like: Int!\n    color: String!\n    userid: Int\n    username: String\n    createdate: String\n  }\n\n  type User {\n    id: ID!\n    img: String\n    isadmin: Boolean\n    name: String\n    likes: [Int!]\n  }\n\n  input LikeColorInputType {\n    id: ID!\n    willLike: Boolean!\n  }\n  \n  input CreateColorInputType {\n    color: String!\n  }\n\n  type LikeColorOutputType implements MutationResponse {\n    status: Int!\n  }\n\n  type AdjudicateColorOutputType implements MutationResponse {\n    status: Int!\n  }\n\n  type CreateColorOutputType implements MutationResponse {\n    status: Int!\n    data: ID!\n  }\n\n  type AuthFailResponse implements MutationResponse {\n    status: Int!\n    url: String!\n    error: String\n  }\n\n  union AuthOutputType = User | AuthFailResponse\n\n  type Mutation {\n    likeColor(input: LikeColorInputType!): LikeColorOutputType\n    createColor(input: CreateColorInputType!): CreateColorOutputType\n    adjudicateColor(input: LikeColorInputType!): AdjudicateColorOutputType\n    logoff: AuthFailResponse\n  }\n  \n  type Query {\n    color(category: ColorCategory!): [Color]\n    auth: AuthOutputType\n  }\n\n  schema {\n    query: Query\n    mutation: Mutation\n  } \n"),pe=H()({schema:le,rootValue:ue,graphiql:!1,pretty:!1}),me=n(0),de=n.n(me),fe=n(8),he=n(4),Ee=n.n(he),ge=function(){return de.a.createElement(me.Fragment,null,de.a.createElement("meta",{property:"og:url",content:"https://react.colorpk.com"}),de.a.createElement("meta",{property:"og:site_name",content:"ColorPK v1"}),de.a.createElement("meta",{property:"og:title",content:"Your Best Color Picker"}),de.a.createElement("meta",{property:"og:description",content:"ColorPK - Faster lighter and nicer color palette | 全球最大色彩搭配网站 | 颜色搭配 | 艺术设计"}),de.a.createElement("meta",{property:"og:image",content:"http://dkny.oss-cn-hangzhou.aliyuncs.com/2/icon.png"}),de.a.createElement("meta",{property:"og:image:type",content:"image/png"}),de.a.createElement("meta",{property:"og:image:width",content:"1200"}),de.a.createElement("meta",{property:"og:image:height",content:"620"}),de.a.createElement("meta",{property:"twitter:site",content:"colorpk"}),de.a.createElement("meta",{property:"twitter:creator",content:"colorpk"}),de.a.createElement("meta",{property:"twitter:card",content:"summary_large_image"}),de.a.createElement("meta",{property:"twitter:title",content:"ColorPK"}),de.a.createElement("meta",{property:"twitter:description",content:"ColorPK - Faster lighter and nicer color palette | 全球最大色彩搭配网站 | 颜色搭配 | 艺术设计"}),de.a.createElement("meta",{property:"twitter:image:src",content:"http://dkny.oss-cn-hangzhou.aliyuncs.com/2/icon.png"}),de.a.createElement("meta",{property:"twitter:image:width",content:"1200"}),de.a.createElement("meta",{property:"twitter:image:height",content:"1200"}))},be=function(e){var t=e.title,n=e.style,r=e.script,a=e.children,o=e.version;return de.a.createElement("html",{lang:"en"},de.a.createElement("head",null,de.a.createElement("meta",{charSet:"utf-8"}),de.a.createElement("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),de.a.createElement(ge,null),de.a.createElement("title",null,t),de.a.createElement("meta",{name:"description",content:"ColorPK | Faster lighter and nicer than colorhunt | 全球最大色彩搭配网站 | 颜色搭配 | 艺术设计"}),de.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"}),de.a.createElement("meta",{name:"robots",content:"INDEX,FOLLOW"}),de.a.createElement("meta",{name:"keywords",content:"colorpk, colorpicker, color picker, palette, color combination"}),de.a.createElement("link",{rel:"shortcut icon",href:"//dkny.oss-cn-hangzhou.aliyuncs.com/3/fav.ico"}),de.a.createElement("link",{href:"".concat(n,"?").concat(o),rel:"stylesheet"}),de.a.createElement("script",{dangerouslySetInnerHTML:{__html:"if(window.location.hostname.indexOf('colorpk.com') > -1){\n            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n            })(window,document,'script','dataLayer','GTM-5LX6LV3');\n\n            var initLoadTime = Date.now();\n            window.addEventListener('_COLORPK_SCRIPT_READY', function(){\n              window.dataLayer.push({\n                'scriptLoadingTime': Date.now() - initLoadTime\n              });\n            });\n          }"}})),de.a.createElement("body",null,de.a.createElement("noscript",null,de.a.createElement("iframe",{src:"https://www.googletagmanager.com/ns.html?id=GTM-5LX6LV3",height:"0",width:"0",style:{display:"none",visibility:"hidden"}})),de.a.createElement("div",{id:"app",dangerouslySetInnerHTML:{__html:a}}),de.a.createElement("script",{src:"".concat(r,"?").concat(o),type:"text/javascript"})))};be.propTypes={title:Ee.a.string.isRequired,version:Ee.a.string.isRequired,style:Ee.a.string.isRequired,script:Ee.a.string.isRequired,children:Ee.a.string.isRequired};var ve=be,ye=(n(18),function(){return de.a.createElement("div",{className:"spinContainer"},de.a.createElement("div",{className:"spinLoader"}))}),ke=function(){return de.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24"},de.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),de.a.createElement("path",{d:" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z "}))},we=function(e){var t=e.url,n=t.match(/^\/color\/\d+$/),r="/popular"===t,a=t in{"/latest":!0,"/":!0},o=n||t in{"/latest":!0,"/":!0,"/popular":!0,"/like":!0,"/portfolio":!0};return de.a.createElement(me.Fragment,null,de.a.createElement("div",{className:"Cqiyx"},de.a.createElement("nav",{className:"navbar is-fixed-top",role:"navigation","aria-label":"main navigation"},de.a.createElement("div",{className:"navbar-brand"},de.a.createElement("a",{className:"navbar-item",href:"/"},de.a.createElement("img",{src:"//dkny.oss-cn-hangzhou.aliyuncs.com/2/icon.png",height:"32",width:"32",alt:"colorpk icon"})),de.a.createElement("a",{role:"button",className:"navbar-burger burger","aria-label":"menu","aria-expanded":"false"},de.a.createElement("span",{"aria-hidden":"true"}),de.a.createElement("span",{"aria-hidden":"true"}),de.a.createElement("span",{"aria-hidden":"true"}))),de.a.createElement("div",{className:"navbar-menu "},de.a.createElement("div",{className:"navbar-start"},de.a.createElement("a",{className:"navbar-item ".concat(r?"_1-i7j":""),href:"/popular"},"Popular"),de.a.createElement("a",{className:"navbar-item ".concat(a?"_1-i7j":""),href:"/latest"},"Latest"),de.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},de.a.createElement("a",{className:"navbar-link"},"More"),de.a.createElement("div",{className:"navbar-dropdown"},de.a.createElement("a",{className:"navbar-item",href:"//www.colorpk.com"},"ColorPK v2.0"),de.a.createElement("a",{className:"navbar-item",href:"//www.colorpk.com/about"},"About"),de.a.createElement("hr",{className:"navbar-divider"}),de.a.createElement("a",{className:"navbar-item",href:"//github.com/im6/vp/issues"},"Report an issue"))),de.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},de.a.createElement("a",{className:"navbar-link"},de.a.createElement(ke,null),de.a.createElement("span",{className:"_3QtW-"},"Language")),de.a.createElement("div",{className:"navbar-dropdown"},de.a.createElement("a",{className:"navbar-item"},"English"),de.a.createElement("a",{className:"navbar-item"},"简体中文"),de.a.createElement("a",{className:"navbar-item"},"日本語"),de.a.createElement("a",{className:"navbar-item"},"한국어"),de.a.createElement("a",{className:"navbar-item"},"Español"),de.a.createElement("a",{className:"navbar-item"},"Русский")))),de.a.createElement("div",{className:"navbar-end"},de.a.createElement("div",{className:"navbar-item"},de.a.createElement("div",{className:"buttons"},de.a.createElement("a",{className:"button is-primary",href:"/new"},"New Color"),"  "))))),de.a.createElement(ye,null),o&&de.a.createElement("div",{className:"_10E_t"},de.a.createElement("div",{className:"_1oXEb"}))))};we.propTypes={url:Ee.a.string.isRequired};var Le=we,xe=Q.a.v1().substring(0,8),Re=function(e,t,n){var r=de.a.createElement(Le,{url:e.path}),a=Object(fe.renderToString)(r),o=de.a.createElement(ve,{title:"".concat("ColorPK | Your Best Color Picker"),version:xe,style:"".concat(k,"main.css"),script:"".concat(k,"main.js")},a),i=Object(fe.renderToStaticMarkup)(o);t.status(200),t.send("<!DOCTYPE html>".concat(i))},_e=a()();_e.set("x-powered-by",!1),_e.use(i()()),_e.use(s.a.json()),_e.use(s.a.urlencoded({extended:!1})),_e.use(l()(h,{httpOnly:!0,secure:!0})),_e.use(m()({name:"session",keys:[h],domain:"react.colorpk.com",maxAge:2592e5,httpOnly:!0,secure:!0})),_e.use((function(){for(var e=void 0,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];L()(n[0],"body._csrf",null)===E?(console.log("csrf exception"),n[2]()):U.apply(e,n)})),_e.use("/graphql",pe),_e.get("/auth/:oauth",I),_e.get("/",D,Re),_e.get("/latest",D,Re),_e.get("/popular",D,Re),_e.get("/color/:colorId",D,Re),_e.get("/new",D,Re),_e.get("/like",j,Re),_e.get("/portfolio",j,Re),_e.get("/adminpanel",(function(e,t,n){C(e)?n():n(403)}),Re),_e.use((function(e,t,n){console.error("=====  resource(".concat(e.url,") not found  =====")),t.status(404).sendFile(q)})),_e.use((function(e,t,n,r){console.error("=====  Internal Error  ====="),console.log(e.toString());var a="number"==typeof e?e:400;"POST"===t.method?n.status(a).json({errors:!0}):n.status(a).sendFile(q)})),_e.listen(f,"localhost",(function(){console.log("app(mode: ".concat("production",") is running: http://").concat("localhost",":").concat(f))})).timeout=5e3}]);