const textsForPost = document.querySelector("#post-text");
let imageForPost = document.querySelector("#post-image");
const buttonForPost = document.querySelector("#post-button");
const card = document.querySelector(".card-section");
let cardTitle = document.querySelector(".postHeading");
let cardImage = document.querySelector(".postImage");
let likeButton = document.querySelector(".like-btn");
let commentInput = document.querySelector(".comment-input");
let likeCount = document.querySelector(".like-count");

buttonForPost.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(textsForPost.value);
  console.log(imageForPost.files[0]);
  cardTitle.textContent = textsForPost.value;
  if (imageForPost.files[0]) {
    imageForPost = URL.createObjectURL(imageForPost.files[0]);
    cardImage.src = imageForPost;
  }

  let likeCountNumber = parseInt(likeCount.textContent);
  likeButton.addEventListener("click", (e) => {
    likeCountNumber += 1;
    likeCount.textContent = likeCountNumber;
  });

  commentInput.addEventListener("input", () => {
    console.log(commentInput.value);
  });
});
