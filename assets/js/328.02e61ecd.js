(window.webpackJsonp=window.webpackJsonp||[]).push([[328],{1429:function(t,e,s){"use strict";s.r(e);var r=s(15),_=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"bucket、metric-核心概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bucket、metric-核心概念"}},[t._v("#")]),t._v(" bucket、metric 核心概念")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#bucket（桶）"}},[t._v("bucket（桶）")])]),s("li",[s("a",{attrs:{href:"#metric"}},[t._v("metric")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"bucket（桶）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bucket（桶）"}},[t._v("#")]),t._v(" bucket（桶）")]),t._v(" "),s("p",[t._v("表示一个数据分组，类似 mysql 中的 group")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("city")]),t._v(" "),s("th",[t._v("name")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("北京")]),t._v(" "),s("td",[t._v("小李")])]),t._v(" "),s("tr",[s("td",[t._v("北京")]),t._v(" "),s("td",[t._v("小王")])]),t._v(" "),s("tr",[s("td",[t._v("上海")]),t._v(" "),s("td",[t._v("小张")])]),t._v(" "),s("tr",[s("td",[t._v("上海")]),t._v(" "),s("td",[t._v("小丽")])]),t._v(" "),s("tr",[s("td",[t._v("上海")]),t._v(" "),s("td",[t._v("小陈")])])])]),t._v(" "),s("p",[t._v("基于如上数据，按 city 划分 buckets，划分出来两个bucket：")]),t._v(" "),s("ul",[s("li",[t._v("北京 bucket：包含了 2 个人，小李，小王")]),t._v(" "),s("li",[t._v("上海 bucket：包含了 3 个人，小张，小丽，小陈")])]),t._v(" "),s("p",[t._v("按照某个字段进行 bucket 划分，那个字段的值相同的那些数据，就会被划分到一个 bucket 中")]),t._v(" "),s("h2",{attrs:{id:"metric"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#metric"}},[t._v("#")]),t._v(" metric")]),t._v(" "),s("p",[t._v("表示对一个数据分组执行的统计操作")]),t._v(" "),s("p",[t._v("当我们有了一堆 bucket 之后，就可以对每个 bucket 中的数据进行聚合分词了，")]),t._v(" "),s("p",[t._v("metric 就是对一个 bucket 执行的某种聚合分析的操作，比如说求平均值、求最大值、求最小值")]),t._v(" "),s("p",[t._v("使用如下 sql 来理解这两个概念")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("count")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" access_log "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("group")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v(" user_id\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("ul",[s("li",[t._v("bucket："),s("code",[t._v("group by user_id")]),t._v("，那些 user_id 相同的数据，就会被划分到一个 bucket 中")]),t._v(" "),s("li",[t._v("metric："),s("code",[t._v("count(*)")]),t._v("，对每个 user_id bucket 中所有的数据，计算一个数量")])])])}),[],!1,null,null,null);e.default=_.exports}}]);