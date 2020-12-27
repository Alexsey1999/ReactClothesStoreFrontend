export interface ILink {
  category: string
  url: string
}

const links: ILink[] = [
  { category: 'Футболки', url: 't-shirts' },
  { category: 'Рубашки', url: 'shirts' },
  { category: 'Худи', url: 'hoodies' },
  { category: 'Свитшоты', url: 'sweatshirts' },
  { category: 'Шапки', url: 'hats' },
  { category: 'Кепки', url: 'caps' },
  { category: 'Поло', url: 'polo' },
  { category: 'Рюкзаки', url: 'bags' },
  { category: 'Сувениры', url: 'souvenirs' },
  { category: 'FAQ', url: 'faq' },
]
export default links
