import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMainStore = defineStore('main', () => {
    const activeMenu = ref({
        id: 1,
        title: 'Dashboard',
        colorDark: 'rgb(112,112,112)',
        colorLight: 'rgb(206,206,206)',
        path: '/dashboard',
    })
    const sidebarMenus = ref([
        {
            id: 1,
            title: 'Dashboard',
            colorDark: 'rgb(112,112,112)',
            colorLight: 'rgb(206,206,206)',
            path: '/dashboard',
            icon: '<path data-name="Path 12" d="M13.859,1.156A1.156,1.156,0,0,0,12.707,0H1.156A1.156,1.156,0,0,0,0,1.156V12.707a1.156,1.156,0,0,0,1.156,1.152H12.707a1.156,1.156,0,0,0,1.152-1.152Z" transform="translate(0 0)"></path><path id="Path_13" data-name="Path 13" d="M56.939,1.156A1.156,1.156,0,0,0,55.783,0H44.232A1.156,1.156,0,0,0,43.08,1.156V12.707a1.156,1.156,0,0,0,1.152,1.152H55.783a1.156,1.156,0,0,0,1.156-1.152Z" transform="translate(-26.939 0)"></path> <path id="Path_14" data-name="Path 14" d="M44.232,56.939H55.783a1.156,1.156,0,0,0,1.156-1.156V44.232a1.156,1.156,0,0,0-1.156-1.152H44.232a1.156,1.156,0,0,0-1.152,1.152V55.783a1.156,1.156,0,0,0,1.152,1.156Z" transform="translate(-26.939 -26.939)"></path> <path id="Path_15" data-name="Path 15"  d="M12.707,43.08H1.156A1.156,1.156,0,0,0,0,44.232V55.783a1.156,1.156,0,0,0,1.156,1.156H12.707a1.156,1.156,0,0,0,1.152-1.156V44.232a1.156,1.156,0,0,0-1.152-1.152Z" transform="translate(0 -26.939)"></path></svg>'
        },
        {
            id: 2,
            title: 'Cashflow',
            colorDark: 'rgb(252,187,10)',
            colorLight: 'rgb(255,235,181)',
            path: '/cash-flows',
            icon: '<path data-v-252e6f35="" id="Path_16" data-name="Path 16" d="M21.064.416c-1.627-.619-2.078-.825-2.874,1.5a.934.934,0,0,0-.052.363c0,.136.084.194.188.177a1.09,1.09,0,0,1,.58.062,25.4,25.4,0,0,1,9.1,5.589c.911.978.755,1.258.076,1.984-4.364,4.632-7.234,8.473-8.089,15.56a26.613,26.613,0,0,0,0,4.707c0,.235-.364-2.888-.5-4.455-.635-7.314,2.1-12.6,6.6-17.325a.266.266,0,0,0,0-.355,7.281,7.281,0,0,0-.8-.825A20.786,20.786,0,0,0,13.035,2.507c-2.162-.107-2.646.062-3.165,2.624a.625.625,0,0,0,.028.38c.084.1.268.078.364.07a4.918,4.918,0,0,1,.843,0c5.348.326,7.238.594,10.539,2.409.987.545.631.792,0,1.819h0c-3.229,6.068-4.48,9.624-3.349,16.5A14.95,14.95,0,0,0,19.461,30.1a22.1,22.1,0,0,1-2.426-5.486c-1.467-5.284-.524-10.292,1.926-15.09.6-1.159.552-1.745-.639-2.042A24.167,24.167,0,0,0,4.45,7.639c-1.347.45-1.191.788-1.331,1.44a21.524,21.524,0,0,0-.4,2.331V11.5a.055.055,0,0,1,0,.025v.021h0v.062h0v.182h0v1.06q0,.06,0,.12v.776a26.876,26.876,0,0,0,5.9,19.215A.137.137,0,0,0,8.746,33a58.95,58.95,0,0,1,11.467-1.238c.284,0,.28-.029.28-.05A24.451,24.451,0,0,1,32.051,10.951a1.331,1.331,0,0,0,.576-.545C32.81,9.973,28.418,3.089,21.064.416ZM9.266,10.423a1.05,1.05,0,0,1,.366-.7.986.986,0,0,1,.741-.228,1.042,1.042,0,0,1,.647,1.287,1.012,1.012,0,0,1-1.087.916A1.045,1.045,0,0,1,9.266,10.423ZM11.772,29.4a1.018,1.018,0,0,1-1-.8,1.055,1.055,0,0,1,.537-1.18,1.018,1.018,0,0,1,1,.8,1.055,1.055,0,0,1-.537,1.18Zm1.4-9.182c-.08,2.256-1.479,3.968-3.137,4.125S6.692,23.1,6.208,20.884c-.58-2.628.719-5.363,3.01-5.565S13.282,17.514,13.17,20.216Z" transform="translate(-2.632 -0.005)"></path>'
        },
        {
            id: 3,
            title: 'Investments',
            colorDark: 'rgb(61,187,97)',
            colorLight: 'rgb(171,210,182)',
            path: '/investments',
            icon: '<g transform="translate(0.015 -0.243)"><path data-v-252e6f35="" id="Path_20" data-name="Path 20" d="M17.168,15.091l8.049-8.317L26.541,8.04a1.022,1.022,0,0,0,1.125.222,1.07,1.07,0,0,0,.694-.887l.675-5.946a1.027,1.027,0,0,0-.315-.9,1.041,1.041,0,0,0-.885-.27l-5.965.917a1.065,1.065,0,0,0-.851.729A.974.974,0,0,0,21.3,2.976l1.323,1.266L15.811,11.3,11.927,7.5a1.809,1.809,0,0,0-1.17-.507,1.872,1.872,0,0,0-1.421.541L.47,16.7a1.907,1.907,0,0,0,.06,2.607,1.84,1.84,0,0,0,.664.409,3.492,3.492,0,0,0,.349.094c.094,0,.187.034.285.034a1.768,1.768,0,0,0,1.26-.537L10.7,11.421l3.88,3.756a1.838,1.838,0,0,0,2.591-.086Z" transform="translate(0 0)"></path><path data-v-252e6f35="" id="Path_21" data-name="Path 21" d="M11.348,61.74H6a1,1,0,0,0-1,1.014V67.5a1,1,0,0,0,1.01,1.01h5.338a1,1,0,0,0,1.014-1.01V62.754A1.022,1.022,0,0,0,11.348,61.74Z" transform="translate(-3.131 -38.396)"></path><path data-v-252e6f35="" id="Path_22" data-name="Path 22" d="M39.036,50.46H33.694a1,1,0,0,0-1.014,1.014v8.982a1,1,0,0,0,1.014,1.01h5.342a1,1,0,0,0,1.014-1.01V51.44a1,1,0,0,0-1.014-.98Z" transform="translate(-20.444 -31.353)"></path><path data-v-252e6f35="" id="Path_23" data-name="Path 23" d="M66.74,39.1H61.394a1,1,0,0,0-1.014,1.01V53.363a1,1,0,0,0,1.014,1.01H66.74a1,1,0,0,0,1.01-1.01V40.11a1,1,0,0,0-1.01-1.01Z" transform="translate(-37.765 -24.261)"></path></g>'
        },
        {
            id: 4,
            title: 'Real Estate',
            colorDark: 'rgb(191,16,16)',
            colorLight: 'rgb(255,213,213)',
            path: '/real-estates',
            icon: '<g transform="translate(-0.005 -5.237)"><path data-v-252e6f35="" id="Path_24" data-name="Path 24" d="M29.987,17.09a2.333,2.333,0,0,0-.881-1.57h0l-2.624-2.167V8.494a.619.619,0,0,0-.618-.62l-3.429-.6a.615.615,0,0,0-.618.616V9.8l-4.981-3.92a2.968,2.968,0,0,0-3.681,0L.9,15.52A2.352,2.352,0,0,0,2.072,19.7a2.42,2.42,0,0,0,.285.019,2.31,2.31,0,0,0,1.443-.5l10.12-7.957a1.744,1.744,0,0,1,2.166,0l10.12,7.957a2.346,2.346,0,0,0,3.782-2.129" transform="translate(0)"></path><path data-v-252e6f35="" id="Path_25" data-name="Path 25" d="M32.681,31.929l-9.19-7.187a1.869,1.869,0,0,0-2.285,0l-9.19,7.187a.613.613,0,0,0-.236.484v8.2a2.663,2.663,0,0,0,2.659,2.666h4.809a.611.611,0,0,0,.614-.616V36.924a2.487,2.487,0,1,1,4.973,0v5.742a.611.611,0,0,0,.614.616h4.809a2.663,2.663,0,0,0,2.659-2.666v-8.2a.613.613,0,0,0-.236-.484" transform="translate(-7.354 -11.986)"></path></g>'
        },
    ]);
    const balanceData = ref([
        {
            id: 1,
            title: 'Assets',
            value: '152,658',
            additionalInfo: null,
            parentColor: '#FD350C',
            subBranch: [
                {
                    id: 1,
                    title: 'Cash',
                    value: '152,658',
                    childColor: '#FB7D63',
                    additionalInfo: null
                },
                {
                    id: 2,
                    title: 'Wells Fargo',
                    value: '152,658',
                    childColor: '#FB7D63',
                    additionalInfo: {
                        title: '',
                        value: '7 hours ago',
                    }
                },
                {
                    id: 3,
                    title: 'Bank of America',
                    value: '100,000',
                    childColor: '#FB7D63',
                    additionalInfo: {
                        title: 'Saving',
                        value: '7 hours ago',
                    }
                },
            ]
        },
        {
            id: 2,
            title: 'Investments',
            value: '614,423',
            additionalInfo: null,
            parentColor: '#F09100',
            subBranch: [
                {
                    id: 1,
                    title: 'Greenstar IRA',
                    value: '314,215',
                    childColor: '#FAC066',
                    additionalInfo: {
                        title: '',
                        value: '7 hours ago',
                    }
                },
                {
                    id: 2,
                    title: 'Fiedlity',
                    value: '200,000',
                    childColor: '#FAC066',
                    additionalInfo: {
                        title: '401 (k)',
                        value: '7 hours ago',
                    }
                },
                {
                    id: 3,
                    title: 'E-Trade',
                    value: '75,000',
                    childColor: '#FAC066',
                    additionalInfo: {
                        title: 'Taxable',
                        value: '7 hours ago',
                    }
                },
                {
                    id: 4,
                    title: 'Morgan Stanley',
                    value: '25,000',
                    childColor: '#FAC066',
                    additionalInfo: {
                        title: 'Roth IRA',
                        value: '7 hours ago',
                    }
                },
            ]
        },
        {
            id: 3,
            title: 'Real Estate',
            value: '566,452',
            additionalInfo: null,
            parentColor: '#04EA00',
            subBranch: [
                {
                    id: 1,
                    title: '123 Main St',
                    value: '566,452',
                    childColor: '#61F95E',
                    additionalInfo: {
                        title: 'Primary Resident',
                        value: '7 hours ago',
                    }
                },
                {
                    id: 2,
                    title: '987 Elm St',
                    value: '',
                    childColor: '#61F95E',
                    additionalInfo: null
                },
            ]
        },
        {
            id: 4,
            title: 'Liabilities',
            value: '166,968',
            additionalInfo: null,
            parentColor: '#00E882',
            subBranch: [
                {
                    id: 1,
                    title: 'Mortage',
                    value: '455,455',
                    childColor: '#70FCBE',
                    additionalInfo: null
                },
            ]
        },
        {
            id: 5,
            title: 'Credit Cards',
            value: '543,322',
            isParent: true,
            additionalInfo: null,
            parentColor: '#0084AE',
            subBranch: []
        },
    ])

    const setActiveMenu = (currentId) => {
        sidebarMenus.value.map(menu => menu.id === currentId ? activeMenu.value = menu : activeMenu.value)
    }

    return { activeMenu, sidebarMenus, balanceData, setActiveMenu }
})