(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{357:function(t,n,e){},358:function(t,n,e){"use strict";e(51);var s=e(21),a={name:"IconTag",functional:!0,props:{name:{type:String,required:!0},icon:{type:String,required:!0},size:{type:String,default:"1x"}},render:function(t,n){var e=n.props,a=e.name,i=e.icon,o=e.size;return t("span",{class:"post-tag",attrs:{title:a}},[t(s.a,{class:"post-tag-icon",attrs:{name:i,size:o}}),t("span",{class:"post-tag-name"},[a])])}},i=(e(359),e(2)),o=Object(i.a)(a,void 0,void 0,!1,null,null,null);n.a=o.exports},359:function(t,n,e){"use strict";e(357)},384:function(t,n,e){"use strict";e.r(n);var s={name:"Categories",components:{IconTag:e(358).a}},a=e(2),i=Object(a.a)(s,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"categories"},[n("div",{staticClass:"main-div"},[n("h2",[this._v(this._s(this.$themeConfig.lang.categories))]),this._v(" "),this._l(this.$categories.list,(function(t){return n("RouterLink",{key:t.name,attrs:{to:t.path}},[n("IconTag",{attrs:{icon:"category",name:t.name}})],1)}))],2)])}),[],!1,null,null,null);n.default=i.exports}}]);