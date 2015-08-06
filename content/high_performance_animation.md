@state: light
# Good Afternoon

---
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

# Web高性能动画

---
@state: light, @fragment

# 如何实现动画

* jquery animation: setTimeout, top/left
* animation, transition
* transform
* requestAnimationFrame
* GPU acceleration

---

@state: light, @fragment

## 性能

<embed width="240" height="320" src="http://boallen.com/assets/flash/fps-compare/fps-compare-15fps.swf" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" align="middle" play="true" loop="true" scale="showall" wmode="window" devicefont="false" bgcolor="#1e1e1e" name="fps-compare-15fps" menu="true" allowfullscreen="false" allowscriptaccess="sameDomain" salign="" type="application/x-shockwave-flash">

<embed width="240" height="320" src="http://boallen.com/assets/flash/fps-compare/fps-compare-60fps.swf" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" align="middle" play="true" loop="true" scale="showall" wmode="window" devicefont="false" bgcolor="#1e1e1e" name="fps-compare-60fps" menu="true" allowfullscreen="false" allowscriptaccess="sameDomain" salign="" type="application/x-shockwave-flash">

---

@bg: img/high_performance_animation/bg.jpg

<h1 style="display: inline-block; background: rgba(0, 0, 0, 0.7); padding: 30px 50px; border-radius: 10px;">渲染</h1>



---

@state: light

## Devtool Timeline

<img src="img/high_performance_animation/devtool2.png" alt="" />

---

@state: light, @fragment

## HTML

```markup
<html>
    <body>
        <h1 style="display:none">Article</h1>
        <p>Hi, I'm Banana</p>
        <div>
            <img src="example.png" alt="" />
        </div>
    </body>
</html>
```

---

@state: light, @fragment

## DOM

<div id="viz" style="height:300px"></div>

<div class="fragment" style="position:absolute;top:40%;color:red;">
    <img src="img/high_performance_animation/devtool3.png" alt="" />
    <i class="fa fa-arrow-left fragment" style="font-size:40px;-webkit-transform:translate(-212px, -105px) scale(1.5, 1)"></i>
</div>

---

@state: light, @fragment

### DOM + CSS = Render Tree

<img class="fragment" src="img/high_performance_animation/render_tree.png" style="max-width: 85%;" alt="" />

<div class="fragment" style="position:absolute;top:40%;color:red;">
    <img src="img/high_performance_animation/devtool3.png" alt="" />
    <i class="fa fa-arrow-left fragment" style="font-size:40px;-webkit-transform:translate(-196px, -88px) scale(1.5, 1)"></i>
</div>



---

@state: light, @fragment

## Layout


<div class="fragment layer layer-html">
    HTML
    <div class="fragment layer layer-body">
        body
        <div class="fragment layer layer-p">
            p
        </div>
        <div class="fragment layer layer-div">
            div
            <div class="fragment layer layer-img">
                img
            </div>
        </div>
    </div>
</div>

<div class="fragment" style="position:absolute;top:40%;color:red;">
    <img src="img/high_performance_animation/devtool3.png" alt="" />
    <i class="fa fa-arrow-left fragment" style="font-size:40px;-webkit-transform:translate(-256px, -69px) scale(1.5, 1)"></i>
</div>

---

## Paint

<div>
<span style="font-size:20px;float:right;padding-right:5px;color:#f33;">bitmap</span>
<div class="layer-paint" style="margin:0">
    HTML
    <div class="layer-paint">
        body
        <div class="layer-paint layer-paint-p">
            <span>
                Hi, I'm Banana. 
            </span>
        </div>
        <div class="layer-paint">
            div
            <img src="img/high_performance_animation/minion.jpg" alt="" class="layer-img" />
        </div>
    </div>
</div>
</div>

<div class="fragment" style="position:absolute;top:40%;color:red;">
    <img src="img/high_performance_animation/devtool3.png" alt="" />
    <i class="fa fa-arrow-left fragment" style="font-size:40px;-webkit-transform:translate(-181px, -17px) scale(1.5, 1)"></i>
</div>


---

@state: light, @fragment

## 传输到GPU，渲染到屏幕

<div style="display:inline-block;font-size:20px;font-weight:bold;-webkit-transform: translateX(-100px);">
    <img src="img/high_performance_animation/CPU.png" alt="" class="cpu" style="display:block;margin:0"/>
    <span>CPU</span>
</div>
<img src="img/high_performance_animation/bitmap.png" alt="" class="bitmap" style="width:50px;"/>
<div style="display:inline-block;font-size:20px;font-weight:bold;-webkit-transform: translateX(100px);">
    <img src="img/high_performance_animation/GPU.png" alt="" class="cpu" style="display:block;margin:0"/>
    <span>GPU</span>
</div>

