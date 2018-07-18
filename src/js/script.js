'use strict'

const REF = {
  load: 'loaded'
}

class Test {
  /**
     * コンストラクタ
     * @param {Object} args object型の引数
     */
  constructor (args) {
    this.args = (typeof args !== 'undefined') ? args : {}
    this.node = (typeof this.args.elm !== 'undefined') ? this.args.elm : document.querySelectorAll('.' + REF.clss)
    this.Test()
  }

  Test () {
    fetch('csv/test.csv').then((res) => {
      return res.text()
    }).then((text) => {
      const elm = document.createTextNode(text)
      document.body.appendChild(elm)
    })
  }
}

module.exports = Test
if (typeof window !== 'undefined') {
  !window.Test && (window.Test = Test)
}
