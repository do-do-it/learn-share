/*
 * @Author: Zhang Min 
 * @Date: 2018-09-05 09:26:19 
 * @Last Modified by: Zhang Min
 * @Last Modified time: 2018-09-06 10:20:02
 */

// 只读属性装饰器
function readonly(target, prop, descriptor) {
  descriptor.writable = false
}

class Person {
  @readonly age = 18
  constructor(name) {
    this.name = name
  }
  say() {
    console.log('hello hello hello hello hello hello hello hello hello hello')
  }
}

window.person = new Person('张敏')
console.table(window.person)
// 报错
window.person.age = 27