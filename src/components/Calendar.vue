<template>
  <div id='calendar'>
    <div :style="{ width: '100%'}">
      <a-calendar
        :fullscreen="false"
        @panelChange="onPanelChange"
      />
    </div>

    <div class="text-center direction-icon" @click.prevent="direction = !direction">
      <div class="upicon" v-if="direction">
        <img src="../assets/up.png">
      </div>
      <div class="downicon" v-else>
        <img src="../assets/down.png">
      </div>
    </div>

    <div class="nav">
      <ul>
        <li
          v-for="(content, index) in contents"
          :key="index"
          :class="{active: currentIndex===index}"
          @click="changeIndex(index)"
        >
          {{ content.title }}
          <span></span>
        </li>
      </ul>
    </div>

    <lists></lists>

  </div>
</template>

<script>
import Lists from './calender/Lists'

export default {
  data() {
    return {
      isActive: false,
      direction: true,
      date: "",
      currentIndex: 0,
      contents: [
        {title: "已设置提醒", path: "/Lists"},
        {title: "创建时间", path: "/CreateTime"},
        {title: "最后发言时间", path: "/FinalTime"}
      ]
    }
  },
  components: {
    Lists
  },
  methods: {
    changeIndex(index) {
      this.currentIndex = index;
    },
    onPanelChange(value, mode) {
      console.log(value, mode);
    }
  }
};
</script>


<style lang="scss" scoped>
$bgColor: rgb(42, 87, 154);
$textColor: rgb(63, 156, 205);

body,
ul,
li, p {
  margin: 0;
  padding: 0;
  list-style: none;
}

#calendar ul {
  border-top: 2px solid #eee;
  border-bottom: 2px solid #eee;
  box-shadow: 0 1px 2px #aaa;
  padding: 10px 0;
}
.nav ul {
  display: flex;
  justify-content: space-evenly;

  li {
    position: relative;
    color: #aaa;
  }
  .active {
    color: $bgColor;
  }
  .active span {
    position: absolute;
    bottom: -10px;
    left: calc(50% - 20px);
    border: 1px solid $bgColor;
    width: 40px;
  }
}

.icon {
  margin-bottom: 10px;
  color: $bgColor;
}

.direction-icon {
  margin: -15px 0 10px;

  img {
    height: 15px;
  }

  .downicon {
    margin-top: -100px;
    
  }

}
</style>
