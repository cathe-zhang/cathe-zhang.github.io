import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import 'taro-ui/dist/style/index.scss'
import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/others/index',
      'pages/projects/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
			color: '#969BA0',
			selectedColor: '#333333',
			backgroundColor: '#ffffff',
			list: [
				{
					iconPath: 'assets/images/mc_lable_home_default@2x.png',
					selectedIconPath:
						'assets/images/mc_lable_home_selected@2x.png',
					pagePath: 'pages/index/index',
					text: '首页'
        },
        {
					iconPath: 'assets/images/mc_lable_home_default@2x.png',
					selectedIconPath:
						'assets/images/mc_lable_home_selected@2x.png',
					pagePath: 'pages/others/index',
					text: '其他'
				},
				{
					iconPath: 'assets/images/mc_lable_home_default@2x.png',
					selectedIconPath:
						'assets/images/mc_lable_home_selected@2x.png',
					pagePath: 'pages/projects/index',
					text: '项目'
				},
			]
		}
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
