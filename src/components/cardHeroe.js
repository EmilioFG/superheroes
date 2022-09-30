import heart from '../assets/images/medium-heart.svg';
import mediumFilledHeart from '../assets/images/medium-filled-heart.svg';
import fist from '../assets/images/fist.svg';


export const CardHeroe = ({
  id,
  name,
  powerstats,
  fullName,
  images,
}) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 card">
      <div className="card__content" >
        <div className="container">
          <div className="row">
            <div className="col">
              <div
                className="card__content-image"
                style={{ background: `url(${images.md}) center center / cover no-repeat padding-box padding-box` }}
              >
                <button
                  className="card__content-image-heart"
                  // onClick={() => handleLiked(id)}
                >
                  <a href="#recently">
                    <img
                      src={(true) ? mediumFilledHeart : heart}
                      alt="heart"
                      height="12"
                      width="12"
                    />
                  </a>
                </button>
              </div>
            </div>
            <div className="col">
              <div className="card__content-information">
                <h4>{name}</h4>
                <span>Real Name: {fullName}</span>
                <br />
                <span>
                  <img
                    src={fist}
                    alt="heart"
                    height="15"
                    width="15"
                  />
                  {powerstats} / 10
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* {itIsTheLast && (
          <div className="card__content-recently" id="recently">Liked recently</div>
        )} */}
      </div>
    </div>
  )
}