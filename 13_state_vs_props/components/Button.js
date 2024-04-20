const Button = ({ imageURL, imageText, onClick }) => {
  return (
    <button title={imageText} onClick={onClick}>
      <img src={imageURL} alt={imageText} />
    </button>
  );
};

export default Button;
