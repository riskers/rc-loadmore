import React from 'react';
import debounce from 'lodash.debounce';
import PropTypes from 'prop-types';

export default
class LoadMore extends React.Component {
  constructor(props) {
    super(props);
  }

  onScroll = () => {
    const {
      threshold,
      disabled,
      cb,
    } = this.props;

    const scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;  // 滚动高度

    const clientHeight = document.documentElement.clientHeight; // 可视区高度

    const scrollHeight = document.documentElement.scrollHeight; // 页面总高度

    if (
      scrollHeight - threshold <= scrollTop + clientHeight &&
      !disabled
    ) {
      cb();
    }
  }

  componentDidMount() {
    const {
      timer,
    } = this.props;

    window.onscroll = debounce(() => {
      this.onScroll();
    }, timer)
  }

  componentWillUnmount() {
    window.onscroll = null;
  }

  render() {
    const {
      hasMore,
      loadingContent,
      noMoreContent,
    } = this.props;

    return (
      <div>
        {this.props.children}

        {
          hasMore ? loadingContent : noMoreContent
        }
      </div>
    )
  }
}

LoadMore.defaultProps = {
  threshold: 0, // 阈值
  timer: 100, // 节流函数 timer
  disabled: false,  // 锁，为了控制滚动加载而设置
  hasMore: false,
  loadingContent: <div> loading...</div>,
  noMoreContent: <div> nomore </div>,
  cb: function() {},  // callback for scroll end
}

LoadMore.propTypes = {
  threshold: PropTypes.number,
  timer: PropTypes.number,
  disabled: PropTypes.bool,
  hasMore: PropTypes.bool,
  loadingContent: PropTypes.node,
  noMoreContent: PropTypes.node,
  cb: PropTypes.func,
};
