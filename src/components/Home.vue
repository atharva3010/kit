<template>
  <v-container-fluid>
    <v-card dark height="600px">
      <div id="header">
        <!-- <v-container grid-list-md align-content-space-around class="hidden-sm-and-down">
          <v-layout align-end row wrap justify-space-between justify-center text-xs-center fill-height>
            <v-flex xs12 sm6 md6 lg3>
              <v-card dark color="#D8DADE" style="width: 202px; top: 90%; position: absolute; border-radius: 3px; min-height:240px;" class="mb-3">
                <v-card-text><h2 style="color: #FFFFFF; position:absolute; bottom:20px; right:0; left:0;">Admission</h2></v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm6 md6 lg3>
              <v-card dark color="#D8DADE" style="width: 202px; top: 90%; position: absolute; border-radius: 3px; min-height:240px;" class="mb-3">
                <v-card-text><h2 style="color: #FFFFFF; position:absolute; bottom:20px; right:0; left:0;">Housing</h2></v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm6 md6 lg3>
              <v-card dark color="#D8DADE" style="width: 202px; top: 90%; position: absolute; border-radius: 3px; min-height:240px;" class="mb-3">
                <v-card-text><h2 style="color: #FFFFFF; position:absolute; bottom:20px; right:0; left:0;">Programs</h2></v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm6 md6 lg3>
              <v-card dark color="#D8DADE" style="width: 202px; top: 90%; position: absolute; border-radius: 3px; min-height:240px;" class="mb-3">
                <v-card-text><h2 style="color: #FFFFFF; position:absolute; bottom:20px; right:0; left:0;">News & Events</h2></v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container> -->
        <v-container grid-list-md align-content-space-around>
          <carousel loop dots :responsive="{0:{items:1,nav:false},600:{items:3,nav:false}, 1000:{items:4, nav:false}}" style="margin-top:500px; width:100%;">
            <v-card dark color="#D8DADE" style="border-radius: 3px; min-height:240px;" class="ma-1">
              <v-card-text class="text-xs-center"><h2 style="color: #FFFFFF; position:absolute; bottom:20px; right:0; left:0;">Admission</h2></v-card-text>
            </v-card>
            <v-card dark color="#D8DADE" style="border-radius: 3px; min-height:240px;" class="ma-1">
              <v-card-text class="text-xs-center"><h2 style="color: #FFFFFF; position:absolute; bottom:20px; right:0; left:0;">Housing</h2></v-card-text>
            </v-card>
            <v-card dark color="#D8DADE" style="border-radius: 3px; min-height:240px;" class="ma-1">
              <v-card-text class="text-xs-center"><h2 style="color: #FFFFFF; position:absolute; bottom:20px; right:0; left:0;">Programs</h2></v-card-text>
            </v-card>
            <v-card dark color="#D8DADE" style="border-radius: 3px; min-height:240px;" class="ma-1">
              <v-card-text class="text-xs-center"><h2 style="color: #FFFFFF; position:absolute; bottom:20px; right:0; left:0;">News & Events</h2></v-card-text>
            </v-card>
          </carousel>
        </v-container>
      </div>
    </v-card>
    <v-container grid-list-md style="margin-top:200px;">
      <v-layout row wrap justify-space-between justify-center align-content-space-around>
        <v-flex xs12 sm6 md4 lg4>
          <v-card width="100%" dark color="transparent" to="/admission/Software-Engineering" flat class="mt-3">
            <v-img alt="" src="https://res.cloudinary.com/die9ji2vn/image/upload/v1560155423/top_image_kyv74r.jpg" height="150px"></v-img>
            <v-layout align-start>
              <v-card-text class="pa-1">
                <span style="color: #FFFFFF; font-size: 17px; line-height: 27px;"><h3>Software Engineering</h3></span>
                <span style="font-size: 16px; line-height: 22px; color: #B9BCC1;">Build the tech future</span>
              </v-card-text>
            </v-layout>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md4 lg4>
          <v-card width="100%" dark color="transparent" to="/admission/International-Leadership" flat class="mt-3">
            <div>
              <v-img alt="" src="https://res.cloudinary.com/die9ji2vn/image/upload/v1560155423/top_image_kyv74r.jpg" height="150px"></v-img>
            </div>
            <v-layout align-start>
              <v-card-text class="pa-1">
                <span style="color: #FFFFFF; font-size: 17px; line-height: 27px;"><h3>International Leadership</h3></span>
                <span style="font-size: 16px; line-height: 22px; color: #B9BCC1;">Manage teams all over the world</span>
              </v-card-text>
            </v-layout>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md4 lg4>
          <v-card width="100%" dark color="transparent" to="/admission/Hospitality" flat class="mt-3">
            <v-img alt="" src="https://res.cloudinary.com/die9ji2vn/image/upload/v1560155423/top_image_kyv74r.jpg" height="150px"></v-img>
            <v-layout align-start>
              <v-card-text class="pa-1">
                <span style="color: #FFFFFF; font-size: 17px; line-height: 27px;"><h3>Hospitality</h3></span>
                <span style="font-size: 16px; line-height: 22px; color: #B9BCC1;">Rise to management</span>
              </v-card-text>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container style="width:329px;">
      <v-layout>
        <v-flex xs12>
          <v-divider style="background-color:#3D424E;" class="mt-3 mb-3"></v-divider>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container style="width:702px; color: #B9BCC1;">
      <p>
        Welcome to Kirirom Institute of Technology. Kirirom Institute of Technology was established in 2014 in Kirirom. Mr. Takeshi Izuka, the founder of KIT believes in the potential of Cambodian students thus made him decide to establish the institute. Currently, the institute caters to Cambodian students. However, the school will also be open for other nationals by 2016 who wish to experience the KIT education approach. Presently, the institute offers Software Engineering, but in the next academic year we plan to add more courses which are suitable to the needs of the fast growing economy,
      </p>
      <p>  
        Kirirom Institute of Technology believes in self-cultivating and self improvement. KIT is the best place to bring about latent potential in students. Aside from self-improvement, KIT also focuses hard on Communication skills and other means of improving students' knowledge, skills and abilities.
      </p>
      <p>
        We provide full scholarship to able Cambodian students who can't afford to pay tuition fees. With our sponsorship program, the students will have the opportunity to live and work abroad after successfully completing the course.
      <br>
        Being situated on top of Kirirom Mountain, the environment provides a quiet, and conducive atmosphere for learning.
      </p>
    </v-container>
    <v-container style="width:329px;">
      <v-layout>
        <v-flex xs12>
          <v-divider style="background-color:#3D424E;" class="mt-3 mb-3"></v-divider>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <v-card hover dark style="border-radius: 3px;" width="100%">
        <v-img src="" height="300px" position="top" class="mt-4 pa-1 mb-4" width="100%">
          <v-layout row wrap justify-center text-xs-center>
            <v-flex xs12 align-center >
              <h1 style="color: #FFFFFF; font-size: 36px; text-align: center; margin-top:50px; margin-bottom:50px;">Sponsor</h1>
            </v-flex>
          </v-layout>
          <v-layout column align-center justify-center>
            <v-flex xs12 md6 sm4 lg6>
              <v-btn dark large depressed style="background: #AC3931; box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25); border-radius: 4px; text-transform:capitalize" color="#4B7F52">
                Sponsor <v-icon>keyboard_arrow_right</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-img>
      </v-card>
    </v-container>
  </v-container-fluid>
</template>

<script>

import carousel from 'vue-owl-carousel'

export default {
  components: { 
    carousel 
  },
  
  data(){
    return{

    }
  }
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
  height: 600px;
}
@media only screen and (max-width: 600px) {
  .container{
    max-width: 292px;
  }
}
@media only screen and (min-width: 768px) {
  .container{
    max-width: 600px;
  }
}
@media only screen and (min-width: 1024px) {
  .container{
    max-width: 900px;
  }
}
html {
  scroll-behavior: smooth;
}
</style>
