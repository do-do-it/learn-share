/*
 * @Author: Zhang Min 
 * @Date: 2018-09-05 09:26:19 
 * @Last Modified by: Zhang Min
 * @Last Modified time: 2018-09-06 08:49:26
 */

class Person {
  
  constructor(name, age, sex) {
    this.name = name
    this.age = age
    this.sex = sex
  }
  
  say() {
  	console.log(`I am ${this.name}, from changxing, and like do something i like`)
  }

}

window.person = new Person('张敏', 18, 'boy')
console.table(window.person)

// 虚报年龄的事情有点不要脸了
person.age = 27
// 修改自由的世界里你可以无所欲为
console.table(window.person)

