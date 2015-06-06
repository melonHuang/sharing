<link rel="stylesheet" href="css/slides/common.css" />
<link rel="stylesheet" href="css/slides/beginner-guide-of-mobile-website.css" />

# 移动端基础

### 从PC到Mobile

---
@state: green

<div class="self-intro">
    <span class="avatar"></span>
    <h2 class="name">Melon.H</h2>
</div>

<ul class="contact-list">
    <li>黄薇</li>
    <li>360奇舞团</li>
    <li>
        <a href="http://75team.github.io/novaUI/" style="color:white">NovaUI</a>
    </li>
    <li>
        <a href="http://melonh.com/animationGenerator/" style="color:white">Animation Generator</a>
    </li>
    <p style="font-size:120%;margin-top:0.5em">
        <a href="https://github.com/melonHuang" target="_blank" title="Github"><i class="fa-github" style="color:white"></i></a>&nbsp;
        <a href="http://weibo.com/u/2103102591" target="_blank" title="Weibo"><i class="fa-weibo" style="color:white"></i></a>&nbsp;
        <a href="http://melonh.com/" target="_blank" title="Twitter"><i class="fa-home" style="color:white"></i></a>&nbsp;
    </p>
</ul>

---

@bg: img/beginner_guide_of_mobile_website/mobile_bg.jpg

---

<img src="img/beginner_guide_of_mobile_website/iphone5.png" class="vertical-middle" style="width:20%;" alt="" />
<img src="img/beginner_guide_of_mobile_website/pc.png" class="vertical-middle" style="width:60%;" alt="" />

---


## 浏览器

* 内置浏览器:
    * IOS: Safari
    * Windows Phone: IE
    * Android 2.x和大部分Android 4.x: 安卓WebKit
    * Chrome拥有的Nexus: Google Chrome
    * Android4.4及以上：三星使用三星Chrome
    * Amazon: Silk
* 可下载浏览器:Firefox, Opera, UC, QQ, 360, etc

---

## Good Support!

<img src="img/beginner_guide_of_mobile_website/html5.png" class="vertical-middle" alt="" />

---

## HTML5语义化标签

* header
* footer
* nav
* article
* main
* aside
...

---

## 离线存储

* 可使用localStorage存储信息到用户的设备中
    * localStorage.getItem
    * localStorage.setItem

---

## 地理位置

* 移动特性
* 使用navigator.getlocation来说去用户地理位置

---

## 设备转向和螺旋仪

* 摇一摇
* devicemotion事件
    * 获取设备x/y/z方向的加速度

---

## CSS3特性

* 圆角与阴影
* 渐变背景
* 变形：平移、旋转、缩放
* 变换和动画

---

## 交互

<img src="img/beginner_guide_of_mobile_website/interactions.png" class="vertical-middle" alt="" />

---

@bg: img/beginner_guide_of_mobile_website/explore.png


---

## 开发与调试

---

### 使用Google Chrome的开发者工具可模拟:

* 设备: 尺寸、旋转
* 媒介: print, screen, etc
* 网络: userAgent，网速
* 传感: 触摸、地理位置

---

## Android远程调试

<img src="img/beginner_guide_of_mobile_website/debug.png" style="width:70%" alt="" />

<a href="https://developer.chrome.com/devtools/docs/remote-debugging">教程</a>

---

## IOS远程调试

<img src="img/beginner_guide_of_mobile_website/safari.png" style="width:50%" alt="" />

<a href="http://moduscreate.com/enable-remote-web-inspector-in-ios-6/">教程</a>


---

<img src="img/beginner_guide_of_mobile_website/iphone5.png" class="vertical-middle" style="width:20%;" alt="" />
<img src="img/beginner_guide_of_mobile_website/pc.png" class="vertical-middle" style="width:60%;" alt="" />

---
@fragment

## CSS像素
<img src="img/beginner_guide_of_mobile_website/csspixel.png" alt="" />

* devicePixelRatio = 设备像素 / CSS像素

---
@fragment

## 视口(Viewport)

* 布局视口: CSS布局会被它约束。可看作初始包含块的宽度。document.documentELement.width/height
* 视觉视口: 用户屏幕中看到区域的CSS像素。window.innerWidth/Height
* 理想视口: 浏览器认为对设备来说最合适的布局视口的大小

---

<img src="img/beginner_guide_of_mobile_website/layoutviewport1.jpg" alt="" />

---

<img src="img/beginner_guide_of_mobile_website/layoutviewport.jpg" alt="" />

---

<img src="img/beginner_guide_of_mobile_website/visualviewport.jpg" alt="" />

---
@fragment

## Viewport Meta

```markup
<meta name="viewport" content="width=device-width,initial-scale=1"/>
```

* width: 布局视口宽度
* initial-scale: 页面的初始缩放成都和布局视口的宽度
* minimum-scale: 最小缩放程度
* maximum-scale: 最大缩放程度
* user-scalable: 是否可缩放

---

## Test

1. 什么是CSS像素和设备像素比？
2. 移动浏览器的三个视口是什么？
3. 当页面放大时，移动端浏览器的视口如何改变？

---

@bg: img/beginner_guide_of_mobile_website/responsive.png

---

## 什么是响应式设计？

