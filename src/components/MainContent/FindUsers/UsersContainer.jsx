import React from "react";
import {connect} from "react-redux";
import {
  follow, getFollowThunkCreator,
  getUnfollowThunkCreator,
  getUsersThunkCreator,
  setCurrentPage,
  unfollow
} from "../../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../../common/preloader/preloader";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {
  getCurrentPage, getIsFetching,
  getPageSize, getSuperUsers,
  getTotalUsersCount,
  getUsers
} from "../../../redux/users-selectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    const {currentPage, pageSize} = this.props;
    this.props.getUsers(currentPage, pageSize)
  }

  onPageChanged = (pageNumber) => {
    const pageSize = this.props;
    this.props.getUsers(pageNumber, pageSize);
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader/> :
          <Users onPageChanged={this.onPageChanged}
                 totalUsersCount={this.props.totalUsersCount}
                 currentPage={this.props.currentPage}
                 pageSize={this.props.pageSize} users={this.props.users}
                 getUnfollow={this.props.getUnfollow}
                 getFollow={this.props.getFollow}
          />}
      </>
    )
  }
}

let AuthRedirectComponent = withAuthRedirect(UsersContainer);

const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
  }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    getUsers: getUsersThunkCreator,
    getUnfollow: getUnfollowThunkCreator,
    getFollow: getFollowThunkCreator,
  }
)(AuthRedirectComponent);
