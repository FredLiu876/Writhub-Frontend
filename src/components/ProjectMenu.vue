<template lang="pug">
    div
        v-tabs
            v-tab Main
            v-tab Side Stories
</template>

<script>
    export default {
        data: () => {
            return {
                
            }
        },
        props: {
            name: String,
            description: String,
            coverArt: String
        }
    }
</script>

<style scoped>
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
        justify-content: right;
    }
    .contribute-button {
        padding: 28px 14px;
        background-color: #00BFA6;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 36px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #FFFFFF;
    }
    .contribute-button:hover {
        text-decoration: underline;
    }
    .align-items {
        display: flex;
        justify-content: space-between;
        margin-top: 48px;
    }
</style>