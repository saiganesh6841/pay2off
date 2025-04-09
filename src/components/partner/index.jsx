import "./styles/style.scss";

function PartnerCard({ image, title, content }) {
  return (
    <div className="partner-card">
      <img src={image} alt="example" className="partner-card__image" />
      <h1 className="partner-card__title">{title}</h1>
      <p className="partner-card__description">{content}</p>
    </div>
  );
}

export default PartnerCard;
