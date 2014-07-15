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
<div class="self-intro">
    <span class="avatar"></span>
    <h2 class="name">Melon.H</h2>
</div>
<ul class="contact-list">
    <li>联盟@奇舞团.360</li>
    <li>白羊座，爱好<i class="fa fa-music"></i>和运动</li>
    <li>
        <a href="http://blog.melonhuang.gitpress.org" style="color:white">Blog</a>
    </li>
    <li>
        <a href="http://75team.github.io/novaUI/" style="color:white">NovaUI</a>
    </li>
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

# 性能

<embed width="240" height="320" src="http://boallen.com/assets/flash/fps-compare/fps-compare-15fps.swf" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" align="middle" play="true" loop="true" scale="showall" wmode="window" devicefont="false" bgcolor="#1e1e1e" name="fps-compare-15fps" menu="true" allowfullscreen="false" allowscriptaccess="sameDomain" salign="" type="application/x-shockwave-flash">

<embed width="240" height="320" src="http://boallen.com/assets/flash/fps-compare/fps-compare-60fps.swf" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" align="middle" play="true" loop="true" scale="showall" wmode="window" devicefont="false" bgcolor="#1e1e1e" name="fps-compare-60fps" menu="true" allowfullscreen="false" allowscriptaccess="sameDomain" salign="" type="application/x-shockwave-flash">

---

@state: light, @fragment

# Render?

---

@state: light, @fragment

# HTTP GET

---

@state: light, @fragment

# HTML

<img src="img/high_performance_animation/html.jpg" alt="" />

---

@state: light, @fragment

# DOM

<img src="img/high_performance_animation/html.jpg" alt="" />
<img class="fragment" src="img/high_performance_animation/parse.jpg" alt="" />

---

@state: light, @fragment

# DOM + CSS = Render Tree

<img class="fragment" src="img/high_performance_animation/parse.jpg" alt="" />


---

@state: light, @fragment

# Layout
<img src="img/high_performance_animation/layout.jpg" alt="" />

---

@state: light, @fragment

# Paint
<img src="img/high_performance_animation/paint.jpg" alt="" />


---

@state: light, @fragment

# Upload to GPU

<img src="img/high_performance_animation/composite.jpg" alt="" />

---

@state: light, @fragment

# devtool waterfall
<img src="img/high_performance_animation/devtools-waterfall.jpg" alt="" />

---

@state: light, @fragment

# 引起layout的style

<img src="img/high_performance_animation/layout_styles.jpg" alt="" />

