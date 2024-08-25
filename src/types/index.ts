export type ProductTypes =
  'All'
  | 'Monitors'
  | 'Laptops'
  | 'Tablets'
  | 'Smartphones'
  | 'Smartwatches'
  | 'Desktops'

export interface Product {
  id: number
  serialNumber: number
  isNew: boolean
  photo: string
  title: string
  type: ProductTypes
  specification: string
  guarantee: {
    start: Date
    end: Date
  }
  price: { value: number, symbol: string, isDefault: boolean }[]
  order: number
  date: Date
}

export interface Order {
  id: number
  title: string
  date: string
  description: string
  products: Product[]
}
