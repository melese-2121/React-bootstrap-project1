const products = [
  {
    id: 1,
    name: "sunglass",
    imageURL:
      "https://cdn.eyemyeye.com/shared/images/products/S12A2001/S12A2001-1.jpg",
    description: "the description of sunglass will be writen here...",
    price: 4.2,
  },
  {
    id: 2,
    name: "Modern camera",
    imageURL:
      "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX1456835.jpg",
    description: "The description of modern camera will be writen here...",
    price: 30,
  },
  {
    id: 3,
    name: "Modern computer",
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDHDOuewUMzwCzWiqWE1JnW1wDpfm_Ap2ZaA&usqp=CAU",
    description: "The description of modern computer will be writen here...",
    price: 345.99,
  },
  {
    id: 4,
    name: "Modern smart phone",
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPriAGQqs_CcZkQpvo4WAUvfLe5tz6h_zUghUl68hg3Bj9tWouGW3wKEY4Sx8zHCuDeLc&usqp=CAU",
    description:
      "The description of modern smart phone will be written here...",
    price: 100,
  },
];

const getProductData = (id) => {
  const productData = products.find((product) => product.id === id);
  if (productData === undefined) {
    console.log("Product with id: " + id + " is not found!");
    return undefined;
  } else {
    return productData;
  }
};

export { products, getProductData };
