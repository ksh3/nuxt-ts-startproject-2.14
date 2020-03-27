import Vue from 'vue'
import hljs, { highlight } from 'highlightjs'

const hightlightcode = {
  deep: true,
  bind: function(el: any, binding: any) {
    // on first bind, highlight all targets
    let targets = el.querySelectorAll('code')
    targets.forEach((target: any) => {
      // if a value is directly assigned to the directive, use this
      // instead of the element content.
      if (binding.value) {
        target.textContent = binding.value
      }
      hljs.highlightBlock(target)
    })
  },
  componentUpdated: function(el: any, binding: any) {
    // after an update, re-fill the content and then highlight
    let targets = el.querySelectorAll('code')
    targets.forEach((target: any) => {
      if (binding.value) {
        target.textContent = binding.value
        hljs.highlightBlock(target)
      }
    })
  }
}

export default hightlightcode
