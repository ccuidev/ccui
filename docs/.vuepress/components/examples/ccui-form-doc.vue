<template>
  <div>
    <ccui-form ref="form" :model="form" labccui-width="80px">
      <ccui-form-item label="活动名称">
        <ccui-input v-model="form.name"></ccui-input>
      </ccui-form-item>
      <ccui-form-item label="活动区域">
        <ccui-select v-model="form.region" placeholder="请选择活动区域">
          <ccui-option label="区域一" value="shanghai"></ccui-option>
          <ccui-option label="区域二" value="beijing"></ccui-option>
        </ccui-select>
      </ccui-form-item>
      <ccui-form-item label="活动时间">
        <ccui-col :span="11">
          <ccui-date-picker
            type="date"
            placeholder="选择日期"
            v-model="form.date1"
            style="width: 100%;"
          ></ccui-date-picker>
        </ccui-col>
        <ccui-col class="line" :span="2">-</ccui-col>
        <ccui-col :span="11">
          <ccui-time-picker
            placeholder="选择时间"
            v-model="form.date2"
            style="width: 100%;"
          ></ccui-time-picker>
        </ccui-col>
      </ccui-form-item>
      <ccui-form-item label="即时配送">
        <ccui-switch v-model="form.delivery"></ccui-switch>
      </ccui-form-item>
      <ccui-form-item label="活动性质">
        <ccui-checkbox-group v-model="form.type">
          <ccui-checkbox label="美食/餐厅线上活动" name="type"></ccui-checkbox>
          <ccui-checkbox label="地推活动" name="type"></ccui-checkbox>
          <ccui-checkbox label="线下主题活动" name="type"></ccui-checkbox>
          <ccui-checkbox label="单纯品牌曝光" name="type"></ccui-checkbox>
        </ccui-checkbox-group>
      </ccui-form-item>
      <ccui-form-item label="特殊资源">
        <ccui-radio-group v-model="form.resource">
          <ccui-radio label="线上品牌商赞助"></ccui-radio>
          <ccui-radio label="线下场地免费"></ccui-radio>
        </ccui-radio-group>
      </ccui-form-item>
      <ccui-form-item label="活动形式">
        <ccui-input type="textarea" v-model="form.desc"></ccui-input>
      </ccui-form-item>
      <ccui-form-item>
        <ccui-button type="primary" @click="onSubmit">立即创建</ccui-button>
        <ccui-button>取消</ccui-button>
      </ccui-form-item>
    </ccui-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>
