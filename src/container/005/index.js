/*
 * @Author: Zhang Min 
 * @Date: 2018-09-05 09:26:19 
 * @Last Modified by: Zhang Min
 * @Last Modified time: 2018-09-06 16:34:18
 */

const log2 = (msg) => {
  return function log(target, prop, descriptor) {
    let value = descriptor.value
    descriptor.value = () => {
      console.log(msg)
      value()
    }
  }
}

const log1 = (target, prop, descriptor) => {
  let value = descriptor.value
  descriptor.value = () => {
    console.log('张敏有话说')
    value()
  }
}

class Person {
  constructor(name) {
    this.name = name
  }

  @log1
  say1() {
    console.log('hello hello hello hello hello hello hello hello hello hello')
  }

  @log2('哈哈')
  say2() {
    console.log('hello hello hello hello hello hello hello hello hello hello')
  }
}

window.person = new Person('张敏')
window.person.say1()

window.person.say2()