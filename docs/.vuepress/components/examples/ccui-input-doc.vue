<template>
    <div>
        <ccui-input placeholder="请输入内容" v-model="input"></ccui-input>
        <div style="margin: 20px 0;"></div>
        <ccui-input
                maxlength="10"
                placeholder="请输入内容"
                show-word-limit
                type="text"
                v-model="text"
        ></ccui-input>
        <div style="margin: 20px 0;"></div>
        <ccui-input
                maxlength="30"
                placeholder="请输入内容"
                resize="both"
                show-word-limit
                type="textarea"
                v-model="textarea"
        >
        </ccui-input>
    </div>
</template>
<script>
export default {
  data () {
    return {
      input: '',
      text: '',
      textarea: ''
    }
  }
}
</script>

