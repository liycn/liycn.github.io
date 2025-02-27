---
hide:
  - navigation
  - toc
  - path
  - feedback
glightbox: false
---

<style>
  .md-typeset h1,
  .md-content__button {
    display: none;
  }
</style>

<link rel="stylesheet" href="/stylesheets/index.css">


<div>
    <h2 style="font-weight: bolder; margin-top: 0;line-height:1;">首先</h2>
    这个网站是基于<a href="https://squidfunk.github.io/mkdocs-material/" target="_blank"> Material for MkDocs </a>建立的，
</div>

<h2 style="font-weight: bolder;">相关链接</h2>

[ :simple-qq: __QQ__ ](https://user.qzone.qq.com/1317262104/main){ .md-button .md-button--primary target="_blank"}
[ :simple-github: __GitHub__ ](https://github.com/LeeYearn){ .md-button .md-button--primary target="_blank"}
[ :simple-youtube: __YouTube__ ](https://www.youtube.com/@leeyearn){ .md-button .md-button--primary target="_blank"}
[ :fontawesome-brands-tiktok: __抖音__ ](https://www.douyin.com/user/MS4wLjABAAAAOvMRoJmc5JWGlQQh0Db9Iml88UFzcLf0wmfEIi4GWEvBIUPGaDtuopwiqyE4C3an?from_tab_name=main&vid=7358879260318207242){ .md-button .md-button--primary target="_blank"}


---

<!-- ![Image title](https://dummyimage.com/600x400/eee/aaa){ align=left } -->

<!-- <div style="margin-top:50px;border: 1px solid #ddd; border-radius: 10px; padding: 15px;background-color: rgba(249, 249, 249, 0.1);">
    <h2 style="font-weight: bolder;margin-top:0px;">教育经历</h2>
    <div class="education-container" style="display: flex; flex-direction: column; gap: 20px; margin: 0 0 0 50px;">
        <div style="display: flex; align-items: center; gap: 30px; width: 100%; max-width: 800px; flex-wrap: wrap;">
            <img src="/images/about/education/CQU.png" width="180px" style="flex-shrink: 0; display: none;" class="education-image">
            <div style="text-align: left; font-size: 18px;">
                <h3 style="font-size: 25px; font-weight: bold; line-height: 1; margin-top: 1em;">
                    <a href="https://cqu.edu.cn/" target="_blank">重庆大学</a>
                     - 
                    <a href="https://eie.cqu.edu.cn/" target="_blank">国家卓越工程师学院</a>
                </h3>
                <p><b>时间：</b>2024年9月 ~ 2025年7月 - <b>交流生</b></p>
                <p><b>专业：</b>智能网联汽车</p>
            </div>
        </div>
        <div style="display: flex; align-items: center; gap: 30px; width: 100%; max-width: 800px; flex-wrap: wrap;margin-top:20px">
            <img src="/images/about/education/CQUE.png" width="180px" style="flex-shrink: 0; display: none;" class="education-image">
            <div style="text-align: left; font-size: 18px;">
                <h3 style="font-size: 25px; font-weight: bolder; line-height: 1; margin-top: 1em;">
                    <a href="https://www.cque.edu.cn/esdztw/sy.html" target="_blank">重庆第二师范学院</a>
                </h3>
                <p><b>时间：</b>2023年9月 ~ 2025年7月 - <b>全日制本科</b></p>
                <p><b>专业：</b>数据科学与大数据技术(曙光合作)</p>
            </div>
        </div>
        <div style="display: flex; align-items: center; gap: 30px; flex-wrap: wrap; margin-top: 20px; ">
            <img src="/images/about/education/CQNY.png" width="180px" style="flex-shrink: 0; display: none;" class="education-image">
            <div style="text-align: left; font-size: 18px;">
                <h3 style="font-size: 25px; font-weight: bolder; line-height: 1; margin-top: 1em;">
                    <a href="https://www.cqny.edu.cn/" target="_blank">重庆能源职业学院</a>
                </h3>
                <p><b>时间：</b>2020年9月 ~ 2023年7月 - <b>全日制专科</b></p>
                <p><b>专业：</b>物联网应用技术</p>
            </div>
        </div>
    </div>
</div> -->

<h2 style="font-weight: bolder;">友链</h2>

<div class="grid cards" markdown>

- [__My ex blog__ <br> 心远地自偏](https://dxlcq.cn){target="_blank"}

- [__骄骄__ <br> 骄骄是骄傲的骄](https://dxlcq.cn){target="_blank"}
    
- [__Sevenalist__ <br> Never Stop Thinking.](https://dczcq.cn){target="_blank"}

- [__Eason Chan__ <br> 👀](https://www.easonchan.net/hk/?lang=zh-hans){target="_blank"}
    
</div>

<script>
    // 动态检测屏幕宽度
function adjustLayout() {
    const screenWidth = window.innerWidth;
    const images = document.querySelectorAll('.education-image');
    const container = document.querySelector('.education-container'); // 使用 class 选择器

    if (screenWidth < 768) {
        // 小屏幕：隐藏图片，调整 margin
        images.forEach(img => img.style.display = 'none');
        container.style.margin = '0 0 0 0';
    } else {
        // 大屏幕：显示图片，恢复 margin
        images.forEach(img => img.style.display = 'block');
        container.style.margin = '0 0 0 50px';
    }
}

// 初始加载时调用
adjustLayout();

// 窗口大小变化时调用
window.addEventListener('resize', adjustLayout);
</script>