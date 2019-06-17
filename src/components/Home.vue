<template>
  <v-container-fluid>
    <v-card dark>
      <div id="header">
        <v-container grid-list-md>
          <v-layout row wrap align-end justify-start>
            <v-flex xs12 sm6 md3 lg3>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
    </v-card>
  </v-container-fluid>
</template>

<script>
export default {

}
</script>

<style lang="scss">
#header{
  object-fit: cover;
  box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: linear-gradient(0deg, #191C21 0%, rgba(25, 28, 33, 0) 50%), url('https://res.cloudinary.com/die9ji2vn/image/upload/v1560155423/top_image_kyv74r.jpg');
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
