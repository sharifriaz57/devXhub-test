<template>
    <div class="balance-dropdown w-64 relative">
        <button :class="isHidden ? 'rounded-full' : 'rounded-tl-3xl rounded-tr-3xl'" class="px-2 w-full h-10 py-2 flex items-center justify-between bg-offDark text-white"
            @click="handleDropdown" >
            <span class="title text-lg">Balances</span>
            <span class="w-4 h-4 flex items-center">
                <svg :class="isHidden ? 'flex' : 'hidden'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="white">
                    <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
                </svg>

                <svg :class="isHidden ? 'hidden' : 'flex'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="white">
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                </svg>
            </span>
        </button>
        
        <div :class="isHidden ? 'h-0' : 'expand'" class="dropdown-box w-full flex flex-col absolute top-full left-0">
            <div class="dropdown-menu h-full bg-slate-200 w-full overflow-y-auto overflow-x-hidden">
                <BalanceComponent :key="balance.id" v-for="balance of balaceData" :data="balance" />
            </div>
            <div class="w-full flex justify-between bg-blue-900 text-white text-lg px-4 h-10 py-2 rounded-br-3xl rounded-bl-3xl">
                <span>Equity</span>
                <span>$1,25,665</span>
            </div>
        </div>
    </div>
</template>



<script setup>

import { useMainStore } from '@/store/store'
import { ref } from 'vue'
import BalanceComponent from './BalanceComponent.vue'

const store = useMainStore()
const balaceData = store.balanceData;
let isHidden = ref(true)

const handleDropdown = () => {
    isHidden.value = !isHidden.value
}

</script>


<style lang="scss">

.balance-dropdown {
    .dropdown-box {
        max-height: 70vh;
        height: 0 !important;
        transition: 0.6s ease-in-out;
        overflow: hidden;

        &.expand {
            height: 70vh !important;
        }
    }
    .dropdown-menu {
        height: calc(70vh - 40px);
        transition: 0.6s ease-in-out;
        direction: rtl;
        
        &::-webkit-scrollbar {
            width: 7px;
        }
        &::-webkit-scrollbar-thumb {
            border-radius: 30rem;
            background-color: #1c6799;
            
            &:hover {
                background-color: #124466;
            }
        }
    }
    button {
        transition: 0.6s ease-in-out;
    }
}

</style>