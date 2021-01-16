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
                .initial-height
                    span.title Community Projects
                .display-cards
                    .project-cards
                        

</template>

<script>
    export default {
        name: "NewProject",
        components: {},
        data: () => {
            return {
                height: window.innerHeight,
                width: window.innerWidth
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