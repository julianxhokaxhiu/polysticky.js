export default class PolyStickyBottom {
  constructor(element, style) {
    const me = this

    if (style.bottom !== 'auto') {
      me.el = element

      me.update()
    }
  }
  update() {
    const me = this

    if (me.el) {
      if (!me.inViewport()) {
        me.stick()
      } else {
        me.unstick()
      }
    }
  }
  stick() {
    const me = this

    me.el.style.left = `${me.el.offsetLeft}px`
    me.el.style.right = `${me.el.parentElement.offsetWidth - me.el.offsetWidth + me.el.offsetLeft}px`
    me.el.style.position = 'fixed'
  }
  unstick() {
    const me = this

    me.el.style.position = ''
    me.el.style.left = ''
    me.el.style.right = ''
  }
  inViewport() {
    const me = this,
          scroll = window.scrollY + window.innerHeight,
          offset = document.documentElement.offsetHeight - me.el.offsetHeight

    return (scroll >= offset )
  }
}