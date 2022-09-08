
<template>
  <div class="home" ref="appRef">
    <!-- 全屏容器 -->
    <div class="bg">
      <!-- 全局加载 -->
      <dv-loading v-if="loadinFlag">月亮打烊了</dv-loading>
      <!-- 边框 -->
      <div class="top">
        <div class="top_left">
          <dv-decoration-10 style="width: 300px; height: 5px" />
          <dv-decoration-8 style="width: 300px; height: 50px" />
        </div>
        <div class="top_center">
          <h2>大数据可视化平台</h2>
        </div>
        <div class="top_right">
          <dv-decoration-8 :reverse="true" style="width: 300px; height: 50px" />
          <dv-decoration-10 style="width: 300px; height: 5px" />
        </div>
      </div>
      <!-- 主体 -->
      <div class="box">
        <div class="box_left">
          <div class="box_left_1">
            <dv-border-box-10>
              <box-Left1></box-Left1>
            </dv-border-box-10>
          </div>
          <div class="box_left_2">
            <dv-border-box-10>
              <box-Left2></box-Left2>
            </dv-border-box-10>
          </div>
        </div>
        <div class="box_center">
          <dv-border-box-10>
            <box-center></box-center>
          </dv-border-box-10>
        </div>
        <div class="box_right">
          <div class="box_right_1">
            <dv-border-box-10>
              <box-right1></box-right1>
            </dv-border-box-10>
          </div>
          <div class="box_right_2">
            <dv-border-box-10>
              <box-right2></box-right2>
            </dv-border-box-10>
          </div>
        </div>
      </div>
      <!-- 下 -->
      <div class="bom_box">
        <div class="box_bom_left">
          <dv-border-box-10>
            <boxbom-left></boxbom-left>
          </dv-border-box-10>
        </div>
        <div class="box_bom_right">
          <dv-border-box-10>
            <boxbom-right></boxbom-right>
          </dv-border-box-10>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import drawMixin from "../utils/drawMixin";
import boxLeft1 from "../components/boxLeft1.vue";
import boxLeft2 from "@/components/boxLeft2.vue";
import boxCenter from "@/components/boxCenter.vue";
import boxRight1 from "@/components/boxRight1.vue";
import boxRight2 from "@/components/boxRight2.vue";
import boxbomLeft from "@/components/boxbomLeft.vue";
import boxbomRight from "@/components/boxbomRight.vue";
export default {
  mixins: [drawMixin],
  name: "",
  components: {
    boxLeft1,
    boxLeft2,
    boxCenter,
    boxRight1,
    boxRight2,
    boxbomLeft,
    boxbomRight,
  },
  data() {
    return {
      loadinFlag: true,
    };
  },
  created() {},
  mounted() {
    setTimeout(() => {
      this.loadinFlag = false;
    }, 500);
  },
  methods: {},
};
</script>
<style scoped lang='scss'>
.home {
  width: 1920px;
  height: 1080px;
  color: #39f;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: left top;
  overflow: hidden;

  .bg {
    // background: #000;
    width: 100%;
    height: 100%;
    background-image: url("../../public/pageBg.png");
    background-size: cover;
    background-position: center center;
    padding: 16px 16px 0 16px;
    .top {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      font-weight: normal;
      .top_left {
        display: flex;
      }
      .top_right {
        display: flex;
      }
    }
    .box {
      width: 100%;
      height: 410px;
      display: flex;
      flex: 1;
      .box_left {
        // background-color: #fff;
        display: flex;
        .box_left_2 {
          margin-left: 2px;
          margin-right: 2px;
        }
      }
      .box_center {
        margin-right: 2px;
      }
      .box_right {
        display: flex;
        .box_right_1 {
          margin-right: 5px;
        }
      }
    }
    .bom_box {
      margin-top: 10px;
      height: 100%;
      height: 410px;
      display: flex;
    }
  }
}
</style>
