<template>
  <div>
    <data-card-price
            :recentDays="recentDays"
            :num="num"
            :topText="topText">
    </data-card-price>
    <button @click="add">变化</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      recentDays: '近7天',
      num: 28,
      topText: '价格变化次数'
    }
  },
  methods: {
    add(item) {
      this.num = 100
    }
  }
}
</script>
