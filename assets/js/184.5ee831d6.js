(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{1152:function(s,t,a){"use strict";a.r(t);var n=a(15),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_080-在流量分发-后端应用双层-nginx-中加入接收热点缓存数据的接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_080-在流量分发-后端应用双层-nginx-中加入接收热点缓存数据的接口"}},[s._v("#")]),s._v(" 080. 在流量分发+后端应用双层 nginx 中加入接收热点缓存数据的接口")]),s._v(" "),a("h2",{attrs:{id:"分发层接收热点缓存逻辑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分发层接收热点缓存逻辑"}},[s._v("#")]),s._v(" 分发层接收热点缓存逻辑")]),s._v(" "),a("p",[s._v("添加 hot 接口映射")]),s._v(" "),a("p",[s._v("vi /usr/hello/hello.conf")]),s._v(" "),a("div",{staticClass:"language-lua line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-lua"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("server")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    listen       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    server_name  _"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    location "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("lua")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      default_type "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'text/html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      content_by_lua_file "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("hello"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("lua"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("hello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lua"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    location "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("product")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      default_type "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'text/html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      content_by_lua_file "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("hello"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("lua"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("distribute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lua"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("#")]),s._v(" 建立接口映射\n    location "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("hot")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      default_type "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'text/html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      content_by_lua_file "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("hello"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("lua"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("hot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lua"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("                                               \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("p",[s._v("编写缓存逻辑 /usr/hello/lua/hot.lua")]),s._v(" "),a("div",{staticClass:"language-lua line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-lua"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" uri_args "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ngx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("get_uri_args")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" product_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" uri_args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"productId"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" cache_ngx "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ngx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("shared"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("my_cache\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" hot_product_cache_key "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hot_product_"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("..")]),s._v("product_id\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 存入缓存，时间可以设置长一点，1 小时")]),s._v("\ncache_ngx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("hot_product_cache_key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"true"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"应用层接收热点缓存逻辑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用层接收热点缓存逻辑"}},[s._v("#")]),s._v(" 应用层接收热点缓存逻辑")]),s._v(" "),a("p",[s._v("应用层都是一样的，也需要先建立接口映射，这里就不贴了")]),s._v(" "),a("p",[s._v("编写缓存逻辑 /usr/hello/lua/hot.lua")]),s._v(" "),a("div",{staticClass:"language-lua line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-lua"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" uri_args "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ngx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("get_uri_args")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" product_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" uri_args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"productId"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" product_info "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" uri_args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"productInfo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" product_cache_key "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"product_info_"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("..")]),s._v("product_id\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" cache_ngx "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ngx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("shared"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("my_cache\n\ncache_ngx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("product_cache_key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("product_info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("product_info 发送的时候，编码的，这里不知道不解码是否有问题")])])])}),[],!1,null,null,null);t.default=r.exports}}]);