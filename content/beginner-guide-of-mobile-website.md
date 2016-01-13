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
        <a href="http://75team.github.io/novaUI/" style="color:white">Nova.js</a>
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


<img src="img/beginner_guide_of_mobile_website/play.jpg" alt="" />

---

### 快速传播

<img src="img/beginner_guide_of_mobile_website/qrcode.png" alt="" />

---

### 实时更新的移动应用

<img src="img/beginner_guide_of_mobile_website/shake.jpg" alt="" height="394"/>
<img src="img/beginner_guide_of_mobile_website/taobao.jpg" alt="" height="394"/>

---

@bg: img/beginner_guide_of_mobile_website/mobile_bg.jpg

<h1 style="text-align:center;margin-top: -200px;text-shadow:none;">进入移动世界</h1>

---

### 屏幕尺寸

<img src="img/beginner_guide_of_mobile_website/iphone5.png" class="vertical-middle" style="width:20%;" alt="" />
<img src="img/beginner_guide_of_mobile_website/pc.png" class="vertical-middle" style="width:60%;" alt="" />

---

### 屏幕分辨率

<img src="img/beginner_guide_of_mobile_website/resolution-chart.png" class="vertical-middle" style="" alt="" />

---

### 移动网络和性能

* 网络速度不一：WiFi, 4G, 3G, 2G
* 流量需要收费
* 移动设备性能相对PC较低

---

## 运行环境

---

### 操作系统

<ul>
    <li>IOS 32%</li>
    <li>Android 68%</li>
    <li><del>Windows Phone</del></li>
</ul>

---

### IOS
<img src="img/beginner_guide_of_mobile_website/ios-version.png"  style="" alt="" />

---

### Android
<img src="img/beginner_guide_of_mobile_website/android-version.png"  style="" alt="" />

---

### 浏览器

* 均基于WebKit内核
* 三种类型
    * 内置浏览器
    * 第三方浏览器
    * WebView

---

### 内置浏览器

* 即系统自带的浏览器
* IOS: Safari
* Android 4.3及以下：Android内置浏览器
* Android 4.4及以上：
    * 谷歌不再升级Android内置浏览器
    * 其它厂商可以使用Google Chrome，或自行开发（例如：三星Chrome、HTC Chrome）

---

### 第三方浏览器

* 即用户自己下载安装的浏览器
* 国内最流行：UC, QQ, Opera
* 省流量模式：浏览器在服务端解析HTML，给用户渲染好的页面图片

---

### Webview

* 操作系统留给原生应用的浏览器接口
* 国内常见：微信打开网页、手机淘宝
* IOS: 基于Safari底层
* Android:
    * 4.3及以下：基于Android内置浏览器底层
    * 4.4及以上：基于Google Chrome浏览器底层

---

### 测试IOS

* IOS的所有浏览器都基于Safari的底层
* 只需测试：
    * Safari浏览器，富含多个系统版本
    * 开启省流量模式的第三方浏览器

---

### 测试Android

* Android WebKit 4.x 富含不同设备和安卓版本
* Google Chrome
* 三星Chrome, HTC Chrome等
* 根据目标用户，可能要测试Android WebKit 2.3, QQ, UC等。

---

## Good Support!

<img src="img/beginner_guide_of_mobile_website/html5.png" class="vertical-middle" alt="" />

---

### HTML5语义化标签

* header
* footer
* nav
* article
* main
* aside
...

---

### 离线存储

* 可使用localStorage存储信息到用户的设备中
    * localStorage.getItem
    * localStorage.setItem

---

### 地理位置

* 移动特性
* 使用navigator.getlocation来说去用户地理位置

---

### 设备转向和螺旋仪

* 摇一摇
* devicemotion事件
    * 获取设备x/y/z方向的加速度

---

### CSS3特性

* 圆角与阴影
* 渐变背景
* 变形：平移、旋转、缩放
* 变换和动画

---

## 交互

<img src="img/beginner_guide_of_mobile_website/interactions.png" class="vertical-middle" alt="" />

---

### Mobile vs. PC

* 屏幕小，交互方式不同
* 性能较低，代码需高效
* 网速慢、流量贵，代码需小巧快速
* 运行环境复杂，需广泛测试
* 对标准支持好，可使用高级实现方法

---

@bg: img/beginner_guide_of_mobile_website/explore.png


---

## 开发与调试

---

### 开发工具

* Google Chrome
* 脚本库
    * 原生JS
    * Zepto.js
* 调试：Google Chrome

---

### Google Chrome开发者工具可模拟:

* 设备: 尺寸、旋转
* 媒介: print, screen, etc
* 网络: userAgent，网速
* 传感: 触摸、地理位置

---

### Android远程调试

<img src="img/beginner_guide_of_mobile_website/debug.png" style="width:70%" alt="" />

<a href="https://developer.chrome.com/devtools/docs/remote-debugging">教程</a>

---

### IOS远程调试

<img src="img/beginner_guide_of_mobile_website/safari.png" style="width:50%" alt="" />

<a href="http://moduscreate.com/enable-remote-web-inspector-in-ios-6/">教程</a>

---

### 条件

