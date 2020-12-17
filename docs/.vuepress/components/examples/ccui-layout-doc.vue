<template>
  <div>
    <ccui-row>
      <ccui-col :span="24"
        ><div class="grid-content bg-purple-dark"></div
      ></ccui-col>
    </ccui-row>
    <ccui-row>
      <ccui-col :span="12"><div class="grid-content bg-purple"></div></ccui-col>
      <ccui-col :span="12"
        ><div class="grid-content bg-purple-light"></div
      ></ccui-col>
    </ccui-row>
    <ccui-row>
      <ccui-col :span="8"><div class="grid-content bg-purple"></div></ccui-col>
      <ccui-col :span="8"
        ><div class="grid-content bg-purple-light"></div
      ></ccui-col>
      <ccui-col :span="8"><div class="grid-content bg-purple"></div></ccui-col>
    </ccui-row>
    <ccui-row>
      <ccui-col :span="6"><div class="grid-content bg-purple"></div></ccui-col>
      <ccui-col :span="6"
        ><div class="grid-content bg-purple-light"></div
      ></ccui-col>
      <ccui-col :span="6"><div class="grid-content bg-purple"></div></ccui-col>
      <ccui-col :span="6"
        ><div class="grid-content bg-purple-light"></div
      ></ccui-col>
    </ccui-row>
    <ccui-row>
      <ccui-col :span="4"><div class="grid-content bg-purple"></div></ccui-col>
      <ccui-col :span="4"
        ><div class="grid-content bg-purple-light"></div
      ></ccui-col>
      <ccui-col :span="4"><div class="grid-content bg-purple"></div></ccui-col>
      <ccui-col :span="4"
        ><div class="grid-content bg-purple-light"></div
      ></ccui-col>
      <ccui-col :span="4"><div class="grid-content bg-purple"></div></ccui-col>
      <ccui-col :span="4"
        ><div class="grid-content bg-purple-light"></div
      ></ccui-col>
    </ccui-row>
  </div>
</template>

<style>
.ccui-row {
  margin-bottom: 20px;
}
.ccui-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
