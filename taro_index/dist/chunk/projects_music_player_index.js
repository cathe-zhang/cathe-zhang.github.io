(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"97":function(e,n,t){"use strict";t.r(n);var o=t(98),r=t(1),i=t(2),c=t.n(i),l=t(9),a=t(101),u=function(){function defineProperties(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,n,t){return n&&defineProperties(e.prototype,n),t&&defineProperties(e,t),e}}();function _possibleConstructorReturn(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}var p=function(e){function Index(){var e,n,t;!function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,Index);for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return n=t=_possibleConstructorReturn(this,(e=Index.__proto__||Object.getPrototypeOf(Index)).call.apply(e,[this].concat(r))),t.config={"navigationBarTitleText":""},t.state={},_possibleConstructorReturn(t,n)}return function _inherits(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(Index,r["a"].Component),u(Index,[{"key":"componentWillMount","value":function componentWillMount(){}},{"key":"componentDidMount","value":function componentDidMount(){var e=this;Object(o.a)({"method":"GET","url":"http://localhost:3000/playlist/detail?id=24381616"}).then(function(n){console.log(n),e.setState({"playlist":n.data.playlist})})}},{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(e,n){}},{"key":"componentWillUnmount","value":function componentWillUnmount(){}},{"key":"componentDidShow","value":function componentDidShow(){}},{"key":"componentDidHide","value":function componentDidHide(){}},{"key":"componentDidCatchError","value":function componentDidCatchError(){}},{"key":"componentDidNotFound","value":function componentDidNotFound(){}},{"key":"render","value":function render(){var e=this;return c.a.createElement(l.a,null,this.state.playlist&&this.state.playlist.map(function(n,t){return c.a.createElement(a.a,{"title":"sdfsfd","arrow":"right","onClick":function onClick(){return e.handleClick(n.url,n.type)}})}))}}]),Index}();n.default=p}}]);