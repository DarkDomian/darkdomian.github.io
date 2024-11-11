# Next portfolio website
just started

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


```мне нужна помощь в реализации проекта. собственно детали проекта:
название и суть - моя визитная карточка
стак технологий - vite, react, typescript, tailwind, i18next, react-icons, gh-pages
этап разработки - реализованы светлая и темная темы, добавлена функция смены языка, созданы несколько UI компонентов реакт (ссылки)
основные задачи: адаптировать проект для размещения на github pages, необходимо реализовать проект индексируемым (!), желательно, но не обязательно, использовать для элементов портфолио md файлы, описывающие каждый проект в отдельности

UI архитектура: на десктопах представлена двумя экранами сменяющими друг друга по нажатию кнопки, переходом в бок - первый визитная карточка с ссылками на контакты, соцсети и так далее, второй же - адаптивное портфолио отображающее мои проекты (заглавие PROJECTS)

задай дополнительные вопросы для сбора полной и необходимой для релевантного ответа информации
как только соберешь необходимую информацию дай рекомендации по достижению моей задачи, код писать не нужно - если будет необходимо я его попрошу
основная цель - наметить план по достижению дальнейших целей (индексация, интеграция с github pages, и использования markdown для описания проектов)

в ходе этого диалога, буду так же просить помочь с реализаций коротких задач, вроде реализовать анимацию кнопки, но на данном этапе - без кода (по крайней мере файлов целиком - это слишком. на данном этапе допусается код до 5 строчек)

цль индексации: т.к. сайт простой поиск по сайту не нужен (пока), приоритетнее работать над индексацией в поисковых системах. для этого можно использовать, например, server-side rendering (можешь предложить альтернативный подход)
ведь основная проблема в том, что реакт приложение не очень то индексируется и это нужно учесть и исправить
да, обычно на визитку попадают по прямой ссылке, но даже так все равно необходимо поработать над индексацией
markdown для проектов. вероятно, исходя из необзодимости индексировать страницу, очень желательно индексировать и проекты в частности
так что, для этой цели, лучше подойдет конвертация на этапе сборки
формат перехода между экранами. да, это слайд эффект перехода. если отобразить оба экрана рядом, то получается что проекты занимают правую половину а визитка с контактами левую

вероятно я бы хотел чтобы страничку проектов можно было посетить по якорю (это так же хорошо и для SEO и для индексации и для пользователя)
нужно будет так же генерировать, веротяно, robots.txt (если я правильно помню название файла для поисковых роботов) ```