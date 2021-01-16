<template lang="pug">
    div(
        :style="{ height: this.height + 'px', width: this.width + 'px'}"
        v-resize="getDimensions"
    )
        v-row.set-vh(
            v-if="this.width >= 960"
        )
            v-col.set-vh(
                md="1"
            )
            v-col.set-vh(
                md="10"
            )
                v-img.project-image(
                        src="../assets/NewProjectImage.svg"
                        :style="{ top: this.imageTopOffset + 'px', left: this.imageLeftOffset + 'px'}"
                        :width="imageWidth"
                    )
                div.initial-height
                    span.title Start Your Project
                    v-sheet.form-sheet(
                        color="#F1F3F4"
                        elevation="1"
                        height="710"
                        ref="sheet"
                    )

        .set-vh(
            v-else
        )
            v-row.set-50
            v-row.set-50
                
</template>

<script>
    export default {
        name: "NewProject",
        components: {},
        data: () => {
            return {
                height: window.innerHeight,
                width: window.innerWidth,
                imageTopOffset: 0,
                imageLeftOffset: 0,
                imageWidth: 0,
            }
        },
        methods: {
            getDimensions: function() {
                this.height = window.innerHeight
                this.width = window.innerWidth
                this.imageTopOffset = this.height * 0.3 + 25.6 + 52 - 188
                this.imageWidth = this.$refs["sheet"].offsetWidth * 0.54
                this.imageLeftOffset = this.$refs["sheet"].getBoundingClientRect().right - this.imageWidth
            }
        }
    }
</script>

<style scoped>
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
    
    .set-vh {
        height: 100%;
    }
    .set-50 {
        height: 50%;
    }
</style>