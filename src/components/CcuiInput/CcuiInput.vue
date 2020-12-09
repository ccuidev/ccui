<template>
    <div :class="[
    type === 'textarea' ? 'ccui-textarea' : 'ccui-input',
    inputSize ? 'el-input--' + inputSize : '',
    {
      'is-disabled': inputDisabled,
      'is-input-readonly': readonly ,
      'is-exceed': inputExceed,
      'el-input-group': $slots.prepend || $slots.append,
      'el-input-group--append': $slots.append,
      'el-input-group--prepend': $slots.prepend,
      'el-input--prefix': $slots.prefix || prefixIcon,
      'el-input--suffix': $slots.suffix || suffixIcon || clearable || showPassword
    }
    ]"
         @mouseenter="hovering = true"
         @mouseleave="hovering = false"
    >
        <template v-if="type !== 'textarea'">
            <!-- 前置元素 -->
            <div class="ccui-input-group__prepend" v-if="$slots.prepend">
                <slot name="prepend"></slot>
            </div>
            <!--      <span class="placeholder-span">{{placeholder}}</span>-->
            <input
                    :aria-label="label"
                    :autocomplete="autoComplete || autocomplete"
                    :disabled="inputDisabled"
                    :placeholder="placeholder1"
                    :readonly="readonly"
                    :tabindex="tabindex"
                    :type="showPassword ? (passwordVisible ? 'text': 'password') : type"
                    :unselectable="unselectable"
                    @blur="handleBlur"
                    @change="handleChange"
                    @compositionend="handleCompositionEnd"
                    @compositionstart="handleCompositionStart"
                    @focus="handleFocus"
                    @input="handleInput"
                    @mouseenter="handleMouseEnter"
                    class="ccui-input__inner"
                    ref="input"
                    v-bind="$attrs"
                    v-if="type !== 'textarea'"
            >
            <!-- 前置内容 -->
            <span class="ccui-input__prefix" v-if="$slots.prefix || prefixIcon">
        <slot name="prefix"></slot>
        <i :class="prefixIcon"
           class="ccui-input__icon"
           v-if="prefixIcon">
        </i>
      </span>
            <!-- 后置内容 -->
            <span
                    class="ccui-input__suffix"
                    v-if="getSuffixVisible()">
        <span class="ccui-input__suffix-inner">
          <template v-if="!showClear || !showPwdVisible || !isWordLimitVisible">
            <slot name="suffix"></slot>
            <i :class="suffixIcon"
               class="ccui-input__icon"
               v-if="suffixIcon">
            </i>
          </template>
          <i @click="clear"
             class="ccui-input__icon ccui-icon-circle-close ccui-input__clear"
             v-if="showClear"
          ></i>
          <i @click="handlePasswordVisible"
             class="ccui-input__icon  ccui-input__clear icon-ccui-close"
             v-if="showPwdVisible && !passwordOpen"
          ></i>
          <i @click="handlePasswordVisible"
             class="ccui-input__icon  ccui-input__clear el-icon-view"
             v-if="passwordOpen"
          ></i>
          <span class="ccui-input__count" v-if="isWordLimitVisible">
            <span class="ccui-input__count-inner">
              {{ textLength }}/{{ upperLimit }}
            </span>
          </span>
        </span>
        <i :class="['ccui-input__validateIcon', validateIcon]"
           class="ccui-input__icon"
           v-if="validateState">
        </i>
      </span>
            <!-- 后置元素 -->
            <div class="ccui-input-group__append" v-if="$slots.append">
                <slot name="append"></slot>
            </div>
        </template>
        <textarea
                :aria-label="label"
                :autocomplete="autoComplete || autocomplete"
                :disabled="inputDisabled"
                :placeholder="placeholder1"
                :readonly="readonly"
                :style="textareaStyle"
                :tabindex="tabindex"
                @blur="handleBlur"
                @change="handleChange"
                @compositionend="handleCompositionEnd"
                @compositionstart="handleCompositionStart"
                @focus="handleFocus"
                @input="handleInput"
                class="ccui-textarea__inner"
                ref="textarea"
                v-bind="$attrs"
                v-else
        >
    </textarea>
        <span class="ccui-input__count"
              v-if="isWordLimitVisible && type === 'textarea'">{{ textLength }}/{{ upperLimit }}</span>
    </div>
