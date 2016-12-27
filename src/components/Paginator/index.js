import React, { PropTypes } from "react"
import Link from "phenomic/lib/Link"

const Paginator = ({ current, total, uri }) => {
  const rows = [];
  for (let i = 1; i <= total; i++) {
    rows.push(i);
  }
  return (
    <ul className="pagination">
      {
        rows.map((row) => (
          <li key={ row }>
            <Link to={ "/" + uri + "page=" + row }>{ row }</Link>
          </li>
        ))
      }
    </ul>
  )
}

Paginator.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  uri: PropTypes.string.isRequired,
}

export default Paginator
