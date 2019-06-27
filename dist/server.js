!function(e){var r={};function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)n.d(t,o,function(r){return e[r]}.bind(null,o));return t},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="/",n(n.s=13)}([function(e,r){e.exports=require("lodash.get")},function(e,r){e.exports=require("graphql")},function(e,r){e.exports=require("mysql")},function(e,r){e.exports=require("path")},function(e,r){e.exports=require("body-parser")},function(e,r){e.exports=require("axios")},function(e,r){e.exports=require("uuid")},function(e,r){e.exports=require("express")},function(e,r){e.exports=require("cookie-parser")},function(e,r){e.exports=require("cookie-session")},function(e,r){e.exports=require("csurf")},function(e,r){e.exports=require("helmet")},function(e,r){e.exports=require("express-graphql")},function(e,r,n){e.exports=n(15)},function(e,r){e.exports=require("regenerator-runtime/runtime")},function(e,r,n){"use strict";n.r(r);n(14);var t=n(7),o=n.n(t),a=n(4),u=n.n(a),c=n(8),s=n.n(c),i=n(9),p=n.n(i),l=n(10),d=n.n(l),f=n(11),b=n.n(f),h=n(0),m=n.n(h),E=process.env,k=E.oauthRedirectDomin,y=E.FB_APP_SECRET,g=E.FB_APP_KEY,v=E.PORT,O="https://graph.facebook.com/v3.3",S=E.sessionSecret||"bigAndHUgeSecret",L="".concat(k,"/auth/fb"),x=n(5),R=n.n(x),_=function(e){return"https://www.facebook.com/v3.3/dialog/oauth?client_id=".concat(g,"&response_type=code&state=").concat(e,"&redirect_uri=").concat(L)},I=n(12),T=n.n(I),w=n(6),C=n.n(w),A=n(2),N=n.n(A),j=n(1),q=process.env,P=N.a.createPool({connectionLimit:4,multipleStatements:!1,host:q.SQL_HOST,port:q.SQL_PORT,user:q.SQL_USERNAME,password:q.SQL_PASSWORD,database:q.SQL_DATABASE}),U=function(e){return new Promise(function(r,n){P.query(e,function(e,t){e?(console.error(e),n(e)):r(t)})})},M=function(e,r){return Boolean(m()(e,"session.app.isAuth",!1)&&(r||m()(e,"session.app.dbInfo.id",null)))},D=function(e){var r=m()(e,"session.app.tokenInfo.access_token",null);return"string"==typeof r&&r.length>0},F=function(e){return M(e)&&m()(e,"session.app.dbInfo.isAdmin",!1)};function Q(e,r,n,t,o,a,u){try{var c=e[a](u),s=c.value}catch(e){return void n(e)}c.done?r(s):Promise.resolve(s).then(t,o)}function W(e){return function(){var r=this,n=arguments;return new Promise(function(t,o){var a=e.apply(r,n);function u(e){Q(a,t,o,u,c,"next",e)}function c(e){Q(a,t,o,u,c,"throw",e)}u(void 0)})}}var H={auth:function(){var e=W(regeneratorRuntime.mark(function e(r,n){var t,o,a,u,c,s,i,p,l,d,f,b,h,E,k,y,g,v,S;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!M(n,!0)||!D(n)){e.next=36;break}return t=m()(n,"session.app.tokenInfo.access_token",null),o={access_token:t,fields:"id,name,picture"},e.prev=3,e.next=6,r=o,R()({baseURL:O,method:"get",url:"/me",params:r});case 6:return a=e.sent,u=a.data,c=u.name,s=u.id,i="SELECT * FROM colorpk_user WHERE oauth = 'fb' AND oauthid = ".concat(Object(A.escape)(s)),e.next=12,U(i);case 12:if(1!==(p=e.sent).length){e.next=25;break}return l=p[0],d=l.isadmin,f=l.id,n.session.app.dbInfo={id:f,name:c,isAdmin:d||!1},b="SELECT color_id FROM colorpk_userlike WHERE user_id= ".concat(Object(A.escape)(f)),e.next=19,U(b);case 19:return h=e.sent,E="UPDATE colorpk_user SET lastlogin=NOW() WHERE id=".concat(Object(A.escape)(f)),U(E),e.abrupt("return",{user:{id:f,name:c,isadmin:d,img:m()(u,"picture.data.url",null),likes:h.map(function(e){return e.color_id})}});case 25:return k="INSERT INTO colorpk_user (oauth, name, oauthid, lastlogin) VALUES ('fb', '".concat(c,"', '").concat(g,"', NOW())"),y=U(k),g=y.insertId,n.session.app.dbInfo={id:g,name:c,isAdmin:!1},e.abrupt("return",{user:{id:g,name:c,isadmin:!1,img:m()(u,"picture.data.url",null),likes:[]}});case 29:e.next=34;break;case 31:return e.prev=31,e.t0=e.catch(3),e.abrupt("return",new j.GraphQLError(e.t0.toString()));case 34:e.next=41;break;case 36:return v=C.a.v1(),S={user:null,url:_(v)},m()(n,"session.app.authError",null)&&(S.authError=n.session.app.authError),n.session.app={oauthState:v},e.abrupt("return",S);case 41:case"end":return e.stop()}var r},e,null,[[3,31]])}));return function(r,n){return e.apply(this,arguments)}}(),color:function(){var e=W(regeneratorRuntime.mark(function e(r,n){var t,o,a,u,c;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.category,M(n)||!(["LIKES","PROFILE"].indexOf(t)>-1)){e.next=3;break}return e.abrupt("return",new j.GraphQLError("color error: no user defined"));case 3:if(F(n)||"ANONYMOUS"!==t){e.next=5;break}return e.abrupt("return",new j.GraphQLError("color error: no admin access"));case 5:o=m()(n,"session.app.dbInfo.id",null),a=Object(A.escape)(o),u=null,e.t0=t,e.next="PUBLIC"===e.t0?11:"LIKES"===e.t0?13:"PROFILE"===e.t0?15:"ANONYMOUS"===e.t0?17:19;break;case 11:return u="SELECT a.* FROM colorpk_color a WHERE a.display=0 ORDER BY `id` DESC",e.abrupt("break",20);case 13:return u="SELECT a.* FROM colorpk_color a\n          INNER JOIN \n          (SELECT color_id FROM colorpk_userlike WHERE user_id = ".concat(a,") b\n          ON id = b.color_id"),e.abrupt("break",20);case 15:return u="SELECT a.*, false as `liked` FROM colorpk_color a WHERE userid = ".concat(a," "),e.abrupt("break",20);case 17:return u="SELECT * FROM colorpk_color a WHERE a.display = 1",e.abrupt("break",20);case 19:return e.abrupt("break",20);case 20:if(u){e.next=22;break}return e.abrupt("return",new j.GraphQLError("color error: unknown query"));case 22:return e.prev=22,e.next=25,U(u);case 25:return c=e.sent,e.abrupt("return",c.map(function(e){return{id:e.id,like:e.like,color:e.color,userid:e.userid,username:e.username,createdate:e.createdate}}));case 29:return e.prev=29,e.t1=e.catch(22),e.abrupt("return",new j.GraphQLError(e.t1.toString()));case 32:case"end":return e.stop()}},e,null,[[22,29]])}));return function(r,n){return e.apply(this,arguments)}}(),likeColor:function(){var e=W(regeneratorRuntime.mark(function e(r,n){var t,o,a,u,c,s,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.input,o=t.id,a=t.willLike,e.prev=1,M(n)&&(u=m()(n,"session.app.dbInfo.id",null),c=a?"INSERT INTO colorpk_userlike (user_id, color_id) VALUES (".concat(Object(A.escape)(u),", ").concat(Object(A.escape)(o),")"):"DELETE FROM colorpk_userlike WHERE user_id= ".concat(u," AND color_id = ").concat(Object(A.escape)(o)),U(c)),s="UPDATE colorpk_color SET `like` = `like` ".concat(a?"+":"-","  1 WHERE id = ").concat(Object(A.escape)(o)),e.next=6,U(s);case 6:return i=e.sent,e.abrupt("return",{status:1===i.affectedRows?0:1});case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",new j.GraphQLError(e.t0.toString()));case 13:case"end":return e.stop()}},e,null,[[1,10]])}));return function(r,n){return e.apply(this,arguments)}}(),createColor:function(){var e=W(regeneratorRuntime.mark(function e(r,n){var t,o,a,u,c,s,i,p,l,d;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.input.color,o=M(n),a=m()(n,"session.app.dbInfo.name",null),u=m()(n,"session.app.dbInfo.id",null),c=o&&a?"'".concat(a,"'"):"NULL",s=o&&u?"".concat(u):"NULL",i="NULL"==s?1:0,p=(10*Math.random()).toFixed(),27!==t.length){e.next=22;break}return l="INSERT INTO colorpk_color (`like`, color, userid, username, colortype, display, createdate) VALUES (".concat(p,", '").concat(t,"', ").concat(s,", ").concat(c,", NULL, ").concat(i,", NOW())"),e.prev=10,e.next=13,U(l);case 13:return d=e.sent,e.abrupt("return",{status:0,data:d.insertId});case 17:return e.prev=17,e.t0=e.catch(10),e.abrupt("return",new j.GraphQLError(e.t0.toString()));case 20:e.next=23;break;case 22:return e.abrupt("return",new j.GraphQLError("create error: invalid color input"));case 23:case"end":return e.stop()}},e,null,[[10,17]])}));return function(r,n){return e.apply(this,arguments)}}(),adjudicateColor:function(){var e=W(regeneratorRuntime.mark(function e(r,n){var t,o,a,u,c;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(F(n)){e.next=2;break}return e.abrupt("return",new j.GraphQLError("adjudicate error: no admin access"));case 2:return t=r.input,o=t.id,a=t.willLike,u=a?"UPDATE colorpk_color SET `display` = 0 WHERE id = ".concat(Object(A.escape)(o)):"DELETE FROM colorpk_color WHERE id = '".concat(o,"'"),e.prev=4,e.next=7,U(u);case 7:return c=e.sent,e.abrupt("return",{status:1===c.affectedRows?0:1});case 11:return e.prev=11,e.t0=e.catch(4),e.abrupt("return",new j.GraphQLError(e.t0.toString()));case 14:case"end":return e.stop()}},e,null,[[4,11]])}));return function(r,n){return e.apply(this,arguments)}}(),logoff:function(e,r){var n=m()(r,"session.app.dbInfo.name","(unknow)");console.log("logoff ".concat(n,", delete session")),delete r.session.app;var t=C.a.v1();return r.session.app={oauthState:t},{url:_(t)}}},G=Object(j.buildSchema)("\n  enum ColorCategory {\n    PUBLIC\n    LIKES\n    PROFILE\n    ANONYMOUS\n  }\n\n  type Color {\n    id: ID!\n    like: Int!\n    color: String!\n    userid: Int\n    username: String\n    createdate: String\n  }\n\n  type User {\n    id: ID!\n    img: String\n    isadmin: Boolean\n    name: String\n    likes: [Int!]\n  }\n\n  input LikeColorInputType {\n    id: ID!\n    willLike: Boolean!\n  }\n  \n  input CreateColorInputType {\n    color: String!\n  }\n\n  type LikeColorOutputType {\n    status: Int!\n  }\n\n  type AdjudicateColorOutputType {\n    status: Int!\n  }\n\n  type CreateColorOutputType {\n    status: Int!\n    data: Int!\n  }\n\n  type AuthOutputType {\n    user: User\n    url: String\n    authError: String\n  }\n\n  type Mutation {\n    likeColor(input: LikeColorInputType!): LikeColorOutputType\n    createColor(input: CreateColorInputType!): CreateColorOutputType\n    adjudicateColor(input: LikeColorInputType!): AdjudicateColorOutputType\n    logoff: AuthOutputType\n  }\n  \n  type Query {\n    color(category: ColorCategory!): [Color]\n    auth: AuthOutputType\n  }\n\n  schema {\n    query: Query\n    mutation: Mutation\n  } \n"),B=T()({schema:G,rootValue:H,graphiql:!1,pretty:!1}),K=n(3),V=n.n(K),Y=["","portfolio","popular","latest","like","color","new","adminpanel"],J=process.env.PWD,z=process.env.PWD,X=o()();X.set("x-powered-by",!1),X.use(b()()),X.use(u.a.json()),X.use(u.a.urlencoded({extended:!1})),X.use(s()()),X.use(p()({name:"session",keys:[S],domain:"react.colorpk.com",maxAge:2592e5,httpOnly:!0})),X.use(d()()),X.use("/graphql",B),X.get("/auth/:oauth",function(e,r){var n,t=m()(e,"query.code",null),o=m()(e,"query.state",null),a=m()(e,"params.oauth",null),u=m()(e,"session.app.oauthState",null);if(t&&o&&o===u){console.log("redirected by ".concat(a," auth..."));var c=function(e,r){var n=r.code;return{client_id:g,client_secret:y,code:n,redirect_uri:L}}(0,e.query);(n=c,R()({baseURL:O,method:"get",url:"/oauth/access_token",params:n})).then(function(n){var t=n.data;t.access_token&&(e.session.app={oauth:a,isAuth:!0,tokenInfo:t}),r.redirect("/")})}else console.log("inconsistant session, error msg in session"),e.session.app={isAuth:!1,authError:"Sorry, something error, please try again."},r.redirect("/")}),X.get("/*",function(e,r,n){var t=e.url.split("/");if(Y.includes(t[1])){r.cookie("_csrf",e.csrfToken());var o=V.a.join(J,"./".concat("dist","/public/index.html"));r.sendFile(o)}else n()}),X.use(function(e,r,n,t){403===e?(console.error("=====  Deny Admin  ====="),n.status(403).json(403)):404===e?(console.error("=====  Auth Failed  ====="),n.status(404).json(404)):(console.error("=====  Internal Error  ====="),console.error(e),n.status(500).json(500))}),X.use(function(e,r,n){console.error("NOT FOUND! url: ",e.url),r.status(404).sendFile(V.a.resolve(z,"./dist/public/404.html"))}),X.listen(v,"localhost",function(){console.log("".concat("prod"," is running: http://").concat("localhost",":").concat(v))}).timeout=5e3}]);