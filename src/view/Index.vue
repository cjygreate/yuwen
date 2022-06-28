<template>
    <div id="index">
        <router-view/>
    </div>
</template>

<script>
    
    export default {
        name: "Index"
    }

</script>

<style>
    *{		/* CSS Reset */
        margin : 0;
        padding : 0;
    }
    #home {
        position: absolute;
        width: 100%;
        height: 100%;
        background-image:url(../assets/cover.png);
    }


</style>