<div class="fragment" style="position:absolute;top:40%;color:red;">
    <img src="img/high_performance_animation/devtool4.png" alt="" />
    <i class="fa fa-arrow-left fragment" style="font-size:40px;-webkit-transform:translate(-131px, -24px) scale(1.5, 1)"></i>
</div>

---

@state: light

## 渲染过程 
<img src="img/high_performance_animation/devtools-waterfall.jpg" alt="" />

---

@state: light

### CSS style 影响

<img src="img/high_performance_animation/statistic.png" alt="" />
<a href="http://csstriggers.com/#">CSS Triggers</a>


---

@state: light, @fragment

## 小结

* 渲染三阶段：Layout，Paint，Composite
* 修改不同CSS属性会触发不同阶段
* 触发的阶段越前，渲染的代价越高

---

@bg: img/high_performance_animation/rocket.jpg

# 硬件加速

---
@state: light

### GPU vs CPU

<img src="img/high_performance_animation/cpu_vs_gpu.png" alt="" />

---
@state: light

<div class="paper fragment">
    <div class="cpu-paint">
        <div class="mask"></div>
        <div class="pencil"></div>
    </div>
</div>

<div class="paper fragment">
    <div class="gpu-paint">
        <div class="stamp"></div>
    </div>
</div>

---

@state: light, @fragment

### Texture

* CPU传输到GPU的一个Bitmap
* GPU能快速对texture进行偏移、缩放、旋转、修改透明度等操作

<div class="texture-demo fragment"></div>

---

@state: light, @fragment

## Layer 模型

<div class="page-layer fragment">
    <div class="page-inner">
        <img src="img/high_performance_animation/minion.jpg" alt="" />
    </div>
</div>

---

@state: light, @fragment

## Layer 模型

* 浏览器根据CSS属性为元素生成Layers
* 将Layers作为texture上传到GPU
* 当改变Layer的transform, opacity属性时，渲染会跳过Layout, paint，直接通知GPU对Layer做变换。

---

@state: light, @fragment

## Layer创建标准

* 拥有3d transform属性
* 使用animation, transition实现opacity, transform的动画
* video
* canvas
* Flash
* 使用CSS filters的元素
* z-index大于某个相邻节点的Layer的元素

<a href="http://codepen.io/melonHuang/pen/PqXvjv" target="blank" class="fragment">Demo</a>

---
@state: light

### translate3d(0, 0, 0);

<div class="fragment cross-line"></div>

---

@state: light

### will-change

```css
.to-animate {
    will-change:transform,opactiy;
}
```

---

@state: light

<img src="img/high_performance_animation/rocket.png" alt="" />

---

@state: light

## Animate top

---

@state: light

<img src="img/high_performance_animation/animate-height-2x.png" alt="" />

---

@state: light

## Animate transform


---

@state: light

<img src="img/high_performance_animation/animate-transform-2x.png" alt="" />

---

@state: light

<img src="img/high_performance_animation/animate-height-2x.png" alt="" width="46%" style="vertical-align:top"/>
<img src="img/high_performance_animation/animate-transform-2x.png" alt="" width="46%" style="vertical-align:top"/>
<span class="pixel pixel-mobile"></span>
<span class="pixel pixel-pc"></span>

---

@state: light, @fragment

## 节省了哪些时间？

* CPU进行Layout, Paint的时间
* CPU向GPU传输位图的时间


---

@bg: img/high_performance_animation/hair.jpg

<h2 style="line-height: 1.3">
丝柔顺滑的<br />Animation
</h2>

---

@state: light, @fragment

## 流畅，对我们而言?

<embed width="240" height="320" style="margin-bottom:20px" src="http://boallen.com/assets/flash/fps-compare/fps-compare-30fps.swf" quality="high" bgcolor="#1e1e1e" width="240" height="320" name="fps-compare-30fps" align="middle" allowScriptAccess="sameDomain" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />


<embed width="240" height="320" style="margin-bottom:20px" src="http://boallen.com/assets/flash/fps-compare/fps-compare-60fps.swf" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" align="middle" play="true" loop="true" scale="showall" wmode="window" devicefont="false" bgcolor="#1e1e1e" name="fps-compare-60fps" menu="true" allowfullscreen="false" allowscriptaccess="sameDomain" salign="" type="application/x-shockwave-flash">

* 对我们的眼睛来说：30FPS+感觉流畅，60FPS更舒服完美

---

@state: light, @fragment

## 屏幕刷新频率 

* 不同国家屏幕刷新频率规格不同，有的国家的为60FPS, 部分国家，如UK，为50FPS
* 大部分都是60FPS

---

@state: light, @fragment

## 丝柔顺滑意味着：

* 在1 / 60FPS, 约等于16.7ms内，我们要把这一帧准备好。

---

