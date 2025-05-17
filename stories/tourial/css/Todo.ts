export const createTodoElement = (): HTMLElement => {
  const container = document.createElement('div');
  container.innerHTML = `
    <div class="todo-app">
      <div class="todo-header">
        <h1>我的待办事项</h1>
        <div class="todo-stats">
          <div class="stat">
            <span class="stat-value">3</span>
            <span class="stat-label">待完成</span>
          </div>
          <div class="stat">
            <span class="stat-value">2</span>
            <span class="stat-label">已完成</span>
          </div>
        </div>
      </div>

      <div class="todo-input">
        <input type="text" placeholder="添加新的待办事项...">
        <button class="add-btn">添加</button>
      </div>

      <div class="todo-filters">
        <button class="filter-btn active">全部</button>
        <button class="filter-btn">待完成</button>
        <button class="filter-btn">已完成</button>
      </div>

      <div class="todo-list">
        <div class="todo-item">
          <input type="checkbox" id="todo1">
          <label for="todo1" class="todo-text">学习CSS Flexbox布局</label>
          <div class="todo-actions">
            <button class="edit-btn">编辑</button>
            <button class="delete-btn">删除</button>
          </div>
        </div>

        <div class="todo-item">
          <input type="checkbox" id="todo2">
          <label for="todo2" class="todo-text">完成JavaScript作业</label>
          <div class="todo-actions">
            <button class="edit-btn">编辑</button>
            <button class="delete-btn">删除</button>
          </div>
        </div>

        <div class="todo-item completed">
          <input type="checkbox" id="todo3" checked>
          <label for="todo3" class="todo-text">复习HTML基础</label>
          <div class="todo-actions">
            <button class="edit-btn">编辑</button>
            <button class="delete-btn">删除</button>
          </div>
        </div>

        <div class="todo-item completed">
          <input type="checkbox" id="todo4" checked>
          <label for="todo4" class="todo-text">准备下周的演讲</label>
          <div class="todo-actions">
            <button class="edit-btn">编辑</button>
            <button class="delete-btn">删除</button>
          </div>
        </div>

        <div class="todo-item">
          <input type="checkbox" id="todo5">
          <label for="todo5" class="todo-text">阅读技术博客</label>
          <div class="todo-actions">
            <button class="edit-btn">编辑</button>
            <button class="delete-btn">删除</button>
          </div>
        </div>
      </div>
    </div>
  `;

  // 添加样式
  const style = document.createElement('style');
  style.textContent = `
    .todo-app {
      max-width: 600px;
      margin: 2rem auto;
      background-color: #fff;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      padding: 2rem;
    }

    .todo-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
    }

    .todo-header h1 {
      margin: 0;
      color: #2c3e50;
      font-size: 1.8rem;
    }

    .todo-stats {
      display: flex;
      gap: 1.5rem;
    }

    .stat {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .stat-value {
      font-size: 1.5rem;
      font-weight: bold;
      color: #3498db;
    }

    .stat-label {
      font-size: 0.9rem;
      color: #7f8c8d;
    }

    .todo-input {
      display: flex;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }

    .todo-input input {
      flex: 1;
      padding: 0.8rem;
      border: 2px solid #e0e0e0;
      border-radius: 6px;
      font-size: 1rem;
      transition: border-color 0.3s ease;
    }

    .todo-input input:focus {
      outline: none;
      border-color: #3498db;
    }

    .add-btn {
      padding: 0.8rem 1.5rem;
      background-color: #3498db;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 1rem;
      transition: background-color 0.3s ease;
    }

    .add-btn:hover {
      background-color: #2980b9;
    }

    .todo-filters {
      display: flex;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }

    .filter-btn {
      padding: 0.5rem 1rem;
      background-color: #f5f5f5;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      color: #666;
      transition: all 0.3s ease;
    }

    .filter-btn:hover,
    .filter-btn.active {
      background-color: #3498db;
      color: white;
    }

    .todo-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .todo-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      background-color: #f8f9fa;
      border-radius: 6px;
      transition: all 0.3s ease;
    }

    .todo-item:hover {
      transform: translateX(5px);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .todo-item.completed .todo-text {
      text-decoration: line-through;
      color: #95a5a6;
    }

    .todo-item input[type="checkbox"] {
      width: 20px;
      height: 20px;
      cursor: pointer;
    }

    .todo-text {
      flex: 1;
      font-size: 1rem;
      color: #2c3e50;
      cursor: pointer;
    }

    .todo-actions {
      display: flex;
      gap: 0.5rem;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .todo-item:hover .todo-actions {
      opacity: 1;
    }

    .edit-btn,
    .delete-btn {
      padding: 0.4rem 0.8rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 0.9rem;
      transition: all 0.3s ease;
    }

    .edit-btn {
      background-color: #f1c40f;
      color: #fff;
    }

    .edit-btn:hover {
      background-color: #f39c12;
    }

    .delete-btn {
      background-color: #e74c3c;
      color: #fff;
    }

    .delete-btn:hover {
      background-color: #c0392b;
    }
  `;

  container.appendChild(style);
  return container;
}; 