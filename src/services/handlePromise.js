export const data = [
  {
    id: "1",
    title: "Au Revor T Shirt",
    description:
      "Donec sollicitudin molestie malesuada. Donec sollicitudin molestie malesuada. Vivamus magna justo, lacinia.",
    price: 15,
    pictureUrl: "https://images2.imgbox.com/4b/ef/Tyk9tBA5_o.jpeg"
  },

  {
    id: "2",
    title: "Black Graphic T Shirt",
    description:
      "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.",
    price: 30,
    pictureUrl: 'https://images2.imgbox.com/10/a5/M3Se7exo_o.jpeg',
  },

  {
    id: "3",
    title: "Black Text T Shirt",
    description:
      "Nulla quis lorem ut libero malesuada feugiat. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat.",
    price: 20,
    pictureUrl: 'https://images2.imgbox.com/0e/f7/4PJM6PdY_o.jpeg',
  },

  {
    id: "4",
    title: "Black and White Striped Pants",
    description:
      "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada.",
    price: 50,
    pictureUrl: 'https://images2.imgbox.com/ed/0b/fYb0Ty6Y_o.jpeg',
  },

  {
    id: "5",
    title: "Evening Text Shirt",
    description:
      "Donec sollicitudin molestie malesuada. Sed porttitor lectus nibh.",
    price: 20,
    pictureUrl: 'https://images2.imgbox.com/23/40/YUTsVcYd_o.jpeg',
  },

  {
    id: "6",
    title: "Floral Shirt",
    description: "Sed porttitor lectus nibh. Sed porttitor lectus.",
    price: 70,
    pictureUrl: 'https://images2.imgbox.com/28/93/7cWeyUO5_o.jpeg',
  },
];

const getProducts = new Promise((resolve) => {
  setTimeout(() => {
    resolve(data);
  }, 2000);
});

export default getProducts;
