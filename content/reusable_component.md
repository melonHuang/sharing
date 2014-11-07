@state: light, @fragment
# Good afternoon

___

@state: green, @fragment
<style type="text/css">
.fixed-center {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}

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

* 组件：专注完成某一功能的通用模块

---
@state: light, @fragment

## 什么是一个好组件？

* 易用
* 一致
* 灵活
* 可读
* 文档清晰

---
@bg: img/high_performance_animation/rocket.jpg

# 实现自己的组件！

---
@state: light, @fragment

<h2>自己实现所有组件？</h2>
<img src="img/reusable_component/work.jpg" />

* 充分利用业界优秀组件
* 需要但是没人实现的组件
* 自认为能实现得更好的组件

---
@state: light

## 一起写个Dialog

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

### 初步设计

* 需求
<img src="img/reusable_component/require.jpg" />
* 方法：show, close
* 配置：title, body, showHeader, showMask, selectors, confirmCallback

---
@state: light, @fragment

## 实现

---
@state: light, @fragment

## function定义在哪儿?

---
@state: light, @fragment

* 全局作用域
* 新建命名空间
* 已有的对象上
* 库插件
* 模块加载

---
@bg: img/reusable_component/mess.jpg

## 全局作用域

---
@state: light

* 全局作用域 <i class="fa fa-times" style="color:red"></i>
* 新建命名空间
* 已有的对象上
* 库插件
* 模块加载

---
@state: light, @fragment

## 新建命名空间

```javascript
// melon组件库的命名空间
window.melon = window.melon || {};

melon.Dialog = function() {
    // ...
}

melon.Dialog.prototype.show = function() {
    // ...
}

melon.Dialog.alert = function() {
}

var dialog = new melon.Dialog(...);
dialog.show();

melon.Dialog.alert('饿!');
```

<img src="img/reusable_component/botte.jpg" alt="" class="fixed-center"/>

---
@state: light

* 全局作用域 <i class="fa fa-times" style="color:#FF4444"></i>
* 新建命名空间
<i class="fa fa-check" style="color:#669900"></i>
* 已有的对象上
* 库插件



---
@state: light, @fragment

## 已有对象上

```javascript
Element.prototype.dialog = function() {
    // ...
}

document.querySelector('.dialog').dialog(...);

```

<img src="img/reusable_component/crazy.jpg" alt="" class="fixed-center"/>

---
@state: light

* 全局作用域 <i class="fa fa-times" style="color:#FF4444"></i>
* 新建命名空间
<i class="fa fa-check" style="color:#669900"></i>
* 已有的对象上
<i class="fa fa-check" style="color:#669900"></i>
* 库插件
* 模块加载

---
@state: light, @fragment

## 库插件

```javascript
jQuery.fn.dialog = function() {
    // ....
}

// 返回值是一个jQuery对象
var $dialog = jQuery('.dialog').dialog(...);

$dialog.dialog('show');
$dialog.dialog('hide');
```

---
@state: light

* 全局作用域 <i class="fa fa-times" style="color:#FF4444"></i>
* 新建命名空间
<i class="fa fa-check" style="color:#669900"></i>
* 已有的对象上<i class="fa fa-times" style="color:#FF4444"></i>

* 库插件<i class="fa fa-times" style="color:#FF4444"></i>
* 模块加载

---
@state: light, @fragment

## 模块加载

```javascript
// 定义
define([], function() {
    var Dialog = function() {
        // ...
    }

    return Dialog;
});
```

```javascript
// 使用
require(['module/1.0.0/Dialog'], function(Dialog) {
    // Dialog只在改方法内可访问
});
```

---
@state: light

* 全局作用域 <i class="fa fa-times" style="color:#FF4444"></i>
* 新建命名空间
<i class="fa fa-check" style="color:#669900"></i>
* 已有的对象上<i class="fa fa-times" style="color:#FF4444"></i>

* 库插件<i class="fa fa-times" style="color:#FF4444"></i>
* 模块加载
<i class="fa fa-check" style="color:#669900"></i>

---
@state: light, @fragment

## 定义API

---
@state: light, @fragment

## 配置

title, body, showHeader, showMask, selectors, confirmCallback

---
@state: light, @fragment

```javascript
melon.Dialog = function(title, body, showHeader, showMask, selectors, confirmCallback) {
    // 默认配置
    title = title || '';
    body = body || '';
    showHeader = showHeader === undefined ? true: showHeader;
    // ...
}
var dialog = new Melon.dialog('提醒', '.warn-body', true, true, undefined, function() {// ...});
```

