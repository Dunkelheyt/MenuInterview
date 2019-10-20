import React, { Component } from "react";
import BoxContents from "./BoxContents";
import InfiniteScroll from "react-infinite-scroller";
import { connect } from "react-redux";
import { fetchData } from "./actions";
import { fetchMoreData } from "./actions";

class Box extends Component {
  componentDidMount() {
    this.props.onFetchData();
  }

  componentDidUpdate() {
    this.props.onFetchMoreData();
  }

  render() {
    return (
      <div className="container text-center">
        <InfiniteScroll
          pageStart={0}
          loadMore={this.FetchMoreData}
          hasMore={true}
          loader={
            <div className="loader" key={0}>
              {this.props.error2 && <p>{this.props.error2}</p>}
            </div>
          }
          useWindow={false}
        >
          {this.props.error && <p>{this.props.error}</p>}
          {this.props.data && (
            <div class="row">
              {this.props.data.map((data, index) => {
                return (
                  <BoxContents
                    img={data.img}
                    desc={data.name}
                    num={data.id}
                    title={data.name}
                    desc2={data.desc}
                    value1={data.small}
                    value2={data.medium}
                    value3={data.big}
                  ></BoxContents>
                );
              })}
            </div>
          )}
        </InfiniteScroll>
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return { num: state.num, data: state.data, error: state.error };
};

const mapDispatchtoProps = dispatch => {
  return {
    onFetchData: () => dispatch(fetchData()),
    onFetchMoreData: () => dispatch(fetchMoreData())
  };
};

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(Box);
