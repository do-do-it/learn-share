import './index.less'

// 发送日志
const log = (data) => {
  console.log(data)
}

// 点击操作
const clickFn = () => {
	console.log('do sth')
}

// 大部分人这么做

const clickFn1 = () => {
	console.log('do sth')
 	log('click2')
}

// 少部分人这么做

const clickFnDecorate = () => {
	clickFn()
  	log('click3')
}

// 其实这样做会更好
const logDecorate = (fn, msg) => {
	return () => {
    	fn()
  		log(msg)
    }
}
const clickFnDecorate1 = logDecorate(clickFn, 'click4')

// 点击操作
document.getElementById('btn1').onclick = clickFn
document.getElementById('btn2').onclick = clickFn1
document.getElementById('btn3').onclick = clickFnDecorate
document.getElementById('btn4').onclick = clickFnDecorate1







