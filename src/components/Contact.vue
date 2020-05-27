<template>
  <v-container fluid id="pcontact" >
    <v-layout wrap justify-center>
      <v-flex xs12>
        <v-flex xs4>
          <div data-aos="zoom-out-right">
            <v-img :src="require('../assets/contact.png')"></v-img>
          </div>
        </v-flex>
      </v-flex>
    </v-layout>
    <v-flex xs12>
      <div data-aos="zoom-in" data-aos-duration="2000">
        <v-footer
          dark
          padless
        >
          <v-card
            flat
            tile
            id = 'color0'
            width="100%"
          >
            <v-card-text>
              <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-4 white--text"
                icon
              >
                <v-icon size="24px">{{ icon }}</v-icon>
              </v-btn>
            </v-card-text>

            <v-card-text class="text-center ">
              <v-row>
                <v-col cols="12" sm="6" md="3"></v-col>
              <v-col cols="12" sm="6" md="6">
                <h1>Comunicate con nosotros en cualquier momento!</h1>
              <a target="_blank" href="https://app.smartsheet.com/b/form/c76a7359e8cd4c1a9635b12cf3e24476">
                <v-form v-model="valid" xs12>
                  
                    <v-row>
                      <v-col
                        cols="12"
                        md="4"
                      >
                        <v-text-field
                          v-model="firstname"
                          :rules="nameRules"
                          :counter="10"
                          label="First name"
                          required
                        ></v-text-field>
                      </v-col>

                      <v-col
                        cols="12"
                        md="4"
                      >
                        <v-text-field
                          v-model="lastname"
                          :rules="nameRules"
                          :counter="10"
                          label="Last name"
                          required
                        ></v-text-field>
                      </v-col>

                      <v-col
                        cols="12"
                        md="4"
                      >
                        <v-text-field
                          v-model="email"
                          :rules="emailRules"
                          label="E-mail"
                          required
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  
                </v-form>
              </a>
              </v-col>
              </v-row>
            <v-divider></v-divider>

            <v-card-text class="white--text">
              {{ new Date().getFullYear() }} — <strong>Duplex</strong>
            </v-card-text>
            </v-card-text>


          </v-card>
        </v-footer>
      </div>
    </v-flex>
  </v-container>
</template>

