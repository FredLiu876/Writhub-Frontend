<template lang="pug">
    div(
        :style="{width: this.width + 'px', height: this.height + 'px'}"
        v-resize="getDimensions"
    )
        v-row.set-vh
            v-col(
                cols="1"
            )
            v-col.set-vh(
                cols="10"
            )
                .initial-height
                    ProjectHead(
                        :name="projectInfo.name"
                        :description="projectInfo.description"
                        :coverArt="projectInfo.coverArt"
                    )
                    .margin67
                    ProjectMenu(

                    )
                    .bottom
</template>

<script>
    import ProjectHead from "@/components/ProjectHead.vue"
    import ProjectMenu from "@/components/ProjectMenu.vue"
    export default {
        name: "DisplayProject",
        components: {
            ProjectHead,
            ProjectMenu
        },
        data: () => {
            return {
                width: window.innerWidth,
                height: window.innerHeight,
                projectInfo: {
                    name: "Project Name",
                    description: "Project Description",
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
    .set-vh {
        height: 100%;
    }
    .set-50 {
        height: 50%;
    }
</style>