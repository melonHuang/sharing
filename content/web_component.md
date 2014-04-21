
@bg: img/web_component/dinner.png
# Good Evening
---
@state: green
<style type="text/css">
.self-intro .avatar {
    display: inline-block;
    width: 150px;
    height: 150px;
    border-radius: 100px;
    background: url(img/web_component/avatar.jpg) no-repeat center center;
    background-size: 213px;
}
.self-intro .name {
    display: inline-block;
    padding-left: 30px;
    position: relative;
    top: -45px;
}
.contact-list .fa{
    font-size: 46px; 
    padding-right: 10px;
}
.reveal .wc-title {
    color: #999;
}
.initial-web {
    color: #0099CC;
}
.initial-component {
    color: #669900;
}
</style>
<div class="self-intro">
    <span class="avatar"></span>
    <h2 class="name">Melon.H</h2>
</div>
<ul class="contact-list">
    <li><i class="fa fa-github"></i>Git</li>
    <li>Blog</li>
    <li>NovaUI</li>
</ul>

---

@state: light
<h1 class="wc-title"><span class="initial-web">W</span><span class="word-web"></span> <span class="initial-component">C</span><span class="word-component"></span></h1>

---
@state: light

## 今天的Web组件

bootstrap, foudation, jquery plugin图片...

---
@state: light

## 你如何使用Boostrap？

---
@state: light

## Step1: 看文档

