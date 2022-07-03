import faker from 'faker-br';

export default {
  products: (option) => {
    switch (option) {
    case 'valid':
      return {
        code: 12,
        description: 'Macbook pro retina 2020',
        buyPrice: 4000,
        sellPrice: 8000,
        tags: ['tecnologia', 'Apple', 'computador'],
      };
    case 'random':
      return {
        code: faker.random.number(100),
        description: faker.commerce.productName(),
        buyPrice: faker.commerce.price(),
        sellPrice: faker.finance.amount(),
        tags: [faker.commerce.product(), faker.commerce.productAdjective(), faker.commerce.productMaterial()],
      };
    default:
      return `A opcao ${option} nao existe!`;
    }
  },
};
