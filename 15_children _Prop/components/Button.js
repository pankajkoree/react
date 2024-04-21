const Button = ({ imageURL, imageText, onClick, children }) => {
  console.log(children)
  return (
    <button title={imageText} onClick={onClick}>
      {imageText}
      <img src={imageURL} alt={imageText} />
    </button>
  );
};

export default Button;
