(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{1466:function(s,t,a){"use strict";a.r(t);var n=a(15),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"search-结果深入解析（timeout-机制揭秘）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#search-结果深入解析（timeout-机制揭秘）"}},[s._v("#")]),s._v(" search 结果深入解析（timeout 机制揭秘）")]),s._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#搜索结果返回字段含义"}},[s._v("搜索结果返回字段含义")])]),n("li",[n("a",{attrs:{href:"#timeout-机制"}},[s._v("timeout 机制")])]),n("li",[n("a",{attrs:{href:"#timeout-语法"}},[s._v("timeout 语法")])])])]),n("p"),s._v(" "),n("ol",[n("li",[s._v("我们如果发出一个搜索请求的话，会拿到一堆搜索结果，本节课，我们来讲解一下，这个搜索结果里的各种数据，都代表了什么含义")]),s._v(" "),n("li",[s._v("我们来讲解一下，搜索的 timeout 机制，底层的原理，画图讲解")])]),s._v(" "),n("h2",{attrs:{id:"搜索结果返回字段含义"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#搜索结果返回字段含义"}},[s._v("#")]),s._v(" 搜索结果返回字段含义")]),s._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[s._v("GET /_search\n\n-------------- 响应\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"took"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"timed_out"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"_shards"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"total"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"successful"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"failed"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"hits"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"total"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"max_score"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"hits"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"_index"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('".kibana"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"_type"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"config"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"_id"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5.2.0"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"_score"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"_source"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"buildNum"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("14695")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  ....\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br")])]),n("ul",[n("li",[n("p",[s._v("took：整个搜索请求花费了多少毫秒")])]),s._v(" "),n("li",[n("p",[s._v("hits.total：本次搜索，返回了几条结果")]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),n("p",[s._v("这里解说可能是有问题的，这里的 total 是搜索结果总条数（通过 "),n("code",[s._v("GET /_cat/indices?v")]),s._v(" 中的 docs.count 计算对比）")])])]),s._v(" "),n("li",[n("p",[s._v("hits.max_score：本次搜索的所有结果中，最大的相关度分数是多少")]),s._v(" "),n("p",[s._v("每一条 document 对于 search 的相关度，越相关，"),n("code",[s._v("_score")]),s._v(" 分数越大，排位越靠前")])]),s._v(" "),n("li",[n("p",[s._v("hits.hits：默认查询前 10条 数据，完整数据，"),n("code",[s._v("_score")]),s._v(" 降序排序")])]),s._v(" "),n("li",[n("p",[s._v("shards：")]),s._v(" "),n("p",[s._v("shards fail 的条件（primary 和 replica 全部挂掉），不影响其他shard。")]),s._v(" "),n("p",[s._v("默认情况下来说，一个搜索请求，会打到一个 index 的所有 primary shard 上去，当然了，\n每个 primary shard 都可能会有一个或多个 replic shard，所以请求也可以到 primary shard 的其中一个 replica shard 上去。")])]),s._v(" "),n("li",[n("p",[s._v("timeout：默认无 timeout")])])]),s._v(" "),n("h2",{attrs:{id:"timeout-机制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#timeout-机制"}},[s._v("#")]),s._v(" timeout 机制")]),s._v(" "),n("p",[s._v("默认无 timeout ，可以手动指定 timeout， latency completeness （延迟平衡完整性），")]),s._v(" "),n("p",[n("strong",[s._v("latency completeness 是什么意思？")])]),s._v(" "),n("p",[s._v("我们有些搜索应用，对时间是很敏感的。")]),s._v(" "),n("p",[s._v("比如说电商网站，你不能让用户等 10分钟，才能等到一次搜索请求的结果，人早走了")]),s._v(" "),n("p",[s._v("timeout 机制：指定每个 shard 就只能在 timeout 时间范围内，将搜索到的部分数据（也有可能是全部搜索到的数据）\n直接返回给 client 程序，而不是等到所有的数据全都搜索出来后再返回")]),s._v(" "),n("p",[s._v("确保一次搜索请求可以再用户指定 timeout 时长内完成。为一些时间敏感的搜索应用提供良好的支持")]),s._v(" "),n("p",[n("img",{attrs:{src:a(918),alt:""}})]),s._v(" "),n("p",[s._v("简单说：在指定超时时长内返回结果，这个结果可能不是所有结果；")]),s._v(" "),n("h2",{attrs:{id:"timeout-语法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#timeout-语法"}},[s._v("#")]),s._v(" timeout 语法")]),s._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[s._v("GET /_search?timeout="),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("ms\n\n单位：timeout="),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("ms，timeout="),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("s，timeout="),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("m\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])])])}),[],!1,null,null,null);t.default=r.exports},918:function(s,t,a){s.exports=a.p+"assets/img/markdown-img-paste-20190106231310300.6ef45c1a.png"}}]);