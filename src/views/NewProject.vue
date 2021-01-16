<template lang="pug">
    div(
        :style="{ height: this.height + 'px', width: this.width + 'px'}"
        v-resize="getDimensions"
    )
        v-row.set-vh(
        )
            v-col.set-vh(
                cols="1"
            )
            v-col.set-vh(
                cols="10"
            )
                v-img.project-image(
                    src="../assets/NewProjectImage.svg"
                    :style="{ top: this.imageTopOffset + 'px', left: this.imageLeftOffset + 'px'}"
                )
                div.initial-height
                    span.title Start Your Project
                    v-sheet.form-sheet(
                        color="#F1F3F4"
                        elevation="1"
                        height="710"
                    )
                        .the-form(style="margin-top: 52px; text-align: left;")
                            .form-labels(
                                style="display: inline-block;"
                            ) Let's call this project:
                            v-input
                                input.textareas(
                                    placeholder="Title"
                                    style="height:32px"
                                )
                            .form-labels(
                                style="display: inline-block;"
                            ) Description
                            v-input(height="92")
                                textarea.textareas(style="height: 92px !important;")
                            .form-labels(style="display: flex; justify-content: space-between")
                                div(style="max-width: 200px;")
                                    span Upload Cover Art
                                    label.input-file-label(for="file" style="margin-top: 16px;")
                                    input.input-file#file(type="file" @change="setFilename")
                                    span(style="margin-top: 8px; display: block; font-size: 12px; text-overflow: hidden;") {{ filename }}
                                div
                    div(style="margin-top: 52px; padding-bottom: 208px; display: flex; justify-content: space-between;")
                        hr
                        .buttons(style="display:flex; justify-content: space-between; width: 300px;")
                            a.cancel-button(href="/") Cancel
                            button.create-button() Create Project
</template>

<script>
    export default {
        name: "NewProject",
        components: {},
        data: () => {
            return {
                height: window.innerHeight,
                width: window.innerWidth,
                imageTopOffset: window.innerHeight * 0.3 + 25.6 + 52 - 188,
                imageLeftOffset: window.innerWidth-(window.innerWidth * 0.08333333) - window.innerWidth * 0.833333333 * 0.54,
                filename: ""
            }
        },
        methods: {
            getDimensions: function() {
                this.height = window.innerHeight
                this.width = window.innerWidth
                let sheet = document.querySelector('.form-sheet')
                this.imageTopOffset = sheet.getBoundingClientRect().top - 183
                this.imageLeftOffset = sheet.getBoundingClientRect().right - 600
                //background: #00BFA6;
            },
            setFilename: function(file) {
                console.log(file)
                this.filename = file.path[0].files[0].name
            }
        }
    }
</script>

<style scoped>
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

    .initial-height {
        position: relative;
        top: 30%;
    }

    .form-sheet {
        margin-top: 52px;
    }

    .project-image {
        position: absolute;
        left: 40%;
        z-index: 5;
    }

    .title {
        display: block;
        position: relative;
        top: 24%;
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 36px;
        line-height: 26px;
        color: #091133;
        text-align: left;
        z-index: 6;
    }
    .textareas {
        width: 87.5%;
        margin-left: 7.15%;
        margin-top: 16px;
        padding: 4px 8px;
        background: #E6E6E6;
        box-shadow: inset 0px 0.5px 1px rgba(0, 0, 0, 0.25);
    }
    .form-labels {
        margin-left: 7.15%;
        margin-top: 52px;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 20px;
        color: #000000;
    }

    .input-file-label {
        display: block;
        width: 100%;
        height: 10rem;
        background-image: url(../assets/CoverArt.jpg);
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-size: cover;
        border-radius: 0.25rem;
        cursor: pointer;
        transition: box-shadow .3s;
    }
    .input-file-label:hover {
        box-shadow: 0px 0px 10px #1e1e1e;
    }
    .input-file {
        display: none;
    }
    
    .set-vh {
        height: 100%;
    }
    .set-50 {
        height: 50%;
    }
</style>