<template>
    <div class="sidebar-main bg-midnightDark fixed top-0 left-0 rounded-br-3xl h-screen overflow-hidden ease-in-out duration-500 z-50">
        <div class="sidebar-header flex flex-col justify-center items-center relative">
            <img src="@/assets/logo.png" class="brand-logo-img" />
            <img src="@/assets/brand-title.png" class="brand-title-img absolute top-0 left-1/2 -translate-x-1/2 opacity-0"  />
        </div>
        <!-- <div class="sidebar-menu">
            <div class="menu-item">
                <span class="menu-icon">
                    <svg data-v-252e6f35="" id="dashboard-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30" class="fill-current text-gray-500">
                        <path data-v-252e6f35="" id="Path_12" data-name="Path 12" d="M13.859,1.156A1.156,1.156,0,0,0,12.707,0H1.156A1.156,1.156,0,0,0,0,1.156V12.707a1.156,1.156,0,0,0,1.156,1.152H12.707a1.156,1.156,0,0,0,1.152-1.152Z" transform="translate(0 0)"></path>
                        <path data-v-252e6f35="" id="Path_13" data-name="Path 13" d="M56.939,1.156A1.156,1.156,0,0,0,55.783,0H44.232A1.156,1.156,0,0,0,43.08,1.156V12.707a1.156,1.156,0,0,0,1.152,1.152H55.783a1.156,1.156,0,0,0,1.156-1.152Z" transform="translate(-26.939 0)"></path>
                        <path data-v-252e6f35="" id="Path_14" data-name="Path 14" d="M44.232,56.939H55.783a1.156,1.156,0,0,0,1.156-1.156V44.232a1.156,1.156,0,0,0-1.156-1.152H44.232a1.156,1.156,0,0,0-1.152,1.152V55.783a1.156,1.156,0,0,0,1.152,1.156Z" transform="translate(-26.939 -26.939)"></path>
                        <path data-v-252e6f35="" id="Path_15" data-name="Path 15" d="M12.707,43.08H1.156A1.156,1.156,0,0,0,0,44.232V55.783a1.156,1.156,0,0,0,1.156,1.156H12.707a1.156,1.156,0,0,0,1.152-1.156V44.232a1.156,1.156,0,0,0-1.152-1.152Z" transform="translate(0 -26.939)"></path>
                    </svg>
                </span>
                <span class="menu-text">DashboardS</span>
            </div>
        </div> -->
    </div>
</template>

<script>
export default {
    name: 'AppSidebar'
}
</script>


<style scoped>
.sidebar-main {
    width: 96px;
    min-width: 96px;
}
.sidebar-main:hover {
    width: 220px;
    min-width: 220px;
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
.sidebar-main:hover .brand-logo-img {
    transform: translateY(-1rem);
    transition-delay: 0.2s;
}
.sidebar-main:hover .brand-title-img {
    top: 40px;
    opacity: 1;
    transition-delay: 0.2s;
}

#dashboard-icon path {
    fill: lightGray;
}
.menu-icon {
    padding: 0.25rem;
    border-radius: 50%;
    background-color: #15121168;
}
</style>