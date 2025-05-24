export function createChatElement() {
  const container = document.createElement('div');
  container.className = 'chat-container';

  // 创建头部
  const header = document.createElement('header');
  header.innerHTML = `
    <div class="logo">聊天室</div>
    <nav class="main-nav">
      <a href="#">首页</a>
      <a href="#">消息</a>
      <a href="#">联系人</a>
      <a href="#">设置</a>
    </nav>
    <div class="user-actions">
      <button>搜索</button>
      <button>登录</button>
    </div>
  `;
  container.appendChild(header);

  // 创建主内容区域
  const mainContent = document.createElement('div');
  mainContent.className = 'main-content';

  // 创建侧边栏
  const sidebar = document.createElement('aside');
  sidebar.className = 'sidebar';
  sidebar.innerHTML = `
    <div class="user-info">
      <div class="avatar">U</div>
      <div class="user-details">
        <div class="username">用户名</div>
        <div class="status">在线</div>
      </div>
    </div>
    <div class="contacts">
      <h3>最近联系人</h3>
      <div class="contact-list">
        <div class="contact-item">
          <div class="avatar">A</div>
          <div class="contact-info">
            <div class="name">Alice</div>
            <div class="last-message">你好！</div>
          </div>
        </div>
        <div class="contact-item">
          <div class="avatar">B</div>
          <div class="contact-info">
            <div class="name">Bob</div>
            <div class="last-message">在吗？</div>
          </div>
        </div>
      </div>
    </div>
  `;
  mainContent.appendChild(sidebar);

  // 创建聊天区域
  const chatArea = document.createElement('main');
  chatArea.className = 'chat-area';
  chatArea.innerHTML = `
    <div class="chat-header">
      <h2>Alice</h2>
      <div class="chat-actions">
        <button>视频通话</button>
        <button>语音通话</button>
      </div>
    </div>
    <div class="messages">
      <div class="message received">
        <div class="message-content">
          <div class="message-text">你好！</div>
          <div class="message-time">10:00</div>
        </div>
      </div>
      <div class="message sent">
        <div class="message-content">
          <div class="message-text">你好！最近怎么样？</div>
          <div class="message-time">10:01</div>
        </div>
      </div>
    </div>
    <div class="chat-input">
      <input type="text" placeholder="输入消息...">
      <button>发送</button>
    </div>
  `;
  mainContent.appendChild(chatArea);
  container.appendChild(mainContent);

  // 创建底部
  const footer = document.createElement('footer');
  footer.innerHTML = `
    <div class="footer-content">
      <div class="footer-section">
        <h4>关于我们</h4>
        <p>这是一个示例聊天室</p>
      </div>
      <div class="footer-section">
        <h4>联系方式</h4>
        <p>邮箱：example@example.com</p>
      </div>
      <div class="footer-section">
        <h4>关注我们</h4>
        <div class="social-links">
          <a href="#">微信</a>
          <a href="#">微博</a>
          <a href="#">QQ</a>
        </div>
      </div>
    </div>
    <div class="copyright">
      © 2024 聊天室示例. All rights reserved.
    </div>
  `;
  container.appendChild(footer);

  return container;
} 