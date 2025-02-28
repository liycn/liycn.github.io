---
hide:
  - navigation
  - toc
  - path
  - pageTitle
  - editButton
glightbox: false  # 禁止图片放大  或者在标签中使用 class="on-glb" 让某一个标签允许放大(off-glb)
---

<style>
  .md-typeset h1,
  .md-content__button {
    display: none;
  }
  .md-content__inner{
    padding-top: 0em;
  }
</style>
<link rel="stylesheet" href="/stylesheets/index.css">

<!--    时间    -->
<div class="time">
  <div class="solar-time" id="solarTime"></div>
  <div class="clock-time">
    <span id="hourTime" class="clock-font">00</span>
    <span class="colon">:</span>
    <span id="minuteTime" class="clock-font">00</span>
    <span class="colon">:</span>
    <span id="secondTime" class="clock-font">00</span>
  </div>
</div>

<!-- 搜索引擎按钮 -->
<div class="search-container" onselectstart="return false">
  <ul class="search-engine-buttons" style="margin-left: 0;display: flex; list-style: none;margin:50px  0 0 0;">
    <li class ="search-englne-text" data-engine="google" style="margin-left: 0px">Google</li>
    <li class ="search-englne-text" data-engine="bing" style="margin-left: 0px">Bing</li>
    <li class ="search-englne-text" data-engine="wikipedia" style="margin-left: 0px">Wikipedia</li>
  </ul>
</div>

<!-- 搜索输入框 -->
<div class="input-container">
  <input type="text" id="search-input" placeholder="选择引擎 回车搜索" class="gradient-input" />
</div>

<!--    快捷栏    -->

[:material-folder: __光明正大__ ](\public){ .md-button target="_blank" style="margin-top:40px" }
[:material-folder-lock: __深藏不露__ ](\private){ .md-button target="_blank" }

[:material-school: __重大教务__ ](https://my.cqu.edu.cn/workspace/home){ .md-button target="_blank" }
[:fontawesome-solid-code: __重大毕设__ ](http://180.85.204.43:50031/){ .md-button target="_blank" }
[:simple-openwrt: __OpenWrt__ ](http://10.0.0.1){ .md-button target="_blank" }
[:material-speedometer: __内网测速__ ](http://10.0.0.1:3300){ .md-button target="_blank" }
[:material-router-network-wireless: __内网穿透__ ](http://10.0.0.1:16601){ .md-button target="_blank" }


<script type="text/javascript" src="./javascripts/index.js"></script>
