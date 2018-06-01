# rc-loadmore

a loadmore component for react

[demo](https://stackblitz.com/edit/rc-loadmore)

## install

```
npm install rc-loadmore
```

## Usage

```
<RcLoadMore
  threshold={200}
  cb={() => {
    console.log('trigger cb...')
  }}
>
  <div>
    {this.renderContent()}
  </div>
</RcLoadMore>
```

## API

| props | type | |
| ---| --- | -- |
| threshold | number | 触发 cb() 时，滚动到页面底部的距离 |
| timer | number | debounce 函数的 timer |
| disabled | boolean | 组件是否生效 |
| hasMore | boolean | 是否有更多内容，控制底部显示 |
| loadingContent | React.Node | hasMore === ture 时显示 |
| noMoreContent | React.Node | hasMore === false 时显示 |
| cb | function | 到底时触发的函数 |
