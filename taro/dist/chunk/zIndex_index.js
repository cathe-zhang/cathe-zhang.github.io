(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"114":function(e,t,n){"use strict";n.r(t);var o=n(115),a=n(1),c=n(86),r=n(2),l=n.n(r),i=n(10),s=n(116),u=n(21),m=n(124),f=(n(89),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}());var p=function(e){function Index(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Index);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Index.__proto__||Object.getPrototypeOf(Index)).apply(this,arguments));return e.config={"navigationBarTitleText":"首页"},e.queryDataList=function(){var t=e;Object(o.a)({"method":"POST","url":"https://www.easy-mock.com/mock/5ccfd2debe0beb391e751829/zhihu/index/hotlist","success":function success(e){console.log(e),t.setState({"list":t.state.list.concat(e.data.data.list)})}})},e.onScroll=function(){console.log("scroll")},e.scrollToBottom=function(){console.log("滚动到底部"),e.queryDataList()},e.state={"list":[]},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Index,a["a"].Component),f(Index,[{"key":"componentWillMount","value":function componentWillMount(){}},{"key":"componentWillReact","value":function componentWillReact(){console.log("componentWillReact")}},{"key":"componentDidMount","value":function componentDidMount(){this.queryDataList()}},{"key":"render","value":function render(){this.props.counterStore.counter;return l.a.createElement(i.a,{"className":"index-container"},l.a.createElement(i.a,{"className":"search-bar"},l.a.createElement(m.a,null)),l.a.createElement(s.a,{"className":"scrollview","scrollY":!0,"scrollWithAnimation":!0,"lowerThreshold":50,"onScroll":this.onScroll,"onScrollToLower":this.scrollToBottom},this.state.list&&this.state.list.length>0?l.a.createElement(i.a,{"className":"list"},this.state.list.map(function(e,t){return l.a.createElement(i.a,{"className":"item"},l.a.createElement(i.a,{"className":"left"},l.a.createElement(i.a,{"className":"index"}),l.a.createElement(i.a,{"className":"main"},l.a.createElement(i.a,{"className":"title"},e.title),l.a.createElement(i.a,{"className":"hot"},e.hot,"热度"))),l.a.createElement(i.a,{"className":"image"}))})):null))}},{"key":"componentDidShow","value":function componentDidShow(){}},{"key":"componentDidHide","value":function componentDidHide(){}}]),Index}();p=c.__decorate([Object(u.b)("counterStore"),u.c],p),t.default=p},"89":function(e,t,n){}}]);