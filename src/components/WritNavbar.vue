<template lang="pug">
    div
        v-app-bar.custom-nav(
            fixed
            color="rgb(255, 255, 255)"
        )
            a.home-button.title(@click="navigate('/home')") WritHub
            a.menu-buttons(@click="navigate('/new')") Start New Project
            a.menu-buttons(@click="navigate('/community')") Community Projects
            a.menu-buttons(@click="navigate('/lounge')") Writer's Lounge
            v-divider
            google-signin-btn.sign-in-btn(v-show="!signedIn" @click="onSignIn" )
            button.logout-btn(v-show="signedIn" @click="logout") LOG OUT
</template>

<script>
    export default {
        name: "WritNavbar",
        data: () => {
            return {
                showSide: false,
                width: window.innerWidth,
                signedIn: false
            }
        },
        methods: {
            onSignIn: function() {
                console.log("checking")
                this.$gapi.signIn()
                    .then(user => {
                        console.log(user.name)
                        this.signedIn = true
                        location.pathname = "/home"
                    })
                    .catch(err => {
                        console.error('Not signed in: %s', err.error)
                        this.error = err.error
                    })
            },
            logout: function() {
                this.$gapi.signOut()
                    .then(() => {
                        console.log('User disconnected.')
                        this.signedIn = false
                        location.pathname = "/"
                    })
            },
            navigate: function(href) {
                this.$gapi.isSignedIn()
                    .then(result => {
                        console.log(result ? 'Signed in' : 'Signed out')
                        if (result) {
                            location.pathname = href
                        }
                    })
            }
        },
        mounted() {
            this.$gapi.isSignedIn()
                .then(result => {
                    this.signedIn = result
                    if (!result && location.pathname != "/") {
                        location.pathname = "/"
                    } else if (result && location.pathname == "/") {
                        location.pathname = "/home"
                    }
                })
        }
    }
</script>

<style>
    .custom-nav {
        height: 71px !important;
        z-index: 10 !important;
    }
    .v-toolbar__content {
        height: 71px !important;
    }
    hr {
        visibility: hidden;
    }
</style>

<style scoped>
    a {
        cursor: pointer;
        transition: 0.1s;
        text-decoration: none;
    }
    a:hover {
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

    .logout-btn {
        font-family: Roboto;
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 26px;
        color: #000000;
        margin-left: 40px;
        padding: 8px 16px;
        border: 1px solid #000000;
    }
    .logout-btn:hover {
        background-color: #7069691f;
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
