<template lang="pug">
    div(
        :style="{ height: this.height + 'px', width: this.width + 'px'}"
        v-resize="getDimensions"
    )
        v-row.set-vh
            v-col.set-vh(
                lg="2"
                cols="1"
            )
            v-col.set-vh(
                lg="8"
                cols="10"
            )
                .initial-height
                    span.title My Projects
                    .display-cards(
                        v-for="(row, index) in items"
                        :key="index"
                    )
                        ProjectCard(
                            v-for="(card, i) in row"
                            :key="i"
                            :name="card.name"
                            :description="card.description"
                            :text="card.text"
                            :coverArt="card.coverArt"
                        )
                    .bottom
</template>

<script>
    import ProjectCard from "@/components/ProjectCard.vue"
    import firebase from "firebase/app";
    require('firebase/database')

    export default {
        name: 'Home',
        components: {
            ProjectCard
        },
        data: () => {
            return {
                height: window.innerHeight,
                width: window.innerWidth,
                items: [
                    [//I need to keep them in arrays of 3, sorry but have fun! XD
                        {
                            name: "Project Name",
                            description: "Project Description",
                            text: "Story Text. Lorem ipsum blah blah blah.",
                            coverArt: "CoverArt.jpg"
                        },
                        {
                            name: "Project Name",
                            description: "Project Description",
                            text: "Story Text. Lorem ipsum blah blah blah.",
                            coverArt: "CoverArt.jpg"
                        },
                        {
                            name: "Project Name",
                            description: "Project Description",
                            text: "Story Text. Lorem ipsum blah blah blah.",
                            coverArt: "CoverArt.jpg"
                        }
                    ]
                ]
            }
        },
        methods: {
            getDimensions: function() {
                this.height = window.innerHeight;
                this.width = window.innerWidth;
            },
            loadPage: function(v) {
                firebase.database().ref('stories').orderByChild("date").on("value", function(snap) {
                    v.items = [];
                    snap.forEach(function(data) {
                        v.items.push({ key: data.key, value: data.val().title, description: data.val().description});
                    });
                });
            },
        },
        beforeMount() {
            this.loadPage(this);
        }
    }
</script>

<style scoped>
    .initial-height {
        position: relative;
        top: 30%;
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
    }
    
    .display-cards {
        width: 100%;
        margin-top: 56px;
        display: flex;
        justify-content: space-between;
    }

    .project-cards {
        width: calc((100% - 82px) / 3);
    }
    .set-vh {
        height: 100%;
    }
    .set-50 {
        height: 50%;
    }
</style>
