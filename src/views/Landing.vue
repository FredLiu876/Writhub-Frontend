<template lang="pug">
    div(
        :style="{ height: this.height + 'px', width: this.width + 'px'}"
        v-resize="getDimensions"
    )
        v-row.set-vh(
            v-if="this.width >= 960"
        )
            v-col(
                md="1"
                sm="2"
                cols="1"
            )
            v-col(
                md="3"
                sm="8"
                cols="10"
                offset-md="0"
                offset="2"
            )
                span.title WritHub
                span.body-text A collaborative space for all literary works; welcome to the future of open-source storytelling. Use the community to meet community standards
                google-signin-btn.sign-in-btn( @click="onSignIn" )
            v-col(
                md="1"
                cols="0"
            )
            v-col(
                md="6"
                cols="10"
            )
                v-img.landing-image(
                    src="../assets/LandingImage.svg"
                )
        .set-vh(
            v-else
        )
            v-row.set-50
                v-col(
                    sm="2"
                    col="1"
                )
                v-col(
                    sm="8"
                    cols="10"
                )
                    span.title WritHub
                    span.body-text Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                    google-signin-btn.sign-in-btn( @click="onSignIn" )
            v-row.set-50
                v-col(
                    cols="1"
                )
                v-col(
                    cols="10"
                )
                    v-img.landing-image(
                        src="../assets/LandingImage.svg"
                    )
                
</template>

<script>
    export default {
        name: "Landing",
        components: {},
        data: () => {
            return {
                error: "",
                height: window.innerHeight,
                width: window.innerWidth
            }
        },
        methods: {
            getDimensions: function() {
                this.height = window.innerHeight
                this.width = window.innerWidth
            },
            onSignIn: function() {
                console.log("checking")
                this.$gapi.signIn()
                    .then(user => {
                        console.log(user.name)
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
    .title {
        display: block;
        position: relative;
        top: 24%;
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 50px;
        line-height: 66px;
        letter-spacing: 1px;
        color: #092433;
        text-align: left;
    }
    .body-text {
        display: block;
        position: relative;
        top: 32%;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
        text-align: left;
        color: rgba(9, 36, 51, 0.8);
    }
    .sign-in-btn {
        display: block;
        position: relative;
        top: 40%;
    }
    .landing-image {
        position: relative;
        top: 20%;
    }
    .set-vh {
        height: 100%;
    }
    .set-50 {
        height: 50%;
    }
</style>