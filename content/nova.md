# Nova.js

---

### Life Cycle

```javascript
var MyEle = Nova({
    is: 'my-ele',                     // 标签名
    behaviors: [],                    // 复用行为
    template: '<template></template>',// 模板
    stylesheet: '<style></style>',         // 样式
    props: {
        // 简写，声明类型
        age: Number,

        // 完整写法
        info: {
            type: Object,               // 类型：Object, Boolean, String, Date, Number
            value: {},                  // 默认值
            observer: '_infoChanged'    // 监听函数
        }
    },

    // 声明周期
    created: function() { },
    attached: function() { },
    detached: function() { },
    attributeChanged: function(attrName, oldVal, newVal) {}
});
```

---

#### 使用

```markup

<my-ele></my-ele>

<script>
var ele = document.createElement('my-ele');
document.body.appendChild(ele);
</script>

```

---

### Nova Compile

```markup
<!-- main.html -->
<dom-module>
    <style type="text/css">
        .hint {
            color: red;
        }
    </style>
    <template>
        <span class="hint">{{text}}</span>
    </template>
    <script>
        var MyEle = Nova({
            // ...
        });
    </script>
</dom-module>
```

---

### Nova Compile
```javascript
// main.js
var MyEle = Nova({
    styleheet: '<style>.hint {color:red}</style>',
    template: '<template><span class="hint">{{text}}</span></template>',
    // ...
});
```

* npm install gulp-nova
* gulp watch

---
### Event

```javascript
ele.on('wakeup', handler);
ele.trigger('wakeup');
ele.off('wakeup');
```

---

### props observer

* 在props中声明的属性，当发生改变时，会触发_propnameChanged事件
* 可在props中绑定observer

```javascript
var MyEle = Nova({
    props: {
        age: {
            type: Number,
            value: 3,
            observer: '_ageObserver'
        },
        gender: String
    },
    created: function() {
        this.on('_genderChanged', function(ev, old, newVal) {
            alert('变性成功');
        });
    },
    _ageObserver: function(ev, oldVal, newVal) {
        alert('Happy Birthday');
    }
});
```

---

### attributes to props

```markup
<my-ele age="18" gender="femaile" info='{"weight":100}'></my-ele>
```

```javascript
ele.age;                // 18
ele.info.weight;        // 100
ele.setAttribute('age', 19);
ele.age;                // 19
```

---

### template annotation

```markup
<template>
    <span>{{age}}</span>
    <span gender="{{gender}}"></span>
</template>
```

---

### insertion point

```markup
<template>
    <content select="page"></content>
</template>
```

```markup
<my-ele>
    <div class="page"> hello </div>
</my-ele>
```

---

### style encapsulation

```markup
<dom-module>
    <style type="text/css">
        .hint {
            color: red;
        }
    </style>
    <template></template>
    <script></script>
</dom-module>
```

* 只会对my-ele起作用，不影响外界

---
