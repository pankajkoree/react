const Button = ({ imageURL, imageText }) => {
  return (
    <button title={imageText}>
      <img src={imageURL} alt="button" />
    </button>
  );
};

export default Button;
