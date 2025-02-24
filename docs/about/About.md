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

<div>
    <h2 style="font-weight: bolder; margin-top: 0;line-height:1;">首先</h2>
    这个网站是基于<a href="https://squidfunk.github.io/mkdocs-material/" target="_blank"> Material for MkDocs </a>建立的，
</div>

<div>
    <h2 style="font-weight: bolder;">相关链接</h2>
    <div style="display: flex; flex-wrap: wrap; gap: 55px; margin-top: 40px;">
        <div style="display: flex; flex-direction: column; align-items: center;">
            <a href="https://www.leeyearn.cn/" target="_blank">
                <img width="64" height="64" src="https://img.icons8.com/deco/96/domain.png"/>
            </a>
            <code style="font-size: 18px; margin: 0;">ex-Blog</code>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center;">
            <a href="https://github.com/LeeYearn" target="_blank">
                <img width="64" height="64" src="https://img.icons8.com/deco/96/github.png" alt="github"/>
            </a>
            <code style="font-size: 18px; margin: 0;">GitHub</code>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center;">
            <a href="https://www.youtube.com/@leeyearn" target="_blank">
                <img width="64" height="64" src="https://img.icons8.com/deco/96/youtube.png" alt="youtube"/>
            </a>
            <code style="font-size: 18px; margin: 0;">YouTube</code>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center;">
            <a href="https://steamcommunity.com/profiles/76561199004333008/" target="_blank">
                <img width="64" height="64" src="https://img.icons8.com/deco/96/steam.png" alt="steam"/>
            </a>
            <code style="font-size: 18px; margin: 0;">Steam</code>
        </div>
    </div>
</div>

<div>
    <h2 style="font-weight: bolder;">教育经历</h2>
    <div class="education-container" style="display: flex; flex-direction: column; gap: 20px; margin: 0 0 0 50px;">
        <div style="display: flex; align-items: center; gap: 50px; width: 100%; max-width: 800px; flex-wrap: wrap;">
            <img src="/images/about/education/CQU.png" width="200px" style="flex-shrink: 0; display: none;" class="education-image">
            <div style="text-align: left; font-size: 18px;">
                <h3 style="font-size: 25px; font-weight: bold; line-height: 1; margin-top: 1em;">重庆大学 - 国家卓越工程师学院</h3>
                <p>
                    <a href="https://cqu.edu.cn/" target="_blank">学校官网</a> / 
                    <a href="https://eie.cqu.edu.cn/" target="_blank">卓工官网</a> / 
                    <a href="https://my.cqu.edu.cn/workspace/home/" target="_blank">教务系统</a>
                </p>
                <p><b>时间：</b>2024年9月 - 2025年7月 - <b>交流生</b></p>
                <p><b>专业：</b>智能网联汽车</p>
            </div>
        </div>
        <div style="display: flex; align-items: center; gap: 50px; width: 100%; max-width: 800px; flex-wrap: wrap;margin-top:20px">
            <img src="/images/about/education/CQUE.png" width="200px" style="flex-shrink: 0; display: none;" class="education-image">
            <div style="text-align: left; font-size: 18px;">
                <h3 style="font-size: 25px; font-weight: bolder; line-height: 1; margin-top: 1em;">重庆第二师范学院</h3>
                <p>
                    <a href="https://www.cque.edu.cn/esdztw/sy.html" target="_blank">学校官网</a>
                </p>
                <p><b>时间：</b>2023年9月 - 2025年7月 - <b>全日制本科</b></p>
                <p><b>专业：</b>数据科学与大数据技术(曙光合作)</p>
            </div>
        </div>
        <div style="display: flex; align-items: center; gap: 50px; width: 100%; max-width: 800px; flex-wrap: wrap;margin-top:20px">
            <img src="/images/about/education/CQNY.png" width="200px" style="flex-shrink: 0; display: none;" class="education-image">
            <div style="text-align: left; font-size: 18px;">
                <h3 style="font-size: 25px; font-weight: bolder; line-height: 1; margin-top: 1em;">重庆能源职业学院</h3>
                <p>
                    <a href="https://www.cqny.edu.cn/" target="_blank">学校官网</a>
                </p>
                <p><b>时间：</b>2020年9月 - 2023年7月 - <b>全日制专科</b></p>
                <p><b>专业：</b>物联网应用技术</p>
            </div>
        </div>
    </div>
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