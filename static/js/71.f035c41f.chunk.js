"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[71],{548:function(t,e,n){n.d(e,{Mc:function(){return o},Vu:function(){return i},ZN:function(){return f},wH:function(){return v},y:function(){return p}});var r=n(861),a=n(757),c=n.n(a),u=n(294),s="5cf59ee4e900eea5cdca6ff85cfcf632",i=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(s));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(s));case 2:return n=t.sent,console.log(n.data),t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(s));case 2:return n=t.sent,console.log(n.data.cast),t.abrupt("return",n.data.cast);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e,n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(e,"&page=").concat(n,"&api_key=").concat(s));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},155:function(t,e,n){n.d(e,{Z:function(){return s}});var r={item:"MoviesList_item__eePYv"},a=n(689),c=n(87),u=n(184),s=function(t){var e=t.movies,n=(0,a.TH)(),s=e.map((function(t){var e=t.id,a=t.title;return(0,u.jsx)("li",{className:r.item,children:(0,u.jsx)(c.rU,{to:"/movies/".concat(e),state:{from:n},children:a})},e)}));return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("ul",{className:r.list,children:s})})}},71:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var r=n(861),a=n(439),c=n(757),u=n.n(c),s=n(548),i="Movies_error__ga8bx",o=n(791),p=n(155),f=n(184),v=function(){var t=(0,o.useState)([]),e=(0,a.Z)(t,2),n=e[0],c=e[1],v=(0,o.useState)(!1),h=(0,a.Z)(v,2),d=h[0],l=h[1],m=(0,o.useState)(null),x=(0,a.Z)(m,2),g=x[0],_=x[1];return(0,o.useEffect)((function(){var t=function(){var t=(0,r.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,l(!0),t.next=4,(0,s.Vu)();case 4:e=t.sent,c(null!==e&&void 0!==e&&e.length?e:[]),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),_(t.t0.message);case 11:return t.prev=11,l(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,f.jsxs)(f.Fragment,{children:[g&&(0,f.jsx)("p",{className:i,children:g}),d&&(0,f.jsx)("p",{children:"...Loading"}),n&&(0,f.jsx)(p.Z,{movies:n})]})},h=function(){return(0,f.jsx)("div",{children:(0,f.jsx)(v,{})})}}}]);
//# sourceMappingURL=71.f035c41f.chunk.js.map