* 不方便设置默认配置
* 参数顺序固定
* 使用代码不直观

---
@state: light, @fragment

```javascript
melon.Dialog = function(config) {
    config = $.extend({}, {
        title: '',
        body: '',
        showHeader: true,
        showMask: true,
        selectors: {
            confirmBtn: '.confirmBtn',
            cancelBtn: '.cancelBtn'
        }, 
        confirmCallback: null
    }, config);
}
```

* 默认配置清晰，方便
* 顺序随意
* 使用代码参数含义明确

---
@state: light, @fragment

## 使用对象作为配置

---
@state: light, @fragment

## 配置冲突

```javascript
// showHeader为false时，不需要传title
var dialog = new melon.Dialog({
    body: '.dialog-body',
    showHeader: false
});
```

---
@state: light, @fragment

```javascript
var dialog = new melon.Dialog({
    body: '.dialog-body',
    title: ''   // 当!!title为false时，不显示头部。反之显示。
});
```

---
@state: light, @fragment


## 定义接口

---
@state: light, @fragment

## 构造函数模式
```javascript
// 定义Dialog构造函数
melon.Dialog = function(config) {
    // ...
    this.setup();
}

// Dialog的原型方法
$.extend(melon.Dialog.prototype, {
    // 初始化方法
    setup: function() {
        // ...
    },
    // ...
});
```

---
@state: light, @fragment

```javascript
// 定义Dialog构造函数
melon.Dialog = function(config) {
    this.setup();
}

// Dialog的原型方法
$.extend(melon.Dialog.prototype, {
    // 初始化方法
    setup: function() { },
    // 外部方法
    show: function() {
        // 第一次show时，将dialog居中
        if(this._needLocateCenter) {
            this._locateCenter();
        }
    },
    hide: function() { },
    // 内部方法，以_开头
    _locateCenter: function() { }
});

// Dialog的静态方法
$.extend(Dialog, {
    alert: function(msg, callback) { },
    warn: function(msg, callback) { },
    confirm: function(msg, callback) { }
});
```

---
@state: light, @fragment

## 下一步，我们终于要...

---
@state: light, @fragment

## 编写文档

```javascript
/**
    melon.Dialog
    @constructor
    @description Create a dialog
    
    @param {config} the config of the dialog
        @param {config.title} the title of the dialog
        ...
    
    @example
        var dialog = new Dialog({
            title: '提示',
            body: '你没钱了'
        });
        
        Dialog.alert('好饿！');
*/
```

---
@state: light


<img src="img/reusable_component/doc.jpg" alt="" style="margin-top:-60px;"/>

---
@state: light

<img src="img/reusable_component/co.jpg" alt="" style="margin-top:-30px;"/>


---
@state: light, @fragment

## 扩展性

---
@state: light, @fragment

## CSS不要过于具体
```css
// dialog的必须样式
.dialog {
    position: fixed;
    top: 50%;
    left: 50%;
    margin-left: -50%;   // 保证初始时弹窗内容未超出屏幕范围，避免居中计算错误
    margin-top: -50%;
    display: none;
}

// 具体样式
.dialog {
    background: white;
    border: 1px solid #999;
    border-radius: 3px;
    padding: 15px;
}

// ...

```

---
@state: light, @fragment

## Javascript不要过于具体
```javascript
// 专注于切换的Switchable组件
melon.Switchable = function() {
    // ...
}

$.extend(Switchable.prototype, {
    getIndex: function() { },
    next: function() { },
    prev: function() { }, 
    switchTo: function() { }
});

// 继承自Switchable的Carousel组件
melon.Carousel = function() {
    melon.Switchable.apply(this, arguments);
}
// 继承原型方法
$.extend(melon.Carouse.prototype, melon.Switchable.prototype, {
    // ...
    slideTo: function() {
    }
});

```

---
@state: light, @fragment

## 使用事件

```javascript
var dialog = new melon.Dialog({
    confirmCallback: function() {
        // do sth
    }
});
```

```javascript
// 去掉confirmCallback配置项，而是为Dialog增加事件机制，并在confirm时触发confirm事件
dialog.on('confirm', function() {
});
```

---
@state: light, @fragment

## 组件的公共行为

* 通过构造函数模式创建组件
* 组件接受配置，拥有默认配置，并会合并
* 组件继承
* 事件机制
* 生命周期
* 模板

---
@state: light, @fragment

## 为每个组件都实现以上功能？

---
@state: light, @fragment

# 实现组件基类

---
@state: light, @fragment

## 类继承

---
@state: light, @fragment

## Class

