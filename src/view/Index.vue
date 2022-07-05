<template>
    <div id="index">
        <div @click="home" style="position: absolute; right: 255px; top: 10px;z-index: 999;">
            <el-avatar class="home" :size="40" title="返回首页"><i class="el-icon-s-home"></i></el-avatar>
        </div>
        <div @click="my" style="position: absolute; right: 200px; top: 10px;z-index: 999;">
            <el-avatar class="wo" :size="40" title="我的主页"><i class="el-icon-user"></i></el-avatar>
            <el-link v-if="isLogin" type="primary">注销</el-link>
        </div>
        <router-view/>
    </div>
</template>

<script>
    
    export default {
        name: "Index",
        data() {
            return {
                isLogin: false, //是否登录
            }
        },
        methods: {
            my() {
                this.$router.push({
                    path: '/personPage'
                })
            },
            home() {
                this.$router.push({
                    path: '/'
                })
            }
        }
    }

</script>

<style>
    *{		/* CSS Reset */
        margin : 0;
        padding : 0;
    }
    #index {
        position: absolute;
        width: 100%;
        height: 100%;
        background-image:url(../assets/cover.png);
        background-size: cover;
    }
    .wo {
        cursor: pointer;
    }
    .home {
        cursor: pointer;
    }
</style>