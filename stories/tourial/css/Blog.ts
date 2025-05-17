export const createBlogElement = (): HTMLElement => {
  const container = document.createElement('div');
  container.innerHTML = `
    <div class="blog-container">
      <!-- 头部区域 -->
      <header class="header">
        <div class="logo">我的博客</div>
        <nav class="main-nav">
          <a href="#" class="active">首页</a>
          <a href="#">文章</a>
          <a href="#">分类</a>
          <a href="#">关于</a>
        </nav>
        <div class="user-actions">
          <button class="search-btn">搜索</button>
          <button class="login-btn">登录</button>
        </div>
      </header>

      <!-- 主要内容区域 -->
      <div class="main-content">
        <!-- 侧边栏 -->
        <aside class="sidebar">
          <div class="widget">
            <h3>分类</h3>
            <ul>
              <li><a href="#">技术 (15)</a></li>
              <li><a href="#">生活 (8)</a></li>
              <li><a href="#">随笔 (12)</a></li>
              <li><a href="#">项目 (5)</a></li>
            </ul>
          </div>
          <div class="widget">
            <h3>标签云</h3>
            <div class="tag-cloud">
              <span>JavaScript</span>
              <span>CSS</span>
              <span>HTML</span>
              <span>React</span>
              <span>Vue</span>
            </div>
          </div>
        </aside>

        <!-- 文章列表 -->
        <main class="content">
          <article class="post">
            <h2>CSS Flexbox 布局详解</h2>
            <div class="post-meta">
              <span class="date">2024-03-20</span>
              <span class="author">作者：张三</span>
            </div>
            <p>Flexbox 是一种强大的布局方式，它能够帮助我们创建响应式的页面布局...</p>
            <a href="#" class="read-more">阅读更多</a>
          </article>

          <article class="post">
            <h2>Grid 布局入门指南</h2>
            <div class="post-meta">
              <span class="date">2024-03-19</span>
              <span class="author">作者：李四</span>
            </div>
            <p>Grid 布局是 CSS 中最强大的布局系统之一，它能够创建复杂的二维布局...</p>
            <a href="#" class="read-more">阅读更多</a>
          </article>
        </main>
      </div>

      <!-- 底部区域 -->
      <footer class="footer">
        <div class="footer-content">
          <div class="footer-section">
            <h4>关于我们</h4>
            <p>这是一个专注于前端技术的博客网站，分享最新的Web开发知识。</p>
          </div>
          <div class="footer-section">
            <h4>联系方式</h4>
            <p>邮箱：contact@example.com</p>
            <p>微信：webdev123</p>
          </div>
          <div class="footer-section">
            <h4>关注我们</h4>
            <div class="social-links">
              <a href="#">GitHub</a>
              <a href="#">微博</a>
              <a href="#">知乎</a>
            </div>
          </div>
        </div>
        <div class="copyright">
          © 2024 我的博客. All rights reserved.
        </div>
      </footer>
    </div>
  `;

  // 添加样式
  const style = document.createElement('style');
  style.textContent = `
    .blog-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    /* 头部样式 */
    .header {
      background-color: #fff;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      color: #333;
    }

    .main-nav {
      display: flex;
      gap: 2rem;
    }

    .main-nav a {
      color: #666;
      text-decoration: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      transition: all 0.3s ease;
    }

    .main-nav a:hover,
    .main-nav a.active {
      color: #4a90e2;
      background-color: #f5f5f5;
    }

    .user-actions {
      display: flex;
      gap: 1rem;
    }

    .user-actions button {
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .search-btn {
      background-color: #f5f5f5;
      color: #666;
    }

    .login-btn {
      background-color: #4a90e2;
      color: white;
    }

    /* 主要内容区域样式 */
    .main-content {
      flex: 1;
      display: flex;
      gap: 2rem;
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
      width: 100%;
    }

    /* 侧边栏样式 */
    .sidebar {
      width: 250px;
      flex-shrink: 0;
    }

    .widget {
      background-color: #fff;
      border-radius: 8px;
      padding: 1.5rem;
      margin-bottom: 2rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .widget h3 {
      margin: 0 0 1rem 0;
      color: #333;
      font-size: 1.2rem;
    }

    .widget ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .widget ul li {
      margin-bottom: 0.5rem;
    }

    .widget ul li a {
      color: #666;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .widget ul li a:hover {
      color: #4a90e2;
    }

    .tag-cloud {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .tag-cloud span {
      background-color: #f5f5f5;
      padding: 0.3rem 0.8rem;
      border-radius: 20px;
      font-size: 0.9rem;
      color: #666;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .tag-cloud span:hover {
      background-color: #4a90e2;
      color: white;
    }

    /* 内容区域样式 */
    .content {
      flex: 1;
    }

    .post {
      background-color: #fff;
      border-radius: 8px;
      padding: 2rem;
      margin-bottom: 2rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .post h2 {
      margin: 0 0 1rem 0;
      color: #333;
    }

    .post-meta {
      color: #666;
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }

    .post-meta span {
      margin-right: 1rem;
    }

    .read-more {
      display: inline-block;
      color: #4a90e2;
      text-decoration: none;
      margin-top: 1rem;
      font-weight: 500;
    }

    .read-more:hover {
      text-decoration: underline;
    }

    /* 底部样式 */
    .footer {
      background-color: #333;
      color: #fff;
      padding: 3rem 2rem 1rem;
    }

    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .footer-section {
      flex: 1;
    }

    .footer-section h4 {
      margin: 0 0 1rem 0;
      color: #fff;
    }

    .footer-section p {
      color: #ccc;
      margin: 0.5rem 0;
    }

    .social-links {
      display: flex;
      gap: 1rem;
    }

    .social-links a {
      color: #ccc;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .social-links a:hover {
      color: #fff;
    }

    .copyright {
      text-align: center;
      padding-top: 2rem;
      border-top: 1px solid #444;
      color: #ccc;
    }
  `;

  container.appendChild(style);
  return container;
}; 