* Source: [http://goo.gl/IPVJY6](https://docs.google.com/spreadsheet/pub?key=0ArK1Uipy0SbDdHVLc1ozTFlja1dhb25QNGhJMXN5MXc&single=true&gid=0&output=html)

---

@state: light, @fragment

# Reading也会引起layout

*clientHeight, clientLeft, clientTop, clientWidth, focus(), getBoundingClientRect(), getClientRects(), innerText, offsetHeight, offsetLeft, offsetParent, offsetTop, offsetWidth, outerText, scrollByLines(), scrollByPages(), scrollHeight, scrollIntoView(), scrollIntoViewIfNeeded(), scrollLeft, scrollTop, scrollWidth .....

---

@state: light, @fragment

# render process
<img src="img/high_performance_animation/devtools-waterfall.jpg" alt="" />

* 改变发生再这个过程的越早，越耗时
* 改变不同样式会导致layout/repaint/composite
* 读取size, position相关属性会引起relayout

---

@state: light, @fragment

# 丝柔顺滑的Animation

* to us: 30fps feels good, 60fps is perfect
* 屏幕刷新频率: mostly 60, 部分国家50
* 丝柔顺滑意味着：1 / 60s ~= 16.7ms内，我们要把这一帧准备好。

---

@state: light, @fragment

# setTimeout(callback, 16.7);

* Bad!
* 精确度不够。依靠浏览器内置时钟更新频率. eg. IE8及以前更新间隔为15.6, setTimeout 16.7, 它需要两个15.6ms才触发。超过14.5ms
* main thread队列
* 不同刷新频率得屏幕

---
@state: light, @fragment

# setTimeout(callback, 16.7);

<img src="img/high_performance_animation/settimeout.png" alt="" />
* 丢帧！

---

@state: light, @fragment

# requestAnimationFrame - when to paint

* 定义绘制每一帧前的工作
* 自动调节频率。js, layout, paint过程工作太多，会自动降低为30fps, 虽然频率降低但比丢帧好。 

---

@state: light, @fragment

# half the way

* rAF解决了timing得问题
* 到frame budget了。小于16.7ms

---

@state: light, @fragment

# render process
<img src="img/high_performance_animation/devtools-waterfall.jpg" alt="" />

---

@state: light, @fragment

# 触发Layout

* 更改class，导致width, height, margin等size, position相关得属性改变。
* 读取size, position相关得属性

---

@state: light, @fragment

# Layout thrashing: demo

http://www.html5rocks.com/en/tutorials/speed/rendering/too-much-layout.html
http://www.html5rocks.com/en/tutorials/speed/rendering/too-much-layout-fixed.html


---

@state: light, @fragment

## 分离读写操作 

```javascript
var h1 = element1.clientHeight;
element1.style.height = (h1 * 2) + 'px';

var h2 = element2.clientHeight;
element2.style.height = (h2 * 2) + 'px';

var h3 = element3.clientHeight;
element3.style.height = (h3 * 2) + 'px';

```

```javascript
// Read
var h1 = element1.clientHeight;
var h2 = element2.clientHeight;
var h3 = element3.clientHeight;

// Write (invalidates layout)
element1.style.height = (h1 * 2) + 'px';
element2.style.height = (h2 * 2) + 'px';
element3.style.height = (h3 * 2) + 'px';

```

---

@state: light, @fragment

# What if?

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

# wirte后Read

```javascript
// Read
var h1 = element1.clientHeight;

// Write
requestAnimationFrame(function() {
  element1.style.height = (h1 * 2) + 'px';

    // We may want to read the new
    // height after it has been set
    var height = element1.clientHeight;

    /*
    requestAnimationFrame(function() {
        var height = element1.clientHeight;
    });
    */
});
```

* 用requestAnimationFrame推迟read操作，但可能导致read这一帧之前, element.style.height被修改了。

---

@state: light, @fragment

# fastdom

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

@state: light, @fragment

# Demo

http://jsbin.com/ebicuJu/2/edit

---

# 少触发Layout

* 避免多次读取，保存代替读取
* 批量读，批量写
* 面对解耦代码，使用rAF推迟达到批量度，批量写得效果。

@state: light, @fragment

---

@state: light, @fragment

# Paint

* 当修改border-radius, box-shadow, color等属性时，会引起repaint

---

@state: light, @fragment

# Paint can be expensive

* demo: background: fixed, box-shadow, border-radius
* use continuous painting mode in devtool
* 在经常Repaint得区域，要避免代价太高得style

---

@state: light, @fragment

# Paint区域越小越好

* gif jank: http://jsbin.com/dizak/1/edit 即使gif不可见，浏览器也会一直repaint，因为这个代驾比计算它是否可见小。所以记得把gif给display:none;

* 改变一个元素，不只是它会被Repaint，它所处得整个层都会被repaint
* show paint-rectangles

---

# Paint

* 不同style得paint代价不同，刷新频繁得区域避免使用这些style
* 避免不必要得painting, 如隐藏得gif
* 尽量使paint的区域小

---
@state: light, @fragment

# Composite

* GPU工作时刻，擅长改变Layer得position, scale, opacity, rotation

---
@state: light, @fragment

# Layer model

* show composited layers
* layer panel

---
@state: light, @fragment

# 如何生成Layer

* 3d或perspective transform属性
* 使用animation改变opacity, transform得元素
* video 
* canvas
* flash
* accelerated CSS filters
* 上面被Layerf覆盖得元素

---
@state: light, @fragment

## 动画，将height从100px不断修改为200px

<img src="http://img.readitlater.com/i/blogs.adobe.com/webplatform/files/2014/03/animate-height-2x/RS/w640.png" alt="" />

---
@state: light, @fragment

## 动画，将scale从0.5变化到1

<img src="http://img.readitlater.com/i/blogs.adobe.com/webplatform/files/2014/03/animate-transform-2x/RS/w640.png" alt="" />

---
@state: light, @fragment

# 生成Layer来减小repaint得区域
## demo
http://www.html5rocks.com/static/demos/scrolling/demo.html

---
@state: light, @fragment

# GPU也是有限度得

demo: taobao.com

* 如果生成太多layer，GPU会忙不过来，也会卡顿

---
@state: light, @fragment

# 避免意外生成layer

demo: http://jsbin.com/efirip/5/quiet

---
@state: light, @fragment

# Composite

1. GPU擅长改变position(translate), opacity, rotation, scale。如果能使用这些属性做动画尽量使用，避免layout。
2. 为最小化paint得区域，可为导致repaint得区域生成新得层来达到效果
3. GPU也是有限度的，不要生成太多无用得Layer，也要避免代码中意外产生Layer。

---
@state: light, @fragment

# Scroll

---
@state: light, @fragment

# 避免在Scroll callback中做太多操作

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
    // reset the tick so we can
    // capture the next onScroll
    ticking = false;

    var currentScrollY = latestKnownScrollY;

    // read offset of DOM elements
    // and compare to the currentScrollY value
    // then apply some CSS classes
    // to the visible items
}

```

---
@state: light, @fragment

# hover jank

https://dl.dropboxusercontent.com/u/2272348/codez/expensivescroll/demo.html

* event-pointer: none;

---
@state: light, @fragment

# touch jank

* 当滚动时，browser会等待touchmove callback完成后，才能决定是否滚动。因此touchmove handler会阻塞scrolling
* pointer-event, touch-action:none; 告诉你这块区域没有绑定touch事件，这样浏览器滚动不会被main thread阻塞
* 有的浏览器做优化，如果区域没绑定touch事件，就不等待main thread。
* 因此不要在不需要touchevent得区域绑定事件, 尤其是document
* mousewheel同理
* show scroll bottle neck

demo: http://www.rbyers.net/janky-touch-scroll.html

---
@state: light, @fragment

# Checklist

* large invalidations of layouts and styles 
* layout thrashing
* animating layout properties
* Paint storms
* expensive paints
* expensive input handlers

---
@state: light, @fragment

# dont't follow it, test it

* timeline
* show paint rectangles
* show composite layer borders
* continuous painting mode
* show bottleneck

---
@state: light, @fragment

# Q&A

---

@state: light, @fragment

# THANKS 

---
