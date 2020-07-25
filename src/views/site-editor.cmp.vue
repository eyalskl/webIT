<template>
  <container
    class="editor-container flex column animate__animated animate__fadeIn"
  >
    <nav-bar />
    <div class="editor flex">
      <element-dashboard
        :samples="samples"
        @getSamplesToShow="getSamplesToShow"
        @shouldAcceptDrop="false"
      />
      <site-workspace
        v-if="siteToEdit"
        :siteToEdit="siteToEdit"
        @shouldAcceptDrop="true"
      />
    </div>
  </container>
</template>

<script>
import navBar from '@/components/nav-bar.cmp.vue';
import siteWorkspace from '../components/site-workspace.cmp.vue';
import elementDashboard from '@/components/element-dashboard.cmp.vue';
import { templateService } from '@/services/template-service.js';
import { utilService } from '@/services/util.service.js';
import { Container, Draggable } from 'vue-smooth-dnd';
import { applyDrag, generateItems } from '@/assets/drag-test.js';
import {
  eventBus,
  ADD_SAMPLE,
  EDIT_ELEMENT,
  CLONE_ELEMENT,
  REMOVE_ELEMENT,
  MOVE_ELEMENT,
} from '@/services/event-bus.service.js';
const _ = require('lodash');

export default {
  name: 'site-editor',
  data() {
    return {
      samples: {},
      // siteToEdit: null
      siteToEdit: {
        name: 'Food',
        previewImg:
          'https://i.ibb.co/X5LMRVk/screenshot-localhost-8080-2020-07-21-22-49-51.png',
        createdBy: {
          username: 'eni',
          _id: '5e26e0b718a0891d4c995527',
        },
        cmps: [
          {
            type: 'site-section',
            class: 'text-logo-text',
            style: {
              background: '#ffffff',
            },
            cmps: [
              {
                type: 'site-div',
                style: {},
                cmps: [
                  {
                    type: 'site-text',
                    content:
                      'BEST GRILLED CHEESE IN TOWN FRESH & QUALITY CRAFT FOOD',
                    style: {
                      fontFamily: 'Oswald',
                      fontSize: '1.2rem',
                      color: '#BA2204',
                    },
                  },
                ],
              },
              {
                type: 'site-div',
                class: 'logo-text-div',
                style: {},
                cmps: [
                  {
                    type: 'site-image',
                    content:
                      'https://static.wixstatic.com/media/011abe_cfe720bc821e40eeb582ac83c83886da~mv2.png/v1/fill/w_206,h_206,al_c,q_85,usm_0.66_1.00_0.01/logo%20sans%20fond.webp',
                    style: {},
                  },
                  {
                    type: 'site-text',
                    content: 'PARIS / SINCE 2014',
                    style: {
                      fontFamily: 'Oswald',
                      fontSize: '1.2rem',
                      fontColor: '#000000',
                    },
                  },
                ],
              },
              {
                type: 'site-div',
                style: {},
                cmps: [
                  {
                    type: 'site-text',
                    content:
                      'PARIS - BASTILLE / CONVENTION PEACE, LOVE & GRILLED CHEESE',
                    style: {
                      color: '#BA2204',
                      fontSize: '1.2rem',
                      fontFamily: 'Oswald',
                    },
                  },
                ],
              },
            ],
          },
          {
            type: 'site-section',
            class: 'block-photo-tall',
            style: {
              background:
                'url(https://media1.giphy.com/media/JxOTtKGVWCuE8/giphy.gif) no-repeat center',
              backgroundSize: 'cover',
            },
            cmps: [],
          },
          {
            type: 'site-section',
            class: 'text-on-photo-left',
            style: {
              background:
                'url(https://images.unsplash.com/photo-1504400739660-22ebeb14f00a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80) no-repeat',
            },
            cmps: [
              {
                type: 'site-div',
                style: {
                  width: '30%',
                  textAlign: 'center',
                },
                cmps: [
                  {
                    type: 'site-text',
                    content:
                      'touS nos pains sont réalisés sur mesure  et pétris avec amour tous les jours par nos boulangers',
                    style: {
                      backgroundColor: '#BA2204',
                      fontFamily: 'Bitter',
                      color: '#ffffff',
                      fontSize: '1.1rem',
                    },
                  },
                ],
              },
              {
                type: 'site-div',
                style: {
                  width: '30%',
                  textAlign: 'center',
                },
                cmps: [
                  {
                    type: 'site-text',
                    content:
                      'chaque grilled cheese est préparé a la commande, cuits à la main à la poêle dans nos cuisines ouvertes',
                    style: {
                      backgroundColor: '#BA2204',
                      fontSize: '1.1rem',
                      fontFamily: 'Bitter',
                      color: '#ffffff',
                    },
                  },
                ],
              },
              {
                type: 'site-div',
                style: {
                  width: '30%',
                  textAlign: 'center',
                },
                cmps: [
                  {
                    type: 'site-text',
                    content: 'suivez chaque etape de sa réalisation',
                    style: {
                      backgroundColor: '#BA2204',
                      fontSize: '1.1rem',
                      fontFamily: 'Bitter',
                      color: '#ffffff',
                    },
                  },
                ],
              },
              {
                type: 'site-div',
                style: {
                  width: '30%',
                  textAlign: 'center',
                },
                cmps: [
                  {
                    type: 'site-text',
                    content:
                      'tout nos produits sont frais et choisiS avec précaution par nos soins',
                    style: {
                      backgroundColor: '#BA2204',
                      fontFamily: 'Bitter',
                      color: '#ffffff',
                      fontSize: '1.1rem',
                    },
                  },
                ],
              },
              {
                type: 'site-div',
                style: {
                  width: '30%',
                  textAlign: 'center',
                },
                cmps: [
                  {
                    type: 'site-text',
                    content: 'toutes nos préparations sont faites maison',
                    style: {
                      backgroundColor: '#BA2204',
                      fontSize: '1.1rem',
                      fontFamily: 'Bitter',
                      color: '#ffffff',
                    },
                  },
                ],
              },
            ],
          },
          

          {
            type: 'site-section',
            class: 'three-pics-poster',
            style: {

            },
            cmps: [
              {
                type: 'site-div',
                style: {
                  background:
                    "url('https://static.wixstatic.com/media/011abe_ec8923361bb74b9caeb7a218a7ed4d4a~mv2.jpg/v1/fill/w_422,h_913,al_c,q_85,usm_0.66_1.00_0.01/011abe_ec8923361bb74b9caeb7a218a7ed4d4a~mv2.webp') no-repeat center center / cover scroll",

                  width: '100%',
                },
                cmps: [],
              },
              {
                type: 'site-div',
                style: {
                  background:
                    'url(https://static.wixstatic.com/media/011abe_4d783098e95b40178456112e4921118f~mv2.jpg/v1/fill/w_556,h_696,fp_0.50_0.50,q_90/011abe_4d783098e95b40178456112e4921118f~mv2.webp) no-repeat center center / cover scroll',

                  width: '100%',
                },
                cmps: [],
              },
              {
                type: 'site-div',
                style: {
                  background:
                    "url('https://static.wixstatic.com/media/011abe_ff28d29d1bb64b40af34425bfaeaded1~mv2.jpg/v1/fill/w_420,h_913,al_c,q_85,usm_0.66_1.00_0.01/011abe_ff28d29d1bb64b40af34425bfaeaded1~mv2.webp') no-repeat center center / cover scroll",
                  width: '100%',
                },
                cmps: [],
              },
            ],
          },

          {
            type: 'site-section',
            class: 'post-card-section',
            style: {
              backgroundColor: '#ffffff',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              width: '100%',
              height: '30vw',
              display: 'flex',
              justifyContent: 'space-around',
            },
            cmps: [
              {
                type: 'site-div',
                style: {
                  backgroundColor: '#ffffff',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  objectFit: 'contain',
                  display: 'flex',
                  width: '100%',
                  maxWidth: '1000px',
                  height: 'auto',
                },
                cmps: [
                  {
                    type: 'site-div',
                    style: {
                      backgroundColor: '#ffffff',
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-around',
                      width: '100%',
                    },
                    cmps: [
                      {
                        type: 'site-div',
                        class: 'column-drag-handler',
                        style: {
                          backgroundColor: '#ffffff',
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                          textAlign: 'center',
                          width: '100%',
                        },
                        cmps: [
                          {
                            type: 'site-text',
                            content:
                              'LE PLUS CHEESY CHIC ET TELLEMENT SEXY !\n                    ',
                            style: {
                              fontSize: '1.4rem',
                              fontFamily: 'Oswald',
                              color: '#EF4135',
                            },
                            id: 'LVDXoR20w6',
                          },
                        ],
                        id: '1FplRNFHAe',
                      },
                      {
                        type: 'site-div',
                        style: {
                          backgroundColor: '#ffffff',
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                          textAlign: 'center',
                          width: '100%',
                        },
                        cmps: [
                          {
                            type: 'site-text',
                            content: "L'Authentique",
                            style: {
                              fontSize: '2.5rem',
                              textDecoration: 'underline',
                              fontFamily: 'Mr Dafoe',
                              color: '#EF4135',
                            },
                            id: 'PoniQYKQwV',
                          },
                        ],
                        id: 'gSJICNrEnZ',
                      },
                      {
                        type: 'site-div',
                        style: {
                          backgroundColor: '#ffffff',
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                          textAlign: 'center',
                          width: '100%',
                        },
                        cmps: [
                          {
                            type: 'site-text',
                            content: 'Mozzarella Cheddar',
                            style: {
                              fontSize: '0.9rem',
                              fontFamily: 'Inknut Antiqua',
                              color: '#EF4135',
                            },
                            id: 'GszFknr99e',
                          },
                        ],
                        id: 'w3JtOtGYAF',
                      },
                      {
                        type: 'site-div',
                        style: {
                          backgroundColor: '#ffffff',
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                          textAlign: 'center',
                          width: '100%',
                        },
                        cmps: [
                          {
                            type: 'site-text',
                            content:
                              "Tout est dans sa simplicité. Croquant à l'extérieur et coulant à l'intérieur. L'Authentique est le  Grilled Cheese traditionnel américain par excellence.",
                            style: {
                              fontSize: '0.9rem',
                              fontFamily: 'Josefin Slab',
                              color: '#000000',
                            },
                            id: 'C0ahVJu23D',
                          },
                        ],
                        id: 'JHQfsyh4Ns',
                      },
                      {
                        type: 'site-div',
                        style: {
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                          width: '100%',
                          display: 'flex',
                          justifyContent: 'space-around',
                        },
                        cmps: [
                          {
                            type: 'site-button',
                            content: {
                              text: 'ME FAIRE LIVRER',
                              href: '',
                            },
                            style: {
                              backgroundColor: '#ffffff',
                              fontFamily: 'Righteous',
                              color: '#EF4135',
                              textTransform: 'uppercase',
                              border: '3px #EF4135 solid',
                              borderRadius: '0',
                              fontSize: '1rem',
                            },
                            id: '87RxaKgOhq',
                          },
                          {
                            type: 'site-button',
                            content: {
                              text: 'VOIR LE MENU',
                              href: '',
                            },
                            style: {
                              backgroundColor: '#ffffff',
                              fontFamily: 'Righteous',
                              color: '#EF4135',
                              textTransform: 'uppercase',
                              border: '3px #EF4135 solid',
                              borderRadius: '0',
                              fontSize: '1rem',
                            },
                            id: 'i2raysuYPD',
                          },
                        ],
                        id: 'cye7mutbDq',
                      },
                    ],
                    id: 'L1TCOVgzlc',
                  },
                  {
                    type: 'site-div',
                    style: {
                      background:
                        "url('https://static.wixstatic.com/media/011abe_7ba06f4f989e4c439c9828113223cdaa~mv2.jpg/v1/crop/x_0,y_150,w_1080,h_1092/fill/w_490,h_496,al_c,q_80,usm_0.66_1.00_0.01/AUTHENTIQUE.webp') no-repeat",
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      width: '100%',
                    },
                    cmps: [],
                    id: 'fnRkjAcDEJ',
                  },
                ],
                id: 'zkNsGkwRw2',
              },
            ],
            id: 'QCtXnXk6WA',
          },
          {
            type: 'site-section',
            class: 'post-card-section',
            style: {
              backgroundColor: '#ffffff',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              width: '100%',
              height: '30vw',
              display: 'flex',
              justifyContent: 'space-around',
            },
            cmps: [
              {
                type: 'site-div',
                style: {
                  backgroundColor: '#ffffff',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  objectFit: 'contain',
                  display: 'flex',
                  width: '100%',
                  maxWidth: '1000px',
                  height: 'auto',
                },
                cmps: [
                  {
                    type: 'site-div',
                    style: {
                      background:
                        "url('https://static.wixstatic.com/media/011abe_2bbfe16dfa7048c184824370f75af6eb~mv2.jpg/v1/fill/w_490,h_490,al_c,q_80,usm_0.66_1.00_0.01/Veggie%20hemblem.webp') no-repeat",
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      width: '100%',
                    },
                    cmps: [],
                    id: 'bCp1DoiCH7',
                  },
                  {
                    type: 'site-div',
                    style: {
                      backgroundColor: '#ffffff',
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-around',
                      width: '100%',
                    },
                    cmps: [
                      {
                        type: 'site-div',
                        style: {
                          backgroundColor: '#ffffff',
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                          textAlign: 'center',
                          width: '100%',
                        },
                        cmps: [
                          {
                            type: 'site-text',
                            content: 'VEGETARIEN ? ALL RIGHT !',
                            style: {
                              fontSize: '1.4rem',
                              fontFamily: 'Oswald',
                              color: '#F7B714',
                            },
                            id: 'vvRnyWv1Oz',
                          },
                        ],
                        id: 'zFXoXeHqtN',
                      },
                      {
                        type: 'site-div',
                        style: {
                          backgroundColor: '#ffffff',
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                          textAlign: 'center',
                          width: '100%',
                        },
                        cmps: [
                          {
                            type: 'site-text',
                            content: 'Le Veggie',
                            style: {
                              fontSize: '2.5rem',
                              textDecoration: 'underline',
                              fontFamily: 'Mr Dafoe',
                              color: '#F7B714',
                            },
                            id: 'Nriqiwp5H6',
                          },
                        ],
                        id: 'jOn4ISRsLO',
                      },
                      {
                        type: 'site-div',
                        style: {
                          backgroundColor: '#ffffff',
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                          textAlign: 'center',
                          width: '100%',
                        },
                        cmps: [
                          {
                            type: 'site-text',
                            content:
                              'Mozzarella Confits de tomates & olives maison Pesto maison Poivrons',
                            style: {
                              fontSize: '0.9rem',
                              fontFamily: 'Inknut Antiqua',
                              color: '#F7B714',
                            },
                            id: 'QldhnNc7Mm',
                          },
                        ],
                        id: 'jL7dFmFnAV',
                      },
                      {
                        type: 'site-div',
                        style: {
                          backgroundColor: '#ffffff',
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                          textAlign: 'center',
                          width: '100%',
                        },
                        cmps: [
                          {
                            type: 'site-text',
                            content:
                              'Un des Grilled Cheese les plus surprenant. Le confit a cuit pendant deux heures et le pesto apporte la juste touche de fraîcheur. Le Veggie est la recette emblématique des quartiers italo-américains de New-York.',
                            style: {
                              fontSize: '0.9rem',
                              fontFamily: 'Josefin Slab',
                              color: '#000000',
                            },
                            id: 'xCECNwZ8zf',
                          },
                        ],
                        id: 'U10yS4MwiN',
                      },
                      {
                        type: 'site-div',
                        style: {
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                          width: '100%',
                          display: 'flex',
                          justifyContent: 'space-around',
                        },
                        cmps: [
                          {
                            type: 'site-button',
                            content: {
                              text: 'ME FAIRE LIVRER',
                              href: '',
                            },
                            style: {
                              backgroundColor: '#ffffff',
                              fontFamily: 'Righteous',
                              color: '#F7B714',
                              textTransform: 'uppercase',
                              border: '3px #F7B714 solid',
                              borderRadius: '0',
                              fontSize: '1rem',
                            },
                            id: 'ZCUyEsIGzC',
                          },
                          {
                            type: 'site-button',
                            content: {
                              text: 'VOIR LE MENU',
                              href: '',
                            },
                            style: {
                              backgroundColor: '#ffffff',
                              fontFamily: 'Righteous',
                              color: '#F7B714',
                              textTransform: 'uppercase',
                              border: '3px #F7B714 solid',
                              borderRadius: '0',
                              fontSize: '1rem',
                            },
                            id: '3H1eG5xA99',
                          },
                        ],
                        id: '2iBTjAc3vi',
                      },
                    ],
                    id: 'DXvbxzZQDW',
                  },
                ],
                id: 'IEW8UpaFDP',
              },
            ],
            id: 'nUlEkpHoRW',
          },
          {
            type: 'site-section',
            class: 'post-card-section',
            style: {
              backgroundColor: '#ffffff',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              width: '100%',
              height: '30vw',
              display: 'flex',
              justifyContent: 'space-around',
            },
            cmps: [
              {
                type: 'site-div',
                style: {
                  backgroundColor: '#ffffff',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  objectFit: 'contain',
                  display: 'flex',
                  width: '100%',
                  maxWidth: '1000px',
                  height: 'auto',
                },
                cmps: [
                  {
                    type: 'site-div',
                    style: {
                      backgroundColor: '#ffffff',
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-around',
                      width: '100%',
                    },
                    cmps: [
                      {
                        type: 'site-div',
                        style: {
                          backgroundColor: '#ffffff',
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                          textAlign: 'center',
                          width: '100%',
                        },
                        cmps: [
                          {
                            type: 'site-text',
                            content: 'CARNIVORE ? WELCOME HOME !',
                            style: {
                              fontSize: '1.4rem',
                              fontFamily: 'Oswald',
                              color: '#EF4135',
                            },
                            id: '4DcFFzYo5q',
                          },
                        ],
                        id: 'wBgHYDznNR',
                      },
                      {
                        type: 'site-div',
                        style: {
                          backgroundColor: '#ffffff',
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                          textAlign: 'center',
                          width: '100%',
                        },
                        cmps: [
                          {
                            type: 'site-text',
                            content: 'Le Pastrami',
                            style: {
                              fontSize: '2.5rem',
                              textDecoration: 'underline',
                              fontFamily: 'Mr Dafoe',
                              color: '#EF4135',
                            },
                            id: 'zohMv9mVhn',
                          },
                        ],
                        id: 'Jr4nvYyWuA',
                      },
                      {
                        type: 'site-div',
                        style: {
                          backgroundColor: '#ffffff',
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                          textAlign: 'center',
                          width: '100%',
                        },
                        cmps: [
                          {
                            type: 'site-text',
                            content:
                              "Mozzarella Pastrami Cornichons Pickels Moutarde au miel Cheddar Tomme d'Abondance",
                            style: {
                              fontSize: '0.9rem',
                              fontFamily: 'Inknut Antiqua',
                              color: '#EF4135',
                            },
                            id: 'S7Gp9DzcJH',
                          },
                        ],
                        id: 'PJeQ3hmeSh',
                      },
                      {
                        type: 'site-div',
                        style: {
                          backgroundColor: '#ffffff',
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                          textAlign: 'center',
                          width: '100%',
                        },
                        cmps: [
                          {
                            type: 'site-text',
                            content:
                              "C'est du sérieux ! C'est fondant, c'est épicé, c'est dégoulinant de fromage, c'est ... c'est ... c'est trop bon quoi ! Le Pastrami c'est la recette secrète des resto yiddish de Brooklyn.",
                            style: {
                              fontSize: '0.9rem',
                              fontFamily: 'Josefin Slab',
                              color: '#000000',
                            },
                            id: 'ObuytME6KF',
                          },
                        ],
                        id: 'VLBJlRQW9d',
                      },
                      {
                        type: 'site-div',
                        style: {
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                          width: '100%',
                          display: 'flex',
                          justifyContent: 'space-around',
                        },
                        cmps: [
                          {
                            type: 'site-button',
                            content: {
                              text: 'VOIR LE MENU',
                              href: '',
                            },
                            style: {
                              backgroundColor: '#ffffff',
                              fontFamily: 'Righteous',
                              color: '#EF4135',
                              textTransform: 'uppercase',
                              border: '3px #EF4135 solid',
                              borderRadius: '0',
                              fontSize: '1rem',
                            },
                            id: 'gWbdVYkOo0',
                          },
                          {
                            type: 'site-button',
                            content: {
                              text: 'VOIR LE MENU',
                              href: '',
                            },
                            style: {
                              backgroundColor: '#ffffff',
                              fontFamily: 'Righteous',
                              color: '#EF4135',
                              textTransform: 'uppercase',
                              border: '3px #EF4135 solid',
                              borderRadius: '0',
                              fontSize: '1rem',
                            },
                            id: 'wLKzYRQAq7',
                          },
                        ],
                        id: 'RiDHi0p5S9',
                      },
                    ],
                    id: 'CLyTeL6zgz',
                  },
                  {
                    type: 'site-div',
                    style: {
                      background:
                        "url('https://static.wixstatic.com/media/011abe_c00ecf63f2264f048ce832473a073fa8~mv2.jpg/v1/crop/x_0,y_125,w_768,h_767/fill/w_490,h_490,al_c,q_80,usm_0.66_1.00_0.01/Pastrami%20assiette%20hemblem.webp') no-repeat",
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      width: '100%',
                    },
                    cmps: [],
                    id: 'eWxWycMZcm',
                  },
                ],
                id: 'tKpIbVZhIV',
              },
            ],
            id: 'wH8cGC3qe5',
          },
          {
            type: 'site-section',
            class: 'post-card-section',
            style: {
              backgroundColor: '#ffffff',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              height: '30vw',
              display: 'flex',
              justifyContent: 'space-around',
            },
            cmps: [
              {
                type: 'site-div',
                style: {
                  backgroundColor: '#ffffff',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  objectFit: 'contain',
                  display: 'flex',
                  width: '100%',
                  maxWidth: '1000px',
                  height: 'auto',
                },
                cmps: [
                  {
                    type: 'site-div',
                    style: {
                      background:
                        "url('https://static.wixstatic.com/media/011abe_b92ec2bd678c4bbd995dcee9eab95f30~mv2.jpg/v1/fill/w_340,h_426,fp_0.50_0.50,q_90/011abe_b92ec2bd678c4bbd995dcee9eab95f30~mv2.webp') no-repeat",
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      width: '100%',
                    },
                    cmps: [],
                    id: 'BuOfALHshv',
                  },
                  {
                    type: 'site-div',
                    style: {
                      backgroundColor: '#ffffff',
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-around',
                      width: '100%',
                    },
                    cmps: [
                      {
                        type: 'site-div',
                        style: {
                          backgroundColor: '#ffffff',
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                          textAlign: 'center',
                          width: '100%',
                        },
                        cmps: [
                          {
                            type: 'site-text',
                            content: 'MACARONI & CHEESE ?!?',
                            style: {
                              fontSize: '1.4rem',
                              fontFamily: 'Oswald',
                              color: '#F7B714',
                            },
                            id: 'jQ0wXYyTi1',
                          },
                        ],
                        id: 'SKnlB8muwY',
                      },
                      {
                        type: 'site-div',
                        style: {
                          backgroundColor: '#ffffff',
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                          textAlign: 'center',
                          width: '100%',
                        },
                        cmps: [
                          {
                            type: 'site-text',
                            content: 'Le Mac & Cheese',
                            style: {
                              fontSize: '2.5rem',
                              textDecoration: 'underline',
                              fontFamily: 'Mr Dafoe',
                              color: '#F7B714',
                            },
                            id: 'wJY7MRHOYR',
                          },
                        ],
                        id: 'mALNakSQRh',
                      },
                      {
                        type: 'site-div',
                        style: {
                          backgroundColor: '#ffffff',
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                          textAlign: 'center',
                          width: '100%',
                        },
                        cmps: [
                          {
                            type: 'site-text',
                            content:
                              'Mozzarella Oignons confits maison Mac & Cheese (béchamel muscade & cheddar) Cheddar',
                            style: {
                              fontSize: '0.9rem',
                              fontFamily: 'Inknut Antiqua',
                              color: '#F7B714',
                            },
                            id: 'FdMoEDVFNH',
                          },
                        ],
                        id: 'Ag72tGr3QB',
                      },
                      {
                        type: 'site-div',
                        style: {
                          backgroundColor: '#ffffff',
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                          textAlign: 'center',
                          width: '100%',
                        },
                        cmps: [
                          {
                            type: 'site-text',
                            content:
                              "C'est notre best seller ! Tout droit venu de la West Coast, c'est à Los Angeles que le fameux mac & cheese américain a pour la première fois glissé entre deux tranches de pains. Destination Venice Beach pour une experience sans égale.",
                            style: {
                              fontSize: '0.9rem',
                              fontFamily: 'Josefin Slab',
                              color: '#000000',
                            },
                            id: 'DaPf8yJH4E',
                          },
                        ],
                        id: 'vbw40xitod',
                      },
                      {
                        type: 'site-div',
                        style: {
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                          width: '100%',
                          display: 'flex',
                          justifyContent: 'space-around',
                        },
                        cmps: [
                          {
                            type: 'site-button',
                            content: {
                              text: 'ME FAIRE LIVRER',
                              href: '',
                            },
                            style: {
                              backgroundColor: '#ffffff',
                              fontFamily: 'Righteous',
                              color: '#F7B714',
                              textTransform: 'uppercase',
                              border: '3px #F7B714 solid',
                              borderRadius: '0',
                            },
                            id: '6H2s1w1LlH',
                          },
                          {
                            type: 'site-button',
                            content: {
                              text: 'VOIR LE MENU',
                              href: '',
                            },
                            style: {
                              backgroundColor: '#ffffff',
                              fontFamily: 'Righteous',
                              color: '#F7B714',
                              textTransform: 'uppercase',
                              border: '3px #F7B714 solid',
                              borderRadius: '0',
                            },
                            id: '6WF70AMlbX',
                          },
                        ],
                        id: 'aeNqRyuy56',
                      },
                    ],
                    id: 'DDDpF6lJ6m',
                  },
                ],
                id: 'verULc0R1g',
              },
            ],
            id: '78eHAoL8OE',
          },
          {
            type: 'site-section',
            class: 'info-block-section',
            style: {
              background: '#ba2204',
              height: '50vw',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              alignItems: 'center',
            },
            cmps: [
              {
                type: 'site-div',
                style: {
                  display: 'flex',
                  justifyContent: 'space-around',
                },
                cmps: [
                  {
                    type: 'site-div',
                    style: {
                      width: '45%',
                      textAlign: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                    },
                    cmps: [
                      {
                        type: 'site-text',
                        content: 'BASTILLE',
                        style: {
                          backgroundColor: '#BA2204',
                          fontSize: '3.5rem',
                          fontFamily: 'Bitter',
                          color: '#F7B714',
                        },
                        id: 'bQ9Dipb8Ap',
                      },
                      {
                        type: 'site-text',
                        content:
                          '9 RUE JACQUES COEUR - 75004 PARIS 01 77 10 67 83',
                        style: {
                          backgroundColor: '#BA2204',
                          fontFamily: 'Bitter',
                          color: '#ffffff',
                          fontSize: '1.2‬rem',
                        },
                        id: '1Q3paAWmy0',
                      },
                    ],
                    id: 'vj8oaaLLXv',
                  },
                  {
                    type: 'site-div',
                    style: {
                      width: '45%',
                      textAlign: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                    },
                    cmps: [
                      {
                        type: 'site-text',
                        content: 'CONVENTION',
                        style: {
                          backgroundColor: '#BA2204',
                          fontSize: '3.5rem',
                          fontFamily: 'Bitter',
                          color: '#F7B714',
                        },
                        id: 'NEb79WpxCR',
                      },
                      {
                        type: 'site-text',
                        content:
                          '196 RUE DE LA CONVENTION - 75015 PARIS 09 88 38 87 26',
                        style: {
                          backgroundColor: '#BA2204',
                          fontFamily: 'Bitter',
                          color: '#ffffff',
                          fontSize: '1.2‬rem',
                        },
                        id: 'XZVhQ89IMJ',
                      },
                    ],
                    id: 'eP69thzu3V',
                  },
                ],
                id: 'gQhpewYhvf',
              },
              {
                type: 'site-div',
                style: {
                  textAlign: 'center',
                },
                cmps: [
                  {
                    type: 'site-text',
                    content:
                      'NOUVEAUX HORAIRES SUITE A LA CRISE DU COVID 19 : 7/7 - 12H - 16H & 19H - 23H',
                    style: {
                      backgroundColor: '#f7b714',
                      fontSize: '1.1rem',
                      fontFamily: 'josefin slab',
                      color: '#000000',
                      fontWeight: 'bold',
                    },
                    id: 'wdBgyZq96u',
                  },
                ],
                id: 'tiDeurk8pn',
              },
              {
                type: 'site-div',
                style: {
                  textAlign: 'center',
                },
                cmps: [
                  {
                    type: 'site-text',
                    content:
                      'NOTRE PERSONNEL EST FORME AUX NORMES SANITAIRES EN VIGUEUR. ENSEMBLE FAISONS FACE A LA CRISE SANTAIRE.',
                    style: {
                      backgroundColor: '#f7b714',
                      fontSize: '1.1rem',
                      fontFamily: 'josefin slab',
                      color: '#000000',
                      fontWeight: 'bold',
                    },
                    id: 'd7aW0CHsSL',
                  },
                ],
                id: 'SbLSitGdS3',
              },
              {
                type: 'site-div',
                style: {
                  display: 'flex',
                  alignItems: 'center',
                },
                cmps: [
                  {
                    type: 'site-div',
                    style: {
                      width: '20%',
                      textAlign: 'center',
                    },
                    cmps: [
                      {
                        type: 'site-image',
                        content:
                          'https://static.wixstatic.com/media/011abe_35658b808c1b4f8d83e1f43e9c497038~mv2.png/v1/fill/w_188,h_188,al_c,q_85,usm_0.66_1.00_0.01/logo%20sans%20fond%20blanc.webp',
                        style: {
                          objectFit: 'contain',
                          width: '100%',
                          maxWidth: '250px',
                          height: 'auto',
                        },
                        id: 'd98IBQ9ZOe',
                      },
                    ],
                    id: 'QMQkQaJFt7',
                  },
                  {
                    type: 'site-div',
                    style: {
                      width: '70%',
                      textAlign: 'center',
                    },
                    cmps: [
                      {
                        type: 'site-text',
                        content:
                          "© 2020 THE GRILLED CHEESE FACTORY COMPANY L'AUTHENTQUE SANDWICH AU FROMAGE FONDU",
                        style: {
                          fontSize: '1.1rem',
                          fontFamily: 'josefin slab',
                          color: '#ffffff',
                          fontWeight: 'bold',
                        },
                        id: 'zQsidNjlAK',
                      },
                    ],
                    id: 'ccz07DrR7F',
                  },
                ],
                id: 'l2W7xdm2iH',
              },
            ],
            id: 'SWZ6gY1u6D',
          },
        ],
      },
    };
  },
  computed: {
    // siteToEdit(){
    //     return this.$store.getters.site;
    // }
  },
  created() {
    this.$store.commit({ type: 'setEditMode', editMode: true });
    this.loadSite();
    this.samples = templateService.getSamplesOf('section');
    eventBus.$on(ADD_SAMPLE, (sample) => this.addSample(sample));
    eventBus.$on(CLONE_ELEMENT, (element) => this.clone(element));
    eventBus.$on(REMOVE_ELEMENT, (elementId) => {
      this.remove(elementId);
    });
    eventBus.$on(MOVE_ELEMENT, (elementId, direction) => {
      this.moveElement(elementId, direction);
    });
  },
  methods: {
    // async loadSite() {
    //   const templateId = this.$route.params.id;
    //   const site = await this.$store.dispatch({
    //     type: 'loadSite',
    //     id: templateId,
    //   });
    //   this.siteToEdit = site;
    // },
    getSamplesToShow(listName) {
      this.samples = templateService.getSamplesOf(listName);
    },
    addSample(sample) {
      this.siteToEdit.cmps.unshift(sample);
      this.$store.commit({ type: 'setSite', site: this.siteToEdit });
    },
    getElementSamples(element) {
      this.samples = templateService.getSamplesOf(element);
    },
    moveElement(elementId, direction) {
      let cmps = this.siteToEdit.cmps;
      let idx = cmps.findIndex((cmp) => cmp.id === elementId);
      if (idx === -1) return;
      if (direction === 'down' && idx + 1 < cmps.length) {
        let cmp = cmps[idx];
        cmps.splice(idx, 1, cmps[idx + 1]);
        cmps.splice(idx + 1, 1, cmp);
      } else if (direction === 'up' && idx !== 0) {
        let cmp = cmps[idx];
        cmps.splice(idx, 1, cmps[idx - 1]);
        cmps.splice(idx - 1, 1, cmp);
      }
      this.$store.commit({ type: 'setSite', site: this.siteToEdit });
    },
    clone(element) {
      let idx = this.siteToEdit.cmps.findIndex((cmp) => cmp.id === element.id);
      if (idx === -1) return;
      let clone = _.cloneDeep(element);
      clone.id = utilService.makeId();
      clone = templateService.addIds(clone);
      this.siteToEdit.cmps.splice(idx, 0, clone);
      this.$store.commit({ type: 'setSite', site: this.siteToEdit });
    },
    remove(elementId) {
      let idx = this.siteToEdit.cmps.findIndex((cmp) => cmp.id === elementId);
      if (idx === -1) return;
      this.siteToEdit.cmps.splice(idx, 1);
      this.$store.commit({ type: 'setSite', site: this.siteToEdit });
    },
  },
  watch: {
    '$route.params.id'() {
      this.loadSite();
    },
  },
  components: {
    siteWorkspace,
    elementDashboard,
    Container,
    Draggable,
    navBar,
  },
  destroyed() {
    this.$store.commit({ type: 'setSite', site: null });
  },
};
</script>
