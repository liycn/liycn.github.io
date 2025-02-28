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

// 搜索引擎选择
let selectedEngine = "google"; // 默认搜索引擎

const engineButtons = document.querySelectorAll(".search-engine-buttons li");
engineButtons.forEach(button => {
  // 将按钮文本拆分为单个字母
  const textList = button.innerText.split("");
  button.innerHTML = textList.map((letter, i) => `<span style="transition-delay: ${i * 40}ms">${letter}</span>`).join("");

  // 点击事件
  button.addEventListener("click", () => {
    // 移除所有按钮的 active 类
    engineButtons.forEach(btn => btn.classList.remove("active"));
    // 为当前点击的按钮添加 active 类
    button.classList.add("active");
    // 更新选择的搜索引擎
    selectedEngine = button.getAttribute("data-engine");
  });
});

// 默认选中第一个按钮
document.querySelector('.search-engine-buttons li[data-engine="google"]').classList.add("active");

// 回车搜索功能
const searchInput = document.getElementById("search-input");
searchInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    const query = searchInput.value.trim();
    if (query) {
      let searchUrl = "";
      switch (selectedEngine) {
        case "google":
          searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
          break;
        case "bing":
          searchUrl = `https://www.bing.com/search?q=${encodeURIComponent(query)}`;
          break;
        case "wikipedia":
          searchUrl = `https://zh.wikipedia.org/wiki/${encodeURIComponent(query)}`;
          break;
        default:
          searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
      }
      searchInput.value = "";
      window.open(searchUrl, "_blank");
    }
  }
});