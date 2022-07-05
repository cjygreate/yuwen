<template>
    <div id="home">
        <div id="search">
            <div class="head-title">
                <h1 style="display: inline-block;">{{msg}}</h1> 
            </div>
            <br/>
            <el-input class="input" v-model="param"></el-input><el-button class="search" icon="el-icon-search" @click="query">搜索</el-button>
            <el-button type="primary" @click="privatePage()">分类</el-button>
        </div>
        
        <br/>
        <div id="content">
            <ul class="ul">
                <li>
                    <h2>{{title}}</h2>
                </li>
                <br/>
                <div v-for="item in contentList" :key="item"><li><h2>{{item}}</h2></li><br/></div>
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


</style>