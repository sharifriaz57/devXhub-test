<template>

    <svg class="svg" :fill="iconColor" v-html="props.icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30"></svg>

</template>


<script setup>
    
import { defineProps } from 'vue'
 
const props = defineProps({
    icon: String,
    iconColor: String,
})

</script>
