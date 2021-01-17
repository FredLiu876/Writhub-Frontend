<template lang="pug">
  div(
    :style="{ height: this.height + 'px', width: this.width + 'px' }"
    v-resize="getDimensions"
  )
    v-row.set-vh(
      v-if="this.width >= 960"
    )
      v-col(
        md="1"
        sm="2"
        cols="1"
      )
      v-col(
        md="3"
        sm="8"
        cols="10"
        offset-md="0"
        offset="2"
      )
        span.title My Projects
        span.ul()
          li(v-for="item in items" :key="item.key") {{ item.title }} <br> {{ item.description }}
</template>

<script>
  import firebase from "firebase/app";
  require('firebase/database')

  export default {
    name: 'Home',
    components: {
      
    },
    data: () => {
      return {
        height: window.innerHeight,
        width: window.innerWidth,
        items: []
      }
    },
    methods: {
      getDimensions: function() {
        this.height = window.innerHeight;
        this.width = window.innerWidth;
      },
      loadPage: function(v) {
        firebase.database().ref('stories').orderByChild("date").on("value", function(snap) {
          v.items = [];
          snap.forEach(function(data) {
            v.items.push({ key: data.key, title: data.val().title, description: data.val().description});
          });
        });
      },
    },
    beforeMount() {
      this.loadPage(this);
    }
  }
</script>

<style scoped>
  .title {
    display: block;
    position: relative;
    top: 24%;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 50px;
    line-height: 66px;
    letter-spacing: 1px;
    color: #092433;
    text-align: left;
  }
  .ul {
    display: block;
    position: relative;
    top: 24%;
  }
  .set-vh {
    height: 100%;
  }
  .set-50 {
    height: 50%;
  }
</style>
