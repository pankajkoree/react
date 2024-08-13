import "./style.css";



function Card(key,imageURL,category,heading,price) {

  return (
    <div className="card" key={key}>
      <img
        src={imageURL}
        alt="iphone image"
      />
      <div className="card-content">
        <h3>{heading}</h3>
        <p>{category}</p>
        <p>
          <b>${price}</b>
        </p>
      </div>
    </div>
  );
}

export default Card;
