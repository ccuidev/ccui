<template>
  <div>
    <ccui-radio v-model="radio" label="1">备选项</ccui-radio>

    <ccui-radio v-model="radio" label="2">备选项</ccui-radio>
  </div>
</template>

<script>
export default {
  data () {
    return {
      radio: '1'
    };
  }
}
</script>
