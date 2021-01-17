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
                    span.title Make an edit
                    v-input(height="400")
                        textarea.textareas(
                            style="height: 400px !important;"
                            v-model="storyContent"
                        )
                    div(style="margin-top: 52px; display: flex; justify-content: space-between;")
                            hr
                            .buttons(style="display:flex; justify-content: space-between; width: 300px;")
                                a.cancel-button(href="/") Cancel
                                button.create-button(type="submit") Submit Changes
                    .bottom
</template>

<script>
    export default {
        name: "InsertEdit",
        data: () => {
            return {
                height: window.innerHeight,
                width: window.innerWidth,
                storyContent: "Story text here",
                cardInfos: [
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
                    },
                    {
                        name: "Project Name",
                        description: "Project Description",
                        text: "Story Text. Lorem ipsum blah blah blah.",
                        coverArt: "CoverArt.jpg"
                    }
                ]
            }
        },
        methods: {
            getDimensions: function() {
                this.height = window.innerHeight
                this.width = window.innerWidth
            }
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
    .textareas {
        margin-top: 84px;
        width: 100%;
        padding: 4px 8px;
        background: #E6E6E6;
        box-shadow: inset 0px 0.5px 1px rgba(0, 0, 0, 0.25);
    }

    .cancel-button {
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 36px;
        display: flex;
        align-items: center;
        text-align: center;
        text-transform: uppercase;
        color: #5F6369;
        border: solid 1px #5F6369;
        text-decoration: none;
        padding: 8px 16px;
    }
    .cancel-button:hover {
        text-decoration: underline;
    }
    .create-button {
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 36px;
        display: flex;
        align-items: center;
        text-align: center;
        text-transform: uppercase;
        border: solid 1px rgba(0, 191, 166, 0.3);
        text-decoration: none;
        padding: 8px 16px;
        background: rgba(0, 191, 166, 0.3);
        color: #FFFFFF;
    }
    .create-button:hover {
        text-decoration: underline;
    }

    .set-vh {
        height: 100%;
    }
    .set-50 {
        height: 50%;
    }
</style>