</template>
<script>
import emitter from '../../mixins/emitter'
import Migrating from '../../mixins/migrating'
import calcTextareaHeight from './calcTextareaHeight'
import merge from '../../utils/merge'

export default {
  name: 'CcuiInput',

  componentName: 'CcuiInput',
  mixins: [emitter, Migrating],

  inheritAttrs: false,

  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },

  data () {
    return {
      textareaCalcStyle: {},
      hovering: false,
      focused: false,
      isComposing: false,
      passwordVisible: false,
      resize: 'none',
      placeholder1: this.placeholder,
      placeholder2: '',
      passwordOpen: false
    }
  },

  props: {
    value: [String, Number],
    size: String,
    placeholder: String,
    form: String,
    disabled: Boolean,
    readonly: Boolean,
    unselectable: String,
    type: {
      type: String,
      default: 'text'
    },
    autosize: {
      type: [Boolean, Object],
      default: false
    },
    autocomplete: {
      type: String,
      default: 'off'
    },
    /** @Deprecated in next major version */
    autoComplete: {
      type: String,
      validator (val) {
        process.env.NODE_ENV !== 'production' &&
        console.warn('[Element Warn][Input]\'auto-complete\' property will be deprecated in next major version. please use \'autocomplete\' instead.')
        return true
      }
    },
    validateEvent: {
      type: Boolean,
      default: true
    },
    suffixIcon: String,
    prefixIcon: String,
    label: String,
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    showWordLimit: {
      type: Boolean,
      default: false
    },
    tabindex: String
  },

  computed: {
    _elFormItemSize () {
      return (this.elFormItem || {}).elFormItemSize
    },
    validateState () {
      return this.elFormItem ? this.elFormItem.validateState : ''
    },
    needStatusIcon () {
      return this.elForm ? this.elForm.statusIcon : false
    },
    validateIcon () {
      return {
        validating: 'ccui-icon-loading',
        success: 'ccui-icon-circle-check',
        error: 'ccui-icon-circle-close'
      }[this.validateState]
    },
    textareaStyle () {
      return merge({}, this.textareaCalcStyle, { resize: this.resize })
    },
    inputSize () {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size
    },
    inputDisabled () {
      return this.disabled || (this.elForm || {}).disabled
    },
    nativeInputValue () {
      return this.value === null || this.value === undefined ? '' : String(this.value)
    },
    showClear () {
      return this.clearable &&
        !this.inputDisabled &&
        !this.readonly &&
        this.nativeInputValue &&
        (this.focused || this.hovering)
    },
    showPwdVisible () {
      return this.showPassword &&
        !this.inputDisabled &&
        !this.readonly &&
        (!!this.nativeInputValue || this.focused)
    },
    isWordLimitVisible () {
      return this.showWordLimit &&
        this.$attrs.maxlength &&
        (this.type === 'text' || this.type === 'textarea') &&
        !this.readonly &&
        !this.showPassword
    },
    upperLimit () {
      return this.$attrs.maxlength
    },
    textLength () {
      if (typeof this.value === 'number') {
        return String(this.value).length
      }

      return (this.value || '').length
    },
    inputExceed () {
      // show exceed style if length of initial value greater then maxlength
      return this.isWordLimitVisible &&
        (this.textLength > this.upperLimit)
    }
  },

  watch: {
    placeholder () {
      this.placeholder1 = this.placeholder
    },
    value (val) {
      this.$nextTick(this.resizeTextarea)
      if (this.validateEvent) {
        this.dispatch('ElFormItem', 'el.form.change', [val])
      }
    },
    // native input value is set explicitly
    // do not use v-model / :value in template
    // see: https://github.com/ElemeFE/element/issues/14521
    nativeInputValue () {
      this.setNativeInputValue()
    },
    // when change between <input> and <textarea>,
    // update DOM dependent value and styles
    // https://github.com/ElemeFE/element/issues/14857
    type () {
      this.$nextTick(() => {
        this.setNativeInputValue()
        this.resizeTextarea()
        this.updateIconOffset()
      })
    }
  },

  methods: {
    focus () {
      this.getInput().focus()
    },
    blur () {
      this.getInput().blur()
    },
    getMigratingConfig () {
      return {
        props: {
          'icon': 'icon is removed, use suffix-icon / prefix-icon instead.',
          'on-icon-click': 'on-icon-click is removed.'
        },
        events: {
          'click': 'click is removed.'
        }
      }
    },
    handleBlur (event) {
      this.placeholder1 = this.placeholder2
      this.focused = false
      this.$emit('blur', event)
      if (this.validateEvent) {
        this.dispatch('ElFormItem', 'el.form.blur', [this.value])
      }
    },
    select () {
      this.getInput().select()
    },
    resizeTextarea () {
      if (this.$isServer) return
      const { autosize, type } = this
      if (type !== 'textarea') return
      if (!autosize) {
        this.textareaCalcStyle = {
          minHeight: calcTextareaHeight(this.$refs.textarea).minHeight
        }
        return
      }
      const minRows = autosize.minRows
      const maxRows = autosize.maxRows

      this.textareaCalcStyle = calcTextareaHeight(this.$refs.textarea, minRows, maxRows)
    },
    setNativeInputValue () {
      const input = this.getInput()
      if (!input) return
      if (input.value === this.nativeInputValue) return
      input.value = this.nativeInputValue
    },
    handleFocus (event) {
      this.placeholder2 = this.placeholder1
      this.placeholder1 = ''
      this.focused = true
      this.$emit('focus', event)
    },
    handleCompositionStart () {
      this.isComposing = true
    },
    handleCompositionEnd (event) {
      this.isComposing = false
      this.handleInput(event)
    },
    handleInput (event) {
      // should not emit input during composition
      // see: https://github.com/ElemeFE/element/issues/10516
      if (this.isComposing) return

      // hack for https://github.com/ElemeFE/element/issues/8548
      // should remove the following line when we don't support IE
      if (event.target.value === this.nativeInputValue) return

      this.$emit('input', event.target.value)

      // ensure native input value is controlled
      // see: https://github.com/ElemeFE/element/issues/12850
      this.$nextTick(this.setNativeInputValue)
    },
    handleChange (event) {
      this.$emit('change', event.target.value)
    },
    handleMouseEnter (e) {
      let target = e.target
      if (target.type === 'password') {
        return
      }
      let containerLength = target.offsetWidth
      let textLength = target.scrollWidth
      let text = target.value
      if (target.uniqueID) {
        // 因为IE无法判断是否超出显示,所以用IE特有只读属性,判断是否IE,永久显示title
        target.setAttribute('title', text)
      } else {
        if (textLength > containerLength) {
          target.setAttribute('title', text)
        } else {
          target.removeAttribute('title')
        }
      }
    },
    calcIconOffset (place) {
      let elList = [].slice.call(this.$el.querySelectorAll(`.el-input__${place}`) || [])
      if (!elList.length) return
      let el = null
      for (let i = 0; i < elList.length; i++) {
        if (elList[i].parentNode === this.$el) {
          el = elList[i]
          break
        }
      }
      if (!el) return
      const pendantMap = {
        suffix: 'append',
        prefix: 'prepend'
      }

      const pendant = pendantMap[place]
      if (this.$slots[pendant]) {
        el.style.transform = `translateX(${place === 'suffix' ? '-' : ''}${this.$el.querySelector(`.el-input-group__${pendant}`).offsetWidth}px)`
      } else {
        el.removeAttribute('style')
      }
    },
    updateIconOffset () {
      this.calcIconOffset('prefix')
      this.calcIconOffset('suffix')
    },
    clear () {
      this.$emit('input', '')
      this.$emit('change', '')
      this.$emit('clear')
    },
    handlePasswordVisible () {
      console.log('icon-ccui-close')
      this.passwordVisible = !this.passwordVisible
      this.passwordOpen = !this.passwordOpen
      this.focus()
    },
    getInput () {
      return this.$refs.input || this.$refs.textarea
    },
    getSuffixVisible () {
      return this.$slots.suffix ||
        this.suffixIcon ||
        this.showClear ||
        this.showPassword ||
        this.isWordLimitVisible ||
        (this.validateState && this.needStatusIcon)
    }
  },

  created () {
    this.$on('inputSelect', this.select)
  },

  mounted () {
    this.setNativeInputValue()
    this.resizeTextarea()
    this.updateIconOffset()
  },

  updated () {
    this.$nextTick(this.updateIconOffset)
  }
}
</script>
