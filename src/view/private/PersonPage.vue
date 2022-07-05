<template>

    <div>
        <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="1"><router-link to="/personPage/personPage1">写诗</router-link></el-menu-item>
            <el-menu-item index="2"><router-link to="/personPage/personPage2">我的</router-link></el-menu-item>
            <el-menu-item index="3" disabled>消息中心</el-menu-item>
            <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
        </el-menu>

        <router-view></router-view>
    </div>

</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    mounted() {
      
      this.$axios({
        method: 'post',
        url: '/auth/auth/person/islogin',
        headers: {'token':localStorage.getItem('token')}
      }).then((res) => {
            if(res.data.code != 200) {
                this.$router.push({
                    path: '/login'
                })
            }
        }).catch((err) => {
            console.log(err);
            this.$router.push({
                    path: '/login'
                })
        })
    }
  }
</script>

<style>
    .content {
        width: 500px;
        height: 200px;
    }
</style>