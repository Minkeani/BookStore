import React from 'react';
import books from '../../img/books.jpg'
import b1984 from '../../img/1984.jpg'
import woman from '../../img/woman.jpg'
import imperial from '../../img/imperial.jpg'
import witcher from '../../img/witcher.jpg'
import atlant from '../../img/atlant.jpg'
import azian from '../../img/azian.jpg'
import metro from '../../img/metro.jpg'
import nesbe from '../../img/nesbe,jpg'
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
          image: zemnoe,
          title: "Земное притяжение",
          autor: 'Татьяна Устинова',
          genres: ["Остросюжетные любовные романы", "Современные детективы"],
          price: 982,
          id: 5,
        },
        {
            image: woman,
            title: "Девушка во льду",
            autor: 'Роберт Брындза',
            genres: ["Современные детективы", "Триллеры", "Зарубежные детективы"],
            price: 2004,
            id: 9,
            description:
            `В озере одного из парков Лондона, под слоем льда, найдено тело женщины. За расследование берется детектив Эрика Фостер. У жертвы, молодой светской львицы, была, казалось, идеальная жизнь. Но Эрика обнаруживает, что это преступление ведет к трем девушкам, которые были ранее найдены задушенными и связанными в водоемах Лондона.
            Что это – совпадение или дело рук серийного маньяка? Пока Эрика ведет дело, к ней самой все ближе и ближе подбирается безжалостный убийца. К тому же ее карьера висит на волоске – на последнем расследовании, которое возглавляла Эрика, погибли ее муж и часть команды, – и она должна сражаться не только со своими личными демонами, но и с убийцей, более опасным, чем все, с кем она сталкивалась раньше. Сумеет ли она добраться до него прежде, чем он нанесет новый удар? И кто тот, кто за ней следит?`
        },
          {
            image: azian,
            title: "Азиатская европеизация. История Российского государства. Царь Петр...",
            autor: 'Борис Акунин',
            genres: ["Общая история", "Войны"],
            price: 1242,
            id: 9,
            description:
            `Тридцатилетие, в течение которого царь Петр Алексеевич проводил свои преобразования, повлияло на ход всей мировой истории. Обстоятельства его личной жизни, умственное устройство, пристрастия и фобии стали частью национальной матрицы и сегодня воспринимаются миром как нечто исконно российское. И если русская литература «вышла из гоголевской шинели», то Российское государство до сих пор донашивает петровские ботфорты.
            Эта книга про то, как русские учились не следовать за историей, а творить ее, как что-то у них получилось, а что-то нет. И почему.`
        },
          {
            image: witcher,
            title: "Ведьмак (сборник)",
            autor: 'Анджей Сапковский',
            genres: ["фэнтезийная литература"],
            price: 4242,
            id: 9,
            description:
                'Цикл книг польского писателя Анджея Сапковского в жанре фэнтези. Первый рассказ цикла увидел свет в 1986 году, а последняя книга - в 2013.'
        },
          {
            image: atlant,
            title: "Атлант расправил плечи",
            autor: 'Айн Рэнд',
            genres: ["роман"],
            price: 2004,
            id: 9,
            description:
                'Роман-антиутопия американской писательницы Айн Рэнд, впервые опубликованный в 1957 году. Является четвёртым и последним романом Рэнд, а также самым длинным. Рэнд считала его главным произведением в своей литературной карьере.'
        },
          {
            image: metro,
            title: "Метро 2035",
            autor: 'Дмитрий Глуховский',
            genres: ["приключенческая литература"],
            price: 2004,
            id: 9,
            description:
            'Постапокалиптический роман Дмитрия Глуховского, продолжающий серию книг «Метро 2033» и «Метро 2034». Выход книги состоялся 12 июня 2015 года в книжном магазине «Москва». В отличие от предыдущих книг трилогии, роман практически не содержит элементов фантастики, но обладает яркими чертами антиутопии. '
        },
          {
            image: nesbe,
            title: "Снеговик",
            autor: 'Ю Несбё',
            genres: ["триллер"],
            price: 1456,
            id: 9,
            description:
                'Детективный роман норвежского писателя Ю Несбё, седьмой роман в серии о следователе Харри Холе. На русском языке опубликован в переводе Екатерины Гудовой.'
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
