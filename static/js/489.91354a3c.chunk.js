"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[489],{489:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var s=a(439),i=a(791),r=a(689),n={error:"Cast_error__w4rMD",list:"Cast_list__zonCB",listItem:"Cast_listItem__N7X1i",name:"Cast_name__DTN2C",avatarBg:"Cast_avatarBg__D6r3b",info:"Cast_info__tPJdR"};var c=a.p+"static/media/user.b1aa0d88055629715b34da722e8407db.svg",l=a(184),o=function(e){var t=e.handleFetching,a=(0,i.useState)([]),o=(0,s.Z)(a,2),m=o[0],_=o[1],u=(0,i.useState)(!1),h=(0,s.Z)(u,2),d=h[0],f=h[1],g=(0,r.UO)().movieId;return(0,i.useEffect)((function(){t("https://api.themoviedb.org/3/movie/".concat(g,"/credits?language=en-US")).then((function(e){return e.cast.slice(0,12)})).then((function(e){return _(e)})).catch((function(){return f(!0)}))}),[t,g]),(0,l.jsxs)("div",{children:[(d||!m)&&(0,l.jsx)("p",{className:n.error,children:"Error: Failed to get information from the server."}),m.length>0?(0,l.jsx)("ul",{className:n.list,children:m.map((function(e){return(0,l.jsxs)("li",{className:n.listItem,children:[(0,l.jsx)("p",{className:n.name,children:e.name}),e.profile_path?(0,l.jsx)("img",{className:n.image,src:"https://image.tmdb.org/t/p/w200/".concat(e.profile_path),alt:e.name}):(0,l.jsx)("div",{className:n.avatarBg,children:(0,l.jsx)("img",{src:c,alt:e.name,width:"150"})})]},e.id)}))}):(0,l.jsx)("p",{className:n.info,children:"Cast information unavailable."})]})}}}]);
//# sourceMappingURL=489.91354a3c.chunk.js.map