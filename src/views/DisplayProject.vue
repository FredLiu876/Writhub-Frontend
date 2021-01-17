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
                    v-tabs(v-model="tab")
                        v-tab Main
                        v-tab Side Stories
                    v-tabs-items(v-model="tab")
                        v-card.main-card(
                            flat
                        ) {{ projectInfo.text }}
                    .bottom
</template>

<script>
    import ProjectHead from "@/components/ProjectHead.vue"
    export default {
        name: "DisplayProject",
        components: {
            ProjectHead
        },
        data: () => {
            return {
                width: window.innerWidth,
                height: window.innerHeight,
                projectInfo: {
                    name: "Project Name",
                    description: "Project Description",
                    text: "Lorem Ipsum Blah Blah Blah.",
                    coverArt: "CoverArt.jpg"
                }
            }
        },
        methods: {
            getDimensions: function() {
                this.width = window.innerWidth
                this.height = window.innerHeight
            }
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
    .main-text {
        padding-top: 48px;
        padding-left: 65px;
    }
    .set-vh {
        height: 100%;
    }
    .set-50 {
        height: 50%;
    }
</style>