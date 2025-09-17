// 🔹 Дані для кожної лабораторної
        const labData = {
            lab_1: {
                theme_and_purpose: "Тема: ТЕГИ ТА АТРИБУТИ HTML-ДОКУМЕНТА. СТРУКТУРНА РОЗМІТКА. GIT.GITHUB. РОБОТА З РЕПОЗИТОРІЯМИ. ОПИС ЛОГІКИ ВЛАСНОГО WEB-ЗАСТОСУНКУ.<br><br>Мета: придбати практичні навички роботи  з GitHub, репозиторіями, HTML-документом, таблицями, , зображеннями, посиланнями, списками, формами Створити шаблон звітного HTML-документом для відображення результатів роботи всіх лабораторних робіт.",
                business_logic: `Опис предметного середовища
Предметним середовищем є веб-застосунок Essentia, що забезпечує користувачів можливістю пошуку, перегляду та створення кулінарних рецептів.
Система призначена для зручного зберігання рецептів, їхнього пошуку за категоріями та обміну між користувачами.

Основні учасники:

-Адміністратор
---здійснює вхід до системи;
---створює та публікує рецепти, які відображаються на сайті як "вбудовані";
---модерує користувацький контент (наприклад, перевірка рецептів, видалення порушень).

-Користувач
---проходить реєстрацію та авторизацію;
---шукає рецепти за ключовими словами та фільтрами (категорія, складові інгредієнти, складність, час приготування тощо);
---переглядає деталі рецепту (інгредієнти, покрокову інструкцію, автора рецепту, рейтинг);
---створює власні рецепти та публікує їх у спільному доступі;
---додає вподобані рецепти у свою особисту бібліотеку для швидкого доступу.

Основні сутності системи:
--Рецепт (назва, опис, інгредієнти, інструкція, категорія, час приготування, автор);
--Користувач (ім’я, email, пароль, роль — користувач/адміністратор);
--Бібліотека рецептів користувача (список обраних рецептів);
--Фільтри пошуку (категорії, час приготування, складність тощо).

Опис бізнес-логіки

Бізнес-логіка системи Essentia визначає правила взаємодії користувачів і адміністраторів із рецептами та функціоналом застосунку.

-----Основні сценарії бізнес-логіки:

Реєстрація та авторизація користувачів
--Користувач створює акаунт, вказуючи email та пароль.
--Для входу використовується авторизація.
--Адміністратор має окремий обліковий запис із розширеними правами.

Робота з рецептами
--Адміністратор додає "вбудовані" рецепти, які завжди доступні у системі.
--Користувач може створювати власні рецепти, які стають доступними іншим користувачам після публікації.
--Можливість редагування/видалення власних рецептів.
--Можливість перегляду повної інформації про рецепт.

Пошук і фільтрація рецептів
--Користувач вводить ключові слова або вибирає фільтри (категорія, наявність чи відсутність певних інгрідієнтів).
--Система знаходить релевантні рецепти та виводить результати.

Персональна бібліотека рецептів
--Користувач може додати будь-який рецепт (свій або чужий) до своєї бібліотеки.
--Бібліотека зберігається у профілі користувача та доступна після авторизації.

Адміністрування
--Адміністратор може видаляти або блокувати рецепти, що порушують правила.
--Адміністратор контролює загальну якість контенту.
                `,
                structure_of_document: {
                    info: "Структура документа ЛР1 складається з кількох частин: HTML, CSS I JS",
                    sub: {
                        html: `<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Essentia: Кулінарна Суть</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>

    <header class="header">
        <div class="header-content">
            <div class="logo-circle">
                <img src="../IP-31_appWEB-DanyliukArtem-FIOT-2025/img/logo.svg" alt="Логотип Essentia">
            </div>
            <div class="search-bar">
                <input type="text" placeholder="Знайти рецепт ..." aria-label="Знайти рецепт">
            </div>
            <div class="auth-buttons">
                <a href="#" class="btn">Увійти</a>
                <a href="#" class="btn register">Зареєструватися</a>
            </div>
        </div>
    </header>

    <main>
        <section class="hero-section">
            <div class="hero-text-content">
                <div class="hero-title-group">
                    <h1 class="hero-title">Essentia</h1>
                    <img src="../IP-31_appWEB-DanyliukArtem-FIOT-2025/img/logo.svg" alt="Іконка ножа і виделки">
                </div>
                <h2 class="hero-subtitle">Кожен рецепт має душу. Знайдіть її тут.</h2>
                <p class="hero-description">Essentia — це платформа для тих, хто вважає кулінарію високим мистецтвом. Відкривайте готові рецепти, створені з пристрастю, або творіть свої. Наш інтуїтивний інтерфейс дозволяє вам легко упорядковувати ваші шедеври у витончені книги, готові до друку чи цифрового збереження. Essentia перетворює ваші ідеї на вічну колекцію.</p>
            </div>
            <div class="hero-image">
                <img src="../IP-31_appWEB-DanyliukArtem-FIOT-2025/img/cake_photo.png" alt="Шоколадний торт з карамеллю" class="cake-image">
            </div>
        </section>

        <section class="proposals-section">
            <h2>Що ми пропонуємо ?</h2>
            <div class="proposals-grid">
                <div class="proposal-item">
                    <div class="proposal-number">1</div>
                    <div class="proposal-content">
                        <h3>Шукати рецепти</h3>
                        <p>Ви можете в полі пошуку знайти рецепти по ключових словах. Також буде можливість застосовувати фільтри до знайдених рецептів.</p>
                    </div>
                </div>
                <div class="proposal-item">
                    <div class="proposal-number">2</div>
                    <div class="proposal-content">
                        <h3>Створювати рецепти</h3>
                        <p>Після реєстрації ви зможете створювати власні рецепти, ставити їм статус "публічний" і інші користувачі зможуть використовувати ваші рецепти.</p>
                    </div>
                </div>
                <div class="proposal-item">
                    <div class="proposal-number">3</div>
                    <div class="proposal-content">
                        <h3>Створювати власну бібліотеку рецептів</h3>
                        <p>Після реєстрації ви зможете створювати власну бібліотеку рецептів, додати туди власні рецепти або ті, які є вільному доступі.</p>
                    </div>
                </div>
            </div>
        </section>
         <!-- Секція з популярними категоріями (списки) -->
    <section class="categories-section">
        <h2>Популярні категорії</h2>
        <p>Ми зібрали для вас як прості, так і складні рецепти. Перегляньте:</p>
        <ul>
            <li>Десерти</li>
            <li>Основні страви</li>
            <li>Супи</li>
            <li>Салати</li>
        </ul>
        <p>А також спробуйте себе у приготуванні:</p>
        <ol>
            <li>Французьких круасанів</li>
            <li>Домашньої пасти</li>
            <li>Справжнього борщу</li>
        </ol>
    </section>

    <!-- Секція з таблицею -->
    <section class="ingredients-table">
        <h2>Приклад інгредієнтів</h2>
        <p>Для прикладу наведемо таблицю інгредієнтів для шоколадного торта:</p>
        <table border="1" cellpadding="8">
            <thead>
                <tr>
                    <th>Інгредієнт</th>
                    <th>Кількість</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Борошно</td>
                    <td>250 г</td>
                </tr>
                <tr>
                    <td>Какао</td>
                    <td>50 г</td>
                </tr>
                <tr>
                    <td>Яйця</td>
                    <td>3 шт</td>
                </tr>
                <tr>
                    <td>Цукор</td>
                    <td>200 г</td>
                </tr>
            </tbody>
        </table>
    </section>

    <!-- Секція з формою -->
    <section class="feedback-form">
        <h2>Зворотний зв’язок</h2>
        <p>Маєте власний рецепт або пропозицію? Надішліть нам!</p>
        <form>
            <label for="name">Ваше ім’я:</label><br>
            <input type="text" id="name" name="name" required><br><br>

            <label for="email">Електронна пошта:</label><br>
            <input type="email" id="email" name="email" required><br><br>

            <label for="message">Ваше повідомлення:</label><br>
            <textarea id="message" name="message" rows="4" cols="40"></textarea><br><br>

            <button type="submit">Надіслати</button>
        </form>
    </section>

    <!-- Посилання на окрему сторінку з описом предметної області -->
    <section class="about-link">
        <h2>Дізнайтеся більше</h2>
        <p>Перейдіть за посиланням, щоб прочитати <a href="https://drive.google.com/file/d/1oxVIyBXexlWvmPkixZnIS6koyz0_ATun/view?usp=sharing">опис предметної області та бізнес-логіки</a> нашого проєкту.</p>
    </section>
    </main>

    <footer class="footer">
        <p>Всі права захищені</p>
    </footer>

</body>
</html>` 
,
                        css: "У цій лабораторній не передбачена робота з css-файлами",
                        js: "У цій лабораторній не передбачена робота з js-файлами"
                    }
                },
                main_web_page_link: "https://pan-tomyk1.github.io/IP-31_appWEB-DanyliukArtem-FIOT-2025/",
                code_of_main_page: "https://github.com/pan-Tomyk1/IP-31_appWEB-DanyliukArtem-FIOT-2025",
                conclusions: `У ході виконання практичної роботи №1 я ознайомився з основними тегами та атрибутами HTML-документа, правилами структурної розмітки веб-сторінки, а також з роботою із зображеннями, таблицями, списками, формами та посиланнями. Також було створено шаблон звітного HTML-документа для відображення результатів усіх лабораторних робіт. Це дало змогу закріпити теоретичні знання з основ веб-розробки та набути практичних навичок верстки.

Окремо було виконано реєстрацію та роботу з Figma для створення макета власного веб-застосунку, що допомогло краще зрозуміти принципи візуального проєктування інтерфейсів. Також я ознайомився з Git і GitHub, створив власні репозиторії, виконав клонування проєкту та завантаження його на хостинг, що є важливим етапом командної роботи та контролю версій.

Таким чином, у процесі виконання роботи я здобув базові знання та навички, необхідні для подальшого вивчення веб-програмування, роботи з системами контролю версій і створення власних веб-застосунків. Практична робота є фундаментом для виконання наступних лабораторних і самостійних завдань.`
            },
            lab_2: {
                theme_and_purpose: "Тема і мета лабораторної №2: CSS.",
                business_logic: "Бізнес-логіка ЛР2: стилізація сторінки.",
                structure_of_document: {
                    info: "Структура документа ЛР2 складається з кількох частин:",
                    sub: {
                        html: "HTML-код структури ЛР2...",
                        css: "CSS-оформлення структури ЛР2...",
                        js: "JS-логіка структури ЛР2..."
                    }
                },
                main_web_page_link: "Посилання на головну сторінку ЛР2: style.html",
                code_of_main_page: "CSS-код головної сторінки ЛР2 тут...",
                conclusions: "Висновки ЛР2: навчились стилям."
            },
            lab_3: {
                theme_and_purpose: "Тема і мета лабораторної №3: JS.",
                business_logic: "Бізнес-логіка ЛР3: інтерактивність.",
                structure_of_document: {
                    info: "Структура документа ЛР3 складається з кількох частин:",
                    sub: {
                        html: "HTML-код структури ЛР3...",
                        css: "CSS-оформлення структури ЛР3...",
                        js: "JS-логіка структури ЛР3..."
                    }
                },
                main_web_page_link: "Посилання на головну сторінку ЛР3: script.html",
                code_of_main_page: "JS-код головної сторінки ЛР3 тут...",
                conclusions: "Висновки ЛР3: інтерактивність на сайті."
            }
        };

        const mainSection = document.getElementById("main_section");
        const leftSection = mainSection.querySelector(".left_section");
        const showerInfo = mainSection.querySelector(".shower_info");
        const rightSection = mainSection.querySelector(".right_section");
        const previewImages = document.querySelector(".preview_images");
        
        
       

       document.querySelectorAll(".lab_button").forEach(btn => {
  btn.addEventListener("click", () => {
    const labId = btn.id;

    // Вставляємо список кнопок
    leftSection.innerHTML = `
      <h3>${btn.innerText}</h3>
      <ul class="button_holder">
        <li><button class="info_button" data-info="theme_and_purpose">Тема і мета лабораторної роботи</button></li>
        <li><button class="info_button" data-info="business_logic">Опис предметного середовища.<br> Опис бізнес-логіки</button></li>
        <li><button class="info_button" data-info="structure_of_document">Структура документа</button></li>
        <li><button class="info_button" data-info="main_web_page_link">Головна сторінка WEB-застосунку</button></li>
        <li><button class="info_button" data-info="code_of_main_page">Код головної сторінки WEB-застосунку</button></li>
        <li><button class="info_button" data-info="conclusions">Висновки</button></li>
      </ul>
    `;

    rightSection.style.background = "#f8f8f8";

    // Вішаємо обробники
    leftSection.querySelectorAll(".info_button").forEach(infoBtn => {
      infoBtn.addEventListener("click", () => {
        const key = infoBtn.getAttribute("data-info");
        previewImages.innerHTML = "";

        if (key === "structure_of_document") {
          showerInfo.innerHTML = labData[labId][key].info;

          // Перевіряємо, чи вже існують підкнопки
          let subButtons = infoBtn.parentElement.querySelector(".sub_buttons");

          if (subButtons) {
            // Якщо є — прибираємо
            subButtons.remove();
          } else {
            // Якщо нема — додаємо
            infoBtn.insertAdjacentHTML("afterend", `
              <div class="sub_buttons">
                <button class="sub_button" data-sub="html">HTML</button>
                <button class="sub_button" data-sub="css">CSS</button>
                <button class="sub_button" data-sub="js">JS</button>
              </div>
            `);

            // Вішаємо події на підкнопки
            leftSection.querySelectorAll(".sub_button").forEach(subBtn => {
              subBtn.addEventListener("click", () => {
                previewImages.innerHTML = "";
                const subKey = subBtn.getAttribute("data-sub");
                showerInfo.textContent = labData[labId][key].sub[subKey];
                if (subKey === "html") {
                     previewImages.innerHTML = `Вигляд списків:
<img src="../IP-31_appRECORD-DanyliukArtem-FIOT-2025/img/list_example.png" alt="list_example_photo">
Вигляд таблиці:
<img src="../IP-31_appRECORD-DanyliukArtem-FIOT-2025/img/table_example.png" alt="table_example_photo">
Вигляд форми:
<img src="../IP-31_appRECORD-DanyliukArtem-FIOT-2025/img/form_example.png" alt="form_example_photo">`;
                }
               
              });
            });
          }
        } else {
          showerInfo.innerHTML = labData[labId][key] || "Немає даних.";
        }

        if (key === "main_web_page_link") {
          window.open(labData[labId][key], "_blank");
          return;
        }

        if (key === "code_of_main_page") {
          window.open(labData[labId][key], "_blank");
          return;
        }

    });
    });
  });
});