import React from 'react';
import './HomePage.css'

const HomePage = () => {

    const Book = [
        {
          image: Forza,
          title: "Происхождение",
          autor: 'Дэн Браун',
          genres: ["Гонки", "Симулятор", "Открытый мир"],
          price: 2343,
          video: "https://www.youtube.com/embed/FYH9n37B7Yw",
          id: 1,
          description:
            "Вас ждёт бесконечный калейдоскоп приключений Horizon! Совершайте увлекательные поездки по невероятно красивому и самобытному миру Мексики за рулём величайших автомобилей в истории. Начните своё приключение Horizon уже сегодня, добавив игру в свой список желаний!",
        },
        {
          image: btfield,
          title: "1984",
          autor: 'Джордж Оруэлл',
          genres: ["Экшен", "Шутер", "Война"],
          video: "https://www.youtube.com/embed/ASzOzrB-a9E",
          price: 2433,
          id: 2,
          description:
            "Battlefield™ 2042 — это шутер от первого лица, в котором серия возвращается к легендарным масштабным сражениям. В будущем, где царит хаос, адаптируйтесь и процветайте на постоянно меняющихся полях боя благодаря своему отряду и арсеналу новейших технологий.",
        },
        {
          image: lis,
          title: "Девушка в тумане",
          autor: 'Донато Карризи',
          genres: ["Глубокий сюжет", "Протагонистка"],
          video: "https://www.youtube.com/embed/b6CkzwVAr0M",
          price: 3021,
          id: 3,
          description:
            "Алекс Чэнь от всех скрывает своё «проклятие» — сверхъестественную способность считывать сильные эмоции других и влиять на них. Но когда её брат погибает — якобы в результате несчастного случая, — Алекс использует её, чтобы узнать правду.",
        },
        {
          image: gta,
          title: "Империя должна умереть",
          autor: 'Михаил Зыгарь',
          genres: ["Открытый мир", "Экшен"],
          video: "https://www.youtube.com/embed/QkkoHAzjnUs",
          price: 789,
          id: 4,
          description:
            "Grand Theft Auto V для PC позволяет игрокам исследовать знаменитый мир Лос-Сантоса и округа Блэйн в разрешении до 4k и выше с частотой 60 кадров в секунду.",
        },
        {
          image: raindow,
          title: "Земное притяжение",
          autor: 'Татьяна Устинова',
          video: "https://www.youtube.com/embed/6wlvYh0h63k",
          genres: ["Тактика", "Шутер"],
          price: 982,
          id: 5,
          description:
            "Tom Clancy's Rainbow Six Осада – это продолжение нашумевшего шутера от первого лица, разработанного студией Ubisoft Montreal.",
        },
        {
          image: assasin,
          title: "Зулейха открывает глаза",
          autor: 'Гузель Яхина',
          genres: ["Паркур", "РПГ", "Открытый мир"],
          video: "https://www.youtube.com/embed/ssrNcwxALS4",
          price: 2863,
          id: 6,
          description:
            "Assassin’s Creed Valhalla — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.",
        },
        {
          image: metro,
          title: "Очаровательный кишечник. Как самый могущественный орган управляет нами",
          autor: 'Джулия Эндерс',
          genres: ["Шутер ", "От первого лица", "Стелс"],
          video: "https://www.youtube.com/embed/zIgwCgPbBKI",
          price: 2033,
          id: 7,
          description:
            "Компьютерная игра в жанре постапокалиптического шутера от первого лица с элементами survival horror и стелса, разработанная украинской студией 4A Games и изданная американской компанией THQ в марте 2010 года. Игра является интерпретацией одноимённого романа российского писателя Дмитрия Глуховского. По сюжету игры, произошла ядерная война, и оставшиеся в живых люди поселились в туннелях и станциях московского метрополитена. Главным героем является молодой выживший Артём, вынужденный спасать свою родную станцию от различных опасностей, таящихся в метро. ",
        },
        {
          image: sims,
          title: "iPhuck 10",
          autor: 'Виктор Пелевин',
          genres: ["Симулятор"],
          video: "https://www.youtube.com/embed/-8BU5D8auLw",
          price: 1984,
          id: 8,
          description:
            "Возможности творческого самовыражения, 2) возможностью демонстрировать и делиться созданным в игре контентом с другими фанатами 3) добавления в игру элементов юмора и сатиры. Игры серии The Sims наиболее приближены к жанру песочница, поскольку не имеют каких-либо определённых целей. Игрок создаёт виртуальных людей - «симов», помещает их в дома, следит за их настроением, помогает им удовлетворять потребности и исполнять желания. Игроки могут заселять симов в уже существующие дома или строить свои собственные. Каждые последующие дополнения и игры в серии расширяют возможности игроков, добавляя новые функции, предметы и миры для проживания симов.",
        },
        {
          image: doom,
          title: "7 навыков высокоэффективных людей: Мощные...",
          autor: 'Стивен Кови',
          genres: ["Шутер от первого лица", "Ужасы"],
          video: "https://www.youtube.com/embed/j8NaZZa54cs",
          price: 2004,
          id: 9,
          description:
            "Научно-фантастический шутер от первого лица, разработанный компанией id Software и изданный Activision в 2004 году. В России локализован и издан компанией 1С. Действие игры происходит в 2145 году в научно-исследовательском центре Объединённой аэрокосмической корпорации на Марсе. Doom 3 является первым перезапуском франшизы Doom.",
        },
        {
            image: doom,
            title: "Девушка во льду",
            autor: 'Роберт Брындза',
            genres: ["Шутер от первого лица", "Ужасы"],
            video: "https://www.youtube.com/embed/j8NaZZa54cs",
            price: 2004,
            id: 9,
            description:
              "Научно-фантастический шутер от первого лица, разработанный компанией id Software и изданный Activision в 2004 году. В России локализован и издан компанией 1С. Действие игры происходит в 2145 году в научно-исследовательском центре Объединённой аэрокосмической корпорации на Марсе. Doom 3 является первым перезапуском франшизы Doom.",
          },
          {
            image: doom,
            title: "Магия утра. Как первый час дня определяет ваш успех",
            autor: 'Хэл Элрод',
            genres: ["Шутер от первого лица", "Ужасы"],
            video: "https://www.youtube.com/embed/j8NaZZa54cs",
            price: 2004,
            id: 9,
            description:
              "Научно-фантастический шутер от первого лица, разработанный компанией id Software и изданный Activision в 2004 году. В России локализован и издан компанией 1С. Действие игры происходит в 2145 году в научно-исследовательском центре Объединённой аэрокосмической корпорации на Марсе. Doom 3 является первым перезапуском франшизы Doom.",
          },
          {
            image: doom,
            title: "Азиатская европеизация. История Российского государства. Царь Петр...",
            autor: 'Борис Акунин',
            genres: ["Шутер от первого лица", "Ужасы"],
            video: "https://www.youtube.com/embed/j8NaZZa54cs",
            price: 2004,
            id: 9,
            description:
              "Научно-фантастический шутер от первого лица, разработанный компанией id Software и изданный Activision в 2004 году. В России локализован и издан компанией 1С. Действие игры происходит в 2145 году в научно-исследовательском центре Объединённой аэрокосмической корпорации на Марсе. Doom 3 является первым перезапуском франшизы Doom.",
          },
          {
            image: doom,
            title: "Ведьмак (сборник)",
            autor: 'Анджей Сапковский',
            genres: ["Шутер от первого лица", "Ужасы"],
            video: "https://www.youtube.com/embed/j8NaZZa54cs",
            price: 2004,
            id: 9,
            description:
              "Научно-фантастический шутер от первого лица, разработанный компанией id Software и изданный Activision в 2004 году. В России локализован и издан компанией 1С. Действие игры происходит в 2145 году в научно-исследовательском центре Объединённой аэрокосмической корпорации на Марсе. Doom 3 является первым перезапуском франшизы Doom.",
          },
          {
            image: doom,
            title: "Атлант расправил плечи",
            autor: 'Айн Рэнд',
            genres: ["Шутер от первого лица", "Ужасы"],
            video: "https://www.youtube.com/embed/j8NaZZa54cs",
            price: 2004,
            id: 9,
            description:
              "Научно-фантастический шутер от первого лица, разработанный компанией id Software и изданный Activision в 2004 году. В России локализован и издан компанией 1С. Действие игры происходит в 2145 году в научно-исследовательском центре Объединённой аэрокосмической корпорации на Марсе. Doom 3 является первым перезапуском франшизы Doom.",
          },
      ];

    return (
        <div>
            
        </div>
    );
}

export default HomePage;
