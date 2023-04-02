import katalog from '../image/trendShoes/portfolio.jpg'

export interface ICard {
    name:string
    image: string[],
    title: string,
    technology: string[]
    repo: string
    demo?: string
}


export const cards: ICard[] = [
    {name: 'Trend Shoes',
    image: ['https://i.postimg.cc/GtmBPKn0/image.png', 'https://i.postimg.cc/442nkzTd/portfolio.jpg', "https://i.postimg.cc/8s8SkkHy/image.png", "https://i.postimg.cc/SQLFc4gp/image.png", "https://i.postimg.cc/Hs7M6S7H/image.png", "https://i.postimg.cc/D01Xw0h0/image.png","https://i.postimg.cc/XYYpTQrp/image.png","https://i.postimg.cc/BZN3dsHB/image.png"],
    title: 'Демо интернет магазин. Активно использовал GitHub. Создавал компоненты базовые, переиспользуемые. Использовал хуки из React. Делал валидацию для форм. Писал стили и делал адаптивную верстку. Занимался рефакторингом различного рода, рефакторинг логики, стилей, сервисов. Писал services (auth, user и другие). Работал с базой данных FireBase. Реализовывал методы авторизации и аутентификации. Переписывал и интегрировал backend из FireBase в NodeJS. Взаимодействовал с базой данных MongoDB. Делал тесты запросов через Postman. Делал Deploy проекта через Docker',
    technology: ['HTML', 'CSS', 'JS', "React", "Redux", "Node.js","MongoDB", "Firebase", "HTTP",'Axios','Postman', "Figma", "GitHub"],
    repo: 'https://github.com/Grekalimbus/Trend_Shoes/tree/main' },
    {name: 'Лендинг со слайдерами',
    image: ["https://i.postimg.cc/3r4byn27/image.png","https://i.postimg.cc/8zDy0G9P/image.png","https://i.postimg.cc/gjFyLqPk/image.png", "https://i.postimg.cc/021Zzx8d/image.png"],
    title: 'Чего-то большого об этом проекте не скажешь. Небольшой функционал на ванильном JS. Можно посмотреть по ссылке ниже "Демо". Все рисунки сделаны мной лично. В прошлом я занимался тату и хобби рисовать всё еще осталось.',
    technology: ['HTML', 'CSS', 'JS',"GitHub"],
    repo: 'https://github.com/Grekalimbus/Sliders-Top-and-Bottom-event-click-button-' ,
    demo: "https://grekalimbus.github.io/Sliders-Top-and-Bottom-event-click-button-/"}, 
    {name: 'Игра Сапёр',
    image: ["https://i.postimg.cc/yYdTTX7y/image.png","https://i.postimg.cc/FKtgmM3T/image.png","https://i.postimg.cc/sx1Z5m5B/image.png","https://i.postimg.cc/Nf3rr1FM/image.png"],
    title: 'Игра Сапёр с 3-мя сложностями (10х10/16x16/32x32). Реализовывал таймер. Для каждой сложности время разное. Если время закончилось, игра останавливается и поля некликабельные. Верстка адаптивная. Есть таблица лидеров, в которой данные беруться из редакса. Реализована проверка на то, что юзер выиграл. Если юзер выиграл, поле становится некликабельным и окрашивается в желтый цвет',
    technology: ['HTML', 'CSS', 'TypeScript', "React", "Redux", "GitHub"],
    repo: 'https://github.com/Grekalimbus/Miner' ,
    demo: "https://miner-git-main-grekalimbus-s-team.vercel.app/"},
    {name: 'Aim Game',
    image: ["https://i.postimg.cc/2Sv06MDB/image.png","https://i.postimg.cc/9MxpKjGs/image.png","https://i.postimg.cc/nh8162DV/image.png",'https://i.postimg.cc/HxL0QPfz/image.png'],
    title: 'Мини игра для тренировки Аима. Выбор (10/20/30) сек. После окончания игры, пользователю показывает кол-во попаданий по целям. Есть поле, где рандомно появляются кружочки, на которые нужно кликать.',
    technology: ['HTML', 'CSS', 'JS', "GitHub"],
    repo: 'https://github.com/Grekalimbus/Aim-Game-Task-marathon5' ,
    demo: "https://grekalimbus.github.io/Aim-Game-Task-marathon5/"},
    {name: 'Форма обратной связи',
    image: ["https://i.postimg.cc/t4BSxPch/image.png","https://i.postimg.cc/CKdvH5y9/image.png","https://i.postimg.cc/sXhwqLgc/image.png"],
    title: 'Адаптивная форма обратной связи с 3-мя полями. Самое интересно поле с номером, т.к реализована классическая маска. Вводить можно только цифры. Автоматически подставляються скобки где нужно, пробелы, черточки(-). Данные сохраняются в MongoDB, после чего юзера перекидует на страницу, на которой отображаются данные полученные с БД. В демо версии данный функционал отсутствует, но можно склонировать себе репо и убедится в работоспособности клиента с сервером.',
    technology: ['HTML', 'CSS', 'JS', "React", "Node.js", "MongoDB", "HTTP", "GitHub"],
    repo: 'https://github.com/Grekalimbus/task-form' ,
    demo: "https://task-form-htvv-git-main-grekalimbus-s-team.vercel.app/"},      
    {name: 'Board-squares',
    image: ["https://i.postimg.cc/yN3ShgjJ/image.png"],
    title: 'Еще один небольшой проект с приятным визуалом. При наведении на квадратики, они подсвечиваются рандомным цветом. Думаю, что такому кейсу можно найти приминение)',
    technology: ['HTML', 'CSS', 'JS',"GitHub"],
    repo: 'https://github.com/Grekalimbus/Board-squares-marathon-task4' ,
    demo: "https://grekalimbus.github.io/Board-squares-marathon-task4/"},  

    
]