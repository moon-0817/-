
<template>
  <div class="home">
    <el-container>
      <el-header>
        <div class="left">
          <h1>管理平台</h1>
        </div>
        <div class="right">
          <h2>欢迎：{{ loginToken }}</h2>
          <button @click="out">退出</button>
        </div>
      </el-header>
      <el-container>
        <el-aside :width="isCollapse ? '60px' : '200px'">
          <el-col>
            <i
              class="el-icon-s-operation"
              @click="isCollapse = !isCollapse"
            ></i>
            <el-menu
              router
              :collapse="isCollapse"
              :default-active="$route.path.slice(1)"
              class="el-menu-vertical-demo"
              background-color="#333744"
              text-color="#fff"
              active-text-color="#ffd04b"
              :collapse-transition="false"
            >
              <el-submenu
                :index="item.id + ''"
                v-for="(item, index) in menusList"
                :key="index"
              >
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>{{ item.authName }}</span>
                </template>
                <el-menu-item
                  :index="ele.path"
                  v-for="(ele, index) in item.children"
                  :key="index"
                  >{{ ele.authName }}</el-menu-item
                >
              </el-submenu>
            </el-menu>
          </el-col>
        </el-aside>
        <el-main>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item
              v-for="(item, index) in $route.meta.list"
              :key="index"
              >{{ item.title }}</el-breadcrumb-item
            >
          </el-breadcrumb>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { menus } from "@/http/user";
export default {
  name: "",
  components: {},
  data() {
    return {
      loginToken: localStorage.getItem("houtaiusername"), //token
      menusList: [],
      isCollapse: false,
    };
  },
  created() {},
  mounted() {
    menus().then((res) => {
      // console.log(res);
      this.menusList = res.data;
    });
  },
  methods: {
    out() {
      // localStorage.removeItem("loginToken");
      this.$store.commit("user/DEL_TOKEN");
      this.$store.commit("user/DEL_USERNAME");
      this.$router.push("/login");
    },
  },
};
</script>
<style scoped lang='scss'>
.home {
  .el-header {
    background-color: #373d41;
    color: #333;
    display: flex;
    align-items: center;
    color: #fff;
    height: 60px;
    justify-content: space-between;
    .right {
      display: flex;
      align-items: center;
      button {
        margin-left: 10px;
        width: 80px;
        height: 40px;
      }
    }
  }

  .el-aside {
    background-color: #333744;
    color: #fff;
    height: calc(100vh - 60px);
    text-align: center;
  }

  .el-main {
    background-color: #e9eef3;
    color: #333;
  }
}
</style>
