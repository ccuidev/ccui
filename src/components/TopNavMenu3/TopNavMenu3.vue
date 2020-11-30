<template>
    <div :style="style1" class="ccui-top-nav-menu3">
        <div class="sub-menu-wrapper-wrapper">
            <div :style="style" class="sub-menu-wrapper">
                <div class="logo-container">
                    <router-link :to="dashboard" v-if="dashboard">
                        <img :src="logo"
                             alt=""
                             class="src" style="height: 40px; width: 40px; border: 0;">
                        <span class="app-name">
              <p class="appTitle">{{appTitle}}</p>
              <p :title="companyTitle" class="companyTitle">{{companyTitle}}</p>
            </span>
                    </router-link>
                    <div class="cursorPointer" v-if="!dashboard" style="display: flex;">
                        <img :src="logo"
                             alt=""
                             class="src" style="height: 40px; width: 40px; border: 0;">
                        <span class="app-name">
              <p class="appTitle">{{appTitle}}</p>
              <p :title="companyTitle" class="companyTitle">{{companyTitle}}</p>
            </span>
                    </div>
                </div>
                <ul class="nav">
                    <li @click="skip(item)" class="nav-item" v-for="(item, index) in subMenu1">
                        <router-link :redirect="item.m" :to="{ path: item.url}">
                            <span>{{item.name}}</span>
                        </router-link>
                    </li>
                </ul>
                <i @click="ccuiHelp" class="icon-ccui-help"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'top-nav-menu3',
  props: {
    appTitle: String,
    companyTitle: String,
    minWidth: {
      type: String,
      default: '1180px'
    },
    Width: {
      type: String,
      default: '1080px'
    },
    width: {
      type: String,
      default: 'auto'
    },
    maxWidth: String,
    logo: {
      type: String,
      default: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAEoklEQVRYR72YeYjVVRTHP99220xbKCraI7KFTAgK0ZdNJUhEJFFJ2Dpt9EcLbQQzJGS0GBFFJlEklVNUtGCUwqQ1tCBW0F6klUQxpRmUrSe+w33wGN979/7eczp/vnd+537vWb/niv9BImJH4CRgF+BVSb+VHqtSxU70ImI34GLgLOB+4FlJ/1SxNSYAI2J74ALgVuArYK6kb6sAq+tucYARcTywIIV0AOiVtLETcP5miwCMiInAPsAZwC2Ac26Jwyvp907BdQwwIrYGpgDnAqcC+wMO67ZAAF8C2wFDwFPA8iqF0XihSh6MCOufBtwOTAa2auKd94AXk47/NuA1KeyLqnq0GGBE7AXcm7zWDJjBDAM9wA3AeaPAG+i7wBWSVpeGvQhgRBwKvABMamP4b+Aq4AngLeC4Fro/psKxvaxkAUbEgcAy4JCMtcEUfjdj56B7YCvZAMyR9EoOYVuAEbGDOz8wLWPIk6FH0lBEHAx8DriQ2slHwMxcf8wBnJeabe6iLoozJUVEHA2836KARttZDFwi6Y9WB7QEmPLOB+2UQWfjp0h6c6RkqwF0j5zdLtTtAD7oisu5DlgJzJD0VwJ4JPBhQYjrpp2HZ0va1OyspgAjYnyaobtnALp1XCvpvrpeROwBfA3sXHA5q6x3cUly/9xMWgF0M3Zx5MReO1bSJw0APebeAY7KfZz+9yWvk+T5XQzwLuD6ggMcysmNFCqNwUcTmykwMaIy0Ltw1ZyFvVNG0qRRWnlwOXByQXgflrRZnkbEbODpwkr2MR/0D26Y3leb4P5YBNAczv2snfwLXCTp8UaliHDVm6TenchDiRfX3Dy4qTa/Ns4zuwjgd8C+GcsOx1RJzje3F8/nc4B+4LASVA06625bsbE2b9r4L0oBlnjwV3tZ0nCqehOJuRXC2oilsgdfd/PNeMEU/gBg18T5Zlb0WqP66puWra/d2TPxl1IPzgduzBz4dqL1i4ALuwDnTwf6Bzm/ryYzoqIcnAG8lgnXy8BDwEsdhrUOxH3wGkkPNLtkqzbj309PXpzaAsDzgCdOrh3lnPuz1wZJq4oBpqocB3g+npDahhcis+q6fAqYyG6TQ9Dif3cBj7dHgCcl/VkVoBch0/YF/jhtbncAlyVDDk2W8DYcan2vn5+l9HnOpCK3yOf4YB9wInCppLUR4dw0u7Z4Vt8DHAOYde89ipoZkHeUdQnUxyYRkn6q4vEcQK+OLgavmN7kvEc4Vya4OCQ57GMq2RBFhCfKG2n0OTz2lPeNIUl+EKokaeIcBHxT55DtDGQBpoJxCJ9Jnqzb+yHl40pJ5nQtJYHyKuCK96VMMjwMslIEMIF0WE0A/ChUr1znmbu/R6NzbG0qBH9i2/ulSve6as97bl8uybpFUgywbi0ipqcGfUTRCWDW4y3Pl1vcbkFqZq8ywOTNWel5YymwJ3A44BXVjMZedU/7HliRHpGcBk13jtwlOwVoWu+Hoce8j0SEm7qLyaG3x4YleUJ0LR0BTF682kUjyRRrzKQbgKZZfgOclZsG3aDvGGDy4pXAUkleM8dEugXo3XdSnfaPBcKuAI4FoNE2/wMMMIY4QGNTMwAAAABJRU5ErkJggg=='
    },
    dashboard: String,
    subMenu: Array,
    defaultIndex: String
  },
  data () {
    return {
      visible: false,
      subMenu1: [],
      subMenu2: []
    }
  },
  mounted () {
    this.subMenu1 = this.subMenu
    if (this.subMenu.length > 8) {
      this.subMenu2 = this.subMenu.slice(9)
      this.subMenu1 = this.subMenu.slice(0, 9)
    } else {
      this.subMenu1 = this.subMenu
    }
  },
  methods: {
    skip (item) {
      this.$emit('onSubmitSkip', item)
    },
    ccuiHelp (item) {
      this.$emit('ccuiHelp', item)
    }
  },
  watch: {
    subMenu () {
      console.log('111111', this.subMenu)
      this.subMenu1 = this.subMenu
      if (this.subMenu.length > 8) {
        this.subMenu2 = this.subMenu.slice(9)
        this.subMenu1 = this.subMenu.slice(0, 9)
      } else {
        this.subMenu1 = this.subMenu
      }
    }
  },
  computed: {
    style () {
      let style = {}
      style.margin = '0 auto'
      style.maxWidth = '1730px'
      return style
    },
    style2 () {
      let style = {}
      style.height = '80px'
      style.margin = '0 auto'
      style.maxWidth = '1740px'
      style.paddinTop = '15px'
      return style
    },
    style1 () {
      let style1 = {}
      style1.minWidth = this.minWidth
      style1.width = this.width
      style1.margin = ' 0 auto'
      return style1
    }
  }
}
</script>
<style scoped>
    body, button, dd, dl, dt, h1, h2, h3, h4, h5, h6, hr, input, li, ol, p, pre, td, textarea, th, ul {
        margin: 0;
        padding: 0;
    }
    ul, li {
        list-style: none;
    }
    .nav {
        display: flex;
        line-height: 80px;
        padding: 0;
        margin: 0;
        margin-left: 201px;
    }
    .nav li a {
        padding: 0 15px;
        line-height: 80px;
        display: block;
        color: #fff;
        font-size: 16px;
        text-align: center;
        font-weight: bolder;
        height: 77px;
    }
    .nav li a:hover {
        background-color: #007bd7;
        border-bottom: 3px solid #007bd7;
        box-sizing: border-box;
    }
    .nav li a span{
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        min-width: 54px;
        display: inline-block;
    }

    .nav li .router-link-active {
        background-color: #007bd7;
        border-bottom: 3px solid #fff !important;
        box-sizing: border-box;
    }
    .sub-menu-wrapper-wrapper {
        padding-left: 50px;
        background-color: #0089EF;
        position: relative;
    }
    .el-top-nav-menu3 .sub-menu-wrapper-wrapper .sub-menu-wrapper {
        position: relative;
        margin: 0 auto;
        height: 80px;
    }
    .el-top-nav-menu3 .sub-menu-wrapper-wrapper .sub-menu-wrapper .logo-container {
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        width: 200px;
        z-index: 1000;
        font-size: 0;
    }
    .logo-container {
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        width: 200px;
        z-index: 1000;
        font-size: 0;
    }
    .sub-menu-wrapper .logo-container img {
        display: inline-block;
        vertical-align: middle;
    }
    .sub-menu-wrapper .logo-container span.app-name {
        font-size: 16px;
        color: #FFFFFF;
        font-weight: 600;
        vertical-align: middle;
        margin-left: 5px;
        width: 70%;
    }
    .sub-menu-wrapper .logo-container .app-name .appTitle {
        font-size: 16px;
        font-weight: 600;
        color: white;
        line-height: 22px;
    }
    .sub-menu-wrapper .logo-container .app-name .companyTitle {
        font-size: 12px;
        font-weight: 400;
        color: white;
        line-height: 17px;
    }
</style>

