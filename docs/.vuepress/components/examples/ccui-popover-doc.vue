<template>
  <div>
    <ccui-popover
            placement="top-start"
            title="标题"
            width="200"
            trigger="hover"
            content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
      <ccui-button slot="reference">hover 激活</ccui-button>
    </ccui-popover>

    <ccui-popover
            placement="bottom"
            title="标题"
            width="200"
            trigger="click"
            content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
      <ccui-button slot="reference">click 激活</ccui-button>
    </ccui-popover>

    <ccui-popover
            ref="popover"
            placement="right"
            title="标题"
            width="200"
            trigger="focus"
            content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
    </ccui-popover>

    <ccui-popover
            placement="bottom"
            title="标题"
            width="200"
            trigger="manual"
            content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
            v-model="visible">
      <ccui-button slot="reference" @click="visible = !visible">手动激活</ccui-button>
    </ccui-popover>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    };
  }
};
</script>