* IOS 6+
* Android WebKit 4.0+ Google Chrome
* Android Webview 4.4.4+，并在客户端开启远程调试

---

## Viewport

---

<img src="img/beginner_guide_of_mobile_website/iphone5.png" class="vertical-middle" style="width:20%;" alt="" />
<img src="img/beginner_guide_of_mobile_website/pc.png" class="vertical-middle" style="width:60%;" alt="" />

---

### CSS像素
<img src="img/beginner_guide_of_mobile_website/csspixel.png" alt="" />

* DPR(devicePixelRatio) = 设备像素 / CSS像素

---

### 常见手机分辨率

<style>
    table {
        margin: auto;
    }
</style>

|机型|物理分辨率|CSS分辨率|DPR|
|---|---|---|---|
|小米手机3 | 1080 X 1920 | 360 X 640 | 3 |
|三星Note II | 720 X 1280 | 360 X 640 | 2 |
|iPhone 5S | 640 X 1136 | 320 X 668 | 2 |

---

<img src="http://qrapi.cli.im/qr?data=http%253A%252F%252Fcode.w3ctech.com%252Fdetail%252F2388%253Fpreview%253D1&level=H&transparent=false&bgcolor=%23ffffff&forecolor=%23000000&blockpixel=12&marginblock=1&logourl=&size=280&kid=cliim&key=a2333a786d7c17e88f0b3df8ece54c55" alt="">

---
@fragment

### Viewport(视口)

* 布局视口
* 视觉视口

---

<img src="img/beginner_guide_of_mobile_website/layoutviewport1.jpg" alt="" />

---

<img src="img/beginner_guide_of_mobile_website/layoutviewport.jpg" alt="" />

---

<img src="img/beginner_guide_of_mobile_website/visualviewport.jpg" alt="" />

---

### 理解视口

* 布局视口
    * 风景
    * 决定页面初始包含块的大小
    * document.documentElement.offsetWidth
* 视觉视口
    * 窗户
    * 透过视口看页面
    * window.innerWidth

---

### 理解缩放

<img src="http://qrapi.cli.im/qr?data=http%253A%252F%252Fcode.w3ctech.com%252Fdetail%252F2389%253Fpreview%253D1&level=H&transparent=false&bgcolor=%23ffffff&forecolor=%23000000&blockpixel=12&marginblock=1&logourl=&size=280&kid=cliim&key=5b4dec55f2d625dfd11cdedfd18fcb14" alt="">

---

### 视口大小

* 默认视口
    * 布局视口的默认大小
    * 保证PC网页正常渲染
* 理想视口
    * 浏览器认为的理想布局视口大小
    * 理想即指：10px实际大小与PC接近，可读

---

### 定义布局视口

```markup
<meta name="viewport"
      content="width=device-width,initial-scale=1"
/>
```

---

### Viewport Meta

* width: 布局视口宽度
* initial-scale: 页面的初始缩放成都和布局视口的宽度
* minimum-scale: 最小缩放程度
* maximum-scale: 最大缩放程度
* user-scalable: 是否可缩放

---

### Viewport总结

* CSS像素
    * 解决设备之间物理像素不一致
    * DPR = 物理像素 / CSS像素
* 视口
    * 布局视口
    * 视觉视口
* 布局视口大小
    * 默认视口
    * 理想视口
    * 自定视口：Viewport Meta


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

### Media Query

针对不同屏幕, 应用不同的样式


```markup
<link rel="stylesheet" href="m.css" media="screen and (max-width:480px)"/>
```

```css
@media screen and (min-width: 480) {
    .selector { // ...  }
}
```

---

### 可查询的属性

* (min/max-)width/height
* orientation
* resolution
* device-pixel-ratio
* (min/max-)aspect-ratio
* device-width, device-height, device-aspect-ratio
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

### 响应式设计中的图片

* 大图随容器自动缩放，保持比例
* 根据屏幕的分辨率，适配不同清晰度的图片

---

### 自动缩放

* max-width: 100%
* background-size: cover

---

### 自适应高清屏

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

### 其它选项（减少图片的使用）

* 使用SVG图片
* 使用CSS模拟形状
* 使用Webfont

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

### Test

<a href="http://75team.github.io/novaUI/">Demo</a>

---

### 实现方案

* float + 百分比宽度
* inline-block + justify
* flex

---

### Test

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

### 事件触发顺序

<img src="http://qr.liantu.com/api.php?w=500&text=http://output.jsbin.com/qewiya" alt="">

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
* touchList里的每一项结构与MouseEvent类似
```javascript
window.ontouchstart = function(e) {
    console.log(e.touches); // 屏幕上所有手指
    console.log(e.targetTouches); // 当前元素上的手指
    console.log(e.changedTouches); // 有变化的手指

    console.log(e.changedTouchs[0].clientX);  // 获得第一个手指相对于视觉视口的横向偏移
    console.log(e.changedTouchs[0].pageX);  // 获得第一个手指相对于布局视口的横向偏移
}
```

---

## Test

使用Touch事件，实现对元素的拖动。

---

### touchcancel事件
* 被系统通知、应用切换等中断
* 超出边界

---
@state: red

## <span style="color:white">Q&A</span>



