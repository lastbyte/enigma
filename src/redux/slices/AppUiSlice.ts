import {createSlice} from '@reduxjs/toolkit'

type BreadcrumbItem = {
    name: string
    link: string
}

export type AppUiState = {
    isDrawerOpen: boolean
    selectedNavValue: string
    selectedCategory: string
    breadcrumbs: BreadcrumbItem[]
    theme: 'web_light' | 'web_dark' | 'teams_light' | 'teams_dark'
}

const initialState: AppUiState = {
    isDrawerOpen: false,
    selectedCategory: "",
    selectedNavValue: "home",
    theme: 'teams_dark',
    breadcrumbs: [{
        name: "Home",
        link: "/"
    }]
}

const AppUiSlice = createSlice({
    name: 'appUi',
    initialState,
    reducers: {
        setTheme(state, action) {
            state.theme = action.payload
        },
        toggleDrawer(state) {
            state.isDrawerOpen = !state.isDrawerOpen
        },
        setSelectedNavValue(state, action) {
            state.selectedNavValue = action.payload
        },
        setSelectedCategory(state, action) {
            state.selectedCategory = action.payload
        },
        setBreadcrumbs(state, action) {
            state.breadcrumbs = action.payload
        }
    },
})


export default AppUiSlice
export const {setTheme,toggleDrawer, setSelectedNavValue, setSelectedCategory,setBreadcrumbs} = AppUiSlice.actions
