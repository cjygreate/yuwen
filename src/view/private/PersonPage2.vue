<template>
    <div class="table">
        <el-table
            :data="tableData"
            style="width: 100%"
            height="250">
            <el-table-column
                fixed
                prop="title"
                label="标题"
                width="300">
            </el-table-column>
            <el-table-column
                fixed
                prop="content"
                label="内容"
                width="300">
            </el-table-column>
        </el-table>
        <el-button @click="query">查询</el-button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tableData: []
            }
        },
        methods: {
            query() {
                this.$axios({
                    method: 'post',
                    url: '/auth/person/query',
                    headers: {'token':localStorage.getItem('token')}
                }).then((res) => {
                    this.tableData = res.data.object;
                }).catch((err) => {
                    this.$message({
                        showClose: true,
                        message: err,
                    });
                })
            }
        }
    }
</script>

<style>
    .el-table {
        width: 500px;
        background-color: transparent;
    }
    .table {
        margin-left: 600px;
    }

</style>