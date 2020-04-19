export interface IProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  status: boolean;
  images: IProductImage[];
  rating?: number | null;
  feedbacks?: IFeedback;
  subCategory?: string;
}

export interface IFeedback {
  rate: number;
  advantages: string;
  limitations: string;
  description: string;
}

export interface IProductImage {
  url: string;
  source: string;
}

export const product = {
  _id: '5e4d5abd3829ab5fadc3c908',
  description:
    'Детское автокресло Concord Air Safe имеет расцветку, в которой сочетаются бордово-вишневый, томатно-красный и классический черный цвета. Кресло предназначено для обеспечения безопасности в дороге младенцу с рождения до 18 месяцев. Вес ребенка при использовании кресла ограничивается 13 кг. Устройство крепится спиной по ходу движения при помощи штатного ремня безопасности. Боковая защита обеспечивается довольно высокими бортиками. Трехточечные ремни безопасности с мягкими поролоновыми вкладками надежно фиксируют младенца, обеспечивая ему при этом безупречный комфорт. Регулировка высоты ремней и высоты подголовника позволяют автолюльке подстраиваться под потребности растущего младенца.  Concord Air Safe оснащено ручкой для переноски, защитным козырьком от солнца и съемным чехлом, который можно легко снять и постирать в любой момент. Благодаря продуманной конструкции кресло безукоризненно защищает ребенка в дороге и обеспечивает ему комфорт даже в длительной поездке.',
  feedbacksCount: 2,
  images: [
    {
      url:
        'https://c.dns-shop.ru/thumb/st1/fit/0/0/cbbd7a7242734005192e41d82deb72cb/503ed220559bfbb942c8af205ae4d80a13971d91fe4ff047d58391e7307ce526.jpg',
      source: '503ed220559bfbb942c8af205ae4d80a13971d91fe4ff047d58391e7307ce526.jpg',
    },
  ],
  name: 'Детское автокресло Concord Air Safe красный',
  price: 12999,
  rating: 3.5,
  status: true,
  subCategory: '5e4d5abd3829ab5fadc39a47',
};
