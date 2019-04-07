<template>
  <div class="lists">
    <ul>
      <li
        v-for="(list, index) in lists"
        :key="index"
        :class="{myWork: list.showcolor}"
      >
        <h4>{{ list.title }}</h4>
        <p class="param">{{ list.param }}</p>
        <p class="role">{{ list.role }}</p>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  data() {
    return {
      lists: [
        {
          title: "227市场",
          param: "定价依据和客户判定",
          role: "我的角色：经办人",
          showcolor: true
        },
        {
          title: "新软件",
          param: "成立体验小组，测试软件",
          role: "我的角色：交办人",
          showcolor: false
        },
        {
          title: "2-3-6手提项目",
          param: "236手提灭火器项目，10月需要提交给需求方",
          role: "我的角色：交办人",
          showcolor: false
        },
        {
          title: "消防资格考试",
          param: "考试纲要 考试时间 考试地点",
          role: "我的角色：经办人",
          showcolor: true
        },
        {
          title: "总裁办招新",
          param: "招新人",
          role: "我的角色：经办人",
          showcolor: true
        }
      ]
    };
  }
};
</script>


<style lang="scss" scoped>
$bgColor: rgb(42, 87, 154);
$textColor: rgb(63, 156, 205);

#calendar .lists {
  text-indent: 20px;

  ul {
    padding: 0;
    margin: 0;

    .myWork .role {
      color: $textColor;
    }
  }

  li {
    border-bottom: 1px solid rgb(242, 242, 242);
    padding: 10px 0;

    h4 {
      font-size: 18px;
      color: rgba(51, 51, 51, 0.8);
      margin-bottom: 2px;
    }
    p.param {
      font-size: 12px;
      color: rgb(153, 153, 153);
    }
    p.role {
      font-size: 12px;
      color: rgb(255, 153, 0);
    }
    p {
      margin: 0;
    }
  }
}
</style>

