import React, { Fragment } from 'react'
import ReactDom from 'react-dom'
import { Button } from 'antd'
import { observable, computed, action } from 'mobx'
import { observer } from 'mobx-react'
import './index.less'

class Store {
  @observable
  todos = []

  @computed
  get allCount() {
    return this.todos.length
  }

  @action.bound
  add() {
    this.todos.push({
      id: this.todos.length,
      name: 'new Task'
    })
  }

}

@observer
class Home extends React.Component {
  render() {
    const store = this.props.store
    return (
      <Fragment>
        <Button type="primary" onClick={store.add}>+{store.allCount}</Button>
        <ul>{store.todos.map(item => <li key={item.id}>{item.name}</li>)}</ul>
      </Fragment>
    )
  }
}

console.log(new Home())

ReactDom.render(<Home store={new Store()}/>, document.getElementById('app'))