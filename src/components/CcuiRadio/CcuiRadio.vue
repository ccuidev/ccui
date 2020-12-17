<template>
  <label
    :aria-checked="model === label"
    :aria-disabled="isDisabled"
    :class="[
      border && radioSize ? 'ccui-radio--' + radioSize : '',
      { 'is-disabled': isDisabled },
      { 'is-focus': focus },
      { 'is-bordered': border },
      { 'is-checked': model === label }
    ]"
    :tabindex="tabIndex"
    @keydown.space.stop.prevent="model = isDisabled ? model : label"
    class="ccui-radio"
    role="radio"
  >
    <span
      :class="{
        'is-disabled': isDisabled,
        'is-checked': model === label
      }"
      class="ccui-radio__input"
    >
      <span class="ccui-radio__inner"></span>
      <input
        :disabled="isDisabled"
        :name="name"
        :value="label"
        @blur="focus = false"
        @change="handleChange"
        @focus="focus = true"
        aria-hidden="true"
        class="ccui-radio__original"
        ref="radio"
        tabindex="-1"
        type="radio"
        v-model="model"
      />
    </span>
    <span @keydown.stop class="ccui-radio__label">
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>
<script>
import Emitter from '../../mixins/emitter'

export default {
  name: 'CcuiRadio',

  mixins: [Emitter],

  inject: {
    elForm: {
      default: ''
    },

    elFormItem: {
      default: ''
    }
  },

  componentName: 'CcuiRadio',

  props: {
    value: {},
    label: {},
    disabled: Boolean,
    name: String,
    border: Boolean,
    size: String
  },

  data() {
    return {
      focus: false
    }
  },
  computed: {
    isGroup() {
      let parent = this.$parent
      while (parent) {
        if (parent.$options.componentName !== 'CcuiRadioGroup') {
          parent = parent.$parent
        } else {
          this._radioGroup = parent
          return true
        }
      }
      return false
    },
    model: {
      get() {
        return this.isGroup ? this._radioGroup.value : this.value
      },
      set(val) {
        if (this.isGroup) {
          this.dispatch('CcuiRadioGroup', 'input', [val])
        } else {
          this.$emit('input', val)
        }
        this.$refs.radio &&
          (this.$refs.radio.checked = this.model === this.label)
      }
    },
    _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize
    },
    radioSize() {
      const temRadioSize =
        this.size || this._elFormItemSize || (this.$ELEMENT || {}).size
      return this.isGroup
        ? this._radioGroup.radioGroupSize || temRadioSize
        : temRadioSize
    },
    isDisabled() {
      return this.isGroup
        ? this._radioGroup.disabled ||
            this.disabled ||
            (this.elForm || {}).disabled
        : this.disabled || (this.elForm || {}).disabled
    },
    tabIndex() {
      return this.isDisabled || (this.isGroup && this.model !== this.label)
        ? -1
        : 0
    }
  },

  methods: {
    handleChange() {
      this.$nextTick(() => {
        this.$emit('change', this.model)
        this.isGroup &&
          this.dispatch('CcuiRadioGroup', 'handleChange', this.model)
      })
    }
  }
}
</script>
