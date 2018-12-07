import React from "react"
import { connect } from "react-redux"

import * as selectors from "../redux/user/selectors"
import * as effects from "../redux/user/effects"

const UserSection = ({ name, description, starred, onClick, isFetching }) => (
  <div>
    <h1>
      {name}
      <div style={{ display: "inline" }}>
        <span onClick={onClick} style={{ cursor: "pointer" }}>
          {starred
            ? <img src="/images/baseline-star-24px.svg" alt="starred" />
            : <img src="/images/baseline-star_border-24px.svg" alt="unstarred" />}
        </span>

        {isFetching
          ? <span className="saving"><span>.</span><span>.</span><span>.</span></span>
          :false}
      </div>
    </h1>
    <p>{description}</p>
  </div>
)

const mapStateToProps = state => ({
  name: selectors.getFullName(state),
  description: selectors.getDescription(state),
  starred: selectors.getStarState(state),
  isFetching: selectors.getFetchingState(state),
})

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(effects.toggleUserStar()),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserSection)