```javascript
melon.Class = function(){};
/**
    melon.Class
    @function
    @description 这个静态方法实现了Javascript的原型继承，并会在初始化时调用this.initialize方法

    @param {prototype} 该对象上的属性和方法将会被添加到新创建的类的原型上

    @return 返回值是新创建的类，新建的类也拥有extend方法
*/
melon.Class.extend = function(prototype) {
    // ...
}

```

---
@state: light, @fragment

## 创建Animal类和Class类

<iframe src="http://jsbin.com/hucewabima/1/embed?console,js" class="" id="" style="border: 1px solid rgb(170, 170, 170); width: 100%; min-height: 500px; height: 46px;"></iframe>

---
@state: light, @fragment

## Base类

```javascript
melon.Base = melon.Class.extend({
    // 属性
    attrs:  {
    },
    
    // 事件机制
    on: function() {},
    off: function() {},
    trigger: function() {},
    
    // 事件切片
    before: function() {},
    after: function() {}
});
```

---
@state: light, @fragment

## 事件机制

```javascript
// on, off, trigger
animal.on('beforesleep', function() {
    alert('盖好被子');
});
```

---
@state: light, @fragment

<iframe src="http://jsbin.com/heyefozezu/1/embed?js,console" class="" id="" style="border: 1px solid rgb(170, 170, 170); width: 100%; min-height: 500px; height: 46px;"></iframe>

---
@state: light, @fragment

## 属性机制

* getter, setter
* 监听组件变化

---
@state: light, @fragment

<iframe src="http://jsbin.com/bobekaleju/1/embed?js,console" class="" id="" style="border: 1px solid rgb(170, 170, 170); width: 100%; min-height: 500px; height: 46px;"></iframe>

---
@state: light, @fragment

## 事件切片机制

* 通过before, after方法，在实例方法执行的前后执行一段代码。

---
@state: light, @fragment

<iframe src="http://jsbin.com/hunohogare/1/embed?js,console" class="" id="" style="border: 1px solid rgb(170, 170, 170); width: 100%; min-height: 500px; height: 46px;"></iframe>

---
@state: light, @fragment

## Widget类

* 生命周期
* 模板渲染模式
* dataApi
* 缓存

---
@state: light, @fragment

```javascript
Widget = Base.extend({
    element: null,

    attrs: {
        // 在用户未传入element时进入渲染模式，会根据template生成模板，并插入到parentNode
        template: '<div></div>',
        parentNode: 'body'
    },

    // 生命周期
    setup: function() {},
    render: function() {},
    destroy: function() {},

});

```

---
@state: light, @fragment

##生命周期

* setup: 当实例化组件时进行初始化
* render: 定义了渲染dom的操作，需要初始化时就渲染，则可在Setup中调用。
* destroy: 当组件不再被需要时，调用此方法。此方法会将所有事件绑定都清楚， 将节点从dom中删除。

---
@state: light, @fragment

<iframe src="http://jsbin.com/xoyafanigi/1/embed?js,console,output" class="" id="" style="border: 1px solid rgb(170, 170, 170); width: 100%; min-height: 500px; height: 46px;"></iframe>

---
@state: light, @fragment

## 模板渲染模式

<iframe src="http://jsbin.com/xetebonuvu/1/embed?html,js" class="" id="" style="border: 1px solid rgb(170, 170, 170); width: 100%; min-height: 500px; height: 46px;"></iframe>

---

@state: light, @fragment

## dataApi

<iframe src="http://jsbin.com/xoyafanigi/1/embed?js,console,output" class="" id="" style="border: 1px solid rgb(170, 170, 170); width: 100%; min-height: 500px; height: 46px;"></iframe>

---

@state: light, @fragment

## 组件缓存
```javascript
var dialog = Widget.query('.dialog');
```

---
@state: light, @fragment

## 组件基类

<img src="img/reusable_component/dia.jpg" alt=""/>

---
@state: light, @fragment

## 现在与未来

---
@state: light

<img src="img/reusable_component/angular.jpeg" alt=""  width="160" height="160" style="margin-right: 50px;"/>
<img src="img/reusable_component/react.jpeg" alt=""  width="160" height="160" style="margin-right: 50px;"/>
<img src="img/reusable_component/ember.jpeg" alt=""  width="160" height="160" style="margin-right: 50px;"/>

---
@state: light

<img src="img/reusable_component/todomvc.jpg" alt=""  style="margin-top:-60px;"/>

---
@state: light, @fragment

## 前端组件化的未来
* Web Component标准：针对前端组件化需求制定的一套标准。

---
@state: green, @fragment

# Q&A

---
@state: light, @fragment
