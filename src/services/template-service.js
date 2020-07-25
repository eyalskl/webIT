const axios = require('axios');
axios.defaults.withCredentials = true;
import httpService from './http.service';
// {name: "Logo Horizon",
//     img:"https://i.ibb.co/D74M0wM/Screenshot-2020-07-23-18-40-58.png",
//     tree:{}},
const _ = require('lodash');

const samples = {
	'contact form':[{

		name:'Contact with Map Right',
		img:'https://i.gyazo.com/084948f731c65f21b0591840d5ccb591.png',
		tree:{
					type: "site-section",
					class:"form-with-map",
					style: {
					  width: "100%",
					  display: "flex",
					  justifyContent: "space-around",
					  background:"url(https://images.unsplash.com/photo-1436262513933-a0b06755c784?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80) center center no-repeat scroll",
					  padding: "3rem 1rem",
					  alignItems: "stretch",
					  fontFamily: "Josefin Slab",
					  fontWeight:"bold",
					  direction:"rtl"
		
				  },
				  cmps:[{
					type:"site-div",
					class:"map-container-form-div",
					style:{
					  flex:"1",
					  display:"flex",
					  flexDirection:"column",
					  direction:"ltr"
					},
					cmps:[
					   {
					type:"site-div",
					style:{
					  textAlign:"center",
					  paddingBlockEnd:"1rem"
					},
					cmps:[
					  {
						type:"site-text",
						content:"Our Location",
						style:{
						  color:"#000",
						  fontSize:"2rem",
						  letterSpacing:"2px",
						  lineHeight:"1"
						}
					  }]},
					  {
						type:"site-div",
						style:{
						  flex:"3"
						},
						cmps:[{
						type:"site-map",
						content:{
						  center:{
							lat:15.870032,
							lng:100.992538
							},
							zoom:4
					  }
					  }]
					  }]
				  },
					  
				  {
					type:"site-div",
					style:{
					  flex:"1",
					},
					cmps:[
					  {
						type:"site-div",
						class:"form-with-map-form",
						style:{
						  display:"flex",
						  alignItems:"center",
						  flexDirection:"column",
						  direction:"ltr"
		
						  
						},
						cmps:[
						  {
							type:"site-text",
							content:"Contact Us",
							style:{
							  color:"#fff",
							  fontSize:"2rem",
							  flex:"1",
							  paddingBlockEnd:"1rem",
							  color:"#000"
							}
						  },
						  {
							type:"site-form",
							style:{
							  flex:"3",
							  display:"flex",
							  flexDirection:"column",
							  color:"#424242",
							},
							btnStyle:{
							  background:"#272727",
							  fontSize:"1.1rem",
							  color:"#cacaca",
							  fontWeight:"bold",
							  fontFamily:"inherit",
							  marginBlockStart:"1rem"
							},
							content:[
							  {
								tag:"Name",
								type:"text"
							  },
							  {
								tag:"Email",
								type:"email"
							  },
							  {
								tag:"Subject",
								type:"text"
							  },
							  {
								tag:"Phone Number",
								type:"tel"
							  },
							  
							]
						  }
						]
					  }
					]
				  }
				  ]
		}     
			 },
		
		{
		name: 'Contact with Map Left',
		img: 'https://i.gyazo.com/062eabf394a7d1628d66434a38747df0.jpg',
		tree: {
			type: 'site-section',
			class: 'form-with-map',
			style: {
				width: '100%',
				display: 'flex',
				justifyContent: 'space-around',
				background:
					'url(https://images.unsplash.com/photo-1541617219835-3689726fa8e7?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE1MTExM30) center center no-repeat scroll',
				padding: '3rem 1rem',
				alignItems: 'stretch',
				fontFamily: 'Oswald',
			},
			cmps: [
				{
					type: 'site-div',
					style: {
						flex: '1',
						display: 'flex',
						flexDirection: 'column',
						marginInlineStart: '5rem',
					},
					cmps: [
						{
							type: 'site-div',
							style: {
								textAlign: 'center',
								paddingBlockEnd: '1rem',
							},
							cmps: [
								{
									type: 'site-text',
									content: 'Our Location',
									style: {
										color: '#fff',
										fontSize: '2rem',
										letterSpacing: '2px',
										lineHeight: '1',
									},
								},
							],
						},
						{
							type: 'site-div',
							style: {
								flex: '3',
							},
							cmps: [
								{
									type: 'site-map',
									content: {
										center: {
											lat: 15.870032,
											lng: 100.992538,
										},
										zoom: 4,
									},
								},
							],
						},
					],
				},

				{
					type: 'site-div',
					style: {
						flex: '1',
					},
					cmps: [
						{
							type: 'site-div',
							class: 'form-with-map-form',
							style: {
								display: 'flex',
								alignItems: 'center',
								flexDirection: 'column',
							},
							cmps: [
								{
									type: 'site-text',
									content: 'Contact Us',
									style: {
										color: '#fff',
										fontSize: '2rem',
										flex: '1',
										paddingBlockEnd: '1rem',
									},
								},
								{
									type: 'site-form',
									style: {
										flex: '3',
										display: 'flex',
										flexDirection: 'column',
										color: '#fff',
									},
									btnStyle: {
										background: '#e94335',
										fontSize: '1.1rem',
										color: '#fff',
									},
									content: [
										{
											tag: 'Name',
											type: 'text',
										},
										{
											tag: 'Email',
											type: 'email',
										},
										{
											tag: 'Subject',
											type: 'text',
										},
										{
											tag: 'Phone Number',
											type: 'tel',
										},
									],
								},
							],
						},
					],
				},
			],
		},
	},],
	map: [
		{
			name: "Map with Image",
			img: "https://i.ibb.co/1XJvgVc/mapwithimg.png",
				tree:
				  {
				  "type" : "site-section",
				  "class" : "map-n-img-section",
				  "style" : {
					  "height" : "30vw",
					  "display" : "flex",
					  "alignItems" : "center",
					  "background": "#313131"
				  },
				  "cmps" : [ 
					  {
						  "type" : "site-div",
						  "style" : {
							  "display" : "flex",
							  "background" : "url(https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE1MTExM30) no-repeat center center / cover scroll",
							  "flex" : "1",
							  "margin" : "1.5rem",
							  "justifyContent" : "space-around",
							  "height" : "85%",
							  "borderRadius": "10px"
						  },
						  "cmps" : [],
					  }, 
					  {
						  "type" : "site-div",
						  "style" : {
							  "flex" : "2",
							  "height" : "85%",
							  "marginInlineEnd": "1.5rem"
						  },
						  "cmps" : [ 
							  {
								  "type" : "site-map",
								  "content" : {
									  "center" : {
										  "lat" : 19.0359089,
										  "lng" : -69.4357479
									  },
									  "zoom" : 5
								  },
							  }
						  ],
					  }
				  ],
				}
			},
		{

			name:'Contact with Map Right',
			img:'https://i.gyazo.com/084948f731c65f21b0591840d5ccb591.png',
			tree:{
						type: "site-section",
						class:"form-with-map",
						style: {
						  width: "100%",
						  display: "flex",
						  justifyContent: "space-around",
						  background:"url(https://images.unsplash.com/photo-1436262513933-a0b06755c784?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80) center center no-repeat scroll",
						  padding: "3rem 1rem",
						  alignItems: "stretch",
						  fontFamily: "Josefin Slab",
						  fontWeight:"bold",
						  direction:"rtl"
			
					  },
					  cmps:[{
						type:"site-div",
						class:"map-container-form-div",
						style:{
						  flex:"1",
						  display:"flex",
						  flexDirection:"column",
						  direction:"ltr"
						},
						cmps:[
						   {
						type:"site-div",
						style:{
						  textAlign:"center",
						  paddingBlockEnd:"1rem"
						},
						cmps:[
						  {
							type:"site-text",
							content:"Our Location",
							style:{
							  color:"#000",
							  fontSize:"2rem",
							  letterSpacing:"2px",
							  lineHeight:"1"
							}
						  }]},
						  {
							type:"site-div",
							style:{
							  flex:"3"
							},
							cmps:[{
							type:"site-map",
							content:{
							  center:{
								lat:15.870032,
								lng:100.992538
								},
								zoom:4
						  }
						  }]
						  }]
					  },
						  
					  {
						type:"site-div",
						style:{
						  flex:"1",
						},
						cmps:[
						  {
							type:"site-div",
							class:"form-with-map-form",
							style:{
							  display:"flex",
							  alignItems:"center",
							  flexDirection:"column",
							  direction:"ltr"
			
							  
							},
							cmps:[
							  {
								type:"site-text",
								content:"Contact Us",
								style:{
								  color:"#fff",
								  fontSize:"2rem",
								  flex:"1",
								  paddingBlockEnd:"1rem",
								  color:"#000"
								}
							  },
							  {
								type:"site-form",
								style:{
								  flex:"3",
								  display:"flex",
								  flexDirection:"column",
								  color:"#424242",
								},
								btnStyle:{
								  background:"#272727",
								  fontSize:"1.1rem",
								  color:"#cacaca",
								  fontWeight:"bold",
								  fontFamily:"inherit",
								  marginBlockStart:"1rem"
								},
								content:[
								  {
									tag:"Name",
									type:"text"
								  },
								  {
									tag:"Email",
									type:"email"
								  },
								  {
									tag:"Subject",
									type:"text"
								  },
								  {
									tag:"Phone Number",
									type:"tel"
								  },
								  
								]
							  }
							]
						  }
						]
					  }
					  ]
			}     
				 },

		{
			name: 'Contact with Map Left',
			img: 'https://i.gyazo.com/062eabf394a7d1628d66434a38747df0.jpg',
			tree: {
				type: 'site-section',
				class: 'form-with-map',
				style: {
					width: '100%',
					display: 'flex',
					justifyContent: 'space-around',
					background:
						'url(https://images.unsplash.com/photo-1541617219835-3689726fa8e7?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE1MTExM30) center center no-repeat scroll',
					padding: '3rem 1rem',
					alignItems: 'stretch',
					fontFamily: 'Oswald',
				},
				cmps: [
					{
						type: 'site-div',
						style: {
							flex: '1',
							display: 'flex',
							flexDirection: 'column',
							marginInlineStart: '5rem',
						},
						cmps: [
							{
								type: 'site-div',
								style: {
									textAlign: 'center',
									paddingBlockEnd: '1rem',
								},
								cmps: [
									{
										type: 'site-text',
										content: 'Our Location',
										style: {
											color: '#fff',
											fontSize: '2rem',
											letterSpacing: '2px',
											lineHeight: '1',
										},
									},
								],
							},
							{
								type: 'site-div',
								style: {
									flex: '3',
								},
								cmps: [
									{
										type: 'site-map',
										content: {
											center: {
												lat: 15.870032,
												lng: 100.992538,
											},
											zoom: 4,
										},
									},
								],
							},
						],
					},

					{
						type: 'site-div',
						style: {
							flex: '1',
						},
						cmps: [
							{
								type: 'site-div',
								class: 'form-with-map-form',
								style: {
									display: 'flex',
									alignItems: 'center',
									flexDirection: 'column',
								},
								cmps: [
									{
										type: 'site-text',
										content: 'Contact Us',
										style: {
											color: '#fff',
											fontSize: '2rem',
											flex: '1',
											paddingBlockEnd: '1rem',
										},
									},
									{
										type: 'site-form',
										style: {
											flex: '3',
											display: 'flex',
											flexDirection: 'column',
											color: '#fff',
										},
										btnStyle: {
											background: '#e94335',
											fontSize: '1.1rem',
											color: '#fff',
										},
										content: [
											{
												tag: 'Name',
												type: 'text',
											},
											{
												tag: 'Email',
												type: 'email',
											},
											{
												tag: 'Subject',
												type: 'text',
											},
											{
												tag: 'Phone Number',
												type: 'tel',
											},
										],
									},
								],
							},
						],
					},
				],
			},
		},
		{
			name: 'Transverse Map',
			img: 'https://i.ibb.co/ZRsD7ng/full-map.png ',
			tree: {
				type: 'site-section',
				class: 'map-section',
				style: {
					height: '30vw',
					display: 'flex',
				},
				cmps: [
					{
						type: 'site-div',
						style: {
							flex: '1',
							height: '100%',
						},
						cmps: [
							{
								type: 'site-map',
								content: {
									center: {
										lat: 41.902782,
										lng: 12.496365,
									},
									zoom: 6,
								},
							},
						],
					},
				],
			},
		},
	],
	text: [
		{
			name: 'Title',
			img: 'https://i.ibb.co/GVbgfzh/Screenshot-2020-07-25-20-28-02.png',
			tree: {
				type: 'site-section',
				class: 'text-divider-title',
				style: {
				  background: '#ffffff',
				  textAlign: 'center',
				  display: 'flex',
				  flexDirection: 'column',
				  justifyContent:'center',
				  padding: '1rem'
				},
				cmps: [{
				  type:'site-text',
				  content:'Make me yours',
				  style:{
					width: '100%',
					color:'black',
					fontSize: '3rem',
					fontWeight: 'bolder',
					fontFamily: 'Oswald',
				  }
				},
				
			],
			  },
		},
		{
			name: 'Title & Paragraph',
			img: 'https://i.ibb.co/JrXkggg/Screenshot-2020-07-25-21-32-24.png',
			tree:{
				type: 'site-section',
				class: 'text-divider-title',
				style: {
				  background: '#ffffff',
				  textAlign: 'center',
				  display: 'flex',
				  flexDirection: 'column',
				  justifyContent: 'center',
				  padding: '1rem',
				},
				cmps: [
				  {
					type: 'site-text',
					content: 'Make me yours',
					style: {
					  width: '100%',
					  color: 'black',
					  fontSize: '3rem',
					  fontWeight: 'bolder',
					  fontFamily: 'Oswald',
					},
				  },
				  {
					type: 'site-text',
					content: 'He had three simple rules by which he lived. The first was to never eat blue food. There was nothing in nature that was edible that was blue. People often asked about blueberries, but everyone knows those are actually purple. He understood it was one of the stranger rules to live by, but it had served him well thus far in the 50+ years of his life. He had three simple rules by which he lived. The first was to never eat blue food. There was nothing in nature that was edible that was blue. People often asked about blueberries, but everyone knows those are actually purple. He understood it was one of the stranger rules to live by, but it had served him well thus far in the 50+ years of his life. He had three simple rules by which he lived. The first was to never eat blue food. There was nothing in nature that was edible that was blue. People often asked about blueberries, but everyone knows those are actually purple. He understood it was one of the stranger rules to live by, but it had served him well thus far in the 50+ years of his life. Do you think you\'re living an ordinary life? You are so mistaken it\'s difficult to even explain. The mere fact that you exist makes you extraordinary. The odds of you existing are less than winning the lottery, but here you are. Are you going to let this extraordinary opportunity pass?',
					style: {
					  width: '100%',
					  color: 'black',
					  fontSize: '1rem',
					  fontWeight: 'bolder',
					  fontFamily: 'Oswald',
					},
				  },
				],
			  },
		},
		{
			name: 'Text on Photo Right',
			img: 'https://i.ibb.co/jZgtZ6v/Screenshot-2020-07-25-10-45-14.png',
			tree: {
				type: 'site-section',
				class: 'text-on-photo-right',
				style: {
					background:
						'url("https://images.unsplash.com/photo-1540206395-68808572332f?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE1MTExM30") center center no-repeat scroll',
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
								content: 'Be yourself; everyone else is already taken.',
								style: {
									backgroundColor: '#ffffff',
									fontFamily: 'Bitter',
									color: '#446e88',
									fontSize: '1rem',
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
								content: `You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.`,
								style: {
									backgroundColor: '#ffffff',
									fontSize: '1rem',
									fontFamily: 'Bitter',
									color: '#446e88',
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
								content: 'Be the change that you wish to see in the world.',
								style: {
									backgroundColor: '#ffffff',
									fontSize: '1rem',
									fontFamily: 'Bitter',
									color: '#446e88',
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
								content: 'No one can make you feel inferior without your consent.',
								style: {
									backgroundColor: '#ffffff',
									fontFamily: 'Bitter',
									color: '#446e88',
									fontSize: '1rem',
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
								content: 'Live as if you were to die tomorrow. Learn as if you were to live forever.',
								style: {
									backgroundColor: '#ffffff',
									fontSize: '1rem',
									fontFamily: 'Bitter',
									color: '#446e88',
								},
							},
						],
					},
				],
			},
		},

		{
			name: 'Text on Photo Left',
			img: 'https://i.ibb.co/T4xqJF7/Screenshot-2020-07-25-10-29-15.png',
			tree: {
				type: 'site-section',
				class: 'text-on-photo-left',
				style: {
					background:
						'url(https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80) no-repeat',
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
								content: 'Be yourself everyone else is already taken.',
								style: {
									backgroundColor: '#d95b43',
									fontFamily: 'Bitter',
									color: '#80eaa9',
									fontSize: '1rem',
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
								content: `You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.`,
								style: {
									backgroundColor: '#d95b43',
									fontSize: '1rem',
									fontFamily: 'Bitter',
									color: '#80eaa9',
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
								content: 'Be the change that you wish to see in the world.',
								style: {
									backgroundColor: '#d95b43',
									fontSize: '1rem',
									fontFamily: 'Bitter',
									color: '#80eaa9',
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
								content: 'No one can make you feel inferior without your consent.',
								style: {
									backgroundColor: '#d95b43',
									fontFamily: 'Bitter',
									color: '#80eaa9',
									fontSize: '1rem',
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
								content: 'Live as if you were to die tomorrow. Learn as if you were to live forever.',
								style: {
									backgroundColor: '#d95b43',
									fontSize: '1rem',
									fontFamily: 'Bitter',
									color: '#80eaa9',
								},
							},
						],
					},
				],
			},
		},
	],
	footer: [
		{
			name: 'Big Footer Informer',
			img: 'https://i.ibb.co/8g3wzm6/Screenshot-2020-07-25-16-42-39.png',
			tree: {
				type: 'site-section',
				class: 'huge-info-footer',
				style: {
					background: '#ba2204',
				},
				cmps: [
					{
						type: 'site-div',
						style: {
							display: 'flex',
							justifyContent: 'space-around',
							marginBottom: '20px',
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
											fontSize: '3.5rem',
											fontFamily: 'Bitter',
											color: '#F7B714',
										},
									},
									{
										type: 'site-text',
										content: '9 RUE JACQUES COEUR - 75004 PARIS 01 77 10 67 83',
										style: {
											fontFamily: 'Bitter',
											color: '#ffffff',
											fontSize: '1.2‬rem',
										},
									},
								],
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
											fontSize: '3.5rem',
											fontFamily: 'Bitter',
											color: '#F7B714',
										},
									},
									{
										type: 'site-text',
										content: '196 RUE DE LA CONVENTION - 75015 PARIS 09 88 38 87 26',
										style: {
											fontFamily: 'Bitter',
											color: '#ffffff',
											fontSize: '1.2‬rem',
										},
									},
								],
							},
						],
					},
					{
						type: 'site-div',
						style: {
							textAlign: 'center',
						},
						cmps: [
							{
								type: 'site-text',
								content: 'NOUVEAUX HORAIRES SUITE A LA CRISE DU COVID 19 : 7/7 - 12H - 16H & 19H - 23H',
								style: {
									backgroundColor: '#f7b714',
									fontSize: '1.1rem',
									fontFamily: 'josefin slab',
									color: '#000000',
									fontWeight: 'bold',
								},
							},
						],
					},
					{
						type: 'site-div',
						style: {
							textAlign: 'center',
							marginBottom: '20px',
						},
						cmps: [
							{
								type: 'site-text',
								content:
									'NOTRE PERSONNEL EST FORME AUX NORMES SANITAIRES EN VIGUEUR. ENSEMBLE FAISONS FACE A LA CRISE SANTAIRE.',
								style: {
									background: '#f7b714',
									fontSize: '1.1rem',
									fontFamily: 'josefin slab',
									color: '#000000',
									fontWeight: 'bold',
								},
							},
						],
					},
					{
						type: 'site-div',
						style: {
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						},
						cmps: [
							{
								type: 'site-div',
								style: {
									textAlign: 'center',
								},
								cmps: [
									{
										type: 'site-image',
										content: 'https://i.ibb.co/4d394Sg/logo-holder.png',
										style: {
											objectFit: 'contain',
											maxHeight: '150px',
											maxWidth: '250px',
											minWidth: '150px',
											marginRight: '20px',
										},
									},
								],
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
										content: '© COPY RIGHTS OF CREATIVE THOUGHTS',
										style: {
											fontSize: '1.1rem',
											fontFamily: 'josefin slab',
											color: '#ffffff',
											fontWeight: 'bold',
										},
									},
								],
							},
						],
					},
				],
			},
		},
		{
			name: 'Headline & Subs Footer',
			img: 'https://i.gyazo.com/0ce95fbfe80480dd56833736c6bad1c4.png',
			tree: {
				type: 'site-section',
				style: {
					width: '100%',
					display: 'flex',
					justifyContent: 'space-around',
					background: '#161616',
					padding: '3rem 1rem',
					alignItems: 'stretch',
					fontFamily: 'Oswald',
				},
				cmps: [
					{
						type: 'site-div',
						style: {
							padding: '1rem',
						},
						cmps: [
							{
								type: 'site-text',
								content: 'DESTINATIONS',
								style: {
									fontWeight: 'bold',
									fontSize: '1.25rem',
									color: '#fff',
								},
							},
							{
								type: 'site-list',
								style: {
									display: 'flex',
									flexDirection: 'column',
									color: '#fff',
									marginTop: '1rem',
								},
								cmps: [
									{
										type: 'site-text',
										content: `New-Zealand`,
										style: {},
									},
									{
										type: 'site-text',
										content: `Australia`,
										style: {},
									},
									{
										type: 'site-text',
										content: `Argentina`,
										style: {},
									},
									{
										type: 'site-text',
										content: `Bolivia`,
										style: {},
									},
									{
										type: 'site-text',
										content: `More...`,
										style: {},
									},
								],
							},
						],
					},

					{
						type: 'site-div',
						style: {
							padding: '1rem',
						},
						cmps: [
							{
								type: 'site-text',
								content: 'SHOP',
								style: {
									fontWeight: 'bold',
									fontSize: '1.25rem',
									color: '#fff',
								},
							},
							{
								type: 'site-list',
								style: {
									display: 'flex',
									flexDirection: 'column',
									color: '#fff',
									marginTop: '1rem',
								},
								cmps: [
									{
										type: 'site-text',
										content: `Non English Guides`,
										style: {},
									},
									{
										type: 'site-text',
										content: `Delivery Times`,
										style: {},
									},
									{
										type: 'site-text',
										content: `Special Offers`,
										style: {},
									},
									{
										type: 'site-text',
										content: `FAQs`,
										style: {},
									},
								],
							},
						],
					},
					{
						type: 'site-div',
						style: {
							padding: '1rem',
						},
						cmps: [
							{
								type: 'site-text',
								content: 'FORUMS',
								style: {
									fontWeight: 'bold',
									fontSize: '1.25rem',
									color: '#fff',
								},
							},
							{
								type: 'site-list',
								style: {
									display: 'flex',
									flexDirection: 'column',
									color: '#fff',
									marginTop: '1rem',
								},
								cmps: [
									{
										type: 'site-text',
										content: `Country Forums`,
										style: {},
									},
									{
										type: 'site-text',
										content: `Interest Forums`,
										style: {},
									},
									{
										type: 'site-text',
										content: `Talk To Us`,
										style: {},
									},
								],
							},
						],
					},
					{
						type: 'site-div',
						style: {
							padding: '1rem',
						},
						cmps: [
							{
								type: 'site-text',
								content: 'TRAVEL BOOKING',
								style: {
									fontWeight: 'bold',
									fontSize: '1.25rem',
									color: '#fff',
								},
							},
							{
								type: 'site-list',
								style: {
									display: 'flex',
									flexDirection: 'column',
									color: '#fff',
									marginTop: '1rem',
								},
								cmps: [
									{
										type: 'site-text',
										content: `Hotels`,
										style: {},
									},
									{
										type: 'site-text',
										content: `Flights`,
										style: {},
									},
									{
										type: 'site-text',
										content: `Insurance`,
										style: {},
									},
								],
							},
						],
					},
				],
			},
		},
		{
			name: 'Footer & Social Buttons',
			img: 'https://i.gyazo.com/d6d4b225b8d23bbc721ae110356e23cf.png',
			tree: {
				type: 'site-section',
				style: {
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
					background: '#26272b',
					padding: '35px 0 20px',
				},

				cmps: [
					{
						type: 'site-div',
						class: 'social-footer-container',
						style: {
							marginRight: 'auto',
							marginLeft: 'auto',
							display: 'flex',
							paddingBlockEnd: '1rem',
							borderBottom: '1px solid #666666',
							flexWrap: 'wrap',
						},
						cmps: [
							{
								type: 'site-div',
								class: 'sfs-about',
								style: {
									padding: '0 15px',
									display: 'flex',
									flexDirection: 'column',
								},
								cmps: [
									{
										type: 'site-text',
										content: 'ABOUT',
										style: {
											letterSpacing: '2px',
											color: '#fff',
										},
									},
									{
										type: 'site-text',
										content:
											'webIT.com is an initiative to help the upcoming website builders with building easy and convient landing sites . webIT focuses on providing the most efficient Sections as the site wants to be clean and simple. We will help website builders build up the best landing sites in a variant of Blocks that Videos, Maps , Forms , Galleries, Navbars, Cards , Footers , Headers and some Dividers.',
										style: {
											color: '#737373',
										},
									},
								],
							},
							{
								type: 'site-div',
								class: 'sfs-about',
								style: {
									padding: '0 15px',
									display: 'flex',
									justifyContent: 'space-between',
								},
								cmps: [
									{
										type: 'site-div',
										style: {
											display: 'flex',
											flexDirection: 'column',
										},
										cmps: [
											{
												type: 'site-text',
												content: 'CATEGORIES',
												style: {
													letterSpacing: '2px',
													color: '#fff',
												},
											},
											{
												type: 'site-text',
												content: `C
							UI Design
							PHP
							Java
							Android
							Templates`,
												style: {},
											},
										],
									},
									{
										type: 'site-div',
										style: {
											display: 'flex',
											flexDirection: 'column',
										},
										cmps: [
											{
												type: 'site-text',
												content: 'QUICK LINKS',
												style: {
													letterSpacing: '2px',
													color: '#fff',
												},
											},
											{
												type: 'site-text',
												content: `About Us
						Contact Us
						Contribute
						Privacy Policy
						Sitemap`,
												style: {},
											},
										],
									},
								],
							},
						],
					},
					{
						type: 'site-div',
						class: 'social-footer-container',
						style: {
							marginRight: 'auto',
							marginLeft: 'auto',
							paddingBlockStart: '1rem',
						},
						cmps: [
							{
								type: 'site-div',
								style: {
									textAlign: 'center',
								},
								cmps: [
									{
										type: 'site-text',
										content: 'Copyright © 2020 All Rights Reserved by webIT.',
										style: {
											fontSize: '1.1rem',
											lineHeight: '1.5',
											letterSpacing: '1px',
										},
									},
								],
							},
							{
								type: 'site-div',
								style: {
									display: 'flex',
									justifyContent: 'space-around',
									padding: '1rem 7rem .5rem 7rem',
								},
								cmps: [
									{
										type: 'site-button',
										content: { text: '', href: '' },
										style: {
											background:
												'url(https://image.flaticon.com/icons/png/512/124/124010.png) center center / cover no-repeat',
											width: '28px',
											height: '28px',
											borderRadius: '5px',
										},
									},
									{
										type: 'site-button',
										content: { text: '', href: '' },
										style: {
											background:
												'url(https://i.gyazo.com/80639d9cab9b20e4cc2b6d020907aede.png) center center / cover no-repeat',
											width: '28px',
											height: '28px',
											borderRadius: '5px',
										},
									},
									{
										type: 'site-button',
										content: { text: '', href: '' },
										style: {
											background:
												'url(https://i.gyazo.com/8833c2c42eb3b5ee28e01dc455fa2614.png) center center / cover no-repeat',
											width: '28px',
											height: '28px',
											borderRadius: '5px',
										},
									},
									{
										type: 'site-button',
										content: { text: '', href: '' },
										style: {
											background:
												'url(https://i.gyazo.com/641e9ec709af1f857fd4ed51bb882e5f.png) center center / cover no-repeat',
											width: '28px',
											height: '28px',
											borderRadius: '5px',
										},
									},
								],
							},
						],
					},
				],
			},
		},
	],
	video: [
		{
			name: 'Video Card Left',
			img: 'https://i.ibb.co/Lrvxs1w/Screenshot-2020-07-24-15-50-18.png',
			tree: {
				type: 'site-section',
				class: 'card-video-above-left',
				style: {
					background: '#ffffff',
				},
				cmps: [
					{
						type: 'site-div',
						class: 'cards-container',
						style: '',
						cmps: [
							{
								type: 'site-div',
								class: 'div-behind-pic',
								style: {
									background: '#dcdfe6',
								},
								cmps: [
									{
										type: 'site-text',
										content: 'Ideas & Inspiration',
										style: {
											fontFamily: 'Titillium Web',
											fontSize: '2rem',
											color: '#46d1d5',
										},
									},
									{
										type: 'site-text',
										content: 'Your own beautiful words will change the world.',
										style: {
											fontFamily: 'Titillium Web',
											fontSize: '1.2rem',
											color: '#666666',
										},
									},
									{
										type: 'site-text',
										content:
											'You can write anything here. Yes, anything in the world. You can try, Just click on the text and you can start making this card your own.',
										style: {
											fontFamily: 'Titillium Web',
											fontSize: '1rem',
											color: '#666666',
										},
									},
									{
										type: 'site-button',
										content: { text: 'I am Button', href: '' },
										style: {
											fontFamily: 'Titillium Web',
											fontSize: '1rem',
											color: '#ffffff',
											background: '#46d1d5',
										},
									},
								],
							},
							{
								type: 'site-div',
								class: 'pic-above-div',
								style: {},
								cmps: [
									{
										type: 'site-video',
										content: 'https://www.youtube.com/watch?v=h5XKTIZ6nUM',
										style: {},
									},
								],
							},
						],
					},
				],
			},
		},
		{
			name: 'Video Card Right',
			img: 'https://i.ibb.co/QQ7T7Nq/Screenshot-2020-07-24-15-20-09.png',
			tree: {
				type: 'site-section',
				class: 'card-video-above-right',
				style: {
					background: '#ffffff',
				},
				cmps: [
					{
						type: 'site-div',
						class: 'cards-container',
						style: '',
						cmps: [
							{
								type: 'site-div',
								class: 'div-behind-pic',
								style: {
									background: '#dcdfe6',
								},
								cmps: [
									{
										type: 'site-text',
										content: 'Video to Display',
										style: {
											fontFamily: 'Titillium Web',
											fontSize: '2rem',
											color: '#cc333f',
										},
									},
									{
										type: 'site-text',
										content: 'Your own beautiful words will change the world.',
										style: {
											fontFamily: 'Titillium Web',
											fontSize: '1.2rem',
											color: '#666666',
										},
									},
									{
										type: 'site-text',
										content:
											'You can write anything here. Yes, anything in the world. You can try, Just click on the text and you can start making this card your own.',
										style: {
											fontFamily: 'Titillium Web',
											fontSize: '1rem',
											color: '#666666',
										},
									},
									{
										type: 'site-button',
										content: { text: 'I am Button', href: '' },
										style: {
											fontFamily: 'Titillium Web',
											fontSize: '1rem',
											color: '#ffffff',
											background: '#cc333f',
										},
									},
								],
							},
							{
								type: 'site-div',
								class: 'pic-above-div',
								style: {},
								cmps: [
									{
										type: 'site-video',
										content: 'https://www.youtube.com/watch?v=BpIaRTSYMTA',
										style: {},
									},
								],
							},
						],
					},
				],
			},
		},
	],
	cards: [
		{
			name: 'Post Card Left Pic',
			img: 'https://i.ibb.co/DR6dXnJ/Screenshot-2020-07-25-14-54-55.png',
			tree: {
				type: 'site-section',
				class: 'fixed-post-card',
				style: {
					background: '#ffffff',
				},
				cmps: [
					{
						type: 'site-div',
						class: 'post-card-container',
						style: {
							background: '#ffffff',
						},
						cmps: [
							{
								type: 'site-div',
								class:'post-card-pic',
								style: {
									background:
										"url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.businessinsider.com%2Fimage%2F51b206e5eab8eafd63000007%2Fimage.jpg&f=1&nofb=1') no-repeat center center / cover scroll",
									width: '100%',
								},
								cmps: [],
							},
							{
								type: 'site-div',
								class: 'post-card-text',
								style: {
									background: '#ffffff',
								},
								cmps: [
									{
										type: 'site-div',
										style: {
											textAlign: 'center',
											width: '100%',
										},
										cmps: [
											{
												type: 'site-text',
												content: `I'm all yours to make`,
												style: {
													fontSize: '1.4rem',
													fontFamily: 'Oswald',
													color: '#F7B714',
												},
											},
										],
									},
									{
										type: 'site-div',
										style: {
											textAlign: 'center',
											width: '100%',
										},
										cmps: [
											{
												type: 'site-text',
												content: 'From Me',
												style: {
													fontSize: '2.5rem',
													textDecoration: 'underline',
													fontFamily: 'Mr Dafoe',
													color: '#F7B714',
												},
											},
										],
									},
									{
										type: 'site-div',
										style: {
											textAlign: 'center',
											width: '100%',
										},
										cmps: [
											{
												type: 'site-text',
												content: 'My Ideas are here',
												style: {
													fontSize: '0.9rem',
													fontFamily: 'Inknut Antiqua',
													color: '#F7B714',
												},
											},
										],
									},
									{
										type: 'site-div',
										style: {
											textAlign: 'center',
											width: '100%',
										},
										cmps: [
											{
												type: 'site-text',
												content:
													'Sometimes, all you need to break a string of losses is a win. It doesn’t even matter if the win is a small one. On a day where you feel like you can’t do anything right, your brain can be your own worst enemy.',
												style: {
													fontSize: '0.9rem',
													fontFamily: 'Josefin Slab',
													color: '#000000',
												},
											},
										],
									},
									{
										type: 'site-div',
										class: 'post-card-text-buttons',
										style: {
											width: '100%',
										},
										cmps: [
											{
												type: 'site-button',
												content: {
													text: 'Click Him',
													href: '',
												},
												style: {
													background: '#ffffff',
													fontFamily: 'Righteous',
													color: '#F7B714',
													border: '3px #F7B714 solid',
													borderRadius: '0',
													lineHeight: '1',
													fontSize: '1rem',
												},
											},
											{
												type: 'site-button',
												content: {
													text: 'Click Me',
													href: '',
												},
												style: {
													background: '#ffffff',
													fontFamily: 'Righteous',
													color: '#F7B714',
													border: '3px #F7B714 solid',
													borderRadius: '0',
													lineHeight: '1',
													fontSize: '1rem',
												},
											},
										],
									},
								],
							},
						],
					},
				],
			},
		},
		{
			name: 'Post Card Right Pic',
			img: 'https://i.ibb.co/zxB7Y60/Screenshot-2020-07-25-14-41-58.png',
			tree: {
				type: 'site-section',
				class: 'fixed-post-card',
				style: {
					background: '#ffffff',
				},
				cmps: [
					{
						type: 'site-div',
						class: 'post-card-container',
						style: {
							background: '#ffffff',
						},
						cmps: [
							{
								type: 'site-div',
								class: 'post-card-text',
								style: {
									background: '#ffffff',
								},
								cmps: [
									{
										type: 'site-div',
										style: {
											textAlign: 'center',
											width: '100%',
										},
										cmps: [
											{
												type: 'site-text',
												content: `I'm all yours to make`,
												style: {
													fontSize: '1.4rem',
													fontFamily: 'Oswald',
													color: '#EF4135',
												},
											},
										],
									},
									{
										type: 'site-div',
										style: {
											textAlign: 'center',
											width: '100%',
										},
										cmps: [
											{
												type: 'site-text',
												content: 'From Me',
												style: {
													fontSize: '2.5rem',
													textDecoration: 'underline',
													fontFamily: 'Mr Dafoe',
													color: '#EF4135',
												},
											},
										],
									},
									{
										type: 'site-div',
										style: {
											textAlign: 'center',
											width: '100%',
										},
										cmps: [
											{
												type: 'site-text',
												content: 'My Ideas are here',
												style: {
													fontSize: '0.9rem',
													fontFamily: 'Inknut Antiqua',
													color: '#EF4135',
												},
											},
										],
									},
									{
										type: 'site-div',
										style: {
											textAlign: 'center',
											width: '100%',
										},
										cmps: [
											{
												type: 'site-text',
												content:
													'Sometimes, all you need to break a string of losses is a win. It doesn’t even matter if the win is a small one. On a day where you feel like you can’t do anything right, your brain can be your own worst enemy.',
												style: {
													fontSize: '0.9rem',
													fontFamily: 'Josefin Slab',
													color: '#000000',
												},
											},
										],
									},
									{
										type: 'site-div',
										class: 'post-card-text-buttons',
										style: {
											width: '100%',
										},
										cmps: [
											{
												type: 'site-button',
												content: {
													text: 'Click Me',
													href: '',
												},
												style: {
													background: '#ffffff',
													fontFamily: 'Righteous',
													color: '#EF4135',
													border: '3px #EF4135 solid',
													borderRadius: '0',
													lineHeight: '1',
													fontSize: '1rem',
												},
											},
											{
												type: 'site-button',
												content: {
													text: 'Click Him',
													href: '',
												},
												style: {
													background: '#ffffff',
													fontFamily: 'Righteous',
													color: '#EF4135',
													border: '3px #EF4135 solid',
													borderRadius: '0',
													lineHeight: '1',
													fontSize: '1rem',
												},
											},
										],
									},
								],
							},
							{
								type: 'site-div',
								class:'post-card-pic',
								style: {
									background:
										"url('https://images.unsplash.com/photo-1532465614-6cc8d45f647f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80') no-repeat center center / cover scroll",
									width: '100%',
								},
								cmps: [],
							},
						],
					},
				],
			},
		},
		{
			name: 'Floating Pic Right',
			img: 'https://i.ibb.co/WsX0tv1/Screenshot-2020-07-24-14-49-39.png',
			tree: {
				type: 'site-section',
				class: 'card-photo-above-right',
				style: {
					background: '#ffffff',
				},
				cmps: [
					{
						type: 'site-div',
						class: 'cards-container',
						style: '',
						cmps: [
							{
								type: 'site-div',
								class: 'div-behind-pic',
								style: {
									background: '#dcdfe6',
								},
								cmps: [
									{
										type: 'site-text',
										content: 'Ideas & Inspiration',
										style: {
											fontFamily: 'Titillium Web',
											fontSize: '2rem',
											color: '#af5efd',
										},
									},
									{
										type: 'site-text',
										content: 'Your own beautiful words will change the world.',
										style: {
											fontFamily: 'Titillium Web',
											fontSize: '1.2rem',
											color: '#666666',
										},
									},
									{
										type: 'site-text',
										content:
											'You can write anything here. Yes, anything in the world. You can try, Just click on the text and you can start making this card your own.',
										style: {
											fontFamily: 'Titillium Web',
											fontSize: '1rem',
											color: '#666666',
										},
									},
									{
										type: 'site-button',
										content: { text: 'I am Button', href: '' },
										style: {
											fontFamily: 'Titillium Web',
											fontSize: '1rem',
											color: '#ffffff',
											background: '#af5efd',
										},
									},
									{
										type: 'site-div',
										class: 'pic-above-div',
										style: {},
										cmps: [
											{
												type: 'site-image',
												content:
													'https://images.unsplash.com/photo-1503460589709-a01a75418735?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1134&q=80',
												style: {},
											},
										],
									},
								],
							},
						],
					},
				],
			},
		},
		{
			name: 'Floating Pic Left',
			img: 'https://i.ibb.co/TRK4GWh/Screenshot-2020-07-24-14-12-12.png',
			tree: {
				type: 'site-section',
				class: 'card-photo-above-left',
				style: {
					background: '#ffffff',
				},
				cmps: [
					{
						type: 'site-div',
						class: 'cards-container',
						style: '',
						cmps: [
							{
								type: 'site-div',
								class: 'div-behind-pic',
								style: {
									background: '#dcdfe6',
								},
								cmps: [
									{
										type: 'site-text',
										content: 'Ideas & Inspiration',
										style: {
											fontFamily: 'Titillium Web',
											fontSize: '2rem',
											color: '#0076df',
										},
									},
									{
										type: 'site-text',
										content: 'Your own beautiful words will change the world.',
										style: {
											fontFamily: 'Titillium Web',
											fontSize: '1.2rem',
											color: '#666666',
										},
									},
									{
										type: 'site-text',
										content:
											'You can write anything here. Yes, anything in the world. You can try, Just click on the text and you can start making this card your own.',
										style: {
											fontFamily: 'Titillium Web',
											fontSize: '1rem',
											color: '#666666',
										},
									},
									{
										type: 'site-button',
										content: { text: 'I am Button', href: '' },
										style: {
											fontFamily: 'Titillium Web',
											fontSize: '1rem',
											color: '#ffffff',
											background: '#0076df',
										},
									},
								],
							},
							{
								type: 'site-div',
								class: 'pic-above-div',
								style: {},
								cmps: [
									{
										type: 'site-image',
										content:
											'https://images.unsplash.com/photo-1535310172250-0dcb6b63324e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
										style: {},
									},
								],
							},
						],
					},
				],
			},
		},
		{
			name: 'Informative Cards',
			img: 'https://i.gyazo.com/5bb27774793732b8d3983e74ddcbc6c7.png',
			tree: {
				type: 'site-section',
				class: 'floating-cards-section',
				style: {
					width: '100%',
					display: 'flex',
					justifyContent: 'flex-start',
					alignItems: 'center',
					flexDirection: 'column',
					position: 'relative',
					padding: '3rem 0 8rem',
					background: '#fff',
				},
				cmps: [
					{
						type: 'site-div',
						style: {
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							background: 'inherit',
						},
						cmps: [
							{
								type: 'site-text',
								content: 'Hello , I Am A Title',
								style: {
									color: '#98953e',
									fontFamily: 'Oswald',
									fontSize: '1.3125rem',
									letterSpacing: '2.5px',
								},
							},
							{
								type: 'site-text',
								content: 'And I Represent The Section Information',
								style: {
									color: '#17255e',
									fontFamily: 'Oswald',
									fontSize: '2.5625rem',
									borderBottom: '8px solid #8a8d4a66',
								},
							},
						],
					},
					{
						type: 'site-div',
						class: 'floating-cards-container',
						style: {
							display: 'flex',
							alignItems: 'stretch',
							justifyContent: 'center',
							flexWrap: 'wrap',
							width: '100%',
							background: 'none',
						},
						cmps: [
							{
								type: 'site-div',
								class: 'floating-card',
								style: {
									position: 'relative',
									flex: '1',
									minWidth: '23rem',
									maxWidth: '23rem',
									margin: '3rem 1.5rem 0px 1.5rem',
									display: 'flex',
									flexDirection: 'column',
									border: '1px solid #dedede',
									background: '#fff',
								},
								cmps: [
									{
										type: 'site-div',
										style: {
											flex: '2',
											background:
												"url('https://camposcoffee.com/us/wp-content/uploads/2016/09/plunger-335x200.jpg') center center /cover no-repeat",
											minHeight: '230px',
										},
									},
									{
										type: 'site-div',
										style: {
											display: 'flex',
											flex: '1',
											flexDirection: 'column',
											textAlign: 'left',
											width: '100%',
											borderTop: 'none',
											padding: '1.25rem 2.5rem',
										},
										cmps: [
											{
												type: 'site-button',
												content: { text: '➜', href: '' },
												style: {
													height: '30px',
													width: '30px',
													position: 'absolute',
													right: '0',
													bottom: '0',
													background: 'none',
													fontSize: '1.4375rem',
													color: '#474747',
													boxSizing: 'content-box',
												},
											},
											{
												type: 'site-text',
												content: 'Card Description 1',
												style: {
													color: '#000',
													fontFamily: 'Oswald',
													fontSize: '1.125rem',
													letterSpacing: '2px',
													lineHeight: '1.6',
													margin: '1.5rem 0 1.5rem 0',
												},
											},
											{
												type: 'site-text',
												content: 'Subtitle 1',
												style: {
													fontFamily: 'Oswald',
													fontSize: '.75rem',
													lineHeight: '1.5',
													letterSpacing: '3px',
													margin: '0 0 1rem',
												},
											},
										],
									},
								],
							},
							{
								type: 'site-div',
								class: 'floating-card',
								style: {
									position: 'relative',
									flex: '1',
									minWidth: '23rem',
									maxWidth: '23rem',
									margin: '3rem 1.5rem 0px 1.5rem',
									display: 'flex',
									flexDirection: 'column',
									border: '1px solid #dedede',
									background: '#fff',
								},
								cmps: [
									{
										type: 'site-div',
										style: {
											flex: '2',
											background:
												"url('https://camposcoffee.com/us/wp-content/uploads/2016/09/aeropress-335x200.jpg') center center /cover no-repeat",
											minHeight: '230px',
										},
									},
									{
										type: 'site-div',
										style: {
											display: 'flex',
											flex: '1',
											flexDirection: 'column',
											textAlign: 'left',
											width: '100%',
											borderTop: 'none',
											padding: '1.25rem 2.5rem',
										},
										cmps: [
											{
												type: 'site-button',
												content: { text: '➜', href: '' },
												style: {
													height: '30px',
													width: '30px',
													position: 'absolute',
													right: '0',
													bottom: '0',
													background: 'none',
													fontSize: '1.4375rem',
													color: '#474747',
													boxSizing: 'content-box',
												},
											},
											{
												type: 'site-text',
												content: 'Card Description 2',
												style: {
													color: '#000',
													fontFamily: 'Oswald',
													fontSize: '1.125rem',
													letterSpacing: '2px',
													lineHeight: '1.6',
													margin: '1.5rem 0 1.5rem 0',
												},
											},
											{
												type: 'site-text',
												content: 'Subtitle 2',
												style: {
													fontFamily: 'Oswald',
													fontSize: '.75rem',
													lineHeight: '1.5',
													letterSpacing: '3px',
													margin: '0 0 1rem',
												},
											},
										],
									},
								],
							},
							{
								type: 'site-div',
								class: 'floating-card',
								style: {
									position: 'relative',
									flex: '1',
									minWidth: '23rem',
									maxWidth: '23rem',
									margin: '3rem 1.5rem 0px 1.5rem',
									display: 'flex',
									flexDirection: 'column',
									border: '1px solid #dedede',
									background: '#fff',
								},
								cmps: [
									{
										type: 'site-div',
										style: {
											flex: '2',
											background:
												"url('https://camposcoffee.com/us/wp-content/uploads/2016/09/chemex-335x200.jpg') center center /cover no-repeat",
											minHeight: '230px',
										},
									},
									{
										type: 'site-div',
										style: {
											display: 'flex',
											flex: '1',
											flexDirection: 'column',
											textAlign: 'left',
											width: '100%',
											borderTop: 'none',
											padding: '1.25rem 2.5rem',
										},
										cmps: [
											{
												type: 'site-button',
												content: { text: '➜', href: '' },
												style: {
													height: '30px',
													width: '30px',
													position: 'absolute',
													right: '0',
													bottom: '0',
													background: 'none',
													fontSize: '1.4375rem',
													color: '#474747',
													boxSizing: 'content-box',
												},
											},
											{
												type: 'site-text',
												content: 'Card Description 3',
												style: {
													color: '#000',
													fontFamily: 'Oswald',
													fontSize: '1.125rem',
													letterSpacing: '2px',
													lineHeight: '1.6',
													margin: '1.5rem 0 1.5rem 0',
												},
											},
											{
												type: 'site-text',
												content: 'Subtitle 3',
												style: {
													fontFamily: 'Oswald',
													fontSize: '.75rem',
													lineHeight: '1.5',
													letterSpacing: '3px',
													margin: '0 0 1rem',
												},
											},
										],
									},
								],
							},
						],
					},
				],
			},
		},
		{
			name: 'Cards With Author',
			img: 'https://i.gyazo.com/a0cc9c311a000634c5fc18881b9765e7.jpg',
			tree: {
				type: 'site-section',
				class: 's-cards-container',
				style: {
					background:
						'url(https://images.unsplash.com/photo-1471955208393-a03a570b4c02?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)no-repeat center center fixed',
					backgroundSize: 'cover',
				},
				cmps: [
					{
						type: 'site-div',
						class: 'card-div',
						style: {
							background: '#ffffff',
						},
						cmps: [
							{
								type: 'site-image',
								content:
									'https://images.unsplash.com/photo-1566903026052-36e4e1bd803a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80',
								style: {
									height: '260px',
									borderRadius: '12px 12px 0px 0px',
									objectFit: 'cover',
									width: '100%',
								},
							},
							{
								type: 'site-image',
								content: 'https://ca.slack-edge.com/TTSM5TLP5-U01244JFQ30-cdef3d127aa0-512',
								style: {
									height: '100px',
									width: '100px',
									position: 'absolute',
									border: '6px white solid',
									borderRadius: '50%',
									top: '210px',
									zIndex: '2',
									left: 'calc(50% - 50px)',
									objectFit: 'cover',
								},
							},
							{
								type: 'site-text',
								content: 'Title',
								style: {
									marginBlockStart: '5rem',
									fontFamily: 'Oswald',
									fontSize: '2rem',
									color: '#5aa55e',
								},
							},
							{
								type: 'site-text',
								content: 'Add Text...',
								style: {
									fontFamily: 'Oswald',
									color:
										'#https://images.unsplash.com/photo-1517649281203-dad836b4abe5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80335b3b',
								},
							},
							{
								type: 'site-text',
								content: 'READ MORE',
								style: {
									fontFamily: 'Oswald',
									color: '#0000000',
									marginBlockStart: '2rem',
									borderBlockStart: '1px solid #e5e5e5',
									width: '100%',
									textAlign: 'center',
								},
							},
						],
					},

					{
						type: 'site-div',
						class: 'card-div',
						style: {
							background: '#ffffff',
						},
						cmps: [
							{
								type: 'site-image',
								content:
									'https://images.unsplash.com/photo-1517649281203-dad836b4abe5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
								style: {
									height: '260px',
									objectFit: 'cover',
									width: '100%',
									borderRadius: '12px 12px 0px 0px',
								},
							},
							{
								type: 'site-image',
								content: 'https://ca.slack-edge.com/TTSM5TLP5-U01244K0L9L-60f6bffb36ed-512',
								style: {
									height: '100px',
									width: '100px',
									position: 'absolute',
									border: '6px white solid',
									borderRadius: '50%',
									top: '210px',
									zIndex: '2',
									left: 'calc(50% - 50px)',
									objectFit: 'cover',
								},
							},
							{
								type: 'site-text',
								content: 'Title',
								style: {
									marginBlockStart: '5rem',
									fontFamily: 'Oswald',
									fontSize: '2rem',
									color: '#393330',
								},
							},
							{
								type: 'site-text',
								content: 'Add Text...',
								style: {
									fontFamily: 'Oswald',
									color: '#3d3d3c',
								},
							},
							{
								type: 'site-text',
								content: 'READ MORE',
								style: {
									fontFamily: 'Oswald',
									color: '#0000000',
									marginBlockStart: '2rem',
									borderBlockStart: '1px solid #e5e5e5',
									width: '100%',
									textAlign: 'center',
								},
							},
						],
					},
					{
						type: 'site-div',
						class: 'card-div',
						style: {
							background: '#ffffff',
						},
						cmps: [
							{
								type: 'site-image',
								content:
									'https://images.unsplash.com/photo-1517837543704-3617ae61a835?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
								style: {
									height: '260px',
									objectFit: 'cover',
									width: '100%',
									borderRadius: '12px 12px 0px 0px',
								},
							},
							{
								type: 'site-image',
								content:
									'https://scontent.ftlv2-1.fna.fbcdn.net/v/t1.0-9/74162499_410135086544527_8337365879062790144_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=YWTSjQCzx0sAX8MSMsn&_nc_ht=scontent.ftlv2-1.fna&oh=7f30faf7f2e045c2e398ebadc2105301&oe=5F406D87',
								style: {
									height: '100px',
									width: '100px',
									position: 'absolute',
									border: '6px white solid',
									borderRadius: '50%',
									top: '210px',
									zIndex: '2',
									left: 'calc(50% - 50px)',
									objectFit: 'cover',
								},
							},
							{
								type: 'site-text',
								content: 'Title',
								style: {
									marginBlockStart: '5rem',
									fontFamily: 'Oswald',
									fontSize: '2rem',
									color: '#f1c647',
								},
							},
							{
								type: 'site-text',
								content: 'Add Text...',
								style: {
									fontFamily: 'Oswald',
									color: '#3d3d3c',
								},
							},
							{
								type: 'site-text',
								content: 'READ MORE',
								style: {
									fontFamily: 'Oswald',
									color: '#0000000',
									marginBlockStart: '2rem',
									borderBlockStart: '1px solid #e5e5e5',
									width: '100%',
									textAlign: 'center',
								},
							},
						],
					},
					{
						type: 'site-div',
						class: 'card-div',
						style: {
							background: '#ffffff',
						},
						cmps: [
							{
								type: 'site-image',
								content: 'https://d17fnq9dkz9hgj.cloudfront.net/uploads/2017/10/PF2015_267_Kittens_Shelter-630.jpg',
								style: {
									height: '260px',
									objectFit: 'cover',
									width: '100%',
									borderRadius: '12px 12px 0px 0px',
								},
							},
							{
								type: 'site-image',
								content: 'https://ca.slack-edge.com/TTSM5TLP5-U012WTGCU77-ed72504d7912-512',
								style: {
									height: '100px',
									width: '100px',
									position: 'absolute',
									border: '6px white solid',
									borderRadius: '50%',
									top: '210px',
									zIndex: '2',
									left: 'calc(50% - 50px)',
									objectFit: 'cover',
								},
							},
							{
								type: 'site-text',
								content: 'Title',
								style: {
									marginBlockStart: '5rem',
									fontFamily: 'Oswald',
									fontSize: '2rem',
									color: '#704a26',
								},
							},
							{
								type: 'site-text',
								content: 'Add Text...',
								style: {
									fontFamily: 'Oswald',
									color: '#434343',
								},
							},
							{
								type: 'site-text',
								content: 'READ MORE',
								style: {
									fontFamily: 'Oswald',
									color: '#0000000',
									marginBlockStart: '2rem',
									borderBlockStart: '1px solid #e5e5e5',
									width: '100%',
									textAlign: 'center',
								},
							},
						],
					},
				],
			},
		},
	],
	divider: [
		{
			name: 'Tall Photo Divider',
			img: 'https://i.ibb.co/X8VpWWm/Screenshot-2020-07-23-22-01-10.png',
			tree: {
				type: 'site-section',
				class: 'block-photo-tall',
				style: {
					background:
						'url(https://images.unsplash.com/photo-1465101162946-4377e57745c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1057&q=80) no-repeat center',
					backgroundSize: 'cover',
				},
				cmps: [],
			},
		},
		{
			name: 'Short Photo Divider',
			img: 'https://i.ibb.co/Br13SGD/Screenshot-2020-07-23-22-00-08.png',
			tree: {
				type: 'site-section',
				class: 'block-photo-short',
				style: {
					background:
						'url(https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80) no-repeat center',
					backgroundSize: 'cover',
				},
				cmps: [],
			},
		},
		{
			name: 'Tall Line Divider',
			img: 'https://i.ibb.co/tpKyq6T/Screenshot-2020-07-23-22-10-47.png',
			tree: {
				type: 'site-section',
				class: 'color-line-tall',
				style: {
					background: '#9be0ab',
				},
				cmps: [],
			},
		},
		{
			name: 'Short Line Divider',
			img: 'https://i.ibb.co/m0TCfv7/Screenshot-2020-07-23-22-08-26.png',
			tree: {
				type: 'site-section',
				class: 'color-line-short',
				style: {
					background: '#ff4762',
				},
				cmps: [],
			},
		},
		{
			name: 'Line',
			img: 'https://i.ibb.co/3F774F8/line.png',
			tree: {
				type: 'site-section',
				class: 'color-line',
				style: {
				  background: '#a7dbd8',
				},
				cmps: [],
			  },
		},
		{
			name: 'Title',
			img: 'https://i.ibb.co/GVbgfzh/Screenshot-2020-07-25-20-28-02.png',
			tree: {
				type: 'site-section',
				class: 'text-divider-title',
				style: {
				  background: '#ffffff',
				  textAlign: 'center',
				  display: 'flex',
				  flexDirection: 'column',
				  justifyContent:'center',
				  padding: '1rem'
				},
				cmps: [{
				  type:'site-text',
				  content:'Make me yours',
				  style:{
					width: '100%',
					color:'black',
					fontSize: '3rem',
					fontWeight: 'bolder',
					fontFamily: 'Oswald',
				  }
				}],
			  },
		},
		
	],
	header: [
		{
			name: 'Hero',
			img: 'https://i.ibb.co/F5zGjtR/header-lion-2.png',
			tree: {
				type: 'site-section',
				style: {
					background:
						'url(https://images.unsplash.com/photo-1588878497864-24269ed778ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80) no-repeat center center scroll',
					backgroundSize: 'cover',
					height: '100vh',
					padding: '10px 10px 10px 10px',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				},
				cmps: [
					{
						type: 'site-div',
						style: {
							height: '6rem',
							width: '100%',
							display: 'flex',
							justifyContent: 'space-between',
							backgroundColor: '#d9ccc959',
							alignItems: 'center',
						},
						cmps: [
							{
								type: 'site-image',
								content:
									'https://pluspng.com/img-png/national-geographic-logo-png-logo-natgeo-png-pluspng-com-logo-national-geographic-png-1000.png',
								style: {
									height: '5rem',
									paddingInlineStart: '1.5rem',
								},
							},
							{
								type: 'site-list',
								cmps: [
									{
										type: 'site-text',
										content: 'HOME',
										style: {
											marginInlineEnd: '1rem',
											color: '#000000',
										},
									},
									{
										type: 'site-text',
										content: 'ARTICLES',
										style: {
											marginInlineEnd: '1rem',
											color: '#fff',
										},
									},
									{
										type: 'site-text',
										content: 'MEMBERS',
										style: {
											marginInlineEnd: '1rem',
											color: '#fff',
										},
									},
									{
										type: 'site-text',
										content: 'ABOUT',
										style: {
											marginInlineEnd: '1rem',
											color: '#fff',
										},
									},
									{
										type: 'site-text',
										content: 'CONTACT US',
										style: {
											marginInlineEnd: '1rem',
											color: '#fff',
										},
									},
								],
								style: {
									fontFamily: 'Oswald',
									color: '#FFF',
									display: 'flex',
								},
							},
						],
					},
					{
						type: 'site-div',
						style: {
							height: '700px',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							flexDirection: 'column',
						},
						cmps: [
							{
								type: 'site-text',
								content: 'ANIMAL GEOGRAPHIC',
								style: {
									fontSize: '4rem',
									fontFamily: 'Oswald',
									color: 'white',
									textShadow: '0 0 2px black',
								},
							},
							{
								type: 'site-text',
								content: 'We Bring You The Best Articles',
								style: {
									fontSize: '1.875rem',
									fontFamily: 'Oswald',
									color: 'white',
									textShadow: '0 0 1px black',
								},
							},
							{
								type: 'site-button',
								content: {
									text: 'SUBSCRIBE',
									href: '',
								},
								style: {
									fontFamily: 'Oswald',
									backgroundColor: '#ffcc00',
									padding: '.75rem 2rem',
									marginTop: '1rem',
									fontSize: '1.5rem',
									fontWeight: 'bold',
								},
							},
						],
					},
				],
			},
		},
		{
			name: 'Logo Horizon',
			img: 'https://i.ibb.co/D74M0wM/Screenshot-2020-07-23-18-40-58.png',
			tree: {
				type: 'site-section',
				class: 'text-logo-text',
				style: {
					background: '#c5e0dc',
				},
				cmps: [
					{
						type: 'site-div',
						style: {},
						cmps: [
							{
								type: 'site-text',
								content: 'Change the text by clicking on me',
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
									'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.rechargewebs.com%2Fimages%2Ficon%2Fyour-logo.png&f=1&nofb=1',
								style: {},
							},
							{
								type: 'site-text',
								content: 'Change the text by clicking on me',
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
								content: 'Change the text by clicking on me',
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
		},
	],
	gallery: [
		{
			name: 'Poster 3 pics',
			img: 'https://i.ibb.co/PjkXLrT/Screenshot-2020-07-25-12-09-24.png',
			tree: {
				type: 'site-section',
				class: 'three-pics-poster',
				style: {},
				cmps: [
					{
						type: 'site-div',
						style: {
							background:
								'url(https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg1.wikia.nocookie.net%2F__cb20150722183849%2Fmarvel_dc%2Fimages%2F8%2F87%2FWonder_Woman_Vol_4_42_Textless.jpg&f=1&nofb=1) no-repeat center center / cover scroll',

							width: '100%',
						},
						cmps: [],
					},
					{
						type: 'site-div',
						style: {
							background:
								'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2016%2F01%2F188460-Spider-Man-Marvel_Comics.jpg&f=1&nofb=1) no-repeat center center / cover scroll',

							width: '100%',
						},
						cmps: [],
					},
					{
						type: 'site-div',
						style: {
							background:
								'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F4a%2Fbc%2Fa8%2F4abca8abdfda6359581be1153434266f.jpg&f=1&nofb=1) no-repeat center center / cover scroll',
							width: '100%',
						},
						cmps: [],
					},
				],
			},
		},
		{
			name: '4 Pics Gallery',
			img: 'https://i.ibb.co/hXDGrmV/Screenshot-2020-07-23-16-52-46.png',
			tree: {
				type: 'site-section',
				class: 'gallery-4-pics',
				style: {
					backgroundColor: 'white',
				},
				cmps: [
					{
						type: 'site-div',
						class: '',
						cmps: [
							{
								type: 'site-image',
								content:
									'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.outdoorproject.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fcboxshow%2Fpublic%2F1471993417%2F_mg_1903-pano.jpg%3Fitok%3DLaAr2xO7&f=1&nofb=1',
								style: {},
							},
						],
					},
					{
						type: 'site-div',
						class: '',
						cmps: [
							{
								type: 'site-image',
								content:
									'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.baltana.com%2Ffiles%2Fwallpapers-2%2FHills-HD-Wallpapers-04166.jpg&f=1&nofb=1',
								style: {},
							},
						],
					},
					{
						type: 'site-div',
						class: '',
						cmps: [
							{
								type: 'site-image',
								content:
									'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flawanderlust.files.wordpress.com%2F2013%2F04%2Fimg_4028.jpg&f=1&nofb=1',
								style: {},
							},
						],
					},
					{
						type: 'site-div',
						class: '',
						cmps: [
							{
								type: 'site-image',
								content:
									'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F-HLZClXhQ-8w%2FULOMuubnx3I%2FAAAAAAAANz8%2Ff6c1Ajl31Ls%2Fs1600%2FNetherlands%2BFlower%2BFields%2BWallpapers%2Band%2BPhotos%2B03.jpg&f=1&nofb=1',
								style: {},
							},
						],
					},
				],
			},
		},
		{
			name: '10 Pics Gallery',
			img: 'https://i.ibb.co/x7cqGdM/Screenshot-2020-07-23-16-40-36.png',
			tree: {
				type: 'site-section',
				class: 'gallery-10-pics',
				style: {
					backgroundColor: 'white',
				},
				cmps: [
					{
						type: 'site-div',
						class: '',
						cmps: [
							{
								type: 'site-image',
								content:
									'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.outdoorproject.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fcboxshow%2Fpublic%2F1471993417%2F_mg_1903-pano.jpg%3Fitok%3DLaAr2xO7&f=1&nofb=1',
								style: {},
							},
						],
					},
					{
						type: 'site-div',
						class: '',
						cmps: [
							{
								type: 'site-image',
								content:
									'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.baltana.com%2Ffiles%2Fwallpapers-2%2FHills-HD-Wallpapers-04166.jpg&f=1&nofb=1',
								style: {},
							},
						],
					},
					{
						type: 'site-div',
						class: '',
						cmps: [
							{
								type: 'site-image',
								content:
									'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flawanderlust.files.wordpress.com%2F2013%2F04%2Fimg_4028.jpg&f=1&nofb=1',
								style: {},
							},
						],
					},
					{
						type: 'site-div',
						class: '',
						cmps: [
							{
								type: 'site-image',
								content:
									'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F-HLZClXhQ-8w%2FULOMuubnx3I%2FAAAAAAAANz8%2Ff6c1Ajl31Ls%2Fs1600%2FNetherlands%2BFlower%2BFields%2BWallpapers%2Band%2BPhotos%2B03.jpg&f=1&nofb=1',
								style: {},
							},
						],
					},
					{
						type: 'site-div',
						class: '',
						cmps: [
							{
								type: 'site-image',
								content:
									'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.financialexpress.com%2F2017%2F11%2Fcats-156.jpg&f=1&nofb=1',
								style: {},
							},
						],
					},
					{
						type: 'site-div',
						class: '',
						cmps: [
							{
								type: 'site-image',
								content: 'https://scentertainer.net/wp-content/uploads/2020/06/italian-cypress-2b.jpg',
								style: {},
							},
						],
					},
					{
						type: 'site-div',
						class: '',
						cmps: [
							{
								type: 'site-image',
								content:
									'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F-0az-sKQWj0c%2FT7fy-H_LILI%2FAAAAAAAADRE%2F1ICXzTBkgEc%2Fs1600%2FFlamingo11.jpg&f=1&nofb=1',
								style: {},
							},
						],
					},
					{
						type: 'site-div',
						class: '',
						cmps: [
							{
								type: 'site-image',
								content: 'https://q-cf.bstatic.com/images/hotel/max1024x768/249/249219414.jpg',
								style: {},
							},
						],
					},
					{
						type: 'site-div',
						class: '',
						cmps: [
							{
								type: 'site-image',
								content:
									'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQowocq0VgIUiNylCHJfCiXaO4EKNFTvPu8ow&usqp=CAU',
								style: {},
							},
						],
					},
					{
						type: 'site-div',
						class: '',
						cmps: [
							{
								type: 'site-image',
								content:
									'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbeforeyougarden.files.wordpress.com%2F2015%2F03%2Fbeech-in-snow-march-21-2015.jpg&f=1&nofb=1',
								style: {},
							},
						],
					},
				],
			},
		},
		{
			name: '25 Pics Gallery',
			img: 'https://i.ibb.co/m4VM47t/Screenshot-2020-07-23-15-47-31.png',
			tree: {
				type: 'site-section',
				class: 'gallery-25-pics',
				style: {
					backgroundColor: 'white',
				},
				cmps: [
					{
						type: 'site-div',
						class: '',
						cmps: [
							{
								type: 'site-image',
								content:
									'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.organicconsumers.org%2Fsites%2Fdefault%2Ffiles%2Fbigstock-old-oak-tree-on-meadows-a-fie-256109641.jpg&f=1&nofb=1',
								style: {},
							},
						],
					},
					{
						type: 'site-div',
						class: 'horizontal',
						cmps: [
							{
								type: 'site-image',
								content:
									'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F-84ZrGEHfHr0%2FUJtqvO07w-I%2FAAAAAAAAAv0%2FdMeI3WM5wWA%2Fs1600%2FNature-HD-Wallpaper1.jpg&f=1&nofb=1',
								style: {},
							},
						],
					},
					{
						type: 'site-div',
						class: '',
						cmps: [
							{
								type: 'site-image',
								content:
									'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F_KU3zHcdckOE%2FTNg7UhPhuOI%2FAAAAAAAAAAw%2FZGZt9n2dhTA%2Fs1600%2FNice-Nature-wallpaper-9.jpg&f=1&nofb=1',
								style: {},
							},
						],
					},
					{
						type: 'site-div',
						class: 'big',
						cmps: [
							{
								type: 'site-image',
								content:
									'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F-gsFJIMzY1LM%2FUHOehvt_sjI%2FAAAAAAAAAsQ%2FItPARvV9QKA%2Fs1600%2F3dnaturewallpapers.jpg&f=1&nofb=1',
								style: {},
							},
						],
					},
					{
						type: 'site-div',
						class: '',
						cmps: [
							{
								type: 'site-image',
								content:
									'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.suicidecallbackservice.org.au%2Fwp-content%2Fuploads%2F2018%2F03%2FNature-as-a-healer-header.jpg&f=1&nofb=1',
								style: {},
							},
						],
					},
					{
						type: 'site-div',
						class: '',
						cmps: [
							{
								type: 'site-image',
								content:
									'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.virtualtelescope.eu%2Fwordpress%2Fwp-content%2Fuploads%2F2014%2F03%2Fmoon_16mar2014.jpg&f=1&nofb=1',
								style: {},
							},
						],
					},
					{
						type: 'site-div',
						class: 'big',
						cmps: [
							{
								type: 'site-image',
								content:
									'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F-YDEgYFluAwE%2FTp4jqVDwNsI%2FAAAAAAAAB3U%2FVgJL0rE4H9M%2Fs1600%2Flake-kucherlinskoe-altai-republic-russia-nature-wallpaper-1280x800-1351.jpg&f=1&nofb=1',
								style: {},
							},
						],
					},
					{
						type: 'site-div',
						class: 'horizontal',
						cmps: [
							{
								type: 'site-image',
								content:
									'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.classic-collection.co.uk%2Fcontent%2FDataObjects%2FProductAttributeGroup%2FImage%2Fimage_13_v15.jpg&f=1&nofb=1',
								style: {},
							},
						],
					},
					{
						type: 'site-div',
						class: '',
						cmps: [
							{
								type: 'site-image',
								content:
									'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.fo8EX62k9BZc5pAPlnaJhQHaFJ%26pid%3DApi&f=1',
								style: {},
							},
						],
					},
					{
						type: 'site-div',
						class: '',
						cmps: [
							{
								type: 'site-image',
								content:
									'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fworldofsucculents.com%2Fwp-content%2Fuploads%2F2015%2F07%2FPachycereus-pringlei-Cardon.jpg&f=1&nofb=1',
								style: {},
							},
						],
					},
					{
						type: 'site-div',
						class: 'big',
						cmps: [
							{
								type: 'site-image',
								content:
									'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F7RTDjO08kWw%2Fmaxresdefault.jpg&f=1&nofb=1',
								style: {},
							},
						],
					},
					{
						type: 'site-div',
						class: '',
						cmps: [
							{
								type: 'site-image',
								content:
									'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.pexels.com%2Fphotos%2F21261%2Fpexels-photo.jpg&f=1&nofb=1',
								style: {},
							},
						],
					},
					{
						type: 'site-div',
						class: '',
						cmps: [
							{
								type: 'site-image',
								content:
									'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.telegraph.co.uk%2Fcontent%2Fdam%2FTravel%2Fski%2FK2-mountain-Andrzej-Bargiel-first-ski-descent-by-Piotr-Pawlus-Red-Bull-Content-Pool-xlarge.jpg&f=1&nofb=1',
								style: {},
							},
						],
					},
					{
						type: 'site-div',
						class: 'horizontal',
						cmps: [
							{
								type: 'site-image',
								content:
									'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-assets.alltrails.com%2Fuploads%2Fphoto%2Fimage%2F10720154%2Fextra_large_db2cf5bc3de3273d1a583153f23a85f2.jpg&f=1&nofb=1',
								style: {},
							},
						],
					},
					{
						type: 'site-div',
						class: 'vertical',
						cmps: [
							{
								type: 'site-image',
								content:
									'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frickholliday.files.wordpress.com%2F2012%2F11%2Fnorth-cascades-highway-waterfall.jpg&f=1&nofb=1',
								style: {},
							},
						],
					},
					{
						type: 'site-div',
						class: 'vertical',
						cmps: [
							{
								type: 'site-image',
								content:
									'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.outdoorproject.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fcboxshow%2Fpublic%2F1471993417%2F_mg_1903-pano.jpg%3Fitok%3DLaAr2xO7&f=1&nofb=1',
								style: {},
							},
						],
					},
					{
						type: 'site-div',
						class: '',
						cmps: [
							{
								type: 'site-image',
								content:
									'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.baltana.com%2Ffiles%2Fwallpapers-2%2FHills-HD-Wallpapers-04166.jpg&f=1&nofb=1',
								style: {},
							},
						],
					},
					{
						type: 'site-div',
						class: '',
						cmps: [
							{
								type: 'site-image',
								content:
									'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flawanderlust.files.wordpress.com%2F2013%2F04%2Fimg_4028.jpg&f=1&nofb=1',
								style: {},
							},
						],
					},
					{
						type: 'site-div',
						class: '',
						cmps: [
							{
								type: 'site-image',
								content:
									'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F-HLZClXhQ-8w%2FULOMuubnx3I%2FAAAAAAAANz8%2Ff6c1Ajl31Ls%2Fs1600%2FNetherlands%2BFlower%2BFields%2BWallpapers%2Band%2BPhotos%2B03.jpg&f=1&nofb=1',
								style: {},
							},
						],
					},
					{
						type: 'site-div',
						class: 'big',
						cmps: [
							{
								type: 'site-image',
								content:
									'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.financialexpress.com%2F2017%2F11%2Fcats-156.jpg&f=1&nofb=1',
								style: {},
							},
						],
					},
					{
						type: 'site-div',
						class: 'horizontal',
						cmps: [
							{
								type: 'site-image',
								content: 'https://scentertainer.net/wp-content/uploads/2020/06/italian-cypress-2b.jpg',
								style: {},
							},
						],
					},
					{
						type: 'site-div',
						class: '',
						cmps: [
							{
								type: 'site-image',
								content:
									'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F-0az-sKQWj0c%2FT7fy-H_LILI%2FAAAAAAAADRE%2F1ICXzTBkgEc%2Fs1600%2FFlamingo11.jpg&f=1&nofb=1',
								style: {},
							},
						],
					},
					{
						type: 'site-div',
						class: 'horizontal',
						cmps: [
							{
								type: 'site-image',
								content: 'https://q-cf.bstatic.com/images/hotel/max1024x768/249/249219414.jpg',
								style: {},
							},
						],
					},
					{
						type: 'site-div',
						class: '',
						cmps: [
							{
								type: 'site-image',
								content:
									'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQowocq0VgIUiNylCHJfCiXaO4EKNFTvPu8ow&usqp=CAU',
								style: {},
							},
						],
					},
					{
						type: 'site-div',
						class: 'horizontal',
						cmps: [
							{
								type: 'site-image',
								content:
									'data:image/jpeg;base64,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',
								style: {},
							},
						],
					},
				],
			},
		},
	],
	section: [
		{
			name: 'hero',
			img: 'https://i.ibb.co/7KkcVG7/hero-sample-image.png',
			tree: {
				type: 'site-section',
				style: {
					background:
						'url(https://images.unsplash.com/photo-1506104489822-562ca25152fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80) no-repeat center center scroll',
					backgroundSize: 'cover',
					height: '620px',
					padding: '10px 10px 10px 10px',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					position: 'relative',
				},
				cmps: [
					{
						type: 'site-text',
						content: 'Explore Amazing Places',
						style: {
							fontFamily: 'Righteous',
							fontSize: '5rem',
							color: '#FFF',
							textShadow: '2px 1px 1px #000',
						},
					},
					{
						type: 'site-button',
						content: { text: 'Book now', href: '' },
						style: {
							fontFamily: 'Righteous',
							backgroundColor: '#fcbf1e',
							padding: '1rem',
							textTransform: 'uppercase',
							boxShadow: '4px 4px #000',
						},
					},
				],
			},
		},
		{
			name: 'card',
			img: 'https://i.ibb.co/2y5Fsvb/card1.png',
			tree: {
				type: 'site-section',
				style: {
					height: '500px',
					width: '100%',
					padding: '5rem',
					display: 'flex',
					justifyContent: 'space-around',
					alignItems: 'center',
				},
				cmps: [
					{
						type: 'site-text',
						content: `Lago di Braies :
                  In summer, lake Lago di Braies in South Tyrol reflects colours in all shades from green to blue, in winter Lago di Braies is covered with ice and snow. In winter and summer this jewel is the starting point for hikes, ski tours, snowshoe hikes and walks. Book through us and let's explore it together!`,
						style: {
							fontFamily: 'Righteous',
							padding: '1rem',
							textTransform: 'uppercase',
							textAlign: 'center',
							lineHeight: '2rem',
							fontSize: '1.5rem',
						},
					},
					{
						type: 'site-image',
						content:
							'https://images.unsplash.com/photo-1521102761523-b268f61473e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1549&q=80',
						style: {
							height: '480px',
							width: '580px',
							objectFit: 'cover',
						},
					},
				],
			},
		},
		{
			name: 'footer',
			img: 'https://i.imgur.com/AchuVuN.png',
			tree: {
				type: 'site-section',
				style: {
					height: '250px',
					width: '100%',
					display: 'flex',
					justifyContent: 'space-around',
					alignItems: 'center',
					backgroundColor: '#5ba8b3cc',
					color: 'white',
					paddingBlockStart: '2rem',
				},
				cmps: [
					{
						type: 'site-div',
						style: {
							height: '100%',
						},
						cmps: [
							{
								type: 'site-text',
								content: 'DESTINATIONS',
								style: {
									width: '100px',
									fontWeigt: 'bold',
									fontSize: '1.5rem',
								},
							},
							{
								type: 'site-list',
								style: {
									display: 'flex',
									flexDirection: 'column',
									color: '#fff',
									marginTop: '1rem',
								},
								cmps: [
									{
										type: 'site-text',
										content: 'New-Zealand Australia Argentina Bolivia More...',
										style: {
											display: 'flex',
											flexDirection: 'column',
											width: '100px',
										},
									},
								],
							},
						],
					},
					{
						type: 'site-div',
						style: {
							height: '100%',
						},
						cmps: [
							{
								type: 'site-text',
								content: 'SHOP',
								style: {
									width: '100px',
									fontWeigt: 'bold',
									fontSize: '1.5rem',
								},
							},
							{
								type: 'site-list',
								style: {
									display: 'flex',
									flexDirection: 'column',
									color: '#fff',
									marginTop: '1rem',
								},
								cmps: [
									{
										type: 'site-text',
										content: 'Non English Guides Delivery Times Special Offers FAQs',
										style: {
											display: 'flex',
											flexDirection: 'column',
											width: '142px',
										},
									},
								],
							},
						],
					},
					{
						type: 'site-div',
						style: {
							height: '100%',
						},
						cmps: [
							{
								type: 'site-text',
								content: 'FORUMS',
								style: {
									width: '100px',
									fontWeigt: 'bold',
									fontSize: '1.5rem',
								},
							},
							{
								type: 'site-list',
								style: {
									display: 'flex',
									flexDirection: 'column',
									color: '#fff',
									marginTop: '1rem',
								},
								cmps: [
									{
										type: 'site-text',
										content: 'Country Forums Interest Forums Talk To Us',
										style: {
											display: 'flex',
											flexDirection: 'column',
											width: '140px',
										},
									},
								],
							},
						],
					},
					{
						type: 'site-div',
						style: {
							height: '100%',
						},
						cmps: [
							{
								type: 'site-text',
								content: 'TRAVEL BOOKING',
								style: {
									width: '100px',
									fontWeigt: 'bold',
									fontSize: '1.5rem',
								},
							},
							{
								type: 'site-list',
								style: {
									display: 'flex',
									flexDirection: 'column',
									color: '#fff',
									marginTop: '1rem',
								},
								cmps: [
									{
										type: 'site-text',
										content: 'Hotels Flights Insurance',
										style: {
											display: 'flex',
											flexDirection: 'column',
											width: '90px',
										},
									},
								],
							},
						],
					},
				],
			},
		},
		{
			name: 'hero',
			img: 'https://res.cloudinary.com/asantasana/image/upload/v1595403001/herolion_gtjcvl.png',
			tree: {
				type: 'site-section',
				style: {
					background:
						'url(https://images.unsplash.com/photo-1551439237-dd457099b104?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80) no-repeat center center scroll',
					backgroundSize: 'cover',
					height: '100vh',
					padding: '10px 10px 10px 10px',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				},
				cmps: [
					{
						type: 'site-div',
						style: {
							height: '6rem',
							width: '100%',
							display: 'flex',
							justifyContent: 'space-between',
							backgroundColor: '#d9ccc959',
							alignItems: 'center',
						},
						cmps: [
							{
								type: 'site-image',
								content:
									'https://pluspng.com/img-png/national-geographic-logo-png-logo-natgeo-png-pluspng-com-logo-national-geographic-png-1000.png',
								style: {
									height: '5rem',
									paddingInlineStart: '1.5rem',
								},
							},
							{
								type: 'site-list',
								cmps: [
									{
										type: 'site-text',
										content: 'HOME',
										style: {
											marginInlineEnd: '1rem',
											color: '#000000',
										},
									},
									{
										type: 'site-text',
										content: 'ARTICLES',
										style: {
											marginInlineEnd: '1rem',
											color: '#fff',
										},
									},
									{
										type: 'site-text',
										content: 'MEMBERS',
										style: {
											marginInlineEnd: '1rem',
											color: '#fff',
										},
									},
									{
										type: 'site-text',
										content: 'ABOUT',
										style: {
											marginInlineEnd: '1rem',
											color: '#fff',
										},
									},
									{
										type: 'site-text',
										content: 'CONTACT US',
										style: {
											marginInlineEnd: '1rem',
											color: '#fff',
										},
									},
								],
								style: {
									fontFamily: 'Righteous',
									color: '#FFF',
									display: 'flex',
								},
							},
						],
					},
					{
						type: 'site-div',
						style: {
							height: '700px',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							flexDirection: 'column',
						},
						cmps: [
							{
								type: 'site-text',
								content: 'ANIMAL GEOGRAPHIC',
								style: {
									fontSize: '4rem',
									fontFamily: 'Righteous',
									color: 'white',
									textShadow: '0 0 2px black',
								},
							},
							{
								type: 'site-text',
								content: 'We Bring You The Best Articles',
								style: {
									fontSize: '1.875rem',
									fontFamily: 'Righteous',
									color: 'white',
									textShadow: '0 0 1px black',
								},
							},
							{
								type: 'site-button',
								content: {
									text: 'SUBSCRIBE',
									href: '',
								},
								style: {
									fontFamily: 'Righteous',
									backgroundColor: '#cb965b',
									padding: '1rem',
									textTransform: 'uppercase',
									boxShadow: '#0000008c',
									width: '9rem',
									color: 'white',
									borderRadius: '20px',
								},
							},
						],
					},
				],
			},
		},
		{
			name: 'cards',
			img: 'https://res.cloudinary.com/asantasana/image/upload/v1595402921/cards_p8dgsc.png',
			tree: {
				type: 'site-section',
				style: {
					backgroundColor: '#f3eee9',
					height: '1400px',
					display: 'flex',
					width: '100%',
					justifyContent: 'space-between',
					flexWrap: 'wrap',
					padding: '4rem 11rem',
				},
				cmps: [
					{
						type: 'site-div',
						style: {
							height: '500px',
							width: '45%',
							display: 'flex',
							flexDirection: 'column',
							backgroundColor: '#ffffff',
							borderRadius: '12px',
							position: 'relative',
							alignItems: 'center',
							boxShadow: '0 0 3px black',
						},
						cmps: [
							{
								type: 'site-image',
								content:
									'https://images.unsplash.com/photo-1566903026052-36e4e1bd803a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80',
								style: {
									height: '260px',
									borderRadius: '12px 12px 0px 0px',
									objectFit: 'cover',
									width: '100%',
								},
							},
							{
								type: 'site-image',
								content:
									'https://images.unsplash.com/photo-1566903026052-36e4e1bd803a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80',
								style: {
									height: '100px',
									width: '100px',
									position: 'absolute',
									border: '6px white solid',
									borderRadius: '50%',
									bottom: '38%',
									zIndex: '1',
									left: 'calc(50% - 50px)',
									objectFit: 'cover',
								},
							},
							{
								type: 'site-text',
								content: 'Dogs',
								style: {
									marginBlockStart: '5rem',
									fontFamily: 'Righteous',
									fontSize: '2rem',
									color: '#5aa55e',
								},
							},
							{
								type: 'site-text',
								content: "Read All About The Man's Best Friend .",
								style: {
									fontFamily: 'Righteous',
									color:
										'#https://images.unsplash.com/photo-1517649281203-dad836b4abe5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80335b3b',
								},
							},
							{
								type: 'site-text',
								content: 'READ MORE',
								style: {
									fontFamily: 'Righteous',
									color: '#0000000',
									marginBlockStart: '2rem',
									borderBlockStart: '1px solid black',
									width: '100%',
									textAlign: 'center',
									paddingBlockStart: '1rem',
								},
							},
						],
					},
					{
						type: 'site-div',
						style: {
							height: '500px',
							width: '45%',
							display: 'flex',
							flexDirection: 'column',
							backgroundColor: '#fff',
							borderRadius: '12px',
							position: 'relative',
							alignItems: 'center',
							boxShadow: '0 0 3px black',
						},
						cmps: [
							{
								type: 'site-image',
								content:
									'https://images.unsplash.com/photo-1517649281203-dad836b4abe5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
								style: {
									height: '260px',
									objectFit: 'cover',
									width: '100%',
									borderRadius: '12px 12px 0px 0px',
								},
							},
							{
								type: 'site-image',
								content:
									'https://images.unsplash.com/photo-1517649281203-dad836b4abe5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
								style: {
									height: '100px',
									width: '100px',
									position: 'absolute',
									border: '6px white solid',
									borderRadius: '50%',
									bottom: '38%',
									zIndex: '1',
									left: 'calc(50% - 50px)',
									objectFit: 'cover',
								},
							},
							{
								type: 'site-text',
								content: 'The King Of The Jungle',
								style: {
									marginBlockStart: '5rem',
									fontFamily: 'Righteous',
									fontSize: '2rem',
									color: '#53311d',
								},
							},
							{
								type: 'site-text',
								content: 'Read All About The Mighty Lion.',
								style: {
									fontFamily: 'Righteous',
									color: '#3d3d3c',
								},
							},
							{
								type: 'site-text',
								content: 'READ MORE',
								style: {
									fontFamily: 'Righteous',
									color: '#0000000',
									marginBlockStart: '2rem',
									borderBlockStart: '1px solid black',
									width: '100%',
									textAlign: 'center',
									paddingBlockStart: '1rem',
								},
							},
						],
					},
					{
						type: 'site-div',
						style: {
							height: '500px',
							width: '45%',
							display: 'flex',
							flexDirection: 'column',
							backgroundColor: '#fff',
							borderRadius: '12px',
							position: 'relative',
							alignItems: 'center',
							marginBlockStart: '7rem',
							boxShadow: '0 0 3px black',
						},
						cmps: [
							{
								type: 'site-image',
								content:
									'https://images.unsplash.com/photo-1547801939-d3ac28994d19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
								style: {
									height: '260px',
									objectFit: 'cover',
									width: '100%',
									borderRadius: '12px 12px 0px 0px',
								},
							},
							{
								type: 'site-image',
								content:
									'https://images.unsplash.com/photo-1547801939-d3ac28994d19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
								style: {
									height: '100px',
									width: '100px',
									position: 'absolute',
									backgroundSize: 'cover',
									border: '6px white solid',
									borderRadius: '50%',
									bottom: '38%',
									zIndex: '1',
									left: 'calc(50% - 50px)',
									objectFit: 'cover',
								},
							},
							{
								type: 'site-text',
								content: 'JAWS',
								style: {
									marginBlockStart: '5rem',
									fontFamily: 'Righteous',
									fontSize: '2rem',
									color: '#3855bc',
								},
							},
							{
								type: 'site-text',
								content: 'Read All About Sharks.',
								style: {
									fontFamily: 'Righteous',
									color: '#527db4',
								},
							},
							{
								type: 'site-text',
								content: 'READ MORE',
								style: {
									fontFamily: 'Righteous',
									color: '#0000000',
									marginBlockStart: '2rem',
									borderBlockStart: '1px solid black',
									width: '100%',
									textAlign: 'center',
									paddingBlockStart: '1rem',
								},
							},
						],
					},
					{
						type: 'site-div',
						style: {
							height: '500px',
							width: '45%',
							display: 'flex',
							flexDirection: 'column',
							backgroundColor: '#ffffff',
							borderRadius: '12px',
							position: 'relative',
							alignItems: 'center',
							marginBlockStart: '7rem',
							boxShadow: '0 0 3px black',
						},
						cmps: [
							{
								type: 'site-image',
								content: 'https://d17fnq9dkz9hgj.cloudfront.net/uploads/2017/10/PF2015_267_Kittens_Shelter-630.jpg',
								style: {
									height: '260px',
									objectFit: 'cover',
									width: '100%',
									borderRadius: '12px 12px 0px 0px',
								},
							},
							{
								type: 'site-image',
								content: 'https://d17fnq9dkz9hgj.cloudfront.net/uploads/2017/10/PF2015_267_Kittens_Shelter-630.jpg',
								style: {
									height: '100px',
									width: '100px',
									position: 'absolute',
									border: '6px white solid',
									borderRadius: '50%',
									bottom: '38%',
									zIndex: '1',
									left: 'calc(50% - 50px)',
									objectFit: 'cover',
								},
							},
							{
								type: 'site-text',
								content: 'Cats',
								style: {
									marginBlockStart: '5rem',
									fontFamily: 'Righteous',
									fontSize: '2rem',
									color: '#704a26',
								},
							},
							{
								type: 'site-text',
								content: 'Read All About Cats.',
								style: {
									fontFamily: 'Righteous',
									color: '#434343',
								},
							},
							{
								type: 'site-text',
								content: 'READ MORE',
								style: {
									fontFamily: 'Righteous',
									color: '#0000000',
									marginBlockStart: '2rem',
									borderBlockStart: '1px solid black',
									width: '100%',
									textAlign: 'center',
									paddingBlockStart: '1rem',
								},
							},
						],
					},
					{
						type: 'site-div',
						style: {
							width: '100%',
							textAlign: 'center',
						},
						cmps: [
							{
								type: 'site-button',
								content: {
									text: 'MORE ARTICLES...',
									href: '',
								},
								style: {
									backgroundColor: '#cfaf8987',
									borderRadius: '20px',
									padding: '1rem',
									marginBlockStart: '3rem',
									width: '50%',
									fontSize: '1.2rem',
									boxShadow: '0 0 2px black',
								},
							},
						],
					},
				],
			},
		},
	],
};
export const templateService = {
	query,
	save,
	remove,
	makeId,
	addIds,
	getTemplates,
	getTemplateById,
	getSamplesOf,
};

function getTemplates() {
	return templates.map(template => {
		return { _id: template._id, name: template.name, previewImg: template.previewImg };
	});
}

function query() {
	return httpService.get('template');
}

function getTemplateById(id) {
	return httpService.get(`template/${id}`);
}

function getSamplesOf(element) {
	return samples[element];
}
// console.log(JSON.stringify(addIds()))

function addIds(template) {
	template.cmps.forEach(cmp => {
		if (!cmp.id) cmp.id = makeId();
		if (cmp.cmps && cmp.cmps.length > 0) addIds(cmp);
	});
	return template;
}

function makeId(length = 10) {
	var txt = '';
	var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	for (var i = 0; i < length; i++) {
		txt += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return txt;
}

function _getUrl(id = '') {
	const BASE_URL = process.env.NODE_ENV !== 'development' ? '/api/template' : '//localhost:3030/api/template';
	return `${BASE_URL}/${id}`;
}

function remove(id) {
	return axios.delete(_getUrl(id)).then(res => res.data);
}

function save(template) {
	console.log('template:', template);
	return template._id ? _update(template) : _add(template);
}

function _update(template) {
	return axios.put(_getUrl(template._id), template).then(res => res.data);
}

// function _add(template) {
//     return axios.post(_getUrl(), template).then((res) => res.data);
// }

function _add(template) {
	return httpService.post(`template`, template);
}
