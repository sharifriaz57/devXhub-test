<template>
    <div class="sidebar-main bg-midnightDark fixed top-0 left-0 rounded-br-3xl h-screen overflow-hidden ease-in-out duration-500 z-50">
        <div class="sidebar-header flex flex-col justify-center items-center relative">
            <img src="@/assets/logo.png" class="brand-logo-img" />
            <img src="@/assets/brand-title.png"
                class="brand-title-img absolute top-0 left-1/2 -translate-x-1/2 opacity-0" />
        </div>
        <div class="sidebar-menu">
            <div class="active-menu-indicator" :style="{ backgroundColor: store.activeMenu.colorLight, marginTop: `${activeIndicatorPosition}px` }">
                <div class="indicator-circle" :style="{ backgroundColor: store.activeMenu.colorDark }"></div>
                <svg xmlns="http://www.w3.org/2000/svg" :fill="store.activeMenu.colorLight" width="20" height="20" viewBox="0 0 30 30.004"
                    class="corner-top text-orange-light">
                    <path id="Subtraction_11" data-name="Subtraction 11"
                        d="M60.008,60.008h-30a30.037,30.037,0,0,0,30-30v30Z" transform="translate(-30.009 -30.004)">
                    </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" :fill="store.activeMenu.colorLight" width="20" height="20" viewBox="0 0 30 30.004"
                    class="corner-bottom text-orange-light">
                    <path id="Subtraction_11" data-name="Subtraction 11"
                        d="M60.008,60.008h-30a30.037,30.037,0,0,0,30-30v30Z" transform="translate(-30.009 -30.004)">
                    </path>
                </svg>
            </div>

            <div class="h-5 w-full bg-midnightDark rounded-br-2xl"></div>
            
            <a href="#" :key="menu.id" :data-anchor-id="menu.id" v-for="menu in store.sidebarMenus"
                    @click="setActiveMenuHandle(menu.id, $event)" :class="menu.id === store.activeMenu.id ? 'active-link' : ''" class="menu-item">
                <div class="menu-link">
                    <span class="menu-icon">
                        <SvgIcon :icon="menu.icon" :iconColor="menu.colorDark" />
                    </span>
                    <span class="menu-text">{{ menu.title }}</span>
                </div>
            </a>
        </div>
    </div>
</template>

<script setup>

import { ref } from 'vue'
import { useMainStore } from '../store/store'
import SvgIcon from './SvgIcon.vue'
import { useRouter } from 'vue-router'

const store = useMainStore()
const activeIndicatorPosition = ref(20)
const router = useRouter()

const setActiveMenuHandle = (clickedMenuId) => {
    store.setActiveMenu(clickedMenuId)

    const activeLink = document.querySelectorAll(`[data-anchor-id='${clickedMenuId}']`);
    activeIndicatorPosition.value = activeLink[0].getBoundingClientRect().top - 70;
 
    router.push(`${store.activeMenu.path}`);
}

</script>






<style>
.sidebar-main {
    width: 96px;
    min-width: 96px;
}

.sidebar-menu {
    height: calc(100vh - 70px);
}

.sidebar-main:hover {
    width: 220px;
    min-width: 220px;
}

.active-link .svg {
    fill: rgb(232, 232, 232);
}

.sidebar-header {
    height: 70px;
    transition: 0.5s ease-in-out;
}

.brand-logo-img {
    height: 35px;
}

.brand-title-img {
    height: 15px;
}

.brand-logo-img,
.brand-title-img {
    transition: 0.5s ease-in-out;
}

.sidebar-main:hover .brand-title-img {
    top: 40px;
    opacity: 1;
    transition-delay: 0.2s;
}

.menu-icon {
    height: 1.25rem;
    width: 1.25rem;
    border-radius: 50%;
}

.menu-item {
    width: 100%;
    display: flex;
    position: relative;
    background-image: linear-gradient(90deg, #212121 50%,hsla(0,0%,100%,0) 70%, transparent);
}

.menu-item:hover {
    background-image: linear-gradient(90deg, #212121 20%,hsla(0,0%,100%,0));
}

.menu-item.active-link .menu-text {
    color: rgb(28,38,47);
}

.menu-link {
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 0.625rem;
    z-index: 100;
}

.active-menu-indicator {
    width: calc(100% - 27px);
    height: 40px;
    display: flex;
    position: absolute;
    left: 27px;
    opacity: 1;
    transition: .5s ease-in-out;
    border-top-left-radius: 9999px;
    border-bottom-left-radius: 9999px;
    z-index: 9;
}

.indicator-circle {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 9999px;
    transition: all .5s ease-in-out;
    opacity: 1;
    z-index: 30;
    background-color: #666;
}

.active-menu-indicator .corner-bottom {
    display: inline-block;
    position: absolute;
    bottom: -20px;
    right: 0;
    transform: rotate(270deg);
    opacity: 1 !important;
}

.active-menu-indicator .corner-top {
    display: inline-block;
    position: absolute;
    top: -20px;
    right: 0;
    opacity: 1 !important;
}

.menu-text {
    color: lightGray;
    opacity: 0;
    position: absolute;
    transform: translateX(45px);
    white-space: nowrap;
    transition: all 1s ease-in;
}


.sidebar-main:hover .brand-logo-img {
    transform: translateY(-1rem);
    transition-delay: 0.2s;
}

.sidebar-main:hover .menu-text {
    opacity: 1;
}

.sidebar-main:hover .active-menu-indicator {
    opacity: .7;
}
</style>