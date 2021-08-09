<template>
    <div class="app">
        <!-- 
            teleport 移动到app之外的其他元素上
            to: 移动到哪
         -->
        <teleport to="#why">
            <h2>teleport</h2>
        </teleport>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>