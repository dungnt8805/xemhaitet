import React, { PropTypes } from "react"
import Link from "phenomic/lib/Link"
import Post from "../Post"

const Vouchers = ({ vouchers, archive }) => {
  return (
    <div id="vouchers" className="col-xs-12">
      <h2 className="section-title">
        { archive ? "Bài viết" : "Tin giảm giá" }
      </h2>
      <div className="grid">
        {
          vouchers.map((voucher) => (
            <Post post={ voucher } key={ voucher.__url }/>
          ))
        }
      </div>
      { !archive &&
        <p className="more-from-category">
          <Link to="/vouchers" title="mã giảm giá">
            { "Xem thêm mã giảm giá" }
          </Link>
        </p>
      }
    </div>
  )
}

Vouchers.propTypes = {
  vouchers: PropTypes.array.isRequired,
  archive: PropTypes.boolean,
}

export default Vouchers