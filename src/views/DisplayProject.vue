<template lang="pug">
    div(
        :style="{width: this.width + 'px'}"
        v-resize="getDimensions"
    )
        v-row
            v-col(
                cols="1"
            )
            v-col(
                cols="10"
            )
                .initial-height
                    ProjectHead
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
            }
        },
        methods: {
            getDimensions: function() {
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
</style>