# tg-like-messenger-ui

<p align="center">
  <img src="https://github.com/kinduz/tg-like-messenger-ui/blob/main/src/features/auth/assets/rocket-black.gif" alt="Rocket" width="160" />
</p>

**Rocket Chat** – это современный мессенджер, вдохновленный дизайном и функциональностью Telegram. Интерфейс приложения реализован с использованием [TelegramUI](https://tgui.xelene.me/?path=/docs/getting-started--documentation).

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
