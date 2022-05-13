const Img = () => (
  <svg
    className="bd-placeholder-img bd-placeholder-img-lg img-fluid card-img-top"
    width="100%"
    height="250"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Placeholder: Responsive image"
    preserveAspectRatio="xMidYMid slice"
    focusable="false"
  >
    <title>Placeholder</title>
    <rect width="100%" height="100%" fill="#868e96"></rect>
    <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
      Responsive image
    </text>
  </svg>
);

const Cards = () => {
  return (
    <>
      <div className="row mb-4 cards row-cols-4 align-start">
        <div className="col">
          <div className="card">
            <img src="naturfotografie.jpg" className="card-img-top" alt="..." />
            {/* <Img /> */}
            <div className="card-body">
              <h3 className="card-title">Card title</h3>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-default">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Card title</h3>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-default">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card bg-white">
            <img
              src="naturfotografie-naturfotograf-tipps-2.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h3 className="card-title">Card title</h3>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Some quick example text to build
                on the card title and make up the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-default">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">
                Very very very very very very very long card title
              </h3>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Some quick example text to build
                on the card title and make up the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-default">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-4 cards align-end">
        <div className="col-4">
          <div className="card">
            <img src="naturfotografie.jpg" className="card-img-top" alt="..." />
            {/* <Img /> */}
            <div className="card-body">
              <h3 className="card-title">Card title</h3>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-default">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">
                Very very very very very very very long card title
              </h3>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-default">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card bg-white">
            <img
              src="naturfotografie-naturfotograf-tipps-2.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h3 className="card-title">Card title</h3>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Some quick example text to build
                on the card title and make up the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-default">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
