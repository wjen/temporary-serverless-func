const result = document.querySelector(".result");

const fetchItems = async () => {
  try {
    const { data } = await axios.get("/api/2-basic-api");
    console.log(data);
    let products = data
      .map((item) => {
        const {
          image: { url },
          id,
          name,
          price,
        } = item;
        return `
          <article class="product">
            <img
              src=${url}
              alt=${name}
            />
            <div class="info">
              <h5>${name}</h5>
              <h5 class="price">$${price}</h5>
            </div>
          </article>`;
      })
      .join("");
    result.innerHTML = products;
  } catch (error) {
    result.innerHTML = `<h4>Theres an error</h4>`;
  }
};

fetchItems();
