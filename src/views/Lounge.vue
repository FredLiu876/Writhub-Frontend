<template lang="pug">
    div(
        :style="{ height: this.height + 'px', width: this.width + 'px'}"
        v-resize="getDimensions"
    )
        v-row.set-vh(
        )
            v-col.set-vh(
                lg="2"
                cols="1"
            )
            v-col.set-vh(
                lg="8"
                cols="10"
            )
                .initial-height
                    span.title Invite our polling bot!
                    span.margin-44 Use our polling bot in your discord community, then use polls to gather feedback on which edits to accept!
                    a.click-button.margin-44(href="https://discord.com/api/oauth2/authorize?client_id=800097872401006652&permissions=2048&scope=bot") Add Bot!
                    .bottom
</template>

<script>
    import ProjectCard from "@/components/ProjectCard.vue"
    import firebase from "firebase/app";
    require('firebase/database')
    
    export default {
        name: "CommunityProjects",
        data: () => {
            return {
                height: window.innerHeight,
                width: window.innerWidth,
                items: []
            }
        },
        components: {
            ProjectCard
        },
        methods: {
            getDimensions: function() {
                this.height = window.innerHeight
                this.width = window.innerWidth
            },
            loadPage: function(v) {
                firebase.database().ref('stories').orderByChild("date").on("value", function(snap) {
                    v.items = [];
                    snap.forEach(function(data) {
                        let text = ""
                        console.log(data.val()?.text)
                        if (data.val()?.text) {
                            text = Object.values(data.val().text)[0].text
                        }
                        v.items.push({ key: data.key, title: data.val().title, description: data.val().description, text: text, coverArt: "CoverArt.jpg"});
                        // v.items.push({ key: data.key, title: data.val().title, description: data.val().description, owner: data.val().owner, text: text, coverArt: "CoverArt.jpg"});
                    });
                });
            },
        },
        beforeMount() {
          this.loadPage(this);
        },
    }
</script>


<style scoped>
    .margin-44 {
        display: block;
        margin-top: 44px;
    }

    .initial-height {
        position: relative;
        top: 30%;
        text-align: left;
    }

    .click-button {
        display: inline-block;
        padding: 8px 16px;
        border: #000000 solid 1px;
        font-family: Roboto;
        font-style: normal;
        font-weight: 300;
        font-size: 24px;
        line-height: 26px;
        color: #000000;
        border-radius: 4px;
        text-decoration: none;
    }

    a {
        cursor: pointer;
        transition: 0.1s;
        text-decoration: none;
    }
    a:hover {
        background-color: #7069691f;
    }

    .title {
        display: block;
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 48px;
        line-height: 26px;
        color: #091133;
        text-align: left;
        margin-top: 40px;
    }

    .set-vh {
        height: 100%;
    }
    .set-50 {
        height: 50%;
    }
</style>