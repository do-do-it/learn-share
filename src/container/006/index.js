import { Agent } from "https";

/*
 * @Author: Zhang Min 
 * @Date: 2018-09-05 09:26:19 
 * @Last Modified by: Zhang Min
 * @Last Modified time: 2018-09-06 17:06:57
 */

// 只读属性装饰器
function readonly(target, prop, descriptor) {
  let value = descriptor.initializer()
  descriptor = {
    get: () => {
      return value
    },
    set: (val) => {
      console.error(`属性：${prop} 不支持修改`)
    }
  }
  return descriptor
}

class Person {
  @readonly
  sex = 'boy'
  constructor(name) {
    this.name = name
  }
  say() {
    console.log('hello hello hello hello hello hello hello hello hello hello')
  }
}

window.person = new Person('张敏')
console.table(window.person)

window.person.sex = 'girl'