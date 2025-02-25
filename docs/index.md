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
    <span id="hourTime">00</span>
    <span class="colon">:</span>
    <span id="minuteTime">00</span>
    <span class="colon">:</span>
    <span id="secondTime">00</span>
  </div>
</div>


<!--    搜索栏    -->


<!--    快捷栏    -->
<div style="display: flex; flex-wrap: wrap; gap: 55px; margin-top: 40px; border-radius: 15px; width: 100%; padding: 20px;">
  <div class="shortcut">
    <a href="https://www.leeyearn.cn/" target="_blank">
      <img class="shortcut-icon" src="https://www.leeyearn.cn/static/userAvatar/LeeYearn11729748231056641.jpg"/>
    </a>
    <code class="shortcut-font"><b>Ex-Blog</b></code>
  </div>
  <div class="shortcut">
      <a href="/public" target="_blank">
          <img class="shortcut-icon" src="https://img.icons8.com/fluency/96/folder-invoices--v2.png" alt="github"/>
      </a>
      <code sclass="shortcut-font"><b>Public</b></code>
  </div>
  <div class="shortcut">
      <a href="/private" target="_blank">
          <img class="shortcut-icon" src="https://img.icons8.com/fluency/96/porn-folder.png" alt="github"/>
      </a>
      <code class="shortcut-font"><b>Private</b></code>
  </div>
</div>



<!--    工具栏    -->
<div style="display: flex; flex-wrap: wrap;margin-top: 0px; border: 3px solid; border-radius: 15px; width: 100%; padding: 5px; justify-content: center; align-items: center;">
  <div class="extension">
    <a href="https://www.itdog.cn/ping/" target="_blank">
      <img class="extension-icon" src="https://img.icons8.com/fluency/96/domain.png"/>
    </a>
    <b class="extension-font">ITDOG</b>
  </div>

  <div class="extension">
    <a href="https://www.pexels.com/zh-cn/" target="_blank">
      <img class="extension-icon" src="https://img.icons8.com/fluency/96/panorama.png"/>
    </a>
    <b class="extension-font">Pexels</b>
  </div>

  <div class="extension">
    <a href="https://xn--mes358aby2apfg.com/#/register?code=If4MXXad" target="_blank">
      <img class="extension-icon" src="https://img.icons8.com/fluency/96/magic-crystal-ball.png"/>
    </a>
    <b class="extension-font">赔钱机场</b>
  </div>

  <div class="extension">
    <a href="https://igoutu.cn/icons" target="_blank">
      <img class="extension-icon" src="https://img.icons8.com/fluency/96/icons8-new-logo.png"/>
    </a>
    <b class="extension-font">Icons8</b>
  </div>

  <div class="extension">
    <a href="https://cz01.tv" target="_blank">
      <img class="extension-icon" src="https://img.icons8.com/fluency/96/documentary.png"/>
    </a>
    <b class="extension-font">厂长资源</b>
  </div>

  <div class="extension">
    <a href="https://www.ghxi.com/" target="_blank">
      <img class="extension-icon" src="https://img.icons8.com/fluency/96/security-checked--v1.png"/>
    </a>
    <b class="extension-font">果核剥壳</b>
  </div>

  <div class="extension">
    <a href="https://sms-activate.guru/cn" target="_blank">
      <img class="extension-icon" src="https://img.icons8.com/fluency/96/phone-message.png" alt="phone-message"/>
    </a>
    <b class="extension-font">SMS</b>
  </div>

  <div class="extension">
    <a href="https://highlightcode.com/" target="_blank">
      <img class="extension-icon" src="https://img.icons8.com/fluency/96/source-code.png" alt="source-code"/>
    </a>
    <b class="extension-font">代码高亮</b>
  </div>

  <div class="extension">
    <a href="https://thepiratebay.org/index.html" target="_blank">
      <img class="extension-icon" src="https://img.icons8.com/fluency/96/tricorne_hat.png" alt="tricorne_hat"/>
    </a>
    <b class="extension-font">海盗湾</b>
  </div>
  
  <div class="extension">
    <a href="https://www.remove.bg/zh" target="_blank">
      <img class="extension-icon" src="https://img.icons8.com/fluency/96/layers.png" alt="layers"/>
    </a>
    <b class="extension-font">抠图</b>
  </div>

  <div class="extension">
    <a href="https://chrome.zzzmh.cn/" target="_blank">
      <img class="extension-icon" src="https://img.icons8.com/fluency/96/puzzle.png"/>
    </a>
    <b class="extension-font">极简插件</b>
  </div>
</div>

  
</div>

<script>
  // 当前时间
  let hourTime = "00"; // 小时
  let minuteTime = "00"; // 分钟
  let secondTime = "00"; // 秒
  let solarTime = "";
  let weekday = "";

  // 冒号的透明度控制
  let colonOpacity = 1; // 初始透明度为1

  // 获取当前时间
  function updateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();

    solarTime = `${year}年${month}月${date}日`;

    hourTime = now.getHours().toString().padStart(2, "0"); // 获取小时并补零
    minuteTime = now.getMinutes().toString().padStart(2, "0"); // 获取分钟并补零
    secondTime = now.getSeconds().toString().padStart(2, "0"); // 获取秒并补零

    weekday = now.toLocaleString("default", { weekday: "long" });

    // 更新 DOM
    document.getElementById("hourTime").textContent = hourTime;
    document.getElementById("minuteTime").textContent = minuteTime;
    document.getElementById("secondTime").textContent = secondTime;
    document.getElementById("solarTime").textContent = `${solarTime} ${weekday}`;
  }

  // 切换冒号的透明度
  function toggleColonOpacity() {
    colonOpacity = colonOpacity === 1 ? 0 : 1;
    const colons = document.querySelectorAll(".colon");
    colons.forEach((colon) => {
      colon.style.opacity = colonOpacity;
    });
  }

  // 初始化
  updateTime();
  setInterval(updateTime, 1000); // 每秒更新一次时间
  // 每轮呼吸总周期：600ms 呼吸 + 400ms 停顿
  setInterval(() => {
    toggleColonOpacity(); // 切换透明度
    setTimeout(() => {
      toggleColonOpacity(); // 呼吸结束后恢复透明度
    }, 400); // 600毫秒后恢复
  }, 1500); // 每1000毫秒进行一次完整的呼吸周期
</script>
