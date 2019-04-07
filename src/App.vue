<template>
  <a-layout id="app">
    <a-layout-header class="header text-center clearfix">
      2017-9-14
      <span>今天</span>
    </a-layout-header>
  
    <a-layout-content class="content">
      <router-view></router-view>
    </a-layout-content>

    <a-layout-footer class="footer">
      <div class="icons-list">
        <router-link to="/Work"><a-icon class="icon" type="thunderbolt" theme="filled" @click="changeColor" /></router-link>
        <router-link to="/Role"><a-icon class="icon" type="user" @click="changeColor" /></router-link>
        <router-link to="/Schedule"><a-icon class="icon" type="profile" theme="filled" @click="changeColor" /></router-link>
        <router-link to="/Colleague"><a-icon class="icon" type="team" @click="changeColor" /></router-link>
        <router-link to="/Calendar"><a-icon class="icon" type="calendar" theme="filled" @click="changeColor" /></router-link>
      </div>
    </a-layout-footer>
  </a-layout>
</template>
<script>

export default {
  methods: {
    changeColor() {
      this.isActive = !this.isActive;
    }
  }
}
</script>

<style lang="scss">
$bgColor: rgb(42, 87, 154);
$textColor: rgb(63, 156, 205);

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;

  .header {
    color: #fff;
    padding: 0 20px;
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    z-index: 100;
    
    span {
      float: right;
    }
  }
  .content {
    background: #fff;

    .ant-fullcalendar-value {
      border-radius: 50%;
      width: 30px;
      height: 30px;
      line-height: 30px;
    }
    .ant-fullcalendar-today .ant-fullcalendar-value::selection {
      background: $bgColor;
    }
    .ant-fullcalendar-selected-day .ant-fullcalendar-value, .ant-fullcalendar-month-panel-selected-cell .ant-fullcalendar-value {
      background: $bgColor;
    }
    .ant-fullcalendar-header {
      display: none;
    }
  }
  .footer {
    border-top: 1px solid #ccc;
    background: #fff;
    position: sticky;
    position: -webkit-sticky;
    bottom: 0;
    z-index: 100;

    .icons-list {
      display: flex;
      justify-content: space-between;
    }
    .icon {
      font-size: 20px;
      color: #aaa;
    }
    .router-link-active .icon {
      color: $bgColor;
    }
  }
}

#app .content .ant-fullcalendar-tbody tr:nth-child(6){
  display: none;
}

.clearfix::befor, .clearfix::after {
  content: "";
  display: block;
}
.clearfix::after {
  clear: both;
}



</style>
