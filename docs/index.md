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

<div class="container">
    <div class="card" style="--clr: #f00;"></div>
    <div class="card" style="--clr: #0f0;"></div>
    <div class="card" style="--clr: #0fe;"></div>
    <div class="card" style="--clr: #ff0;"></div>
  </div>

---

<!--    快捷栏    -->
<div style="display: flex; flex-wrap: wrap; margin-top: 0px; border-radius: 15px; width: 100%; padding: 20px; justify-content: center;">
  <a href="https://www.leeyearn.cn/" target="_blank" class="shortcut">
    <img class="shortcut-icon" src="https://www.leeyearn.cn/static/userAvatar/LeeYearn11729748231056641.jpg"/>
    <code class="shortcut-font"><b>Ex-Blog</b></code>
  </a>
  <a href="/public" target="_blank" class="shortcut">
    <img class="shortcut-icon" src="https://www.leeyearn.cn/static/userAvatar/LeeYearn11729748231056641.jpg"/>
    <code class="shortcut-font"><b>Public</b></code>
  </a>
  <a href="/private" target="_blank" class="shortcut">
    <img class="shortcut-icon" src="https://www.leeyearn.cn/static/userAvatar/LeeYearn11729748231056641.jpg"/>
    <code class="shortcut-font"><b>Private</b></code>
  </a>
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


cards.forEach(card => {
    card.onmousemove = (event) => {
      const { pageX, pageY } = event;
      
      const x = pageX - card.offsetLeft,
            y = pageY - card.offsetTop;
      
      card.style.setProperty('--x', x + 'px');
      card.style.setProperty('--y', y + 'px');
    }
  })
</script>