@state: light, @fragment

## 两个问题：

1. 开始绘制的时机
2. 绘制一帧的时间

---

@state: light, @fragment

## 绘制的时机

* setTimeout(callback, 1/60);

<img src="img/high_performance_animation/bad.png" alt="" />

---

@state: light, @fragment

## setTimeout不够精确

* 依靠浏览器内置时钟更新频率. eg. IE8及以前更新间隔为15.6, setTimeout 16.7, 它需要两个15.6ms才触发。超过14.5ms
* main thread队列

---
@state: light, @fragment

## 丢帧了

<iframe src="demos/high_performance_animation/fps.html" style="width: 100%; height: 280px"></iframe>

---

@state: light, @fragment

## requestAnimationFrame

* 定义绘制每一帧前的工作。 `requestAnimationFrame(callback)`
* 自动调节频率。callback工作太多无法在一帧内完成，会自动降低为30FPS, 虽然频率降低但比丢帧好。 

---

@state: light, @fragment

## 渲染时机 

* requestAnimationFrame

<img src="img/high_performance_animation/good.png" alt="" />

---

@state: light, @fragment

## 渲染一帧的时间 

<h3>目标：<span class="boundary">16ms-</span></h3>

---

@state: light

## 渲染过程 
<img src="img/high_performance_animation/devtools-waterfall.jpg" alt="" />

---

@state: light

## Layout 
<img src="img/high_performance_animation/layout.png" alt="" />

---

@state: light, @fragment

## 触发Layout

* 更改class，导致width, height, margin等size, position相关得属性改变。
* 读取size, position相关得属性<img class="alert" src="img/high_performance_animation/alert.png" alt="" />

---

@state: light, @fragment

## 读取这些属性会引起layout

clientHeight, clientLeft, clientTop, clientWidth, focus(), getBoundingClientRect(), getClientRects(), innerText, offsetHeight, offsetLeft, offsetParent, offsetTop, offsetWidth, outerText, scrollByLines(), scrollByPages(), scrollHeight, scrollIntoView(), scrollIntoViewIfNeeded(), scrollLeft, scrollTop, scrollWidth .....

<img src="img/high_performance_animation/bombo.png" alt="" />


---

@state: light, @fragment

### 尽量不触发Layout

* 使用transform代替top, left的动画

---
@state: light

### 几次触发Layout?

```javascript
element1.style.height = '100px';
element2.style.height = '100px';
element3.style.height = '100px';

```

---


@state: light, @fragment

###  频繁Layout

```javascript
var h1 = element1.clientHeight;
element1.style.height = (h1 * 2) + 'px';

var h2 = element2.clientHeight; 
element2.style.height = (h2 * 2) + 'px';

var h3 = element3.clientHeight;
element3.style.height = (h3 * 2) + 'px';

```

---

@state: light

<img src="img/high_performance_animation/before.png" alt="" />
<div>
<a href="http://hw.360.cn/sharing/demos/high_performance_animation/too-much-layout.html">Demo</a>
</div>

---

@state: light, @fragment

### 先读后写

```javascript
// Read
var h1 = element1.clientHeight;
var h2 = element2.clientHeight;
var h3 = element3.clientHeight;

// Write
element1.style.height = (h1 * 2) + 'px';
element2.style.height = (h2 * 2) + 'px';
element3.style.height = (h3 * 2) + 'px';

```

---


@state: light, @fragment

# 囧 

```javascript
document.body.addEventListener('click', function() {
    var h1 = element1.clientHeight;
    element1.style.height = (h1 * 2) + 'px';
});

document.body.addEventListener('click', function() {
    var h2 = element2.clientHeight;
    element2.style.height = (h2 * 2) + 'px';
});
```

* 通常代码是解耦的


---

@state: light, @fragment

### 使用requestAnimationRequest推迟执行

```javascript
document.body.addEventListener('click', function() {
    // Read
    var h1 = element1.clientHeight;
    // Write
    requestAnimationFrame(function() {
      element1.style.height = (h1 * 2) + 'px';
    });
});
document.body.addEventListener('click', function() {
  // Read
  var h2 = element2.clientHeight;
  // Write
  requestAnimationFrame(function() {
    element2.style.height = (h2 * 2) + 'px';
    });
});


```
---

@state: light, @fragment

### write后read肿么办？

```javascript
// Read
var h1 = element1.clientHeight;

// Write
requestAnimationFrame(function() {
    element1.style.height = (h1 * 2) + 'px';

    // 我们可能希望write后再read其他元素的属性
    var height = element2.clientHeight;

    /* 异步读取，可能读取前element1.style.height被修改  
    requestAnimationFrame(function() {
        var height = element1.clientHeight;
    });
    */
});
```

---

@state: light, @fragment

## fastdom.js

