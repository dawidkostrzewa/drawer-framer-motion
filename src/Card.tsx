const Card = ({ title, text, imgSrc }: any) => {
    return (
      <div className="card-container">
        <img className="card-img" src={imgSrc} alt="placeholder" />
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{text}</p>
        </div>
      </div>
    );
  };
  
  export default Card;