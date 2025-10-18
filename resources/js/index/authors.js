// Список авторов с их аватарами
const authors = {
  "Анастасия Меркоева": "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg",
  "Добрыня Митин": "https://img.freepik.com/free-photo/cartoon-character-with-yellow-jacket-sunglasses_71767-101.jpg",
  "Валерий Подрядный": "https://img.freepik.com/premium-photo/cheerful-cartoon-girl-with-braids-sunglasses-backpack_1410957-56764.jpg",
  "Кристина Ожова": "https://img.freepik.com/premium-photo/smiling-cartoon-man-with-glasses_1410957-103401.jpg",
  "Иван Петров": "https://img.freepik.com/premium-photo/smiling-cartoon-man-with-glasses_1410957-103408.jpg",
  "Яков Многолетний": "https://res.cloudinary.com/duhygs5ck/image/upload/f_auto,q_auto/v1740646396/avatar4.jpg",
};

// Функция для получения аватара автора
function getAuthorAvatar(authorName) {
  return authors[authorName] || "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100205.jpg"; // аватар по умолчанию
}

// Инициализация аватаров после загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
  const authorElements = document.querySelectorAll('.author-info');
  
  authorElements.forEach(element => {
    const authorName = element.dataset.author;
    const avatarUrl = getAuthorAvatar(authorName);
    
    // Создаем элемент аватара
    const avatar = document.createElement('img');
    avatar.src = avatarUrl;
    avatar.alt = `${authorName} avatar`;
    avatar.className = 'w-8 h-8 rounded-full object-cover flex-shrink-0 mr-2';
    
    // Вставляем аватар в начало элемента
    element.insertBefore(avatar, element.firstChild);
  });
});