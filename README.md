#Для того щоб запустити даний проект потрібно:

Оскільки в проекті є окремо front-end (папка 'client') і back-end (папка 'server') частини, наступні
дії потрібно виконувати для обох папок:

1. Після клонування з GitHub потрібно спочатку встановити всі залежності і бібліотеки (npm i) і можливо зразу 
   запустити лінтер (npm run lint:fix). Якщо сервер 'крашнувся' потрібно просто змінити localhost на інший
   (exp: localhost: 5700) в двох місцях: в App.ts (server/src/App.ts) і в urls.js (client/src/config/urls.js).
2. Потрібно спочатку запустити серверну частину в терміналі скриптом (npm run start) зайшовши 
   в папку 'server'. Якщо все вірно в терміналі побачите відповідні повідомлення про запуск сервера
   і приєднання до бази даних. Дане вікно термінала не закривати, воно повинне бути активне постійно, 
   допоки хочите користуватися даним проектом.
3. Потім в терміналі зробити ще одне активне вікно, не закриваючи запущений раніше back-end, запустити 
   частину front-end скриптом (npm start) зайшовши в папку 'client'. Якщо все вірно, то проект повинен
   відкритися в браузері на стандартному http://localhost:3000.

#В даному проекті я використав:

Для створення серверної частини я використав Node JS з використанням TypeScript. База даних mySQL.

Для частини front-end я використовував бібліотеку React, без використання TS. Крім відповідно зберігання
даних в БД, я користувався localStorage (redux не використовував). Для звязку з beck-end стороною застосовував
axios, для керування input - useForm, також зробив валідацію на Joi.

При створенні обох частин використовував ESLinter.

#Своє бачення виконаного проекту:

Вважаю не зовсім доречним використання localStorage, оскільки на мою думку напевно краще було для 
зберіння даних використовувати redux, щоб використовувати дані в любому місці а також кращому
code-style написання. Але оскільки почав так, то вже всі дані до кінця прокидував через props або діставав 
потім з localStorage.

ESLinter для React раніше не використовував, тому прийшлося дуже багато чого відключати, хоча розумію,
що це є не добре.

