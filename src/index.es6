import polyfillTop from './polyfills/top'
import polyfillBottom from './polyfills/bottom'

export default class PolySticky{
  constructor(selector, config) {
    const me = this

    me.opts = config || {}

    me.init(selector)
  }

  init(selector) {
    const me = this

    if (me.browserNeedsPolyfill()) {
      const el = (typeof selector === 'string' ?  me.fetchElement(selector) : [selector])

      if (el.length)
        me.polyfill(el[0], window.getComputedStyle(el[0]))
    }
  }

  polyfill(element, style) {
    const me = this,
          polyfills = [
            new polyfillTop(element, style),
            new polyfillBottom(element, style)
          ]

    me.attachScrollEvent(
      () => {
        polyfills.forEach(
          polyfill => {
            polyfill.update()
          }
        )
      }
    )
  }

  browserNeedsPolyfill() {
    const el = document.createElement('a'),
          style = el.style

    style.cssText = 'position: sticky'

    return style.position.indexOf('sticky') === -1
  }

  /**
   * Kudos to https://blog.garstasio.com/you-dont-need-jquery/selectors/
   * @param selector The CSS selector
   */
  fetchElement(selector) {
    const selectorType = 'querySelectorAll'

    if (selector.indexOf('#') === 0) {
      selectorType = 'getElementById'
      selector = selector.substr(1, selector.length)
    }

    return document[selectorType](selector)
  }

  attachScrollEvent(action) {
    let ticking = false

    window.addEventListener(
      'scroll',
      e => {
        if (!ticking) {
          window.requestAnimationFrame(
            () => {
              if(action) action()
              ticking = false
            }
          )

          ticking = true
        }
      },
      {
        passive: true
      }
    )
  }
}