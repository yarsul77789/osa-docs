# osa-docs

База знаний альянса **Оса #242** игры Last Asylum: статический сайт на
Docusaurus, опубликованный через GitHub Pages.

Сайт: https://yarsul77789.github.io/osa-docs/

Те же Markdown-файлы читает Telegram-бот альянса (раздел **Обучение**) —
напрямую с `raw.githubusercontent.com`, поэтому текст на сайте и в боте всегда
совпадает.

## Структура

```
docs/        Статьи базы знаний (.md)
src/css/     Оформление темы
build/       Результат сборки (не коммитится)
```

## Как добавить статью

Создать файл `docs/<имя>.md` с frontmatter:

```markdown
---
title: Название статьи
sidebar_position: 3
---

Текст статьи.
```

Поле `title` используется и в сайдбаре сайта, и как подпись кнопки в боте,
`sidebar_position` задаёт порядок.

Адрес страницы собирается из имени файла: `docs/elixir-race.md` →
`https://yarsul77789.github.io/osa-docs/elixir-race`.

## Публикация

Push в ветку `main` запускает workflow `.github/workflows/deploy.yml`, который
собирает сайт и публикует его на GitHub Pages. После публикации в боте нужно
нажать **Управление → Обновить список статей**, чтобы он подтянул правки.

## Локальный запуск

```bash
npm install
npm start          # dev-сервер с горячей перезагрузкой
npm run build      # проверка production-сборки
```
