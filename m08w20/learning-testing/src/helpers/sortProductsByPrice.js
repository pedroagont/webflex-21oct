const sortProductsByPrice = (products) => {
  const sortedProducts = [...products].sort((a, b) => a.price - b.price);
  return sortedProducts;
};

export default sortProductsByPrice;
