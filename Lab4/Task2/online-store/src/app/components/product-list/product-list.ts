import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItem } from '../product-item/product-item';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItem],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products: Product[] = [
    {
      id: 1,
      name: 'Iphone 17 Pro Max 256GB silver',
      description: 'Apple iPhone 17 Pro Max 256Gb — это воплощение инноваций и бескомпромиссного качества в мире смартфонов. Мощный процессор A19 Pro и передовая система камер открывают новые горизонты для творчества и продуктивности.',
      price: 915990,
      rating: 5,
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
      name: 'Ноутбук Apple MacBook Air 13 2025 / 16 Гб / SSD 256 Гб / macOS / MW123RU/A',
      description: 'Представляем Apple MacBook Air 13 2025 — ультрабук, который сочетает в себе высокую производительность, изящный дизайн и долговечность. С процессором Apple M4 и 16 Гб оперативной памяти, он идеально подходит для работы и развлечений.',
      price: 619000,
      rating: 5,
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
      name: 'Смарт-часы Apple Watch SE GPS Gen.2 2024 S/M 40 мм бежевый',
      description: 'Корпус в трёх стильных цветах. Мощные датчики для информации о вашем здоровье и активности. Инновационные функции безопасности. Удобные способы оставаться на связи. Более быстрый двухъядерный процессор для повышенной производительности. Apple Watch SE полны достоинств, а теперь это ещё более выгодная покупка, чем когда‑либо. Больше данных. Выше мотивация.',
      price: 129420,
      rating: 5,
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
      name: 'Смарт-очки Ray-Ban Meta Wayfarer Standard RW4006 601SM1 50-22 черный',
      description: 'Легендарный стиль Ray-Ban, передовые технологии Meta и легкая форма объединены в ряд оправ, созданных для того, чтобы жить настоящим и выражать себя по максимуму. Высококачественные линзы доступны в солнцезащитных, поляризационных линзах или линзах Transitions. Все линзы обеспечивают повышенную прозрачность, комфорт и 100% защиту от UVA и UVB лучей. Совместимость с рецептурными линзами.',
      price: 299900 ,
      rating: 4,
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
      name: 'Dior Sauvage духи PARFUM 100 мл, для мужчин',
      description: 'Объем 100 мл. Верхние ноты грейпфрута. Средние ноты лаванды и сычуанского перца. Базовые ноты амбрового аккорда и пачули. С насыщенным древесным фужерным ароматом, эти духи идеально подходят для любого случая.',
      price: 60494,
      rating: 5,
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
      name: 'Музыкальный диск BIGHIT MUSIC YEONJUN - NO LABELS: PART 01 3 Version SET',
      description: 'В зависимости от версии содержимое (обложка, фотокнига, мини-книга, фотокарточки, постеры и т. д.) в официальном пакете альбома может различаться. Содержание (за версию): [НАСТРОЙКА A-ВЕРСИИ] 1 компакт-диск 1 книга с текстами песен (20 страниц) 1 фотокнига (40 страниц) 1 сложенный плакат 3 открытки 1 наклейка 1 фотокарточка (случайная из 3 типов) [Версия SET-UP B] 1 компакт-диск 36 карт 1 лентикулярная карта 1 книга с текстами песен (24 страницы) 2 сложенных плаката 1 наклейка 1 фотокарточка (случайная из 3 типов) [Версия SET-UP C] 1 компакт-диск 1 фотокнига (40 страниц) 1 сложенный плакат 3 открытки 1 наклейка 1 фотокарточка (случайная из 3 типов)',
      price: 34300,
      rating: 5,
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
      name: 'Музыкальный диск JYP ENTERTAINMENT TWICE - STRATEGY',
      description: 'Strategy is the fourteenth extended play by South Korean girl group Twice. It was released on December 6, 2024, through JYP Entertainment and Republic Records. The EP consists of seven tracks, including the group\'s fourth original English-language single "Strategy" featuring Megan Thee Stallion. ',
      price: 18500,
      rating: 4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p34/p8b/18083074.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p34/p8b/18083074.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p50/p8b/18083075.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/jyp-entertainment-twice---strategy-132849680/?c=750000000'
    },
    {
      id: 8,
      name: 'Пластинка Tyler, The Creator - Flower Boy',
      description: 'Tyler, The Creator - Scum Fuck Flower Boy (Gatefold) 2LP/tFlower Boy (альтернативное название Scum Fuck Flower Boy) - четвёртый студийный альбом знаменитого американского рэпера Tyler, the Creator. Альбом был выпущен 21 июля 2017 года на лейбле Columbia Records. Релиз, полностью спродюсированный Тайлером, включает в себя гостевые вокалы ряда артистов, включая Фрэнка Оушена, ASAP Rocky, Anna of the North, Лил Уэйн, Кали Учис, Стива Лейси, Эстель, Джейдена Смита и Рекса Ориндж Каунти.',
      price: 38500,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h85/h90/67381257601054.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h85/h90/67381257601054.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h4f/hf9/67381258125342.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/tyler-the-creator---flower-boy-108492413/?c=750000000'
    },
    {
      id: 9,
      name: 'Телевизор Sony KD75X85L 191 см черный',
      description: 'Sony KD75X85L — погрузитесь в мир невероятно чёткого изображения и захватывающего звука с этим LED-телевизором диагональю 75 дюймов.',
      price: 922900,
      rating: 4,
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
      name: 'Кеды adidas Handball Spezial темно-зеленый',
      description: 'Кеды adidas Handball Spezial — это идеальное сочетание стиля и комфорта для повседневной носки. Они подойдут как для активного отдыха, так и для городских прогулок.',
      price: 38990,
      rating: 3.5,
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
    }
  ];
}