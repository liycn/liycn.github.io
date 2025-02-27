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