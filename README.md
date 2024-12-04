# tg-like-messenger-ui

**tg-like-messenger** – это современный мессенджер, вдохновленный дизайном и функциональностью Telegram. Интерфейс приложения реализован с использованием [TelegramUI](https://tgui.xelene.me/?path=/docs/getting-started--documentation).

---

## Основные возможности:

### Для пользователей:
- **Регистрация и авторизация**: создавайте безопасные аккаунты через email или телефон, а также через Google или Github.
- **Личная переписка**: отправляйте сообщения другим пользователям в режиме реального времени.
- **Групповые чаты**: создавайте комнаты для общения с группой друзей или коллег.
- **Мгновенные уведомления**: получайте пуш-уведомления о новых сообщениях.
- **Две темы оформления**: светлая и тёмная темы для удобства использования.
- **Поиск по сообщениям и пользователям**: быстро находите нужную информацию.
- **Поддержка вложений**: отправляйте изображения, файлы и документы прямо в чат.

### Для разработчиков:
- Явный и организованный код с использованием TypeScript.
- Логическая структура проекта на основе архитектурных стандартов.
- Интуитивно понятный UI, созданный с помощью Styled Components и TelegramUI.
- Полный набор API на NestJS для управления данными.

---

## Технический стек:

### Фронтенд:
- **React**: Библиотека JavaScript для создания пользовательских интерфейсов.
- **TypeScript**: Статическая типизация, добавляющая безопасность и предсказуемость в коде.
- **RTK Query**: Библиотека для управления состоянием, а также для извлечения и кэширования данных.
- **TelegramUI**: UI-библиотека для получения стиля, схожего с Telegram.
- **Axios**: Библиотека HTTP-запросов для работы с API.
- **Jest**: Среда для тестирования всех компонентов и функций.
- **Styled Components**: Стилизация с помощью CSS-in-JS.

### Бэкенд (код бекенда расположен [здесь](https://github.com/kinduz/tg-like-messenger-backend)):
- **NestJS**: Фреймворк для создания надёжного серверного REST API.
- **TypeORM**: Работа с базой данных через ORM.
- **PostgreSQL**: Реляционная база данных для хранения пользовательских данных.
- **JWT (JSON Web Tokens)**: Безопасная аутентификация и авторизация.
- **Socket.IO**: Реализация real-time функциональности.

- ---

## Установка и запуск проекта:

### Локально:
1. Склонируйте репозиторий:
   ```bash
   git clone https://github.com/kinduz/tg-like-messenger-ui.git
   
   cd tg-like-messenger-ui
   ```

2. Установите зависимости:
   ```bash
   npm install
   ```

3. Настройте переменные окружения. Создайте файл `.env` и добавьте следующие настройки:
   ```
   REACT_APP_API_URL=http://localhost:3000
   ```

4. Запустите приложение на локальном сервере:
   ```bash
   npm start
   ```

5. Перейдите по адресу `http://localhost:3000` в своем браузере.

---

## Архитектура проекта:

Проект разработан с использованием архитектурной методологии [``Feature-Sliced Design (FSD)``](https://feature-sliced.design/ru/docs/get-started/overview)
