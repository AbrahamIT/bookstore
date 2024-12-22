document.addEventListener("DOMContentLoaded", () => {

    // Добавляем шрифты из Google Fonts

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:wght@400;500&display=swap';
    document.head.appendChild(link);

  // Массив данных о книгах
  const books = [
      { title: "Собачье сердце", author: "Михаил Булгаков", genre: "Классика", price: 500 },
      { title: "Война и мир", author: "Лев Толстой", genre: "Роман", price: 700 },
      { title: "Преступление и наказание", author: "Фёдор Достоевский", genre: "Классика", price: 600 },
      { title: "Дюна", author: "Фрэнк Герберт", genre: "Фантастика", price: 800 },
      { title: "451 градус по Фаренгейту", author: "Рэй Брэдбери", genre: "Фантастика", price: 450 },
  ];
 

  // Добавляем стили через JavaScript
  const style = document.createElement("style");
  style.textContent = `
      body {
          font-family: "Roboto", sans-serif;
          background-color: #fdf7e3;
          margin: 0;
          padding: 0;
          color: #333;
          line-height: 1.6;
      }
      header {
          background: linear-gradient(90deg, #8B4513, #5C2D2D);
          color: white;
          padding: 15px 0;
          text-align: center;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
          position: sticky;
          top: 0;
          z-index: 1000;
      }
      header .logo {
          font-family: "Playfair Display", serif;
          font-size: 1.8em;
          margin: 0;
      }
      .nav-list {
          list-style: none;
          padding: 0;
          margin: 10px 0 0;
          display: flex;
          justify-content: center;
          gap: 20px;
      }
      .nav-list li {
          display: inline;
      }
      .nav-list a {
          text-decoration: none;
          color: #FDF7E3;
          font-weight: 500;
          font-size: 1em;
          transition: all 0.3s ease;
      }
      .nav-list a.active, .nav-list a:hover {
          font-size: 1.1em;
          color: #FFD700;
          text-shadow: 0 0 5px #FFD700;
      }
      .container {
          max-width: 800px;
          margin: 20px auto;
          padding: 20px;
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      }
      .filter {
          margin-bottom: 20px;
          display: flex;
          gap: 10px;
          align-items: center;
      }
      .filter select {
          padding: 5px;
          font-size: 1em;
      }
      .book-card {
          border: 1px solid #ccc;
          padding: 15px;
          margin-bottom: 15px;
          border-radius: 5px;
          box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
      }
      .book-card h3 {
          margin: 0;
          color: #8B4513;
      }
      .book-card p {
          margin: 5px 0;
      }
      footer {
          background: #8B4513;
          color: white;
          text-align: center;
          padding: 10px 0;
          position: fixed;
          bottom: 0;
          width: 100%;
      }
  `;
  document.head.appendChild(style);
  
  // Создаём шапку
  const header = document.createElement("header");
  header.innerHTML = `
      <div class="logo">Книжный Магазин</div>
      <nav>
          <ul class="nav-list">
              <li><a href="index.html">Главная</a></li>
              <li><a href="catalog.html">Каталог</a></li>
              <li><a href="recomendations.html" class="active">Рекомендации</a></li>
          </ul>
      </nav>
  `;
  document.body.appendChild(header);

  // Создаём основной контейнер
  const container = document.createElement("div");
  container.classList.add("container");
  document.body.appendChild(container);

  // Добавляем фильтр
  const filterBlock = document.createElement("div");
  filterBlock.classList.add("filter");
  filterBlock.innerHTML = `
      <label for="genre-select">Выберите жанр:</label>
      <select id="genre-select">
          <option value="all">Все</option>
          <option value="Классика">Классика</option>
          <option value="Роман">Роман</option>
          <option value="Фантастика">Фантастика</option>
      </select>
  `;
  container.appendChild(filterBlock);

  // Контейнер для книг
  const booksContainer = document.createElement("div");
  booksContainer.id = "books-container";
  container.appendChild(booksContainer);

  // Функция для отображения книг
  function displayBooks(filteredBooks) {
      booksContainer.innerHTML = "";
      filteredBooks.forEach(book => {
          const bookCard = document.createElement("div");
          bookCard.classList.add("book-card");
          bookCard.innerHTML = `
              <h3>${book.title}</h3>
              <p><strong>Автор:</strong> ${book.author}</p>
              <p><strong>Жанр:</strong> ${book.genre}</p>
              <p><strong>Цена:</strong> ${book.price} руб.</p>
          `;
          booksContainer.appendChild(bookCard);
      });
  }

  // Отображаем все книги по умолчанию
  displayBooks(books);

  // Фильтрация книг
  document.getElementById("genre-select").addEventListener("change", (event) => {
      const selectedGenre = event.target.value;
      if (selectedGenre === "all") {
          displayBooks(books);
      } else {
          const filteredBooks = books.filter(book => book.genre === selectedGenre);
          displayBooks(filteredBooks);
      }
  });

});
