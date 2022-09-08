
<template>
  <div class="box_center">
    <div class="top">
      <ul>
        <li>
          <p style="color: #4f9cac; font-size: 15px">本月累计任务次数</p>
          <p style="font-weight: 600; color: #36ccb5">120.0</p>
        </li>
        <li>
          <p style="color: #4f9cac; font-size: 15px">本月累计任务次数</p>
          <p style="font-weight: 600; color: #36ccb5">120.0</p>
        </li>
        <li>
          <p style="color: #4f9cac; font-size: 15px">本月累计任务次数</p>
          <p style="font-weight: 600; color: #36ccb5">120.0</p>
        </li>
        <li>
          <p style="color: #4f9cac; font-size: 15px">本月累计任务次数</p>
          <p style="font-weight: 600; color: #36ccb5">120.0</p>
        </li>
        <li>
          <p style="color: #4f9cac; font-size: 15px">本月累计任务次数</p>
          <p style="font-weight: 600; color: #36ccb5">120.0</p>
        </li>
        <li>
          <p style="color: #4f9cac; font-size: 15px">本月累计任务次数</p>
          <p style="font-weight: 600; color: #36ccb5">120.0</p>
        </li>
      </ul>
    </div>
    <div class="box">
      <div class="box_left">
        年度负责人组件达标榜
        <dv-scroll-ranking-board
          :config="config"
          style="width: 350px; height: 250px"
        />
      </div>
      <div class="box_right">
        今日任务通过率 今日任务达标率
        <div class="top">
          <dv-decoration-9 style="width: 100px; height: 100px"
            >66%</dv-decoration-9
          >
          <dv-decoration-9 style="width: 100px; height: 100px"
            >66%</dv-decoration-9
          >
        </div>
        <div class="bom">
          <dv-water-level-pond
            :config="config1"
            style="width: 100%; height: 100px"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Echarts from "@/common/echarts.vue";
export default {
  name: "",
  components: { Echarts },
  data() {
    return {
      config: {
        data: [
          {
            name: "周口",
            value: 55,
          },
          {
            name: "南阳",
            value: 120,
          },
          {
            name: "西峡",
            value: 78,
          },
          {
            name: "驻马店",
            value: 66,
          },
          {
            name: "新乡",
            value: 80,
          },
          {
            name: "信阳",
            value: 45,
          },
          {
            name: "漯河",
            value: 29,
          },
        ],
      },
      config1: {
        data: [66],
        shape: "roundRect",
      },
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style scoped lang='scss'>
.box_center {
  width: 550px;
  height: 410px;
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      margin-top: 5px;
      margin-left: 20px;
      width: 150px;
      height: 60px;
      background-color: #0e1529;
      p {
        margin-top: 5px;
      }
    }
  }
  .box {
    display: flex;
    .box_right {
      .top {
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>