```javascript
// Read
var h1 = element1.clientHeight;

// Write
fastdom.write(function() {
  element1.style.height = (h1 * 2) + 'px';

    // We may want to read the new
    // height after it has been set
    fastdom.read(function() {
        var height = element1.clientHeight;
    });
});
```

* 在每一帧，先将读操作批量运行，再批量运行写操作

---

## Layout小结

* 不但改变CSS可能导致Layout，读取位置大小相关得属性也会导致Layout
* 分离读写，减少Layout
* 面对解耦代码，使用rAF推迟的方法分离读写。

@state: light, @fragment

---

@state: light

## Paint
<img src="img/high_performance_animation/paint2.png" alt="" />

---

@state: light

## 触发Paint

* 当修改border-radius, box-shadow, color等展示相关属性时，会触发paint

---

@state: light, @fragment

### Paint的代价

* [demo](demos/high_performance_animation/paint.html)
* continuous painting mode
* paint profiler
* 在经常paint的区域，要避免代价太高的style

---

@state: light, @fragment

### 减少不必的绘制

* [Gif Demo](http://jsbin.com/dizak/3/edit)
* gif图即使被其他Layer盖住不可见，也可能导致paint，不需要时应将gif图的display属性设为none。

---
@state: light, @fragment

### 减少绘制区域

* [Demo](http://www.html5rocks.com/static/demos/scrolling/demo.html#)
* 为引起大范围Paint的元素生成独立的Layer以减小Paint的范围

---
@state: light, @fragment

## Paint小结

* 简化绘制的复杂度
* 避免不必要的绘制
* 减少绘制区域

---
@state: light

## Composite
<img src="img/high_performance_animation/screen.png" alt="" />

---
@state: light, @fragment

## GPU也是有限度的
<img src="img/high_performance_animation/angry.png" alt="" />


---
@state: light, @fragment

### 避免意外生成layer

* [demo](http://jsbin.com/efirip/5/quiet)
* z-index高于Layer的元素，也会生成单独的Layer

---
@state: light, @fragment

## Composite小结

* GPU也是有限度的，不要滥用GPU资源生成不必要的Layer
* 留意意外生成的Layer

---

@state: light, @fragment

## 用户输入事件

* touchmove, mousemove, scroll, etc

---
@state: light

### 理想的滚动过程

<img src="img/high_performance_animation/compositor-scroll.jpg" alt="" />

---
@state: light

### ontouchmove

<img src="img/high_performance_animation/ontouchmove.jpg" alt="" />

<a href="http://www.rbyers.net/janky-touch-scroll.html" class="fragment">Demo</a>

---
@state: light, @fragment

### hit testing

* Chrome会不断监测哪些区域有绑定touch相关事件, 减少Compositor与Main Thread不必要的通信
* 事件代理无法利用该优化
* show potential scroll bottlenecks

---
@state: light, @fragment

### touch-action

* 设计思想：由CSS属性决定是否阻止默认行为
* touch-action指明了元素支持哪些touch相关的默认操作
* touch-action: auto | none | pan-x | pan-y | manipulation | double-tap-zoom
* [Support](http://www.quirksmode.org/mobile/default.html)

---
@state: light

### 避免在输入事件处理函数中修改样式属性

<img src="img/high_performance_animation/frame-with-input.jpg" alt="" />

---
@state: light, @fragment

### 将样式操作从scroll事件中剥离

```javascript
var latestKnownScrollY = 0,
    ticking = false;

function onScroll() {
    latestKnownScrollY = window.scrollY;
    requestTick();
}

function requestTick() {
    if(!ticking) {
        requestAnimationFrame(update);
    }
    ticking = true;
}
function update() {
    ticking = false;

    var currentScrollY = latestKnownScrollY;

    // 更改样式
}

```

---
@state: light, @fragment

### scroll过程中hover的代价

* [demo](https://dl.dropboxusercontent.com/u/2272348/codez/expensivescroll/demo.html)

* 开始滚动后通过event-pointer: none禁止鼠标行为，减少不必要的repaint。

---
@state: green

# Q&A


---
@state: light, @fragment

## Checklist

* FPS
* 频繁触发Layout
* 对会触发Layout的属性做动画, 如top, left
* 大范围的paint
* 昂贵的paint
* 用户输入交互引起的代价
* 避免在动画过程中触发垃圾回收

---
@state: blue, @fragment

### 实践是检验真理的唯一标准

* timeline
* show paint rectangles
* show composite layer borders
* show FPS meter
* continuous painting mode
* show potential scroll bottleneck
* chrome://tracing

---

@state: red

### Resources

* [jankfree](http://jankfree.org/)
* [performance guide by Google](https://developers.google.com/web/fundamentals/performance/rendering/)

---

@state: green, @fragment

# THANKS

