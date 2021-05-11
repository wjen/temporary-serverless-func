const result = document.querySelector('.result');
const fetchProducts = async () => {
  const id = window.location.search;
  result.innerHTML = `<h2>Loading...</h2>`;
  try {
    // const { data } = await axios.get(`/api/3-product${id}`);
    const { data } = await axios.get(`/api/3-z-complete${id}`);

    const {
      fields: { price, desc, image, name },
    } = data;
    result.innerHTML = `  
    <h1 class="title">${name}</h1>
    <article class="product">
      <img class="product-img"
      src=${image[0].url}
      alt=${name}
      />
      <div class="product-info">
        <h5 class="title">${name}</h5>
        <h5 class="price">${price}</h5>
        <p class="desc">${desc}</p>
      </div>
    </article>`;
  } catch (error) {
    result.innerHTML = `<h4>${error.response.data}</h4>`;
  }
};

fetchProducts();
