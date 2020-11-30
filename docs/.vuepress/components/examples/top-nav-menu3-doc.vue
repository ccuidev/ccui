<template>
    <div>
        <top-nav-menu3
                :subMenu="subMenu"
                @ccuiHelp="appHelp"
                @onSubmitSkip="handleSelect"
                appTitle="组织管理"
                companyTitle="交建云商运营中心"
                dashboard
                minWidth="1222px"
                ref="topNavMenu"
                width="1000px">
        </top-nav-menu3>

    </div>
</template>
<script>
export default {
  data () {
    return {
      subMenu: [
        {
          id: '2-1',
          name: '供应',
          m: '#199'
        }, {
          id: '2-2',
          name: '供应商',
          m: '#299',
          url: '#2/name=123&age12'
        }, {
          id: '2-3',
          name: '供应商供3',
          m: '#399',
          url: '#3'
        }, {
          id: '2-1',
          name: '供应商供供4',
          url: '#1',
          m: '#199'
        }, {
          id: '2-2',
          name: '供应商应5',
          m: '#299',
          url: '#2'
        }, {
          id: '2-3',
          name: '供应商供6',
          m: '#399',
          url: '#3'
        }, {
          id: '2-2',
          name: '供应商应7',
          m: '#299',
          url: '#2'
        }, {
          id: '2-3',
          name: '供应商供8',
          m: '#399',
          url: '#3'
        }, {
          id: '2-3',
          name: '供应商供9',
          m: '#399',
          url: '#3'
        }, {
          id: '2-3',
          name: '供应商供10',
          m: '#399',
          url: '#3'
        }, {
          id: '2-3',
          name: '供应商供11',
          m: '#399',
          url: '#3'
        }
      ]
    }
  },
  methods: {
    handleSelect (item) {
      console.log('00000:', item)
    },
    appHelp () {
      console.log('点击:Help图标')
    }
  }
}
</script>