![bootstrap文档](http://p9.qhimg.com/d/inn/edeabc2f/bootstrapdoc.jpg)

---
@state: light

## Step2: 

拷贝CSS, HTML, JS

![bootstrap code](http://p7.qhimg.com/d/inn/e31d5c20/bootstrapcode.jpg)

---
@state: light

## Why?

![bootstrap code](http://p3.qhimg.com/d/inn/52c6655f/bootstrapcode2.jpg)


---
@state: light

## We can do better !

```markup
<my-tab>
    <a href="#">Home</a>
    <a href="#">Profile</a>
    <a href="#">Messages</a>
    <a href="#">Settings</a>
    <div>...</div>
    <div>...</div>
    <div>...</div>
    <div>...</div>
</my-tab>
```

```markup
<mark-down>
#title
## title2
    *list1
    *list2
</mark-down>
```

---

@state: blue

## 理想中的Web组件模型？

* 有自己的标记，属性，方法
* 封装样式，标记
* 生命周期回调


---

@state: blue

# Web Component
* Template - 脚手架
* Shadow Dom - 封装
* Custom element - 扩展
* Import - 打包

---
@state: light

## Template 
一组可重用的懒惰代码


---
@state: light, @fragment

## Template

* 懒惰 - 资源不加载，脚本不运行
* 子节点不属于DOM, 属于template附属的document fragment
```javascript
    template.children === null //always true
```
---

## Content属性

图, 标注, documentFragment

---
@state: light

## 使用Template

<iframe src="http://jsbin.com/kovet/6/embed?js" class="" id="" style="border: 1px solid rgb(170, 170, 170); width: 100%; min-height: 500px; height: 46px;"></iframe>

--- 
@state: light

##Shadow DOM

style 和 markup 封装

---
@state: light


## Shadow DOM就在我们眼前


<input type="date" style="font-size: 30px;" value="2014-01-01"/>

```markup
<input type="date" style="font-size: 30px;"/>
```

* 其他例子：video, textarea, details

---
@state: light

## Shadow Dom

* Shadow Host

    - 包含shadow dom的节点 

* Shadow Root

    - shadow dom的根节点

* Shadow Boundary

    - 样式和标记的界限

---

### element.createShadowRoot
@state: light

---

## 创建Shadow Dom
@state: light

<iframe src="http://jsbin.com/rivoz/2/embed?html,js" class="" id="" style="border: 1px solid rgb(170, 170, 170); width: 100%; min-height: 500px; height: 46px;"></iframe>

---

## 操作shadow dom
@state: light

* shadow dom不属于main document
```javascript
ducument.querySelector('element-in-shadow') === null //true
```
* shadowRoot = element.createShadowRoot() 
* shadoeRoot = element.shadow
* shadowRoot.querySelector可获取shadow dom中的内容并操作

---

@state: light
## 样式封装
样式定义不穿过Shadow boundary

<iframe src="http://jsbin.com/xevot/1/embed?html,output" class="" id="" style="border: 1px solid rgb(170, 170, 170); width: 100%; min-height: 500px; height: 46px;"></iframe>

---

## 突破 Style Boundary
@state: light

---

## 由内到外
@state: light

---

### 设置Shadow host样式
@state: light

* :host伪类可以在shadow root中，设置shadow host的样式
* :host(selector) 会选中匹配该selector的shadow host
* :host(:hover, :active)
* :host-context

---

### Demo
@state: light

<iframe src="http://jsbin.com/dolec/2/embed?html,js,output" class="" id="" style="border: 1px solid rgb(170, 170, 170); width: 100%; min-height: 500px; height: 46px;"></iframe>

---

@state: light
## 由外到内
* styles hooks, 使用者可从外部定义shadow dom内部样式

---

@state: light
## ::shadow伪元素
定义shadow dom内部样式
```markup
<style type="text/css">
    #host::shadow span {
        color: red;
    }
</style>
<div id="host">
    <span>Light DOM</span>
</div>
<script type="text/javascript">
    var host = document.querySelector('div');
    var root = host.createShadowRoot();
    root.innerHTML = "<span>Shadow DOM</span>"; 
</script>
```

---

@state: light
## /deep/
忽略所有shadow boundary，定义所有嵌套的shadow dom

```markup
#host /deep/ span {
    ...
}
```

---

@state: light
## 使用CSS变量

shadow dom样式:
```css
button {
    color: +var (button-text-color, pink); /* default color will be pink*/
    font: +var (button-font);
}
```

外部样式:
```css
#host {
+var-button-text-color: green;
+var-button-font: "Comic Sans MS", cursive;
}
```


---

@state: light
## Demo

<iframe src="http://jsbin.com/cuqoj/3/embed?html,js,output" class="" id="" style="border: 1px solid rgb(170, 170, 170); width: 100%; min-height: 500px; height: 46px;"></iframe>

---

## Insertion point
@state: light

Insertion point可以将Shadow host中的内容插入到Shadow dom中

---

## Demo
@state: light

<iframe src="http://jsbin.com/vabip/1/embed?html,js,output" class="" id="" style="border: 1px solid rgb(170, 170, 170); width: 100%; min-height: 500px; height: 46px;"></iframe>

---

## Selecte 属性
@state: light

<iframe src="http://jsbin.com/hakew/1/embed?html,js,output" class="" id="" style="border: 1px solid rgb(170, 170, 170); width: 100%; min-height: 500px; height: 46px;"></iframe>

---

## Tool: Shadow DOM Visualizer
@state: light


<a href="http://html5-demos.appspot.com/shadowdom-visualizer">html5-demos.com/shadowdom-visualizer</a>

---

@state: light
## ::content伪元素
可使用该伪类给插入到shadow dom中的节点定义样式
```css
::content h3 {
    color: green;
}
```

---


## Custom element
@state: light

扩展浏览器组件

---

## 新建HTML元素
@state: light

```javascript
document.register('tag-name', {
    prototype: Object.create(HTMLElement.prototype) 
})
```

* 标签名字必须有'-'
* 原型必须继承自HTML元素

---


## Demo
@state: light

<iframe src="http://jsbin.com/huvoci/2/embed?html,js" class="" id="" style="border: 1px solid rgb(170, 170, 170); width: 100%; min-height: 500px; height: 46px;"></iframe>

---

## defining API

---

@state: light
## 使用自定义元素

* &lt;my-widget&gt;

* document.createElement('my-widget');

* new Widget()

---

## 生命周期
@state: light

* createdCallback

    when a new instance is created

* enteredViewCallback

    when it's added to the page

* LeftViewCallback

    removed from the page

* attributeChangedCallback(attrName, oldVal, newVal)

    when one of an element's attrubte changed
---

## 继承
@state: light

<iframe src="http://jsbin.com/wixup/2/embed?html,js" class="" id="" style="border: 1px solid rgb(170, 170, 170); width: 100%; min-height: 500px; height: 46px;"></iframe>

---

## 使用继承的元素
@state: light

* &lt;button is="my-button"&gt;&lt;/button&gt;
* var btn = document.createElement('button', 'my-button');
* var btn  = new MyButton();

---

@state: light
## Import

---
@state: light

## html中如何加载document??

* iframe: 笨重，写js， style绕晕
* ajax: xhr.reponseType = 'document'. 为啥加载HTML还要写JS啊！
* CrazyHacks: 用字符串的方式嵌入页面 &lt;script type="text/html"&gt;

---

@state: light
## Import 

加载HTML

---
@state: light

## How to import document

```markup
<link rel="import" href="" />
```

* use a link tag
* use rel type import
* 跨域，导入地址需允许CORS

---
@state: light

## Importing custom elements
```markup
<head>
    <link rel="import" href="./chart.html" />
</head>
<body>
    <chart-pie></chart-pie>
</body>
```

* No need to check if the import is loaded, auto update

---

## Note

* import的文档不属于dom
* 通过link.import属性获得
* script会运行

---

@state: blue

# Web Component
* Template - 脚手架
* Shadow Dom - 封装
* Custom element - 扩展
* Import - 打包

---
@state: light

list

---
@state: light

#Support

---
@state: light

# Use chrome canary

in chrome://flags
* experimental web platform features
* experiental javascript
* html imports
* show shadow dom in developer tools

---
@state: light

You can use it in ten years!

No. 

Today


---
@state: light

## Polyfill

* Polymer
* X-Tag

---
@state: light

# Polymer

Also a framework for building applications with web components.
standard plus extension

* web animations
* pointer events
* template binding
* node.bind
* mdv

---

@state: green

## Q&A

---
@state: red

## 资源

---

