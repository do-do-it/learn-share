import React, { Fragment } from 'react'
import ReactDom from 'react-dom'
import { Button, Input } from 'antd'
import { observable, computed, action } from 'mobx'
import { observer } from 'mobx-react'
import './index.less'

class Store {
  @observable
  count = 1

  @computed
  get counter() {
    return this.count
  }

  @action.bound
  add() {
    this.count++
  }

  @action.bound
  change(e) {
    this.count = e.target.value
  }
}

@observer
class Home extends React.Component {
  render() {
    const store = this.props.store
    return (
      <Fragment>
        <Input defaultValue={store.counter} value={store.counter} onChange={store.change}></Input>
        <Button type="primary" onClick={store.add}>+{store.counter}</Button>
      </Fragment>
    )
  }
}

console.log(new Home())

ReactDom.render(<Home store={new Store()}/>, document.getElementById('app'))