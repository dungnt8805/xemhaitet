import React, { PropTypes } from "react"
import Link from "phenomic/lib/Link"

const Reviews = ({ reviews }) => {
  return (
    <div id="reviews" className="col-xs-12">
      <h2 className="section-title">
        { "Review mua sắm" }
      </h2>
      <div className="grid">
        {
          reviews.map((review) => (
            <article id={ review.__url } className="hentry block post type-post clearfix entry col-md-4 col-xs-6" key={ review.__url }>
              <Link to={ review.__url } title={ review.title } className="entry-thumbnail">
                <img src={ review.thumbnail } alt={ review.title }/>
              </Link>
              <h2 className="entry-title">
                <Link to={ review.__url } rel="bookmark" title={ review.title }>
                  { review.title }
                </Link>
              </h2>
              <div className="entry-meta">
                  <span className="entry-date">
                    <i className="fa fa-clock-o"></i>&nbsp;
                    { new Date(review.date).toLocaleDateString() }
                  </span>
              </div>
              <div className="entry-summary hidden">
                { review.description }
              </div>
            </article>
          ))
        }
      </div>
      <p className="more-from-category">
        <Link to="/reviews" title="review mua hàng">
          { "Xem thêm reviews" }
        </Link>
      </p>
    </div>
  )
}

Reviews.propTypes = {
  reviews: PropTypes.array.isRequired,
}

export default Reviews