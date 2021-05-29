// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Showdown from 'showdown'
import hljs from 'highlight.js/lib/highlight'
import 'highlight.js/styles/monokai-sublime.css'

var showdownHighLight = require('showdown-highlight')
Vue.prototype.md2html = (md) => {
  let converter = new Showdown.Converter({
    extensions: [showdownHighLight]
  })
  let text = md.toString()
  let html = converter.makeHtml(text)
  return html
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
