<template>
    <div class="white-body-view">
        <div class="content-view">
            <div :id="'item' + index" :key="index" class="item" v-for="(item,index) in dataList">
                <span>item: {{ item.name }}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'standard-component',
  data () {
    return {
      dataList: [
        {
          name: '1'
        },
        {
          name: '2'
        },
        {
          name: '3'
        },
        {
          name: '4'
        },
        {
          name: '5'
        },
        {
          name: '6'
        },
        {
          name: '7'
        },
        {
          name: '8'
        },
        {
          name: '9'
        },
        {
          name: '10'
        },
        {
          name: '11'
        },
        {
          name: '12'
        }
      ]
    }
  },
  mounted () {
    document.getElementById('item5').scrollIntoView()
  }
}
</script>
<style>
    .content-view {
        height: 200px;
        width: 200px;
        overflow: auto;
        border: 1px solid;
    }
    .white-body-view {
      margin-top: 10px;
    }
    .item {
        line-height: 40px;
    }
</style>
