<template>
    <div>
        <div :style="{ backgroundColor: `${props.data.parentColor ? props.data.parentColor : props.data.childColor}`}" class="dropdown-item w-full h-12 px-2 py-1 flex justify-between items-start text-white border-b border-slate-200">
            <div class="leading-none h-full flex flex-col justify-between">
                <span>{{ props.data.title }}</span>
                <span v-if="props.data.additionalInfo" class="text-xs">{{ props.data.additionalInfo.title }}</span>
            </div>
            <div class="leading-none h-full flex flex-col justify-between">
                <span>{{ props.data.value }}</span>
                <span v-if="props.data.additionalInfo" class="text-xs">{{ props.data.additionalInfo.value }}</span>
            </div>
        </div>

        <div v-if="props.data.subBranch && props.data.subBranch.length">
            <BalanceComponent :key="balance.id" v-for="balance of props.data.subBranch" :data="balance" />
        </div>
    </div>
</template>





<script setup>

import { defineProps } from 'vue'

const props = defineProps({
    data: Array,
})

</script>


<style lang="scss">


</style>