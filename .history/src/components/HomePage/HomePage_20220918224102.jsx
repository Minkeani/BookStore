import React from 'react';
import books from '../../img/books.jpg'
import b1984 from '../../img/1984.jpg'
import imperial from '../../img/imperial.jpg'
import zemnoe from '../../img/zemnoe.jpg'
import './HomePage.css'

const HomePage = () => {

    const Book = [
        {
          image: books,
          title: "Происхождение",
          autor: 'Дэн Браун',
          genres: ["триллер", "мистерия"],
          price: 2343,
          id: 1,
          description:
            'Конспирологический детективный роман американского писателя Дэна Брауна, пятая часть в серии книг про Роберта Лэнгдона.'
        },
        {
          image: b1984,
          title: "1984",
          autor: 'Джордж Оруэлл',
          genres: ["роман о политике", "Dystopian novel", "художественное произведение о политике"],
          price: 1984,
          id: 2,
          description:
            'Роман-антиутопия Джорджа Оруэлла, изданный в 1949 году. Как отмечает членкор РАН М. Ф. Черныш, это самое главное и последнее произведение писателя.'
        },
        {
          image: imperial,
          title: "Империя должна умереть",
          autor: 'Михаил Зыгарь',
          genres: ["Историческая литература", "Публицистика"],
          price: 789,
          id: 4,
          description:
            `Революции не происходят неожиданно, империи не гибнут ни с того ни с сего. Главный урок, который мы можем вынести из революции 1917 года, – понимание того, почему император и его окружение в обстановке, которая требовала кардинальных внутренних реформ, не только на эти реформы не решились, но, наоборот, всеми силами пытались повернуть развитие страны вспять, усиливая опору на «традиционные ценности», православие и армию.

            Глава за главой, через живые истории людей, Михаил Зыгарь показывает, как империя неуклонно движется к катастрофе и почему ничто не может ее спасти.
            
            Главный герой этой книги – российское гражданское общество. Оно зарождается в первые годы ХХ века, развивается на глазах у читателя и на его же глазах исчезает вскоре после 1917 года. Узнавая хронику событий столетней давности, читатель может понять, что происходит сегодня, и попробовать заглянуть в будущее.`
        },
        {
          image: raindow,
          title: "Земное притяжение",
          autor: 'Татьяна Устинова',
          genres: ["Остросюжетные любовные романы", "Современные детективы"],
          price: 982,
          id: 5,
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
          {
            image: doom,
            title: "Цена вопроса. Том 1",
            autor: 'Александра Маринина',
            genres: ["Шутер от первого лица", "Ужасы"],
            video: "https://www.youtube.com/embed/j8NaZZa54cs",
            price: 2004,
            id: 9,
            description:
              "Научно-фантастический шутер от первого лица, разработанный компанией id Software и изданный Activision в 2004 году. В России локализован и издан компанией 1С. Действие игры происходит в 2145 году в научно-исследовательском центре Объединённой аэрокосмической корпорации на Марсе. Doom 3 является первым перезапуском франшизы Doom.",
          },
          {
            image: doom,
            title: "Метро 2035",
            autor: 'Дмитрий Глуховский',
            genres: ["Шутер от первого лица", "Ужасы"],
            video: "https://www.youtube.com/embed/j8NaZZa54cs",
            price: 2004,
            id: 9,
            description:
              "Научно-фантастический шутер от первого лица, разработанный компанией id Software и изданный Activision в 2004 году. В России локализован и издан компанией 1С. Действие игры происходит в 2145 году в научно-исследовательском центре Объединённой аэрокосмической корпорации на Марсе. Doom 3 является первым перезапуском франшизы Doom.",
          },
          {
            image: doom,
            title: "Снеговик",
            autor: 'Ю Несбё',
            genres: ["Шутер от первого лица", "Ужасы"],
            video: "https://www.youtube.com/embed/j8NaZZa54cs",
            price: 2004,
            id: 9,
            description:
              "Научно-фантастический шутер от первого лица, разработанный компанией id Software и изданный Activision в 2004 году. В России локализован и издан компанией 1С. Действие игры происходит в 2145 году в научно-исследовательском центре Объединённой аэрокосмической корпорации на Марсе. Doom 3 является первым перезапуском франшизы Doom.",
          },
          {
            image: doom,
            title: "Как тренировать память. Не думайте о памяти – лучше используйте ее на все сто!",
            autor: 'Джонатан Хэнкок',
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