* 一种能在不同**屏幕大小**的设备上都能提供优秀的浏览体验的网页设计方案
* 案例
    * <a href="http://www.bootcss.com/">Twitter Bootstrap</a>
    * <a href="http://foundation.zurb.com/">Facebook Foundation</a>

---

## 固定宽度？

<img src="img/beginner_guide_of_mobile_website/multiple.jpg" alt="" />

<div class="fragment stamp">Out</div>

---

### 媒体查询（Media Query）

* 针对不同屏幕应用不同的样式

```markup
<link rel="stylesheet" href="m.css" media="screen and (max-width:480px)"/>

<style type="text/css">
@media screen and (min-width: 480) {
    .selector {
        // ...
    }
}
</style>
```

---
@fragment

## 媒体查询

* (min/max-)width/height
* orientation
* resolution
* device-pixel-ratio
* (min/max-)aspect-ratio
* device-width, device-height, device-aspect-ratio 不可靠
* <a href="http://jsbin.com/mavexo/1/edit?html,css,output">Demo</a>

---

## Test

<img src="img/beginner_guide_of_mobile_website/layout.png" alt="" />

* 在视口宽度大于或等于800px时，实现三栏布局，从左到右宽度分别为20%, 60%, 20%
* 在视口宽度小于800px且大于或等于600px时，第三栏掉下去，第一和第二栏的宽度分别为40%和60%
* 在视口宽度小于600时，三个区域垂直排列，宽度均为100%

<a href="http://codepen.io/melonHuang/pen/RPVwyv?editors=110">Demo</a>


---

## 弹性布局

* 页面的body宽度为100%
* 自适应布局
    * display: table
    * CSS3 Flex Box

---
@fragment

## display: table
* CSS 2.1

---

```css
display: table                /* <table>     */
display: table-cell           /* <td>        */
display: table-row            /* <tr>        */
display: table-column         /* <col>       */
display: table-column-group   /* <colgroup>  */
display: table-footer-group   /* <tfoot>     */
display: table-header-group   /* <thead>     */
```

---

### <a href="http://codepen.io/melonHuang/pen/OVmJjY">Demo: 多栏自适应等高布局</a>

---

## Flexbox

* 水平或垂直排成一行
* 控制子元素对齐方式
* 控制子元素的宽度/高度
* 控制子元素显示顺序
* 控制子元素是否折行

---

### Flexbox是W3C布局方面标准中的**终极武器**

---

<img src="img/beginner_guide_of_mobile_website/axis.png" alt="" />

---

### <a href="http://codepen.io/melonHuang/pen/gpWOPQ?editors=110">Demo</a>

---

## 新旧标准

* 2009年语法
* 2012年语法
* <a href="http://pleeease.io/play/">工具</a>

---
@fragment

## 液态图片

```css
img {
    max-width: 100%;
}
```

---

## 使用2x图片

* width:200px的img，使用分辨率宽为400的图片
* background-size: 50% auto;
* srcset和picture
```markup
<img src="low-res.jpg" srcset="high-res.jpg 2x"> 
<picture> 
    <source srcset="med.jpg 1x, med-hd.jpg 2x" media="(min-width: 40em)" />  
    <source srcset="sm.jpg 1x, sm-hd.jpg 2x" />  
    <img src="fallback.jpg" alt="" /> 
</picture> 
```

---

## 响应式Javascript

* 使用matchMedia
```javascript
if(matchMedia('screen and (min-width:480px)').matches) {
    // ...
}
```
* 处理orientationChange事件
```javascript
window.addEventListener("orientationchange", function() {
    alert("the orientation of the device is now " + screen.orientation);
});
```

---

## Test

<a href="http://codepen.io/melonHuang/pen/GJmRPb?editors=110">Demo</a>

---

## Touch

---

<div class="layout-column">
    <div class="column">
        <h3>鼠标事件</h3>
        <p>mousedown</p>
        <p>mousemove</p>
        <p>mouseup</p>
        <p>click</p>
    </div>
    <div class="column">
        <h3>Touch事件</h3>
        <p>touchstart</p>
        <p>touchmove</p>
        <p>touchend</p>
    </div>
</div>

---

### 兼容鼠标事件

<img src="img/beginner_guide_of_mobile_website/comp.png" alt="" />

---
@fragment

## click延迟

* 手机上的click事件有约300ms的延迟，因为浏览器要判断是否为双击缩放行为
    * 部分浏览器，会在页面不可缩放时取消延时
    * Google Chrome会在Viewport Meta的content设为device-width时取消延时
    * IE会在CSS的touch-action设为manipulation时取消延时
    * Safari无法取消延时
* 解决办法
    * 使用touch事件模拟tap轻触行为

---

## touchEvent

* 有三个touchList类型的关键属性
* touchList里的每一项结构域MouseEvent类似
```javascript
window.ontouchstart = function(e) {
    var touchList = e.touchList;
    console.log(touchList.touches); // 屏幕上所有手指
    console.log(touchList.targetTouches); // 当前元素上的手指
    console.log(touchList.changedTouches); // 有变化的手指

    console.log(touchList.changedTouchs[0].clientX);  // 获得第一个手指相对于视觉视口的横向偏移
    console.log(touchList.changedTouchs[0].pageX);  // 获得第一个手指相对于布局视口的横向偏移
}
```

---

## Test

使用Touch事件，实现对元素的拖动。

---
@state: red

## <span style="color:white">Q&A</span>



