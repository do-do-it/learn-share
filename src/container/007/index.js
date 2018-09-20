import './index.less'

class Component {
  constructor(data) {
    for (const key in data) {
      let value = data[key]
      Object.defineProperty(this, key, {
        configurable: false,
        enumerable: true,
        get: () => {
          return value
        },
        set: (val) => {
          value = val
          this.render()
        }
      })
    }
  }
  setState(obj) {
    Object.keys(obj).forEach(key => {
      this[key] = obj[key]
    })
  }
  render() {}
}

class Home extends Component {
  constructor(data) {
    super(data)
    this.render()
  }
  render() {
    document.getElementById('input').value = this.counter
    document.getElementById('btn').innerText = '+' + this.counter
  }
}

const home = new Home({
  counter: 1,
  age: 18
})
console.log(home)

document.getElementById('btn').onclick = () => {
  home.counter += 1
}

document.getElementById('input').oninput = (e) => {
  home.counter = parseInt(e.target.value)
}


