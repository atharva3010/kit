<template>
  <v-container-fluid>
    <v-card dark>
      <div id="header">
        <v-container grid-list-md>
          <v-layout align-end justify-center row wrap text-xs-center fill-height>
            <v-flex xs12 sm6 md3 lg3>
              <v-card id="blog" height="240" dark color="#D8DADE" style="border-radius: 3px;" class="mb-3">
                <v-card-text><h2 style="color: #FFFFFF; position:absolute; bottom:20px; right:0; left:0;">Admission</h2></v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm6 md3 lg3>
              <v-card id="blog" height="240" dark color="#D8DADE" style="border-radius: 3px;" class="mb-3">
                <v-card-text><h2 style="color: #FFFFFF; position:absolute; bottom:20px; right:0; left:0;">Housing</h2></v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm6 md3 lg3>
              <v-card id="blog" height="240" dark color="#D8DADE" style="border-radius: 3px;" class="mb-3">
                <v-card-text><h2 style="color: #FFFFFF; position:absolute; bottom:20px; right:0; left:0;">Programs</h2></v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm6 md3 lg3>
              <v-card id="blog" height="240" dark color="#D8DADE" style="border-radius: 3px;" class="mb-3">
                <v-card-text><h2 style="color: #FFFFFF; position:absolute; bottom:20px; right:0; left:0;">News & Events</h2></v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
    </v-card>
    <v-container grid-list-md align-content-space-around>
      <v-layout row wrap justify-space-between justify-center>
        <v-flex xs12 sm6 md4 lg4>
          <v-card width="100%" dark color="transparent" to="" flat class="mt-3 mb-3">
            <v-img src="" height="150px"></v-img>
            <v-layout align-start>
              <v-card-text class="pa-1">
                <span style="color: #FFFFFF; font-size: 17px; line-height: 27px;"><h3>Software Engineering</h3></span>
                <span style="font-size: 16px; line-height: 22px; color: #B9BCC1;">Build the tech future</span>
              </v-card-text>
            </v-layout>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md4 lg4>
          <v-card width="100%" dark color="transparent" to="" flat class="mt-3 mb-3">
            <div>
              <v-img src="" height="150px"></v-img>
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
          <v-card width="100%" dark color="transparent" to="" flat class="mt-3 mb-3">
            <v-img src="" height="150px"></v-img>
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
    <v-layout class="text-xs-center">
      <v-flex xs4>
        <v-divider style="width:329px; background-color:#3D424E;" class="mt-3 mb-3"></v-divider>
      </v-flex>
    </v-layout>
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
  height: 600px;
}
@media only screen and (max-width: 600px) {
  .container{
    max-width: 292px;
  }
  #blog{
    width: 100%;
    height: 56.25%;
  }
}
@media only screen and (min-width: 768px) {
  .container{
    max-width: 600px;
  }
  #blog{
    width: 100%;  
    top: 90%;
    position: absolute;
  }
}
@media only screen and (min-width: 1024px) {
  .container{
    max-width: 900px;
  }
  #blog{
    width: 202px;
    top: 90%;
    position: absolute;
  }
}
html {
  scroll-behavior: smooth;
}
</style>
