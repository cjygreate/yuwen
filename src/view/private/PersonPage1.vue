<template slot-scope="scope">
    <div>
        <el-container>
            <el-header style="text-align: center;">
                <el-input class="title" v-model="title" placeholder="请输入标题"></el-input>
            </el-header>
            <el-main style="text-align: center;">
                <textarea class="content" v-model="content"></textarea>
            </el-main>
            <div style="margin-left: 1200px;">
                <el-button style="" @click="submit">提交</el-button>
            </div>
            
        </el-container>
        
    </div>
</template>

<script>
    export default {
        data () {
            return {
                title: '',
                content: ''
            }
        },
        methods: {
            submit() {
                let data = {};
                data['title'] = this.title;
                data['content'] = this.content;
                this.$axios({
                    method: 'post',
                    url: '/auth/auth/person/submit',
                    headers: {'token':localStorage.getItem('token')},
                    data: data
                }).then((res) => {
                    if(res.data.code == 200) {
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
    }
</script>

<style>
    .title {
        width: 500px;
        
    }
    .content {
        width: 500px;
    }
</style>