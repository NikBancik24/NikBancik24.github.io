document.addEventListener("DOMContentLoaded", function () {
  // Переводы для разных языков
  const translations = {
    ru: {
      title: "Генератор Никнеймов",
      mode1: "Режим 1: Добавление цифр и символов к имени.",
      mode2: "Режим 2: Генерация случайного никнейма.",
      inputPlaceholder: "Введите своё имя",
      generateBtnText: "Сгенерировать никнейм",
      generateRandomBtnText: "Сгенерировать случайный никнейм",
      copyNotification: "Никнейм успешно скопирован!",
    },
    en: {
      title: "Nickname Generator",
      mode1: "Mode 1: Add numbers and symbols to name.",
      mode2: "Mode 2: Generate random nickname.",
      inputPlaceholder: "Enter your name",
      generateBtnText: "Generate nickname",
      generateRandomBtnText: "Generate random nickname",
      copyNotification: "Nickname copied successfully!",
    },
  };

  const langEnButton = document.getElementById("langEn");
  const langRuButton = document.getElementById("langRu");

  // Функция для смены языка
  function setLanguage(lang) {
    const title = document.querySelector("h2");
    const modeDescription = document.getElementById("modeDescription");
    const nameInput = document.getElementById("nameInput");
    const generateBtn = document.getElementById("generateBtn");
    const generateRandomBtn = document.getElementById("generateRandomBtn");

    title.textContent = translations[lang].title;
    modeDescription.textContent = translations[lang].mode1;
    nameInput.placeholder = translations[lang].inputPlaceholder;
    generateBtn.textContent = translations[lang].generateBtnText;
    generateRandomBtn.textContent = translations[lang].generateRandomBtnText;
  }

  // Установить язык по умолчанию (например, русский)
  let currentLanguage = "ru";
  setLanguage(currentLanguage);

  // Переключение на русский язык
  langRuButton.addEventListener("click", function () {
    currentLanguage = "ru";
    setLanguage(currentLanguage);
  });

  // Переключение на английский язык
  langEnButton.addEventListener("click", function () {
    currentLanguage = "en";
    setLanguage(currentLanguage);
  });

  const modeSwitch = document.querySelector('input[type="checkbox"]');
  const mode1 = document.getElementById("mode1");
  const mode2 = document.getElementById("mode2");
  const modeDescription = document.getElementById("modeDescription");
  const generateBtn = document.getElementById("generateBtn");
  const generateRandomBtn = document.getElementById("generateRandomBtn");
  const generatedNickname = document.getElementById("generatedNickname");
  const generatedRandomNickname = document.getElementById(
    "generatedRandomNickname"
  );
  const copyNotification = document.getElementById("copyNotification");
  const nameInput = document.getElementById("nameInput");

  // Переключение режимов
  modeSwitch.addEventListener("change", function () {
    if (modeSwitch.checked) {
      mode1.classList.remove("active");
      mode2.classList.add("active");
      modeDescription.textContent = translations[currentLanguage].mode2;
    } else {
      mode2.classList.remove("active");
      mode1.classList.add("active");
      modeDescription.textContent = translations[currentLanguage].mode1;
    }
  });

  // По умолчанию включаем режим 1
  mode1.classList.add("active");

  generateBtn.addEventListener("click", function () {
    const name = nameInput.value.trim();
    if (name) {
      let nickname = name;
      nickname = nickname.replace(/[a-zA-Zа-яА-ЯёЁ]/g, function (match) {
        return Math.random() < 0.3 ? Math.floor(Math.random() * 10) : match;
      });
      nickname += Math.floor(Math.random() * 100);
      generatedNickname.textContent = nickname;
    }
  });

  generateRandomBtn.addEventListener("click", function () {
    const randomNickname = "User" + Math.floor(Math.random() * 10000);
    generatedRandomNickname.textContent = randomNickname;
  });

  // Функция для копирования текста
  function copyToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    showCopyNotification();
  }

  // Функция для отображения уведомления
  function showCopyNotification() {
    copyNotification.classList.add("show");
    setTimeout(function () {
      copyNotification.classList.remove("show");
    }, 2000);
  }

  // Слушаем клик по никнейму для его копирования
  generatedNickname.addEventListener("click", function () {
    if (generatedNickname.textContent) {
      copyToClipboard(generatedNickname.textContent);
    }
  });

  generatedRandomNickname.addEventListener("click", function () {
    if (generatedRandomNickname.textContent) {
      copyToClipboard(generatedRandomNickname.textContent);
    }
  });
});
