<template>
    <div>
        <el-container>
            <el-header style="text-align: center;">
                <el-input class="title" placeholder="请输入标题"></el-input>
            </el-header>
            <el-main style="text-align: center;">
                <textarea class="content"></textarea>
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
                
            }
        },
        methods: {
            submit() {
                alert(123)
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