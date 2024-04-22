const Button = ({ imageURL, onClick, children }) => {
  return (
    <button className="button" title={children} onClick={onClick}>
      {children}
      <img src={imageURL} alt={children} />
    </button>
  );
};

export default Button;
