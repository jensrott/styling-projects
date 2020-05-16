const url = "https://randomuser.me/api/";
const images = document.querySelectorAll(".card-image");

images.forEach(image => {
  axios.get(url).then(data => {
    data.data.results.forEach(result => {
      image.src = result.picture.thumbnail;
    });
  });
});
