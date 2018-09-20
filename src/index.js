'use strict'
// import { readonly, autobind } from 'core-decorators';
// 日志
const log = (msg) => {
  return (target, prop, descriptor) => {
    const method = descriptor.value
    descriptor.value = () => {
      let ret;
      console.log('log before')
      ret = method.apply(target)
      console.log('log after')
      return ret
    }
  }
}

function readonly(target, prop, descriptor) {
  descriptor.writable = false
  return descriptor
}

class Dog {

  constructor() {

  }


  PI = 3.1415926

  @readonly
  color() {
    return 'red'
  }

  name() {
    return 'dog'
  }

  @log('11')
  say() {
    console.log(`I am ${this.name()}`)
  }

}

Object.defineProperty(Dog.prototype, 'size', {
  value: 2
})

const dog = new Dog()
Object.defineProperty(dog, 'size', {
  value: 2
})
dog.name()
dog.say()
console.log(dog)
// dog.PI = 1
// console.log(dog.PI)

console.log(Object.getOwnPropertyDescriptors(dog))

// import React from 'react'
// import ReactDOM from 'react-dom'

// class Store extends React.Component {
//   constructor(){
//     super()
//     this.state = {
//       counter: 1
//     }
//   }
//   handleClick = (e) => {
//     this.setState({
//       counter: this.state.counter+1
//     })
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.counter}</h1>
//         <button type="button" onClick={this.handleClick}>+1</button>
//       </div>
//     )
//   }
// }

// ReactDOM.render(
//   <Store></Store>,
//   document.getElementById('app')
// )

class Store {

  constructor() {
    const self = this
    let counter = 1
    this.state = {
      
    }
    // this.state = {
    //   get counter() {
    //     return counter
    //   },
    //   set counter(val) {
    //     counter = val
    //     self.update()
    //   }
    // }
    Object.defineProperty(this.state, 'counter', {
      get: () => {
        return counter
      },
      set: (value) => {
        counter = value
        this.update()
      }
    })
    let a = 1
    Object.defineProperty(this.state, 'a', {
      get: () => {
        return a
      },
      set: (value) => {
        a = value
        this.update()
      }
    })
    this.update()
  }
  update() {
    document.getElementById('app').innerHTML = this.render()
  }
  render() {
    return `<div>
              <h1>${this.state.counter}</h1>
              <button type="button" id="btn">+1</button>
            </div>`
  }
}

const store = new Store()
console.log(store)
window.onclick = (e) => {
  if (e.target.nodeName.toLowerCase() === 'button') {
    store.state.counter ++
  }
}