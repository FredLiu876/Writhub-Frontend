<template lang="pug">
    div(
        :style="{width: this.width + 'px', height: this.height + 'px'}"
        v-resize="getDimensions"
    )
        v-row.set-vh
            v-col(
                lg="2"
                cols="1"
            )
            v-col.set-vh(
                lg="8"
                cols="10"
            )
                .initial-height
                    ProjectHead(
                        :name="projectInfo.name"
                        :description="projectInfo.description"
                        :coverArt="projectInfo.coverArt"
                    )
                    .margin67
                    v-tabs
                        v-tab Main
                        v-tab(@click="loadOffshoots()") Side Stories
                        v-tab-item
                            v-card.main-card
                                .align-items
                                    span.project-text {{ projectInfo.text }}
                                    .middle-align
                                        .right-align
                                            a.proposed-edit(@click="merge") {{ proposalAmount }} Proposed Edits
                        v-tab-item
                            v-card.main-card
                                .display-cards
                                    ProjectCard.project-cards(
                                        v-for="(card, i) in sideStories"
                                        :key="i"
                                        :name="card.name"
                                        :description="card.description"
                                        :text="card.text"
                                        :coverArt="card.coverArt"
                                    )
                    .bottom
</template>

<script>
    import ProjectHead from "@/components/ProjectHead.vue"
    import ProjectCard from "@/components/ProjectCard.vue"
    import firebase from "firebase/app";
    require('firebase/database')

    export default {
        name: "DisplayProject",
        components: {
            ProjectHead,
            ProjectCard
        },
        data: () => {
            return {
                width: window.innerWidth,
                height: window.innerHeight,
                proposalAmount: 0,
                projectInfo: {
                    name: "Project Name",
                    description: "Project Description",
                    text: "Chapter 1Lorem Ipsum Blah Blah Blah.",
                    coverArt: "CoverArt.jpg"
                },
                offshootIDs: [],
                sideStories: [],
            }
        },
        methods: {
            getDimensions: function() {
                this.width = window.innerWidth
                this.height = window.innerHeight
            },
            merge: function() {
                if (this.proposalAmount > 0) {
                    location.pathname = location.pathname + "/merge"
                } else {
                    alert("Must have at least one proposal to begin.")
                }
            },
            loadPage: function() {
                const _this = this;
                _this.projectInfo.name = this.$route.params.projectName
                firebase.database().ref('stories/' + this.$route.params.projectID).on("value", function(snap) {
                    _this.projectInfo.description = snap.val().description;
                });
                firebase.database().ref('stories/' + this.$route.params.projectID + '/text')
                .orderByChild("date").on("value", function(snap) {
                    _this.proposalAmount = Object.values(snap.val()).length - 1;
                    _this.projectInfo.text = Object.values(snap.val())[0].text;
                });
            },
            loadOffshoots: function() {
                const _this = this;
                _this.sideStories = [];
                firebase.database().ref('stories/' + this.$route.params.projectID + '/offshoots').on("value", function(snap) {
                    _this.offshootIDs = Object.values(snap.val());
                });

                _this.offshootIDs.forEach(function(data) {
                    firebase.database().ref('stories/' + data.offshootID).on("value", function(snap) {
                        _this.sideStories.push({
                            name: snap.val().title,
                            description: snap.val().description,
                            text: snap.val().description,
                            coverArt: "CoverArt.jpg"
                        });
                    });
                });
            }
        },
        beforeMount() {
            this.loadPage()
        }
    }
</script>

<style scoped>
    .initial-height {
        position: relative;
        top: 30%;
    }
    .margin-67 {
        margin-top: 67px;
    }
    .main-card {
        padding-top: 48px;
        padding-left: 65px;
        padding-right: 26px;
        padding-bottom: 48px;
        background: #FFFFFF;
        box-shadow: inset 0px 1px 4px rgba(0, 0, 0, 0.25) !important;
    }
    .middle-align {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 38%;
    }
    .right-align {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }
    .project-text {
        display: block;
        width: 58%;
    }
    .align-items {
        display: flex;
        justify-content: space-between;
        margin-top: 48px;
        text-align: left;
    }
    .proposed-edit {
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 32px;
        color: rgba(0, 0, 0, 0.87);
        padding: 42px 46px;
        background: #FFFFFF;
        box-shadow: 0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12) !important;
        border-radius: 4px;
    }
    .proposed-edit:hover {
        box-shadow: 0 7px  8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12) !important;
    }
    .display-cards {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
    .project-cards {
        width: calc((100% - 82px) / 3);
        margin: 56px 10px 0px 10px;
    }
    .set-vh {
        height: 100%;
    }
    .set-50 {
        height: 50%;
    }
</style>
