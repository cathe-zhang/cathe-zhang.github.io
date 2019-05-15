(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"105":function(e,t,n){"use strict";n(7);var o=n(2),r=n.n(o),i=n(5),a=n.n(i),c=(n(83),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}),s=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var l=function(e){function Image(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Image),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Image.__proto__||Object.getPrototypeOf(Image)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Image,r.a.Component),s(Image,[{"key":"render","value":function render(){var e=this.props,t=e.className,n=e.src,o=e.style,i=e.mode,s=e.onLoad,l=e.onError,u=function _objectWithoutProperties(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(e,["className","src","style","mode","onLoad","onError"]),p=a()("taro-img",{"taro-img__widthfix":"widthFix"===i},t),f="taro-img__mode-"+(i||"scaleToFill").toLowerCase().replace(/\s/g,"");return r.a.createElement("div",c({"className":p,"style":o},u),r.a.createElement("img",{"className":f,"src":n,"onLoad":s,"onError":l}))}}]),Image}();t.a=l},"106":function(e,t,n){},"108":function(e,t,n){},"110":function(e,t,n){},"112":function(e,t,n){},"123":function(e,t,n){"use strict";n.r(t);var o=n(1),r=n(2),i=n.n(r),a=n(10),c=n(105),s=(n(106),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}());var l=function(e){function Price(e){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Price);var t=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Price.__proto__||Object.getPrototypeOf(Price)).call(this,e));return t.config={"navigationBarTitleText":""},t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Price,o["a"].Component),s(Price,[{"key":"render","value":function render(){var e=Number(this.props.price).toFixed(2).toString(),t=e.indexOf("."),n=e.slice(0,t),o=e.slice(t+1);return i.a.createElement(a.a,{"className":"number "+this.props.size,"style":"color: "+this.props.color},i.a.createElement(a.a,{"className":"bill-icon"},"￥"),i.a.createElement(a.a,{"className":"integer-part"},n,"."),i.a.createElement(a.a,{"className":"decimal-part"},o))}}]),Price}(),u=(n(108),n(110),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}());var p=function(e){function Index(){!function numberSelector_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Index);var e=function numberSelector_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Index.__proto__||Object.getPrototypeOf(Index)).apply(this,arguments));return e.config={"navigationBarTitleText":""},e.state={},e}return function numberSelector_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Index,o["a"].Component),u(Index,[{"key":"componentWillMount","value":function componentWillMount(){}},{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(e,t){}},{"key":"componentWillUnmount","value":function componentWillUnmount(){}},{"key":"componentDidShow","value":function componentDidShow(){}},{"key":"componentDidHide","value":function componentDidHide(){}},{"key":"componentDidCatchError","value":function componentDidCatchError(){}},{"key":"componentDidNotFound","value":function componentDidNotFound(){}},{"key":"render","value":function render(){return i.a.createElement(a.a,{"className":"actions-area"},i.a.createElement(a.a,{"className":"action-btn","onClick":this.props.handleNumberMinus},"-"),i.a.createElement(a.a,{"className":"action-display-box"},this.props.count),i.a.createElement(a.a,{"className":"action-btn","onClick":this.props.handleNumberPlus},"+"))}}]),Index}(),f=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var m=function(e){function Index(){!function cartItem_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Index);var e=function cartItem_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Index.__proto__||Object.getPrototypeOf(Index)).apply(this,arguments));return e.config={"navigationBarTitleText":""},e.state={},e}return function cartItem_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Index,o["a"].Component),f(Index,[{"key":"componentWillMount","value":function componentWillMount(){}},{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(e,t){}},{"key":"componentWillUnmount","value":function componentWillUnmount(){}},{"key":"componentDidShow","value":function componentDidShow(){}},{"key":"componentDidHide","value":function componentDidHide(){}},{"key":"componentDidCatchError","value":function componentDidCatchError(){}},{"key":"componentDidNotFound","value":function componentDidNotFound(){}},{"key":"render","value":function render(){return i.a.createElement(a.a,{"className":"goods-item"},i.a.createElement(a.a,{"className":"goods-item-inner"},i.a.createElement(a.a,{"className":"left"},i.a.createElement(a.a,{"className":"select-icon 'selected'}"},i.a.createElement(a.a,{"className":"inner"})),i.a.createElement(c.a,{"className":"goods-img","src":this.props.goodsImg})),i.a.createElement(a.a,{"className":"right"},i.a.createElement(a.a,{"className":"right-inner"},i.a.createElement(a.a,{"className":"goods-name"},this.props.goodsName),i.a.createElement(a.a,{"className":"goods-type"},"型号：",this.props.sku[0]," 规格：",this.props.sku[1]),i.a.createElement(a.a,{"className":"price-n-actions"},i.a.createElement(a.a,{"className":"price-area"},i.a.createElement(a.a,{"className":"price-top"}),i.a.createElement(a.a,{"className":"price-bottom"},i.a.createElement(a.a,{"className":"price-bottom-left"},i.a.createElement(l,{"price":this.props.price,"size":"sm","color":"#ED2756"}),i.a.createElement(a.a,{"className":"original-price"},this.props.originalPrice)),i.a.createElement(p,{"count":this.props.count,"handleNumberMinus":this.props.handleNumberMinus,"handleNumberPlus":this.props.handleNumberPlus}))))))))}}]),Index}(),h=n(87),y=n(76),d=n.n(y),b=n(5),v=n.n(b),g=n(82),_=n.n(g),w=n(81),O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},k=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}var P=function(e){function AtNavBar(){return function nav_bar_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtNavBar),function nav_bar_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtNavBar.__proto__||Object.getPrototypeOf(AtNavBar)).apply(this,arguments))}return function nav_bar_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtNavBar,w["a"]),k(AtNavBar,[{"key":"handleClickLeftView","value":function handleClickLeftView(){var e;(e=this.props).onClickLeftIcon.apply(e,arguments)}},{"key":"handleClickSt","value":function handleClickSt(){var e;(e=this.props).onClickRgIconSt.apply(e,arguments)}},{"key":"handleClickNd","value":function handleClickNd(){var e;(e=this.props).onClickRgIconNd.apply(e,arguments)}},{"key":"render","value":function render(){var e=this.props,t=e.customStyle,n=e.className,r=e.color,c=e.fixed,s=e.border,l=e.leftIconType,u=e.leftText,p=e.title,f=e.rightFirstIconType,m=e.rightSecondIconType,y={"color":r},d={"customStyle":"","className":"","prefixClass":"at-icon","value":"","color":"","size":24},b=_()(l)?O({},d,l):O({},d,{"value":l}),g=v()(b.prefixClass,_defineProperty({},b.prefixClass+"-"+b.value,b.value),b.className),w=_()(f)?O({},d,f):O({},d,{"value":f}),k=v()(w.prefixClass,_defineProperty({},w.prefixClass+"-"+w.value,w.value),w.className),P=_()(m)?O({},d,m):O({},d,{"value":m}),C=v()(P.prefixClass,_defineProperty({},P.prefixClass+"-"+P.value,P.value),P.className);return i.a.createElement(a.a,{"className":v()({"at-nav-bar":!0,"at-nav-bar--fixed":c,"at-nav-bar--no-border":!s},n),"style":t},i.a.createElement(a.a,{"className":"at-nav-bar__left-view","onClick":this.handleClickLeftView.bind(this),"style":y},l&&i.a.createElement(h.a,{"className":g,"style":this.mergeStyle({"color":b.color,"fontSize":""+o.a.pxTransform(2*parseInt(b.size))},b.customStyle)}),i.a.createElement(h.a,{"className":"at-nav-bar__text"},u)),i.a.createElement(a.a,{"className":"at-nav-bar__title"},p),i.a.createElement(a.a,{"className":"at-nav-bar__right-view"},i.a.createElement(a.a,{"className":v()({"at-nav-bar__container":!0,"at-nav-bar__container--hide":!m}),"style":y,"onClick":this.handleClickNd.bind(this)},m&&i.a.createElement(h.a,{"className":C,"style":this.mergeStyle({"color":P.color,"fontSize":""+o.a.pxTransform(2*parseInt(P.size))},P.customStyle)})),i.a.createElement(a.a,{"className":v()({"at-nav-bar__container":!0,"at-nav-bar__container--hide":!f}),"style":y,"onClick":this.handleClickSt.bind(this)},f&&i.a.createElement(h.a,{"className":k,"style":this.mergeStyle({"color":w.color,"fontSize":""+o.a.pxTransform(2*parseInt(w.size))},w.customStyle)}))))}}]),AtNavBar}();P.defaultProps={"customStyle":"","className":"","fixed":!1,"border":!0,"color":"","leftIconType":"","leftText":"","title":"","rightFirstIconType":"","rightSecondIconType":"","onClickLeftIcon":function onClickLeftIcon(){},"onClickRgIconSt":function onClickRgIconSt(){},"onClickRgIconNd":function onClickRgIconNd(){}},P.propTypes={"customStyle":d.a.oneOfType([d.a.object,d.a.string]),"className":d.a.oneOfType([d.a.array,d.a.string]),"fixed":d.a.bool,"border":d.a.bool,"color":d.a.string,"leftIconType":d.a.oneOfType([d.a.string,d.a.object]),"leftText":d.a.string,"title":d.a.string,"rightFirstIconType":d.a.oneOfType([d.a.string,d.a.object]),"rightSecondIconType":d.a.oneOfType([d.a.string,d.a.object]),"onClickLeftIcon":d.a.func,"onClickRgIconSt":d.a.func,"onClickRgIconNd":d.a.func};n(112);var C=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var x=function(e){function Index(){!function listItem_cartItem_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Index);var e=function listItem_cartItem_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Index.__proto__||Object.getPrototypeOf(Index)).apply(this,arguments));return e.config={"navigationBarTitleText":""},e.handleBack=function(){o.a.navigateBack()},e.handleNumberMinus=function(){console.log("minus")},e.handleNumberPlus=function(){console.log("plus")},e.state={},e}return function listItem_cartItem_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Index,o["a"].Component),C(Index,[{"key":"componentWillMount","value":function componentWillMount(){}},{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(e,t){}},{"key":"componentWillUnmount","value":function componentWillUnmount(){}},{"key":"componentDidShow","value":function componentDidShow(){}},{"key":"componentDidHide","value":function componentDidHide(){}},{"key":"componentDidCatchError","value":function componentDidCatchError(){}},{"key":"componentDidNotFound","value":function componentDidNotFound(){}},{"key":"render","value":function render(){return i.a.createElement(a.a,null,i.a.createElement(P,{"onClickLeftIcon":this.handleBack,"color":"#000","title":"购物车item组件","leftIconType":"chevron-left"}),i.a.createElement(m,{"goodsImg":"https://avatars3.githubusercontent.com/u/8897063?s=460&v=4","goodsName":"商品名称商品名称商品名称商品名称商品名","topJsx":i.a.createElement(a.a,null,"这是一个jsx"),"price":"5.22","originalPrice":"10.00","sku":["型号111","规格222"],"count":2,"handleNumberMinus":this.handleNumberMinus,"handleNumberPlus":this.handleNumberPlus}))}}]),Index}();t.default=x},"76":function(e,t,n){e.exports=n(77)()},"77":function(e,t,n){"use strict";var o=n(78);function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,e.exports=function(){function shim(e,t,n,r,i,a){if(a!==o){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function getShim(){return shim}shim.isRequired=shim;var e={"array":shim,"bool":shim,"func":shim,"number":shim,"object":shim,"string":shim,"symbol":shim,"any":shim,"arrayOf":getShim,"element":shim,"elementType":shim,"instanceOf":getShim,"node":shim,"objectOf":getShim,"oneOf":getShim,"oneOfType":getShim,"shape":getShim,"exact":getShim,"checkPropTypes":emptyFunctionWithReset,"resetWarningCache":emptyFunction};return e.PropTypes=e,e}},"78":function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"79":function(e,t,n){var o=n(80);"string"==typeof o&&(o=[[e.i,o,""]]);var r={"sourceMap":!1,"insertAt":"top","hmr":!0,"transform":void 0,"insertInto":void 0};n(19)(o,r);o.locals&&(e.exports=o.locals)},"80":function(e,t,n){(e.exports=n(18)(!1)).push([e.i,".taro-text {\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.taro-text__selectable {\n  -moz-user-select: text;\n  -webkit-user-select: text;\n  -ms-user-select: text;\n  user-select: text;\n}",""])},"81":function(e,t,n){"use strict";n.d(t,"a",function(){return l});var o,r,i=n(1),a=(n(2),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}()),c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var s=function objectToString(e){if(e&&"object"===(void 0===e?"undefined":c(e))){var t="";return Object.keys(e).forEach(function(n){var o=n.replace(/([A-Z])/g,"-$1").toLowerCase();t+=o+":"+e[n]+";"}),t}return e&&"string"==typeof e?e:""},l=(r=o=function(e){function AtComponent(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtComponent),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtComponent.__proto__||Object.getPrototypeOf(AtComponent)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtComponent,i["a"].Component),a(AtComponent,[{"key":"mergeStyle","value":function mergeStyle(e,t){return e&&"object"===(void 0===e?"undefined":c(e))&&t&&"object"===(void 0===t?"undefined":c(t))?Object.assign({},e,t):s(e)+s(t)}}]),AtComponent}(),o.options={"addGlobalClass":!0},r)},"82":function(e,t){e.exports=function isObject(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},"83":function(e,t,n){var o=n(84);"string"==typeof o&&(o=[[e.i,o,""]]);var r={"sourceMap":!1,"insertAt":"top","hmr":!0,"transform":void 0,"insertInto":void 0};n(19)(o,r);o.locals&&(e.exports=o.locals)},"84":function(e,t,n){(e.exports=n(18)(!1)).push([e.i,".taro-img {\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  font-size: 0;\n  width: 320px;\n  height: 240px;\n}\n\n.taro-img.taro-img__widthfix {\n  height: 100%;\n}\n\n.taro-img__mode-scaletofill {\n  width: 100%;\n  height: 100%;\n}\n\n.taro-img__mode-aspectfit {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.taro-img__mode-aspectfill {\n  min-width: 100%;\n  height: 100%;\n}\n\n.taro-img__mode-widthfix {\n  width: 100%;\n}\n\n.taro-img__mode-top {\n  width: 100%;\n}\n\n.taro-img__mode-bottom {\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n}\n\n.taro-img__mode-left {\n  height: 100%;\n}\n\n.taro-img__mode-right {\n  position: absolute;\n  height: 100%;\n  right: 0;\n}\n\n.taro-img__mode-topright {\n  position: absolute;\n  right: 0;\n}\n\n.taro-img__mode-bottomleft {\n  position: absolute;\n  bottom: 0;\n}\n\n.taro-img__mode-bottomright {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n}",""])},"87":function(e,t,n){"use strict";n(7);var o=n(2),r=n.n(o),i=n(20),a=n.n(i),c=n(5),s=n.n(c),l=(n(79),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}),u=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var p=function(e){function Text(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Text),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Text.__proto__||Object.getPrototypeOf(Text)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Text,r.a.Component),u(Text,[{"key":"render","value":function render(){var e=this.props,t=e.className,n=e.selectable,o=void 0!==n&&n,i=s()("taro-text",{"taro-text__selectable":o},t);return r.a.createElement("span",l({},a()(this.props,["selectable","className"]),{"className":i}),this.props.children)}}]),Text}();t.a=p}}]);