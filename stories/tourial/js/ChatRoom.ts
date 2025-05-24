export const createChatRoomElement = (): HTMLElement => {
  const container = document.createElement('div');
  container.innerHTML = `
    <div class="page-container">
      <!-- 头部区域 -->
      <header class="header">
        <div class="logo">聊天室</div>
        <nav class="main-nav">
          <a href="#" class="active">首页</a>
          <a href="#">消息</a>
          <a href="#">联系人</a>
          <a href="#">设置</a>
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
          <div class="user-profile">
            <div class="avatar">E</div>
            <div class="user-info">
              <div class="username">Eve</div>
              <div class="status online">在线</div>
            </div>
          </div>
          
          <div class="sidebar-section">
            <h3>最近联系人</h3>
            <div class="contact-list">
              <div class="contact-item active">
                <div class="contact-avatar">A</div>
                <div class="contact-info">
                  <div class="contact-name">Alice</div>
                  <div class="contact-status">在线</div>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-avatar">B</div>
                <div class="contact-info">
                  <div class="contact-name">Bob</div>
                  <div class="contact-status">离线</div>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-avatar">C</div>
                <div class="contact-info">
                  <div class="contact-name">Charlie</div>
                  <div class="contact-status">在线</div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <!-- 聊天区域 -->
        <main class="chat-container">
          <div class="chat-header">
            <h2>Alice</h2>
            <div class="chat-actions">
              <button class="video-call">视频通话</button>
              <button class="voice-call">语音通话</button>
            </div>
          </div>
          
          <div class="chat-messages">
            <div class="message received">
              <div class="message-avatar">A</div>
              <div class="message-content">
                <div class="message-sender">Alice</div>
                <div class="message-text">你好！今天天气真不错！</div>
                <div class="message-time">10:30</div>
              </div>
            </div>
            
            <div class="message sent">
              <div class="message-content">
                <div class="message-text">是啊，阳光明媚！</div>
                <div class="message-time">10:31</div>
              </div>
              <div class="message-avatar">E</div>
            </div>
            
            <div class="message received">
              <div class="message-avatar">A</div>
              <div class="message-content">
                <div class="message-sender">Alice</div>
                <div class="message-text">要不要一起去公园？</div>
                <div class="message-time">10:32</div>
              </div>
            </div>
          </div>
          
          <div class="chat-input">
            <input type="text" placeholder="输入消息...">
            <button>发送</button>
          </div>
        </main>
      </div>

      <!-- 底部区域 -->
      <footer class="footer">
        <div class="footer-content">
          <div class="footer-section">
            <h4>关于我们</h4>
            <p>这是一个简单的聊天室示例</p>
          </div>
          <div class="footer-section">
            <h4>联系方式</h4>
            <p>邮箱：contact@example.com</p>
          </div>
          <div class="footer-section">
            <h4>关注我们</h4>
            <div class="social-links">
              <a href="#">微信</a>
              <a href="#">微博</a>
              <a href="#">GitHub</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2024 聊天室示例. All rights reserved.</p>
        </div>
      </footer>
    </div>
  `;

  // 添加样式
  const style = document.createElement('style');
  style.textContent = `
    .page-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    /* 头部样式 */
    .header {
      background-color: #4a90e2;
      color: white;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .logo {
      font-size: 1.5rem;
      font-weight: bold;
    }

    .main-nav {
      display: flex;
      gap: 2rem;
    }

    .main-nav a {
      color: white;
      text-decoration: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      transition: background-color 0.3s;
    }

    .main-nav a:hover,
    .main-nav a.active {
      background-color: rgba(255, 255, 255, 0.1);
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
      transition: background-color 0.3s;
    }

    .search-btn {
      background-color: rgba(255, 255, 255, 0.1);
      color: white;
    }

    .login-btn {
      background-color: white;
      color: #4a90e2;
    }

    /* 主要内容区域样式 */
    .main-content {
      flex: 1;
      display: flex;
      background-color: #f5f5f5;
    }

    /* 侧边栏样式 */
    .sidebar {
      width: 280px;
      background-color: white;
      border-right: 1px solid #eee;
      padding: 1rem;
    }

    .user-profile {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      border-bottom: 1px solid #eee;
    }

    .avatar {
      width: 40px;
      height: 40px;
      background-color: #4a90e2;
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
    }

    .user-info {
      flex: 1;
    }

    .username {
      font-weight: bold;
    }

    .status {
      font-size: 0.9rem;
      color: #666;
    }

    .status.online::before {
      content: "";
      display: inline-block;
      width: 8px;
      height: 8px;
      background-color: #2ecc71;
      border-radius: 50%;
      margin-right: 5px;
    }

    .sidebar-section {
      margin-top: 1rem;
    }

    .sidebar-section h3 {
      color: #666;
      font-size: 0.9rem;
      margin-bottom: 0.5rem;
    }

    .contact-list {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .contact-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .contact-item:hover,
    .contact-item.active {
      background-color: #f5f5f5;
    }

    .contact-avatar {
      width: 32px;
      height: 32px;
      background-color: #4a90e2;
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
    }

    .contact-info {
      flex: 1;
    }

    .contact-name {
      font-weight: 500;
    }

    .contact-status {
      font-size: 0.8rem;
      color: #666;
    }

    /* 聊天区域样式 */
    .chat-container {
      flex: 1;
      display: flex;
      flex-direction: column;
      background-color: white;
    }

    .chat-header {
      background-color: #f8f9fa;
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #eee;
    }

    .chat-header h2 {
      margin: 0;
    }

    .chat-actions {
      display: flex;
      gap: 0.5rem;
    }

    .chat-actions button {
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .video-call {
      background-color: #4a90e2;
      color: white;
    }

    .voice-call {
      background-color: #f8f9fa;
      color: #4a90e2;
    }

    .chat-messages {
      flex: 1;
      padding: 1rem;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .message {
      display: flex;
      gap: 0.5rem;
      max-width: 80%;
    }

    .message.received {
      align-self: flex-start;
    }

    .message.sent {
      align-self: flex-end;
      flex-direction: row-reverse;
    }

    .message-avatar {
      width: 32px;
      height: 32px;
      background-color: #4a90e2;
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
    }

    .message-content {
      background-color: #f8f9fa;
      padding: 0.5rem 1rem;
      border-radius: 8px;
    }

    .message.sent .message-content {
      background-color: #4a90e2;
      color: white;
    }

    .message-sender {
      font-weight: bold;
      margin-bottom: 0.25rem;
      color: #666;
    }

    .message.sent .message-sender {
      color: #fff;
    }

    .message-text {
      margin-bottom: 0.25rem;
    }

    .message-time {
      font-size: 0.8rem;
      color: #999;
      text-align: right;
    }

    .message.sent .message-time {
      color: #e0e0e0;
    }

    .chat-input {
      padding: 1rem;
      background-color: #f8f9fa;
      border-top: 1px solid #eee;
      display: flex;
      gap: 0.5rem;
    }

    .chat-input input {
      flex: 1;
      padding: 0.5rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      outline: none;
    }

    .chat-input input:focus {
      border-color: #4a90e2;
    }

    .chat-input button {
      padding: 0.5rem 1rem;
      background-color: #4a90e2;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .chat-input button:hover {
      background-color: #357abd;
    }

    .chat-input button:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }

    /* 底部区域样式 */
    .footer {
      background-color: #2c3e50;
      color: white;
      padding: 2rem 0 0;
    }

    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      padding: 0 2rem;
    }

    .footer-section {
      flex: 1;
      margin: 0 1rem;
    }

    .footer-section h4 {
      margin-bottom: 1rem;
    }

    .social-links {
      display: flex;
      gap: 1rem;
    }

    .social-links a {
      color: white;
      text-decoration: none;
    }

    .footer-bottom {
      text-align: center;
      padding: 1rem;
      margin-top: 2rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
  `;

  container.appendChild(style);

  // 获取DOM元素
  const messagesContainer = container.querySelector('.chat-messages') as HTMLElement;
  const input = container.querySelector('.chat-input input') as HTMLInputElement;
  const sendButton = container.querySelector('.chat-input button') as HTMLButtonElement;
  const contactItems = container.querySelectorAll('.contact-item');
  const chatHeader = container.querySelector('.chat-header h2') as HTMLElement;

  // 添加发送消息功能
  const sendMessage = () => {
    const message = input.value.trim();
    if (!message) return;

    // 创建新消息元素
    const messageElement = document.createElement('div');
    messageElement.className = 'message sent';
    messageElement.innerHTML = `
      <div class="message-content">
        <div class="message-text">${message}</div>
        <div class="message-time">${new Date().toLocaleTimeString()}</div>
      </div>
      <div class="message-avatar">E</div>
    `;

    // 添加到消息列表
    messagesContainer.appendChild(messageElement);

    // 清空输入框
    input.value = '';
    sendButton.disabled = true;

    // 滚动到底部
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // 模拟回复
    setTimeout(() => {
      const replyElement = document.createElement('div');
      replyElement.className = 'message received';
      replyElement.innerHTML = `
        <div class="message-avatar">A</div>
        <div class="message-content">
          <div class="message-sender">Alice</div>
          <div class="message-text">收到你的消息了！</div>
          <div class="message-time">${new Date().toLocaleTimeString()}</div>
        </div>
      `;
      messagesContainer.appendChild(replyElement);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 1000);
  };

  // 绑定发送消息事件
  sendButton.onclick = sendMessage;
  input.onkeypress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  // 添加输入验证
  input.oninput = () => {
    sendButton.disabled = !input.value.trim();
  };

  // 添加联系人点击事件
  contactItems.forEach(item => {
    item.addEventListener('click', () => {
      // 移除其他联系人的active类
      contactItems.forEach(i => i.classList.remove('active'));
      // 添加当前联系人的active类
      item.classList.add('active');
      // 更新聊天头部显示的联系人名称
      const contactName = item.querySelector('.contact-name')?.textContent || '';
      chatHeader.textContent = contactName;
    });
  });

  // 添加导航链接点击事件
  const navLinks = container.querySelectorAll('.main-nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  return container;
}; 
