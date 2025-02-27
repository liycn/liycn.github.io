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

---

<!--    快捷栏    -->
[:material-folder: __Public__ ](https://github.com/LeeYearn){ .md-button target="_blank" }
[:material-folder-key: __Private__ ](https://github.com/LeeYearn){ .md-button target="_blank" }
<!-- [:material-folder-key: __Private__ ](https://github.com/LeeYearn){ .md-button target="_blank" } -->
<!-- :fontawesome-solid-code: -->
---

[:material-school: __重大教务__ ](https://my.cqu.edu.cn/workspace/home){ .md-button target="_blank" }
[:fontawesome-solid-code: __重大毕设系统__ ](http://180.85.204.43:50031/){ .md-button target="_blank" }
[:material-speedometer: __内网测速__ ](http://10.0.0.1:3300){ .md-button target="_blank" }
[:material-dns: __Lucky__ ](http://10.0.0.1:16601){ .md-button target="_blank" }


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
