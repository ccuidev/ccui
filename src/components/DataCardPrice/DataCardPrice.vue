<template>
    <div class="ccui-data-card-price">
        <div class="data-card">
            <div class="left-words">{{ recentDays }}</div>
            <div class="right-words">
                <p class="top-text">{{ topText }}</p>
                <p :title="num" class="card-number">{{ num }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'data-card-price',
  data() {
    return {
      cardNumber: 1
    };
  },
  props: {
    recentDays: String,
    num: Number,
    topText: String
  }
};
</script>

<style>
    .ccui-data-card-price {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        height: 90px;
        background: #FFFFFF;
    }
    .ccui-data-card-price .data-card {
        display: flex;
        height: 90px;
        border: 1px solid #EDF2FC;
        border-top: 4px solid #0089EF;
        box-sizing: border-box;
    }
    .ccui-data-card-price .data-card .left-words {
        width: 26px;
        height: 75px;
        line-height: 25px;
        font-size: 18px;
        font-weight: 600;
        color: #cccccc;
        margin-left: 10px;
        margin-top: 7px;
    }
    .ccui-data-card-price .data-card .right-words {
        text-align: center;
        padding: 0 20px;
    }
    .ccui-data-card-price .data-card .right-words .top-text {
        width: 78px;
        height: 18px;
        font-size: 13px;
        font-weight: 400;
        color: #9B9B9B;
        line-height: 18px;
        margin-top: 9px;
    }
    .ccui-data-card-price .data-card .right-words .card-number {
        width: 80px;
        height: 28px;
        font-size: 20px;
        font-weight: 900;
        color: #0089EF;
        line-height: 28px;
        margin-top: 15px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>
