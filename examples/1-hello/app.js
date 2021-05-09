const result = document.querySelector(".result");

const fetchData = async () => {
  try {
    // let { data } = await axios.get("/.netlify/functions/1-hello");
    let { data } = await axios.get("/api/1-hello");
    console.log(data);
    result.textContent = data;
  } catch (error) {
    result.textContent = error.response.data;
  }
};
fetchData();
