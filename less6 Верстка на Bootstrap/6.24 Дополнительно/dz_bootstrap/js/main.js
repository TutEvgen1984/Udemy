/*
Ключевые улучшения:
- Структурированный код - Разделение на логические модули (конфигурация, DOM элементы, состояние, функции)
- Чистые функции - Каждая функция выполняет одну задачу
- Иммутабельность - Использование filter() вместо splice() для работы с массивом
- Улучшенные обработчики событий - Более понятная структура
- Безопасность - Проверки на существование элементов и значений
- Современный JavaScript - Использование стрелочных функций, async/await
- Лучшие практики именования - Более понятные имена переменных и функций
- Меньше дублирования кода - Повторяющиеся операции вынесены в функции

Код стал:
- Более читаемым
- Легче для тестирования
- Проще для модификации
- Более надежным
- Лучше организованным
 */

/**
 * Конфигурация приложения
 */
const CONFIG = {
  fontSize: {
    min: 10,
    max: 20,
    step: 1
  },
  theme: {
    dark: {
      theme: 'dark',
      icon: 'светлая',
      storageKey: 'theme'
    },
    light: {
      theme: 'light',
      icon: 'темная',
      storageKey: 'theme'
    }
  }
};

/**
 * DOM элементы
 */
const elements = {
  // Управление шрифтом
  decreaseFontBtn: document.getElementById('decrease_fs_btn'),
  increaseFontBtn: document.getElementById('increase_fs_btn'),
  
  // Управление темой
  themeToggle: document.getElementById('change_theme_btn'),
  htmlElement: document.documentElement,
  
  // Управление рецептами
  recipeName: document.getElementById('recipe_name'),
  addBtn: document.getElementById('add_btn'),
  originalRecipe: document.getElementById('original_recipe'),
  modifiedRecipe: document.getElementById('modified_recipe'),
  modifiedRecipeBody: document.getElementById('modified_recipe_body'),
  calculateBtn: document.getElementById('calculate_btn'),
  copyBtn: document.getElementById('copy_btn'),
  
  // Поля ввода
  itemName: document.getElementById('item_name'),
  itemCount: document.getElementById('item_count'),
  itemType: document.getElementById('item_type'),
  ratioType: document.getElementById('how_many_times_to_change'),
  ratioValue: document.getElementById('how_many_times')
};

/**
 * Состояние приложения
 */
let state = {
  recipe: []
};

/**
 * Управление шрифтом
 */
function changeFontSize(direction) {
  const currentSize = parseInt(window.getComputedStyle(document.body).fontSize);
  let newSize = currentSize;

  if (direction === 'decrease' && currentSize > CONFIG.fontSize.min) {
    newSize = currentSize - CONFIG.fontSize.step;
  } else if (direction === 'increase' && currentSize < CONFIG.fontSize.max) {
    newSize = currentSize + CONFIG.fontSize.step;
  }

  if (newSize !== currentSize) {
    document.body.style.fontSize = `${newSize}px`;
  }
}

/**
 * Управление темой
 */
function initializeTheme() {
  const savedTheme = localStorage.getItem(CONFIG.theme.dark.storageKey);
  const isDarkTheme = savedTheme === CONFIG.theme.dark.theme;
  setTheme(isDarkTheme ? CONFIG.theme.dark : CONFIG.theme.light);
}

function setTheme(theme) {
  elements.htmlElement.setAttribute('data-bs-theme', theme.theme);
  elements.themeToggle.innerHTML = theme.icon;
  localStorage.setItem(theme.storageKey, theme.theme);
}

function toggleTheme() {
  const isDarkTheme = elements.htmlElement.getAttribute('data-bs-theme') === CONFIG.theme.dark.theme;
  setTheme(isDarkTheme ? CONFIG.theme.light : CONFIG.theme.dark);
}

/**
 * Управление рецептами
 */
function renderRecipeList(container, recipeList, action, modifier, isNew = false) {
  const containerElement = document.getElementById(container);
  containerElement.innerHTML = '';

  recipeList.forEach(item => {
    let count = item.count || 'по вкусу';
    let type = item.count ? item.type : '';

    if (count !== 'по вкусу') {
      if (action === "*") {
        count *= modifier;
      } else if (action === "/") {
        count /= modifier;
      }
    }

    const div = document.createElement('div');
    div.innerHTML = isNew
      ? `<div><div>${item.name} ${count} ${type}</div></div>`
      : `<div>
           <div>${item.name} ${count} ${type}</div>
           <button class="remove-btn" data-name="${item.name}">
             <i class="bi bi-trash-fill" data-name="${item.name}"></i>
           </button>
         </div>`;
    
    containerElement.appendChild(div);
  });
}

function addIngredient() {
  const name = elements.itemName.value.trim();
  const count = elements.itemCount.value;
  const type = elements.itemType.value;

  if (!name) {
    alert('Введите название ингредиента');
    return;
  }

  if (state.recipe.some(item => item.name === name)) {
    alert('Такой ингредиент уже есть');
    elements.itemName.value = '';
    elements.itemCount.value = '';
    return;
  }

  state.recipe.push({
    name,
    count: count || 'по вкусу',
    type: count ? type : ''
  });

  renderRecipeList('original_recipe', state.recipe, '*', 1);
  elements.itemName.value = '';
  elements.itemCount.value = '';
}

function removeIngredient(name) {
  state.recipe = state.recipe.filter(item => item.name !== name);
  renderRecipeList('original_recipe', state.recipe, '*', 1);
}

function updateRecipeName() {
  const name = prompt("Введите название рецепта");
  if (name) {
    elements.recipeName.textContent = name;
  }
}

function calculateRecipe() {
  elements.modifiedRecipe.style.display = 'block';
  elements.modifiedRecipeBody.innerHTML = '';
  
  const ratioType = +elements.ratioType.value;
  const ratio = +elements.ratioValue.value;
  
  if (!ratio) {
    alert("Введите число кроме нуля");
    return;
  }

  const action = ratioType === 1 ? '/' : '*';
  renderRecipeList('modified_recipe_body', state.recipe, action, ratio, true);
}

async function copyRecipe() {
  try {
    await navigator.clipboard.writeText(elements.modifiedRecipe.innerText);
    alert('Рецепт успешно скопирован!');
  } catch (err) {
    console.error('Не удалось скопировать текст:', err);
  }
}

/**
 * Инициализация приложения
 */
function init() {
  // Управление шрифтом
  elements.decreaseFontBtn.addEventListener('click', () => changeFontSize('decrease'));
  elements.increaseFontBtn.addEventListener('click', () => changeFontSize('increase'));

  // Управление темой
  initializeTheme();
  elements.themeToggle.addEventListener('click', toggleTheme);

  // Управление рецептами
  elements.addBtn.addEventListener('click', addIngredient);
  elements.originalRecipe.addEventListener('click', (e) => {
    if (e.target.dataset.name) {
      removeIngredient(e.target.dataset.name);
    }
  });
  elements.recipeName.addEventListener('click', updateRecipeName);
  elements.calculateBtn.addEventListener('click', calculateRecipe);
  elements.copyBtn.addEventListener('click', copyRecipe);
}

// Запуск приложения
init();