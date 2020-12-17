import Picker from '../CcuiDatePicker'
import Panel from '../panel/time-select'

export default {
  mixins: [Picker],

  name: 'CcuiTimeSelect',

  componentName: 'CcuiTimeSelect',

  props: {
    type: {
      type: String,
      default: 'time-select'
    }
  },

  beforeCreate() {
    this.panel = Panel
  }
}
