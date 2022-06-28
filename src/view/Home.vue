<template>
    <div id="home">
        <div id="search">
            <div class="head-title">
                <h1 style="display: inline-block;">{{msg}}</h1>
                <div @click="login" style="position: absolute; right: 200px; top: 10px;">
                    <el-avatar class="wo" :size="40"><i class="el-icon-user"></i></el-avatar>
                        <el-link v-if="isLogin" type="primary">注销</el-link>
                </div>
                
            </div>
            <br/>
            <el-input class="input" v-model="param"></el-input><el-button class="search" icon="el-icon-search" @click="query">搜索</el-button>
            <el-button type="primary" @click="privatePage()">我的</el-button>
        </div>
        
        <br/>
        <div id="content">
            <ul class="ul">
                <li>
                    <h2>{{title}}</h2>
                </li>
                <br/>
                <div v-for="item in contentList"><li><h2>{{item}}</h2></li><br/></div>
            </ul>
        </div>
    </div>
</template>

<script>
    
    export default {
        name: "Home",
        data() {
            return {
                msg: "学习古诗",
                param: "",
                contentList:[],
                title: "",//标题
                isLogin: false, //是否登录
            }
        },
        methods: {
            query() {
                this.$axios.get("http://localhost:9090/api/poem/homesearch", {
                    params: {
                        title: this.param
                    }
                }).then((res) => {
                    if(res.data.id) {
                        this.title = res.data.title + " （" + res.data.dynasty + " " + res.data.author + "）";
                        this.contentList = res.data.contentList;
                    }else {
                        this.$message({
                            showClose: true,
                            message: '没有查询到诗歌' + this.param,
                        });
                    }
                })
                // this.$router.push({
                //     path: '/PoemsDetail'
                // })
            },
            category() {
                
            },
            privatePage() {
                this.$router.push({
                    path: '/personPage'
                })
            },
            login() {
                this.$router.push({
                    path: '/login'
                })
            }
        },
    }

</script>

<style>
    #search {
        text-align: center;
    }
    .input {
        width: 200px;
    }
    #content {
        text-align: center;
    }


    .wo {
        cursor: pointer;
    }
    

</style>