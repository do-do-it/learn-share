/*
 * @Author: Zhang Min 
 * @Date: 2018-09-05 09:26:19 
 * @Last Modified by: Zhang Min
 * @Last Modified time: 2018-09-06 10:16:38
 */

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
    Object.defineProperty(this, 'sex', {
      writable: false,
      value: 'boy'
    })
  }
}

window.person = new Person('张敏', 27)
console.table(window.person)

window.person.sex = 'girl'
// console.table(window.person)

// Object.defineProperty(Person.prototype, 'sex', {
//   writable: true
// })

// window.person.sex = 'girl'
