
function Card(key) {
    return (
      <div className="card" key={key}>
        <img
          src="https://www.cnet.com/a/img/resize/b81ab3684470df1e57cf2523ef3a7d888c0cbff7/hub/2023/09/18/031f45e3-d1b7-490d-8765-af47213b5093/iphone15-pro-79.jpg?auto=webp&fit=crop&height=576&width=768"
          alt="iphone image"
        />
        <div className="card-content">
          <h3>Iphone 13</h3>
          <p>Apple</p>
          <p>
            <b>₹ 599</b>
          </p>
        </div>
      </div>
    );
  }

  export default Card