/* eslint-disable max-len */
import type { Product } from '@/types'

const products: Product[] = [
  {
    id: 1,
    serialNumber: 1234,
    isNew: true,
    photo: 'https://2e.ua/wp-content/uploads/2023/07/2E-B2423B-01.UA-1.jpg',
    title: 'Monitor 2E',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: new Date('2017-06-29T12:09:33'),
      end: new Date('2019-06-29T12:09:33'),
    },
    price: [
      { value: 100, symbol: 'USD', isDefault: false },
      { value: 2600, symbol: 'UAH', isDefault: true },
    ],
    order: 4,
    date: new Date('2017-06-29T12:09:33'),
  },
  {
    id: 2,
    serialNumber: 1235,
    isNew: true,
    photo: 'https://hotline.ua/img/tx/383/3830948005.jpg',
    title: 'Laptop Microsoft',
    type: 'Laptops',
    specification: 'Specification 2',
    guarantee: {
      start: new Date('2018-06-29T12:09:33'),
      end: new Date('2020-06-29T12:09:33'),
    },
    price: [
      { value: 500, symbol: 'USD', isDefault: false },
      { value: 13500, symbol: 'UAH', isDefault: true },
    ],
    order: 3,
    date: new Date('2018-06-29T12:09:33'),
  },
  {
    id: 3,
    serialNumber: 1236,
    isNew: false,
    photo: 'https://i5.walmartimages.com/seo/2022-Apple-10-9-inch-iPad-Wi-Fi-64GB-Pink-10th-Generation_4fdae443-4f60-4a3e-9efe-12758bf5f128.f4d7333626b4e6b27e8be25d1f698373.jpeg',
    title: 'Ipad',
    type: 'Tablets',
    specification: 'Specification 3',
    guarantee: {
      start: new Date('2019-06-29T12:09:33'),
      end: new Date('2021-06-29T12:09:33'),
    },
    price: [
      { value: 300, symbol: 'USD', isDefault: false },
      { value: 8000, symbol: 'UAH', isDefault: true },
    ],
    order: 3,
    date: new Date('2019-06-29T12:09:33'),
  },
  {
    id: 4,
    serialNumber: 1237,
    isNew: true,
    photo: 'https://img.mta.ua/image/cache/data/foto/z492/492981/photos/Apple-iPhone-13-128GB-60-Starlight-01-600x600.jpg',
    title: 'Iphone 13',
    type: 'Smartphones',
    specification: 'Specification 4',
    guarantee: {
      start: new Date('2020-06-29T12:09:33'),
      end: new Date('2022-06-29T12:09:33'),
    },
    price: [
      { value: 200, symbol: 'USD', isDefault: false },
      { value: 5400, symbol: 'UAH', isDefault: true },
    ],
    order: 3,
    date: new Date('2020-06-29T12:09:33'),
  },
  {
    id: 5,
    serialNumber: 1238,
    isNew: false,
    photo: 'https://hotline.ua/img/tx/248/2482866685.jpg',
    title: 'Apple Watch 5',
    type: 'Smartwatches',
    specification: 'Specification 5',
    guarantee: {
      start: new Date('2021-06-29T12:09:33'),
      end: new Date('2023-06-29T12:09:33'),
    },
    price: [
      { value: 150, symbol: 'USD', isDefault: false },
      { value: 4000, symbol: 'UAH', isDefault: true },
    ],
    order: 3,
    date: new Date('2021-06-29T12:09:33'),
  },
  {
    id: 6,
    serialNumber: 1239,
    isNew: true,
    photo: 'https://www.punchtechnology.co.uk/wp-content/uploads/2024/02/vida2-1.jpg',
    title: 'Gaming PC',
    type: 'Desktops',
    specification: 'Specification 6',
    guarantee: {
      start: new Date('2022-06-29T12:09:33'),
      end: new Date('2024-06-29T12:09:33'),
    },
    price: [
      { value: 800, symbol: 'USD', isDefault: false },
      { value: 21500, symbol: 'UAH', isDefault: true },
    ],
    order: 4,
    date: new Date('2022-06-29T12:09:33'),
  },
  {
    id: 7,
    serialNumber: 1240,
    isNew: false,
    photo: 'https://i.citrus.world/imgcache/size_800/uploads/shop/9/d/9d8de5d1ffa438b8cd496b11aa6939a7.jpg',
    title: 'Monitor Xiaomi',
    type: 'Monitors',
    specification: 'Specification 7',
    guarantee: {
      start: new Date('2016-06-29T12:09:33'),
      end: new Date('2018-06-29T12:09:33'),
    },
    price: [
      { value: 120, symbol: 'USD', isDefault: false },
      { value: 3200, symbol: 'UAH', isDefault: true },
    ],
    order: 2,
    date: new Date('2016-06-29T12:09:33'),
  },
  {
    id: 8,
    serialNumber: 1241,
    isNew: true,
    photo: 'https://m.media-amazon.com/images/I/31jA5LDJdoL._SL550_.jpg',
    title: 'MacBook',
    type: 'Laptops',
    specification: 'Specification 8',
    guarantee: {
      start: new Date('2015-06-29T12:09:33'),
      end: new Date('2017-06-29T12:09:33'),
    },
    price: [
      { value: 600, symbol: 'USD', isDefault: false },
      { value: 16000, symbol: 'UAH', isDefault: true },
    ],
    order: 2,
    date: new Date('2015-06-29T12:09:33'),
  },
  {
    id: 9,
    serialNumber: 1242,
    isNew: false,
    photo: 'https://m.media-amazon.com/images/I/51m6nUlDXoL._AC_UF894,1000_QL80_.jpg',
    title: 'Tablet Samsung',
    type: 'Tablets',
    specification: 'Specification 9',
    guarantee: {
      start: new Date('2014-06-29T12:09:33'),
      end: new Date('2016-06-29T12:09:33'),
    },
    price: [
      { value: 350, symbol: 'USD', isDefault: false },
      { value: 9000, symbol: 'UAH', isDefault: true },
    ],
    order: 1,
    date: new Date('2014-06-29T12:09:33'),
  },
  {
    id: 10,
    serialNumber: 1243,
    isNew: true,
    photo: 'https://hotline.ua/img/tx/260/2604053655.jpg',
    title: 'Samsung S21',
    type: 'Smartphones',
    specification: 'Specification 10',
    guarantee: {
      start: new Date('2013-06-29T12:09:33'),
      end: new Date('2015-06-29T12:09:33'),
    },
    price: [
      { value: 250, symbol: 'USD', isDefault: false },
      { value: 6800, symbol: 'UAH', isDefault: true },
    ],
    order: 1,
    date: new Date('2013-06-29T12:09:33'),
  },
  {
    id: 11,
    serialNumber: 1244,
    isNew: false,
    photo: 'https://hotline.ua/img/tx/397/3978457185.jpg',
    title: 'Apple Watch 8',
    type: 'Smartwatches',
    specification: 'Specification 11',
    guarantee: {
      start: new Date('2012-06-29T12:09:33'),
      end: new Date('2014-06-29T12:09:33'),
    },
    price: [
      { value: 180, symbol: 'USD', isDefault: false },
      { value: 5000, symbol: 'UAH', isDefault: true },
    ],
    order: 1,
    date: new Date('2012-06-29T12:09:33'),
  },
  {
    id: 12,
    serialNumber: 1245,
    isNew: true,
    photo: 'https://maingear.com/wp-content/uploads/mg-1-geforce-hero.webp',
    title: 'Gaming PC',
    type: 'Desktops',
    specification: 'Specification 12',
    guarantee: {
      start: new Date('2011-06-29T12:09:33'),
      end: new Date('2013-06-29T12:09:33'),
    },
    price: [
      { value: 900, symbol: 'USD', isDefault: false },
      { value: 24500, symbol: 'UAH', isDefault: true },
    ],
    order: 2,
    date: new Date('2011-06-29T12:09:33'),
  },
]

export default products
