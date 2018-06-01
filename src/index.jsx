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
      cb,
      lock,
    } = this.props;

    const scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;  // 滚动高度

    const clientHeight = document.documentElement.clientHeight; // 可视区高度

    const scrollHeight = document.documentElement.scrollHeight; // 页面总高度

    if (
      scrollHeight - threshold <= scrollTop + clientHeight &&
      !lock
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
    } = this.props;

    return (
      <div>
        {this.props.children}

        {
          hasMore ? <div>
            加载中...
          </div> : <div> 没有更多了 </div>
        }
      </div>
    )
  }
}

LoadMore.defaultProps = {
  threshold: 0, // 阈值
  timer: 100, // 节流函数 timer
  lock: false,  // 锁，为了控制滚动加载而设置
  cb: function() {},  // callback
  hasMore: false,
}

LoadMore.propTypes = {
  threshold: PropTypes.number,
  timer: PropTypes.number,
  lock: PropTypes.bool,
  cb: PropTypes.func,
};
