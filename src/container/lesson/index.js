import React from 'react'
import ReactDom from 'react-dom'

class Home extends React.Component {
  constructor () {
    super()
    this.state = {
      lessons: [
        {
          title: '面向对象',
          link: '/001/'
        },
        {
          title: '行不更名做不改性',
          link: '/002/'
        },
        {
          title: '装饰者',
          link: '/004/'
        },
        {
          title: 'ES7 装饰器',
          link: '/003/'
        },
        {
          title: '装饰者模式',
          link: '/005/'
        },
        {
          title: 'get set',
          link: '/006/'
        },
        {
          title: '数据绑定',
          link: '/007/'
        },
        {
          title: 'Mobx',
          link: '/008/'
        },
        {
          title: 'todos',
          link: '/009/'
        }
      ]
    }
  }
  render () {
    const lessons = this.state.lessons
    return (
      <ul>
        {
          lessons.map(item => <li key={item.title}>
            <a href={item.link}>{item.title}</a>
          </li>)
        }
      </ul>
    )
  }
}

ReactDom.render(<Home />, document.getElementById('app'))