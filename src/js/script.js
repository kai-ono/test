'use strict'

const REF = {
  load: 'loaded'
}

class Test {
  /**
     * コンストラクタ
     * @param {Object} args object型の引数。
     * @param {String} args.class HTML記述したスライダーのクラス名を指定。default = 'lazy-slider';
     * @param {Number} args.showItem 1度に表示する画像の枚数を設定。default = 1;
     * @param {Boolean} args.auto 自動スライドの設定。default = true;
     * @param {Number} args.interval 自動スライドの間隔をミリ秒で指定。default = 3000;
     */
  constructor (args) {
    this.args = (typeof args !== 'undefined') ? args : {}
    this.node = (typeof this.args.elm !== 'undefined') ? this.args.elm : document.querySelectorAll('.' + REF.clss)
    this.Init()
  }

  Init () {
  }
}

module.exports = Test
if (typeof window !== 'undefined') {
  !window.Test && (window.Test = Test)
}
