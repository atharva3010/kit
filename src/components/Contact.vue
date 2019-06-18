<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 md6>
        <h1 style="font-size: 36px; line-height: 49px; color: #FFFFFF" class="mt-4 mb-3">
          Contact
        </h1>
        <v-form>
          <v-flex xs12 class="mt-4 mb-3">
            <h2 style="font-size: 20px; line-height: 27px; color: #D8DADE;" class="mt-3 mb-3">
              Name
            </h2>
            <input 
              style="border: 1px solid #3D424E; box-sizing: border-box; border-radius: 3px; height:50px; max-width:341px; width:100%; font-size: 16px; line-height: 22px; color: #B9BCC1; padding:17px;"
              v-model="name"
              placeholder="Full Name"
              name="name"
            >
          </v-flex>
          <v-flex xs12 class="mt-4 mb-3">
            <h2 style="font-size: 20px; line-height: 27px; color: #D8DADE;" class="mt-3 mb-3">
              Phone Number
            </h2>
            <input 
              style="border: 1px solid #3D424E; box-sizing: border-box; border-radius: 3px; height:50px; max-width:341px; width:100%; font-size: 16px; line-height: 22px; color: #B9BCC1; padding:17px;"
              v-model="phone"
              placeholder="Full Name"
              name="phone"
            >
          </v-flex>
          <v-flex xs12 class="mt-4 mb-3">
            <h2 style="font-size: 20px; line-height: 27px; color: #D8DADE;" class="mt-3 mb-3">
              E-Mail
            </h2>
            <input 
              style="border: 1px solid #3D424E; box-sizing: border-box; border-radius: 3px; height:50px; max-width:341px; width:100%; font-size: 16px; line-height: 22px; color: #B9BCC1; padding:17px;"
              v-model="email"
              placeholder="Full Name"
              name="email"
            >
          </v-flex>
          <v-flex xs12 class="mt-4 mb-3">
            <h2 style="font-size: 20px; line-height: 27px; color: #D8DADE;" class="mt-3 mb-3">
              Message
            </h2>
            <textarea 
              style="border: 1px solid #3D424E; box-sizing: border-box; border-radius: 3px; height:128px; max-width:500px; width:100%; font-size: 16px; line-height: 22px; color: #B9BCC1; padding:17px;"
              v-model="message"
              placeholder="Full Name"
              name="message"
            ></textarea>
          </v-flex>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data(){
    return{
      name: '',
      email: '',
      phone: '',
      message: '',
    }
  }
}
</script>

<style>
  input:focus, textarea:focus { 
    border-color: 1px solid #3D424E !important;
  }
  input:focus, textarea:focus{
  outline-offset: 0px !important;
  outline: none !important;
  }
  @-webkit-keyframes autofill {
      to {
          color: #B9BCC1;
          background: transparent;
      }
  }

  input:-webkit-autofill {
      -webkit-animation-name: autofill;
      -webkit-animation-fill-mode: both;
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
</style>
