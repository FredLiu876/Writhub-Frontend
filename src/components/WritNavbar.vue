<template lang="pug">
    div
        v-app-bar.custom-nav(
            fixed
            color="rgb(255, 255, 255)"
        )
            btn.home-button.title(href="/") WritHub
            btn.menu-buttons() Start New Project
            btn.menu-buttons() Community Projects
            btn.menu-buttons() Writer's Lounge
            v-divider
            google-signin-btn( @click="onSignIn" )
</template>

<script>
    export default {
        name: "WritNavbar",
        data: () => {
            return {
                showSide: false,
                width: window.innerWidth
            }
        },
    }
</script>

<style>
    .custom-nav {
        height: 71px !important;
    }
    .v-toolbar__content {
        height: 71px !important;
    }
    hr {
        visibility: hidden;
    }
</style>

<style scoped>
    btn {
        cursor: pointer;
        transition: 0.1s;
    }
    btn:hover {
        background-color: #7069691f;
    }

    .title {
        font-family: Roboto !important;
        font-style: normal !important;
        font-weight: 500 !important;
        font-size: 36px !important;
        line-height: 26px !important;
        color: #000000 !important;
    }
    .home-button {
        margin: 14px !important;
        padding: 8px !important;
        border-radius: 8px;
        height: auto !important;
    }

    .menu-buttons {
        font-family: Roboto;
        font-style: normal;
        font-weight: 300;
        font-size: 24px;
        line-height: 26px;
        color: #000000;
        margin-left: 40px;
        padding: 4px;
        border-radius: 4px;
    }

    .v-app-bar .v-text-field {
        max-width: 200px;
    }

    .search-result:not(.v-list-item--active)::before {
        opacity: 0.16 !important;
    }
    .search-result:not(.v-list-item--active):hover::before {
        opacity: 0.24 !important;
    }
    .v-list-item--active:not(.search-result):hover::before {
        opacity: 0.32 !important;
    }
    .v-list-item--active.search-result::before {
        opacity: 0.4 !important;
    }
    .v-list-item--active.search-result:hover::before {
        opacity: 0.48 !important;
    }
</style>