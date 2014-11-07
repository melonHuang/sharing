@state: light, @fragment
# Good afternoon

___

@state: green, @fragment
<style type="text/css">
.reveal .slides h1,
.reveal .slides h2,
.reveal .slides h3,
.reveal .slides h4,
.reveal .slides p,
.reveal .slides li {
    font-family: Helvetica;
}
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

.contact-list a {
    color: white;
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
.reveal .slides .today {
    color: rgb(206, 21, 21);
    font-size: 184px;
    border: 8px solid rgb(206, 21, 21);
    padding: 100px;
    -webkit-transform: rotate(20deg);
    display: block;
    position: relative;
    top: -230px;
    background: rgba(255, 255, 255, 0.5);
}
</style>

<link rel="stylesheet" href="css/slides/high_performance_animation.css" />

<div class="self-intro">
    <span class="avatar"></span>
    <h2 class="name">Melon.H</h2>
</div>

<ul class="contact-list">
    <li>黄薇</li>
    <li>360奇舞团</li>
    <li>
        <a href="http://blog.melonhuang.gitpress.org" style="color:white">Blog</a>
    </li>
    <li>
        <a href="http://75team.github.io/novaUI/" style="color:white">NovaUI</a>
    </li>
    <p style="font-size:120%;margin-top:0.5em">
        <a href="https://github.com/melonHuang" target="_blank" title="Github"><i class="fa-github" style="color:white"></i></a>&nbsp;
        <a href="http://weibo.com/u/2103102591" target="_blank" title="Weibo"><i class="fa-weibo" style="color:white"></i></a>&nbsp;
        <a href="https://twitter.com/melonh0327" target="_blank" title="Twitter"><i class="fa-twitter" style="color:white"></i></a>&nbsp;
    </p>
</ul>

---
@state: light

# 构建可重用的组件

---
@state: light

## 网页间的重复

<img src="img/reusable_component/youkusignup.png" alt="" width="396 "/>
<img src="img/reusable_component/360singup.png" alt="" />

---
@state: light

## 组件化

<img src="img/reusable_component/components.png" alt="" />

---
@state: light, @fragment

## 什么是一个好组件？

* 易用
* 一致
* 灵活
* 可读
* 文档清晰

---
@bg: img/reusable_component/rocket.jpg
@state: light, @fragment

# 实现自己的组件！

---
@state: light, @fragment

## 弄个啥组件好呢？

* 无需全部都自己实现，可使用业界优秀组件
* 需要但是没人实现的组件
* 自认为能实现得更好的组件

---
@state: light, @fragment

## 帮我写个Dialog吧

---
@state: light, @fragment

## Step1: 收集需求

* 基本功能：打开，关闭
* 能传标题，并自动生成头部和关闭按钮
* 内容可传选择器，dom节点，或html字符串
* 能完全自定义弹窗的结构
* 能显示或不显示mask
* 能传入按钮的选择器，因为我已经写好HTML结构了，不想再为按钮加类了。
* 在confirm时能通知我
* 提供Dialog.alert, Dialog.confirm, Dialog.confirm使我无需实例化就能弹窗提示简单内容。如Dialog.alert('睡觉时间到！')
* 支持到IE7

---
@state: light, @fragment

## Step2: 设计API

---
@state: light, @fragment

## API一致性

```javascript
    // Bad !!!
    carousel.switch_next();
    carousel.switchPrev();
    carouse.on('switchNext', function() {
        // ...
    })
    carouse.on('switchprev', function() {
        // ...
    })
```

---
@state: light, @fragment

## 初步设计

* 方法：show, close
* 配置：title, body, showHeader, showMas, selectors, confirmCallback

---
@state: light, @fragment

---
@state: light, @fragment

---
@state: light, @fragment

---
@state: light, @fragment

---
@state: light, @fragment

---
@state: light, @fragment

---
@state: light, @fragment

---
@state: light, @fragment

---
@state: light, @fragment

---
@state: light, @fragment

---
@state: light, @fragment

---
@state: light, @fragment

---
@state: light, @fragment

---
@state: light, @fragment

---
@state: light, @fragment

---
@state: light, @fragment

---
@state: light, @fragment

---
@state: light, @fragment

---
@state: light, @fragment

---
@state: light, @fragment

---
@state: light, @fragment

---
@state: light, @fragment

---
@state: light, @fragment

---
@state: light, @fragment

---
@state: light, @fragment

---
@state: light, @fragment

---
@state: light, @fragment

---
@state: light, @fragment

---
@state: light, @fragment

---
@state: light, @fragment

---
@state: light, @fragment

---
@state: light, @fragment

---
@state: light, @fragment

---
@state: light, @fragment

---
@state: light, @fragment

---
@state: light, @fragment

---
@state: light, @fragment

---
@state: light, @fragment

---
@state: light, @fragment

---
@state: light, @fragment

---
@state: light, @fragment

---
@state: light, @fragment

---
@state: light, @fragment

---
@state: light, @fragment

---
@state: light, @fragment
