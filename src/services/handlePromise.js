import {
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
} from "../assets/";

const data = [
  {
    id: "1",
    title: "Au Revor T Shirt",
    description:
      "Donec sollicitudin molestie malesuada. Donec sollicitudin molestie malesuada. Vivamus magna justo, lacinia.",
    price: 15,
    pictureUrl: product1,
  },

  {
    id: "2",
    title: "Black Graphic T Shirt",
    description:
      "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.",
    price: 30,
    pictureUrl: product2,
  },

  {
    id: "3",
    title: "Black Text T Shirt",
    description:
      "Nulla quis lorem ut libero malesuada feugiat. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat.",
    price: 20,
    pictureUrl: product3,
  },

  {
    id: "4",
    title: "Black and White Striped Pants",
    description:
      "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada.",
    price: 50,
    pictureUrl: product4,
  },

  {
    id: "5",
    title: "Evening Text Shirt",
    description:
      "Donec sollicitudin molestie malesuada. Sed porttitor lectus nibh.",
    price: 20,
    pictureUrl: product5,
  },

  {
    id: "6",
    title: "Floral Shirt",
    description: "Sed porttitor lectus nibh. Sed porttitor lectus.",
    price: 70,
    pictureUrl: product6,
  },
];

const getProducts = new Promise((resolve) => {
  setTimeout(() => {
    resolve(data);
  }, 2000);
});

export default getProducts;
