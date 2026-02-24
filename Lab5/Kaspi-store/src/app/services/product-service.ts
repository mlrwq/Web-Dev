import { Injectable } from '@angular/core';
import { Category } from '../models/category-model';
import { Product } from '../models/product-model';

@Injectable({
  providedIn: 'root'
})

export class ProductService{
    categories: Category[] = [
    { id: 1, name: 'Гаджеты' },
    { id: 2, name: 'Бытовая техника' },
    { id: 3, name: 'Аудио' },
    { id: 4, name: 'Одежда и Аксессуары' },
  ];

  products: Product[] = [
    {
      id: 1,
      categoryId: 1,
      name: 'Iphone 17 Pro Max 256GB silver',
      description: 'Apple iPhone 17 Pro Max 256Gb — это воплощение инноваций и бескомпромиссного качества в мире смартфонов. Мощный процессор A19 Pro и передовая система камер открывают новые горизонты для творчества и продуктивности.',
      price: 915990,
      rating: 5,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p72/p55/64169948.png',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p72/p55/64169948.png',
        'https://resources.cdn-kaspi.kz/img/m/p/p8e/p55/64169949.png',
        'https://resources.cdn-kaspi.kz/img/m/p/p16/p58/64169951.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-max-256gb-serebristyi-145468150/'
    },
    {
      id: 2,
      categoryId: 1,
      name: 'Ноутбук Apple MacBook Air 13 2025 / 16 Гб / SSD 256 Гб / macOS / MW123RU/A',
      description: 'Представляем Apple MacBook Air 13 2025 — ультрабук, который сочетает в себе высокую производительность, изящный дизайн и долговечность. С процессором Apple M4 и 16 Гб оперативной памяти, он идеально подходит для работы и развлечений.',
      price: 619000,
      rating: 5,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p52/p42/36846116.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p52/p42/36846116.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p91/p3f/36846120.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p04/p3f/36846125.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-256-gb-macos-mw123ru-a-138153472/?c=750000000'
    },
    {
      id: 3,
      categoryId: 1,
      name: 'Смарт-часы Apple Watch SE GPS Gen.2 2024 S/M 40 мм бежевый',
      description: 'Корпус в трёх стильных цветах. Мощные датчики для информации о вашем здоровье и активности. Инновационные функции безопасности. Удобные способы оставаться на связи. Более быстрый двухъядерный процессор для повышенной производительности. Apple Watch SE полны достоинств, а теперь это ещё более выгодная покупка, чем когда‑либо. Больше данных. Выше мотивация.',
      price: 129420,
      rating: 5,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p55/p9b/5542335.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p55/p9b/5542335.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pe4/p9a/5542339.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p78/p98/5542340.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-watch-se-gps-gen-2-2024-s-m-40-mm-bezhevyi-129172890/?c=750000000'
    },
    {
      id: 4,
      categoryId: 1,
      name: 'Смарт-очки Ray-Ban Meta Wayfarer Standard RW4006 601SM1 50-22 черный',
      description: 'Легендарный стиль Ray-Ban, передовые технологии Meta и легкая форма объединены в ряд оправ, созданных для того, чтобы жить настоящим и выражать себя по максимуму. Высококачественные линзы доступны в солнцезащитных, поляризационных линзах или линзах Transitions. Все линзы обеспечивают повышенную прозрачность, комфорт и 100% защиту от UVA и UVB лучей. Совместимость с рецептурными линзами.',
      price: 299900 ,
      rating: 4,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pef/pd8/54777416.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pef/pd8/54777416.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p9a/pd8/54777419.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pf6/pd5/54777422.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p12/pd6/54777421.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/smart-ochki-ray-ban-meta-wayfarer-standard-rw4006-601sm1-50-22-chernyi-116509833/?c=750000000'
    },
    {
      id: 5,
      categoryId: 4,
      name: 'Dior Sauvage духи PARFUM 100 мл, для мужчин',
      description: 'Объем 100 мл. Верхние ноты грейпфрута. Средние ноты лаванды и сычуанского перца. Базовые ноты амбрового аккорда и пачули. С насыщенным древесным фужерным ароматом, эти духи идеально подходят для любого случая.',
      price: 60494,
      rating: 5,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p6c/p2e/39108928.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p6c/p2e/39108928.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p88/p2e/39108929.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p24/pf1/72955953.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/dior-sauvage-duhi-parfum-100-ml-dlja-muzhchin-101808531/?c=750000000'
    },
    {
      id: 6,
      categoryId: 3,
      name: 'Музыкальный диск BIGHIT MUSIC YEONJUN - NO LABELS: PART 01 3 Version SET',
      description: 'В зависимости от версии содержимое (обложка, фотокнига, мини-книга, фотокарточки, постеры и т. д.) в официальном пакете альбома может различаться. Содержание (за версию): [НАСТРОЙКА A-ВЕРСИИ] 1 компакт-диск 1 книга с текстами песен (20 страниц) 1 фотокнига (40 страниц) 1 сложенный плакат 3 открытки 1 наклейка 1 фотокарточка (случайная из 3 типов) [Версия SET-UP B] 1 компакт-диск 36 карт 1 лентикулярная карта 1 книга с текстами песен (24 страницы) 2 сложенных плаката 1 наклейка 1 фотокарточка (случайная из 3 типов) [Версия SET-UP C] 1 компакт-диск 1 фотокнига (40 страниц) 1 сложенный плакат 3 открытки 1 наклейка 1 фотокарточка (случайная из 3 типов)',
      price: 34300,
      rating: 5,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p99/p2b/75815053.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p99/p2b/75815053.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pb6/p2b/75815054.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pee/p2b/75815056.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/bighit-music-yeonjun---no-labels-part-01-3-version-set-148972121/?c=750000000'
    },
    {
      id: 7,
      categoryId: 3,
      name: 'Музыкальный диск JYP ENTERTAINMENT TWICE - STRATEGY',
      description: 'Strategy is the fourteenth extended play by South Korean girl group Twice. It was released on December 6, 2024, through JYP Entertainment and Republic Records. The EP consists of seven tracks, including the group\'s fourth original English-language single "Strategy" featuring Megan Thee Stallion. ',
      price: 18500,
      rating: 4,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p34/p8b/18083074.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p34/p8b/18083074.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p50/p8b/18083075.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/jyp-entertainment-twice---strategy-132849680/?c=750000000'
    },
    {
      id: 8,
      categoryId: 3,
      name: 'Пластинка Tyler, The Creator - Flower Boy',
      description: 'Tyler, The Creator - Scum Fuck Flower Boy (Gatefold) 2LP/tFlower Boy (альтернативное название Scum Fuck Flower Boy) - четвёртый студийный альбом знаменитого американского рэпера Tyler, the Creator. Альбом был выпущен 21 июля 2017 года на лейбле Columbia Records. Релиз, полностью спродюсированный Тайлером, включает в себя гостевые вокалы ряда артистов, включая Фрэнка Оушена, ASAP Rocky, Anna of the North, Лил Уэйн, Кали Учис, Стива Лейси, Эстель, Джейдена Смита и Рекса Ориндж Каунти.',
      price: 38500,
      rating: 5,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h85/h90/67381257601054.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h85/h90/67381257601054.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h4f/hf9/67381258125342.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/tyler-the-creator---flower-boy-108492413/?c=750000000'
    },
    {
      id: 9,
      categoryId: 1,
      name: 'Телевизор Sony KD75X85L 191 см черный',
      description: 'Sony KD75X85L — погрузитесь в мир невероятно чёткого изображения и захватывающего звука с этим LED-телевизором диагональю 75 дюймов.',
      price: 922900,
      rating: 4,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h3e/hce/84562296209438.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h3e/hce/84562296209438.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h17/ha3/84562296274974.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hba/hd0/84562296340510.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/sony-kd75x85l-191-sm-chernyi-114806695/?c=750000000'
    },
    {
      id: 10,
      categoryId: 4,
      name: 'Кеды adidas Handball Spezial темно-зеленый',
      description: 'Кеды adidas Handball Spezial — это идеальное сочетание стиля и комфорта для повседневной носки. Они подойдут как для активного отдыха, так и для городских прогулок.',
      price: 38990,
      rating: 3.5,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p46/p02/44518638.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p46/p02/44518638.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p06/p01/44518647.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pc7/p03/44518651.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p54/p04/44518656.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pa8/p04/44518659.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p0b/p0b/44518675.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/kedy-adidas-handball-spezial-jh5438-temno-zelenyi-38-140284191/?c=750000000'
    },
    {
      id: 11,
      categoryId: 2,
      name: 'Аэрогриль Merlin FD-1017B 16 л черно-серебристый',
      description: 'Аэрогриль FD-1017B — современное решение для приготовления вкусных и полезных блюд с минимальными усилиями. С мощностью 2100 Вт и объёмом 16 литров, этот аэрогриль позволяет готовить для всей семьи, сохраняя при этом все полезные вещества и ароматы.',
      price: 54000,
      rating: 3,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pd2/pd6/89142749.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pd2/pd6/89142749.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p18/pde/89142750.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pae/pda/89142751.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p45/pd7/89142752.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p71/pd0/89142754.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/merlin-fd-1017b-16-l-cherno-serebristyi-150681417/?c=750000000'
    },
    {
      id: 12,
      categoryId: 2,
      name: 'Микроволновая печь Atlantiq AMWO-S серебристый',
      description: 'Представляем вам микроволновую печь Atlantiq AMWO-S - идеальное сочетание функциональности и стиля для вашей кухни. С её помощью вы сможете быстро разогреть или приготовить любимые блюда, не теряя при этом времени.',
      price: 29990,
      rating: 2.8,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ped/pef/53970152.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ped/pef/53970152.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p09/pf0/53970153.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p25/pf0/53970154.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p41/pf0/53970155.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/atlantiq-amwo-s-serebristyi-108859975/?c=750000000'
    },
    {
      id: 13,
      categoryId: 2,
      name: 'Стиральная машина LG F2V3PS6J черный',
      description: 'Стиральная машина LG F2V3PS6J — современное решение для вашего дома, обеспечивающее высокую эффективность стирки и долговечность благодаря инверторному двигателю. Подходит для тех, кто ценит комфорт и эффективность в стирке, а также заботится о качестве ухода за одеждой.',
      price: 247196,
      rating: 4.5,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p29/p5c/46671864.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p29/p5c/46671864.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p70/pf0/19383909.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/paf/ped/19383913.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p93/ped/19383914.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/lg-f2v3ps6j-chernyi-133220972/?c=750000000'
    },
    {
      id: 14,
      categoryId: 2,
      name: 'Кухонная плита ELITE ELT GS-E6409 черный',
      description: 'Кухонная плита ELITE ELT GS-E6409 — стильное и функциональное решение для вашей кухни, объединяющее газовую варочную панель и комбинированную духовку. Эта плита обеспечит вам удобство и эффективность в приготовлении блюд.',
      price: 99990,
      rating: 3.5,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h82/hd7/86576419897374.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h82/hd7/86576419897374.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h71/h62/86576419962910.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h05/h3e/86576420028446.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/elite-elt-gs-e6409-chernyi-121621912/?c=750000000'
    },
    {
      id: 15,
      categoryId: 2,
      name: 'Холодильник Leadbros HD-442WK серый',
      description: 'Представляем вам холодильник LEADBROS HD-442WK — идеальное сочетание стиля, функциональности и энергетической эффективности. Этот холодильник с морозильником обеспечит вам надежное хранение продуктов и освежит ваш интерьер.✨',
      price: 304990,
      rating: 4.5,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pf2/p95/85928725.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pf2/p95/85928725.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p0e/p96/85928726.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p2b/p96/85928727.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p47/p96/85928728.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/leadbros-hd-442wk-seryi-117791413/?c=750000000'
    },
    {
      id: 16,
      categoryId: 3,
      name: 'Пластинка Lana Del Rey Norman Fucking Rockwell!',
      description: 'Погрузитесь в мир музыки с альбомом Norman Fucking Rockwell! от Ланы Дель Рей — это шестой студийный альбом, который сочетает в себе глубокие тексты и завораживающие мелодии. Выпущенный 30 августа 2019 года, он стал настоящим событием в мире поп-музыки.',
      price: 42000,
      rating: 4.5,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hd8/h90/83996167307294.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hd8/h90/83996167307294.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p29/p25/111417485.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/lana-del-rey-norman-fucking-rockwell--109599218/?c=750000000'
    },
    {
      id: 17,
      categoryId: 3,
      name: 'Музыкальный диск KCRUSH LE SSERAFIM - HOT 5th Mini Album COMPACT 6 Version SET',
      description: 'В зависимости от версии содержимое (обложка, фотокнига, мини-книга, фотокарточки, постеры и т. д.) в официальном пакете альбома может различаться. Содержание (за версию): 1 компакт-диск 1 буклет (12 страниц) 1 Лирическая статья 1 наклейка 1 Открытка 1 фотокарточка (случайная из 3 типов)',
      price: 48686,
      rating: 5,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pef/pba/69086727.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pef/pba/69086727.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p12/pb8/69086732.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/kcrush-le-sserafim---hot-5th-mini-album-compact-6-version-set-146927406/?c=750000000'
    },
    {
      id: 18,
      categoryId: 1,
      name: 'Наушники Apple AirPods Max 2 черно-синий',
      description: 'Модель автоматически умеет определять, когда нужно отключить шумоподавление. За счет излучателей большого диаметра наушники выдают громкий звук с хорошим балансом частот. Пространственный звук создается благодаря динамическому отслеживанию положения головы пользователя',
      price: 277666 ,
      rating: 5,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p68/p4c/3527586.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p68/p4c/3527586.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p83/p4b/3531601.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p4c/p4c/3527587.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p5b/p10/3532808.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p3f/p10/3532809.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd3/p0d/3532810.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-max-2-cherno-sinii-128622804/?c=750000000'
    },
    {
      id: 19,
      categoryId: 4,
      name: 'Футболка TipoPrint Sabr heart белый',
      description: 'Футболка TipoPrint Sabr heart — стильный выбор для уверенных в себе мужчин, которые ценят комфорт и оригинальность. Изготовленная из 100% хлопка, эта футболка обеспечивает отличную воздухопроницаемость и мягкость на ощупь.',
      price: 4490,
      rating: 3,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pc1/p83/54245453.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pc1/p83/54245453.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p84/p79/54245456.jpeg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/futbolka-tipoprint-sabr-heart-tp5004002-belyi-xs-142849446/?c=750000000'
    },
    {
      id: 20,
      categoryId: 4,
      name: 'Кварцевые Tissot T1166171105701 сталь',
      description: 'Tissot Chrono XL — это великолепные часы для тех, кто ищет ультрамодный хронограф со спортивным дизайном, изготовленный по швейцарским технологиям. Этот спортивный кварцевый хронограф с корпусом 45 мм - один из самых крупных в коллекции Tissot.',
      price: 369426,
      rating: 4.9,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p4f/pc9/31115739.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p4f/pc9/31115739.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pbc/pcb/31115740.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd8/pcb/31115741.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p97/pb2/31115742.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p01/pb6/31115743.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd4/pbc/31115745.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/kvartsevye-tissot-t1166171105701-stal--102496909/?c=750000000'
    },
  ];

  getCategories(): Category[]{
    return this.categories;
  }
  getProductsByCategory(categoryId: number): Product[]{
    return this.products.filter(p => p.categoryId === categoryId)
  }
}