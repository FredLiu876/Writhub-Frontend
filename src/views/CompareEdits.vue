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
                    form(@submit.prevent="submitted")
                        div
                            span.title {{ projectInfo.name }}
                            v-img.project-image(
                                :src="require('@/assets/' + projectInfo.coverArt)"
                                height="200"
                            )
                            span.project-description Description
                            .align-items
                                span.description-text {{ projectInfo.description }}
                                .middle-align
                                    .right-align
                                        button.create-button(
                                            type="submit"
                                        ) SUBMIT CHANGES
                        .margin67
                        v-tabs
                            v-tab(v-for="(proposal, index) in proposals" @click="changeTab(index + 1)") Proposal {{ index + 1 }}
                            v-tab-item(v-for="(proposal, index) in proposals")
                                v-card.main-card
                                    v-input(height="400")
                                        textarea.textareas(
                                            style="height: 400px !important; width: 100%;"
                                            v-model="content"
                                        )
                        .bottom
</template>

<script>
    import firebase from "firebase/app";
    require('firebase/database')

    import DiffMatchPatch from 'diff-match-patch';

    const dmp = new DiffMatchPatch();

    export default {
        name: "InsertEdit",
        data: () => {
            return {
                width: window.innerWidth,
                storyText: "Story text here",
                height: window.innerHeight,
                projectInfo: {
                    name: "Project Name",
                    description: "Project Description",
                    text: "Chapter 1Lorem Ipsum Blah Blah Blah.",
                    coverArt: "CoverArt.jpg"
                },
                proposals: [],
                content: "",
                diff: "",
            }
        },
        methods: {
            getDimensions: function() {
                this.width = window.innerWidth
                this.height = window.innerHeight
            },
            submitted: function() {
                firebase.database().ref('stories/' + this.$route.params.projectID + '/text').push({
                    text: this.projectInfo.text,
                    date: Date.now()
                })
                alert("Submitted!")
            },
            mergeTexts: function(t1, t2) {
                this.diff = dmp.diff_main(t1, t2)
                dmp.diff_cleanupSemantic(this.diff)

                let combined = "";
                this.diff.forEach(function(item, index) {
                    if (item[0] < 0) {
                        if (index != 0) {
                            combined += "\n";
                        }
                        combined += "---\n" + item[1]
                    } else if (item[0] > 0) {
                        if (index != 0) {
                            combined += "\n";
                        }
                        combined += "+++\n" + item[1]
                    } else {
                        combined += item[1]
                    }
                });

                return combined;
            },
            loadPage: function() {
                const _this = this
                _this.projectInfo.name = _this.$route.params.projectName
                firebase.database().ref('stories/' + this.$route.params.projectID).on("value", function(snap) {
                    _this.projectInfo.description = snap.val().description;
                });

                firebase.database().ref('stories/' + this.$route.params.projectID + '/text')
                .orderByChild("date").on("value", function(snap) {
                    _this.proposals = new Array(Object.values(snap.val()).length - 1).fill(0);
                    let oldText = "";
                    if (snap !== null && snap.val() !== null && _this.proposals.length >= 0) {
                        oldText = Object.values(snap.val())[0].text;
                    }
                    let newText = "";
                    if (snap !== null && snap.val() !== null && _this.proposals.length > 0) {
                        newText = Object.values(snap.val())[1].text;
                    }

                    _this.content = _this.mergeTexts(oldText, newText);
                })
            },
            changeTab: function(id) {
                const _this = this
                firebase.database().ref('stories/' + this.$route.params.projectID + '/text')
                .orderByChild("date").on("value", function(snap) {
                    let oldText = "";
                    if (snap !== null && snap.val() !== null && snap.val()[0] !== null) {
                        oldText = Object.values(snap.val())[0].text;
                    }
                    let newText = "";
                    if (snap !== null && snap.val() !== null && _this.proposals.length > 0) {
                        newText = Object.values(snap.val())[id].text;
                    }

                    _this.content = _this.mergeTexts(oldText, newText);
                })
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
        padding-right: 65px;
        padding-bottom: 48px;
        background: #FFFFFF;
        box-shadow: inset 0px 1px 4px rgba(0, 0, 0, 0.25) !important;
    }
    .set-vh {
        height: 100%;
    }
    .set-50 {
        height: 50%;
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
    .project-image {
        margin-top: 44px;
        border-top: solid 4px  #00BFA6;
    }
    .project-description {
        text-align: left;
        display: block;
        margin-top: 55px;
        font-family: Roboto;
        font-style: normal;
        font-weight: 300;
        font-size: 32px;
        line-height: 20px;
        color: #000000;
    }
    .description-text {
        display: block;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
        color: rgba(9, 36, 51, 0.8);
        width: 55%;
    }
    .middle-align {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 35%;
    }
    .right-align {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }
    .create-button {
        padding: 28px 14px;
        background-color: #FFFFFF;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 36px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #00BFA6;
        border: #00BFA6 solid 2px;
    }
    .create-button:hover {
        text-decoration: underline;
    }
    .align-items {
        display: flex;
        justify-content: space-between;
        margin-top: 48px;
        text-align: left;
    }
</style>
