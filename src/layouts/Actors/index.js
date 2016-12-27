import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"

const limitPerPage = 2

class Actors extends React.PureComponent {
  static propTypes = {
    params: PropTypes.object.isRequired,
  }
  static contextTypes = {
    collection: PropTypes.array.isRequired,
  }
  render() {
    let { location: { query: { page } } } = this.props;
    page = !page ? 0 : page - 1;
    const allActors = enhanceCollection(this.context.collection, {
      filter: { type: "Actor" },
      sort: "title",
    })
    const total = allActors.length
    const index = limitPerPage * page
    const actors = allActors.slice(index, index + limitPerPage)
    return (
      <div id="actors">
        <div className="actors-grid">
        </div>
        {
          (total / limitPerPage) > 0 &&
            <div></div>
        }
      </div>
    )
  }

}

export default Actors
