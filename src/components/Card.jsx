import Button from "./Button/Button";
const placeholder = "";

export default function Card({ title, children, img }) {
  return (
    <div className="col">
      <div className="d-flex justify-content-center p-3">
        <div className="card my-3">
          <img
            src={img || "https://placehold.co/600x400"}
            className="card-img-top img-fluid"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{children}</p>
            <Button></Button>
          </div>
        </div>
      </div>
    </div>
  );
}
