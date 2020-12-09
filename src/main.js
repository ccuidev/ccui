import * as components from './components'
import './components/theme-chalk/index.scss'

const ComponentLibary = {
  install (Vue) {
    // components
    for (const componentName in components) {
      const component = components[componentName]
      Vue.component(component.name, component)
    }
  }
}

export default ComponentLibary

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(ComponentLibary)
}
