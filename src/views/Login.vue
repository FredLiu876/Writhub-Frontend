<template lang="pug">
    div
        br
        span.text-h2.text-center Sign in to collaborate online!
        br
        span.text-h4.mt-2.text-center Let your writing be shared and improved.
        span.text-body-2.mt-1.text-center {{error}}
        br
        v-row
            v-col(
                lg="4"
                md="3"
                sm="2"
                cols="1"
            )
            v-col(
                lg="4"
                md="6"
                sm="8"
                cols="10"
            )
                google-signin-btn( @click="onSignIn" )
</template>

<script>
    export default {
        name: "Login",
        components: {},
        data: () => {
            return {
                error: ""
            }
        },
        methods: {
            onSignIn: function() {
                console.log("checking")
                this.$gapi.signIn()
                    .then(user => {
                        console.log('Signed in as %s', user.name)
                        console.log("ID: " + user.id)
                        console.log('Image URL: ' + user.image)
                        console.log('Email: ' + user.email)
                        location.pathname = "/home"
                    })
                    .catch(err => {
                        console.error('Not signed in: %s', err.error)
                        this.error = err.error
                    })
            }
        }
    }
</script>

<style scoped>
    span {
        display: block;
    }
</style>