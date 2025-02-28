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

<!--    搜索栏    -->
<div class="input-container">
  <input type="text" placeholder="还没写好搜索功能，只是输入框有了" class="gradient-input" />
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
