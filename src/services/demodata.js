const templates = [{
        _id: "5e28393890dd7201a06d4e44",
        name: "new site",
        previewImg: "https://i.ibb.co/7WNJ84F/travel.png",
        createdBy: {
            username: "eni",
            _id: "5e26e0b718a0891d4c995527",
        },
        cmps: [{
                type: "site-section",
                style: {
                    background: "url(https://images.unsplash.com/photo-1506104489822-562ca25152fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80) no-repeat center center scroll",
                    backgroundSize: "cover",
                    height: "620px",
                    padding: "10px 10px 10px 10px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                },
                cmps: [{
                        type: "site-div",
                        style: {
                            height: "6rem",
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            backgroundColor: "#b0c3c266",
                            alignItems: "center",
                        },
                        cmps: [{
                                type: "site-image",
                                content: "https://i1.sndcdn.com/avatars-000214595785-kgx9qu-t500x500.jpg",
                                style: {
                                    height: "5rem",
                                    objectFit: "cover",
                                    borderRadius: "16px",
                                    paddingInlineStart: ".1rem"
                                },
                            },
                            {
                                type: "site-list",
                                cmps: [{
                                        type: "site-text",
                                        content: "HOME",
                                        style: {
                                            marginInlineEnd: "1rem",
                                            color: "#000000",
                                        },
                                    },
                                    {
                                        type: "site-text",
                                        content: "ABOUT",
                                        style: {
                                            marginInlineEnd: "1rem",
                                            color: "#000000",
                                        },
                                    },
                                    {
                                        type: "site-text",
                                        content: "SERVICES",
                                        style: {
                                            marginInlineEnd: "1rem",
                                            color: "#000000",
                                        },
                                    },
                                    {
                                        type: "site-text",
                                        content: "DESTINATIONS",
                                        style: {
                                            marginInlineEnd: "1rem",
                                            color: "#000000",
                                        },
                                    },
                                    {
                                        type: "site-text",
                                        content: "CONTACT US",
                                        style: {
                                            marginInlineEnd: "1rem",
                                            color: "#000000",
                                        },
                                    },
                                ],

                                style: {
                                    fontFamily: "Righteous",
                                    color: "#FFF",
                                    display: "flex",
                                },
                            },
                        ],
                    },
                    {
                        type: "site-div",
                        style: {
                            height: "500px",
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column",
                        },
                        cmps: [{
                                type: "site-text",
                                content: "Explore Amazing Places",
                                style: {
                                    fontSize: "5rem",
                                    fontFamily: "Righteous",
                                    color: "white",
                                    textShadow: "0 0 2px black"
                                },
                            },
                            {
                                type: "site-button",
                                content: { text: "BOOK NOW", href: "" },
                                style: {
                                    fontFamily: "Righteous",
                                    backgroundColor: "#5ba8b3",
                                    padding: "1rem",
                                    textTransform: "uppercase",
                                    boxShadow: "4px 4px #000",
                                    width: "9rem",
                                    boxShadow: "#0000008c",
                                    color: "white",
                                    borderRadius: "20px",
                                },
                            },
                        ],
                    },
                ],
            },
            {
                type: "site-section",
                style: {
                    height: "500px",
                    width: "100%",
                    padding: "2rem",
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                    alignItems: "center",

                },
                cmps: [{
                    type: "site-div",
                    style: {
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        padding: "3rem",

                    },
                    cmps: [{
                            type: "site-text",
                            content: "About Us",
                            style: {
                                fontSize: "1rem",
                                fontWeight: "bold",
                            },
                        },
                        {
                            type: "site-text",
                            content: `On earth there is no heaven,
           but there are pieces of it and we will get you there`,
                            style: {
                                fontSize: "2.5rem",
                                fontWeight: "bolder",
                                width: "45%",
                                fontFamily: "Righteous"
                            },
                        },
                        {
                            type: "site-button",
                            content: { text: "Learn More", href: "" },
                            style: {
                                fontFamily: "Righteous",
                                backgroundColor: "#5ba8b3",
                                padding: "1rem",
                                textTransform: "uppercase",
                                width: "9rem",
                                borderRadius: "20px",
                                color: "white",
                                boxShadow: "2px 2px 2px #0000008c",
                                marginBlockStart: "1rem",
                            },
                        },
                    ],
                }, ],
            },
            {
                type: "site-section",
                style: {
                    height: "500px",
                    width: "100%",
                    padding: "2rem",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                },
                cmps: [{
                        type: "site-div",
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            padding: "1rem",
                            height: "450px",
                            width: "55%",
                            marginInlineStart: "100px"
                        },
                        cmps: [{
                                type: "site-text",
                                content: `Lago Di Braies, Italy`,
                                style: {
                                    fontFamily: "Righteous",
                                    textAlign: "center",
                                    lineHeight: "2rem",
                                    fontSize: "2rem",
                                    fontWeight: "bold",

                                },
                            },
                            {
                                type: "site-text",
                                content: `In summer, lake Lago di Braies in South Tyrol reflects colours in all shades from green to blue, in winter Lago di Braies is covered with ice and snow. In winter and summer this jewel is the starting point for hikes, ski tours, snowshoe hikes and walks. Book through us and let's explore it together!`,
                                style: {
                                    fontFamily: "Righteous",
                                    padding: "1rem",
                                    textAlign: "center",
                                    lineHeight: "2rem",
                                    fontSize: "1rem",
                                    marginBlockStart: "1rem"

                                },
                            },
                        ],
                    },
                    {
                        type: "site-div",
                        style: {
                            height: "450px",
                            width: "45%"


                        },
                        cmps: [{
                            type: "site-image",
                            content: "https://images.unsplash.com/photo-1521102761523-b268f61473e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1549&q=80",
                            style: {
                                height: "100%",
                                width: "100%"

                            }
                        }]
                    }
                ],
            },





            {
                type: "site-section",
                style: {
                    height: "500px",
                    width: "100%",
                    padding: "2rem",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                },

                cmps: [{
                        type: "site-div",
                        style: {
                            height: "450px",
                            width: "50%",
                            marginInlineStart: "120px"
                        },
                        cmps: [{
                            type: "site-image",
                            content: "https://images.unsplash.com/photo-1565609537938-14d88e26cdf5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
                            style: {
                                width: "100%",
                                height: "100%"
                            }
                        }]
                    },
                    {
                        type: "site-div",
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            padding: "1rem",
                            width: "50%",
                            height: "450px",
                        },
                        cmps: [{
                                type: "site-text",
                                content: `The Cordillera Huayhuash Trek, Peru`,
                                style: {
                                    fontFamily: "Righteous",
                                    textAlign: "center",
                                    lineHeight: "2rem",
                                    fontSize: "2rem",
                                    fontWeight: "bold"
                                },
                            },
                            {
                                type: "site-text",
                                content: `Possibly the best alpine trek in the entire world, the Cordillera Huayhuash trek has become well-known among outdoors enthusiasts for its sheer mountain peaks, pristine glacial lakes, and encounters with traditional Andean culture. Are you ready for it ?`,
                                style: {
                                    fontFamily: "Righteous",
                                    padding: "1rem",
                                    textAlign: "center",
                                    lineHeight: "2rem",
                                    fontSize: "1rem",
                                    marginBlockStart: "1rem"

                                },
                            },
                        ],
                    },

                ],
            },

            {
                type: "site-section",
                style: {
                    height: "500px",
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                },
                cmps: [{
                        type: "site-div",
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            backgroundColor: "#ffffc47d",
                            height: "100%",
                            width: "50%"
                        },
                        cmps: [{
                                type: "site-text",
                                content: "CONTACT US",
                                style: {
                                    fontSize: "3rem",
                                    fontFamily: "Righteous",
                                    textShadow: "0 0 1px black"

                                }
                            },
                            {
                                type: "site-form",
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    width: "180px",
                                    color: "#313b3f",
                                    paddingBlockStart: "2rem"


                                },
                                btnStyle: {
                                    marginBlockStart: "1rem",
                                    backgroundColor: "#202020",
                                    width: "190px",
                                    fontSize: "1.1rem",
                                    color: "white",
                                    borderRadius: "8px"

                                },
                                content: [{
                                        type: "text",
                                        tag: "Full Name"
                                    },
                                    {
                                        type: "email",
                                        tag: "Email"
                                    },
                                    {
                                        type: "tel",
                                        tag: "Phone"
                                    }
                                ]


                            }
                        ]
                    },
                    {
                        type: "site-div",
                        style: {
                            height: "100%",
                            width: "50%"
                        },

                        cmps: [{
                            type: "site-map",

                        }]
                    }
                ]
            },
            {
                type: "site-section",
                style: {
                    height: "250px",
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    backgroundColor: "#5ba8b3cc",
                    color: "white",
                    paddingBlockStart: "2rem"
                },
                cmps: [{
                        type: "site-div",
                        style: {
                            height: "100%"
                        },
                        cmps: [{
                                type: "site-text",
                                content: "DESTINATIONS",
                                style: {
                                    width: "100px",
                                    fontWeigt: "bold",
                                    fontSize: "1.5rem",
                                },
                            },
                            {
                                type: "site-list",
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    color: "#fff",
                                    marginTop: "1rem",
                                },
                                cmps: [

                                    {
                                        type: "site-text",
                                        content: `New-Zealand Australia Argentina Bolivia More...`,
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            width: "100px"
                                        },
                                    },

                                ],
                            }
                        ],
                    },

                    {
                        type: "site-div",
                        style: {
                            height: "100%"
                        },
                        cmps: [{
                                type: "site-text",
                                content: "SHOP",
                                style: {
                                    width: "100px",
                                    fontWeigt: "bold",
                                    fontSize: "1.5rem",
                                },
                            },
                            {
                                type: "site-list",
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    color: "#fff",
                                    marginTop: "1rem",
                                },
                                cmps: [

                                    {
                                        type: "site-text",
                                        content: `Non English Guides Delivery Times Special Offers FAQs`,
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            width: "142px"
                                        },
                                    },

                                ],
                            }
                        ],
                    }, {
                        type: "site-div",
                        style: {
                            height: "100%",
                        },
                        cmps: [{
                                type: "site-text",
                                content: "FORUMS",
                                style: {
                                    width: "100px",
                                    fontWeigt: "bold",
                                    fontSize: "1.5rem",
                                },
                            },
                            {
                                type: "site-list",
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    color: "#fff",
                                    marginTop: "1rem",
                                },
                                cmps: [

                                    {
                                        type: "site-text",
                                        content: `Country Forums Interest Forums Talk To Us`,
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            width: "140px"
                                        },
                                    },

                                ],
                            }
                        ],
                    }, {
                        type: "site-div",
                        style: {
                            height: "100%"
                        },
                        cmps: [{
                                type: "site-text",
                                content: "TRAVEL BOOKING",
                                style: {
                                    width: "100px",
                                    fontWeigt: "bold",
                                    fontSize: "1.5rem",
                                },
                            },
                            {
                                type: "site-list",
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    color: "#fff",
                                    marginTop: "1rem",
                                },
                                cmps: [

                                    {
                                        type: "site-text",
                                        content: `Hotels Flights Insurance`,
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            width: "90px"
                                        },
                                    },

                                ],
                            }
                        ],
                    },
                ],
            },

        ],
    },


    {
        _id: "5e28393890dd7201a06d4e45",
        name: "new site",
        previewImg: "https://i.ibb.co/0QCRYzb/nathional.png",
        createdBy: {
            username: "eni",
            _id: "5e26e0b718a0891d4c995527",
        },
        cmps: [{
                type: "site-section",
                style: {
                    background: "url(https://images.unsplash.com/photo-1551439237-dd457099b104?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80) no-repeat center center scroll",
                    backgroundSize: "cover",
                    height: "100vh",
                    padding: "10px 10px 10px 10px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                },
                cmps: [{
                        type: "site-div",
                        style: {
                            height: "6rem",
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            backgroundColor: "#d9ccc959",
                            alignItems: "center",
                        },
                        cmps: [{
                                type: "site-image",
                                content: require("../assets/imgs/dog-logo.png"),
                                style: {
                                    height: "5rem",
                                    paddingInlineStart: "1.5rem"
                                },
                            },
                            {
                                type: "site-list",
                                cmps: [{
                                        type: "site-text",
                                        content: "HOME",
                                        style: {
                                            marginInlineEnd: "1rem",
                                            color: "#000000",
                                        },
                                    },
                                    {
                                        type: "site-text",
                                        content: "ARTICLES",
                                        style: {
                                            marginInlineEnd: "1rem",
                                            color: "#000000",
                                        },
                                    },
                                    {
                                        type: "site-text",
                                        content: "MEMBERS",
                                        style: {
                                            marginInlineEnd: "1rem",
                                            color: "#000000",
                                        },
                                    },
                                    {
                                        type: "site-text",
                                        content: "ABOUT",
                                        style: {
                                            marginInlineEnd: "1rem",
                                            color: "#000000",
                                        },
                                    },
                                    {
                                        type: "site-text",
                                        content: "CONTACT US",
                                        style: {
                                            marginInlineEnd: "1rem",
                                            color: "#000000",
                                        },
                                    },
                                ],

                                style: {
                                    fontFamily: "Righteous",
                                    color: "#FFF",
                                    display: "flex",
                                },
                            },
                        ],
                    },
                    {
                        type: "site-div",
                        style: {
                            height: "700px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                        },
                        cmps: [{
                                type: "site-text",
                                content: "ANIMAL GEOGRAPHIC",
                                style: {
                                    fontSize: "4rem",
                                    fontFamily: "Righteous",
                                    color: "white",
                                    textShadow: "0 0 2px black"
                                },
                            },
                            {
                                type: "site-text",
                                content: "We Bring You The Best Articles",
                                style: {
                                    fontSize: "1.875rem",
                                    fontFamily: "Righteous",
                                    color: "white",
                                    textShadow: "0 0 1px black"
                                },
                            },
                            {
                                type: "site-button",
                                content: { text: "SUBSCRIBE", href: "" },
                                style: {
                                    fontFamily: "Righteous",
                                    backgroundColor: "#cb965b",
                                    padding: "1rem",
                                    textTransform: "uppercase",
                                    boxShadow: "4px 4px #000",
                                    width: "9rem",
                                    boxShadow: "#0000008c",
                                    color: "white",
                                    borderRadius: "20px",
                                },
                            },
                        ],
                    },
                ],
            },
            {
                type: "site-section",
                style: {
                    width: "100%",
                    backgroundColor: "#774a0d1f",
                    height: "100px",
                    display: "flex",
                    alignItems: "center",
                    fontFamily: "Righteous"
                },
                cmps: [{
                    type: "site-div",
                    style: {
                        width: "100%",
                        textAlign: "center",
                    },
                    cmps: [{
                        type: "site-text",
                        content: "ARTICLES",
                        style: {
                            fontSize: "3rem"
                        }
                    }]
                }]
            },
            {
                type: "site-section",
                style: {
                    backgroundColor: "#f3eee9",
                    height: "1400px",
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    padding: "4rem 11rem",

                },
                cmps: [{
                        type: "site-div",
                        style: {
                            height: "500px",
                            width: "45%",
                            display: "flex",
                            flexDirection: "center",
                            backgroundColor: "#ffffff",
                            borderRadius: "12px",
                            position: "relative",
                            flexDirection: "column",
                            alignItems: "center",
                            boxShadow: "0 0 3px black"
                        },
                        cmps: [{
                                type: "site-image",
                                content: "https://images.unsplash.com/photo-1566903026052-36e4e1bd803a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80",
                                style: {
                                    height: "260px",
                                    borderRadius: "12px 12px 0px 0px",
                                    objectFit: "cover",
                                    width: "100%",
                                }
                            },
                            {
                                type: "site-image",
                                content: "https://images.unsplash.com/photo-1566903026052-36e4e1bd803a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80",
                                style: {
                                    height: "100px",
                                    width: "100px",
                                    position: "absolute",
                                    border: "6px white solid",
                                    borderRadius: "50%",
                                    bottom: "38%",
                                    zIndex: "1",
                                    left: "calc(50% - 50px)",
                                    objectFit: "cover"
                                }
                            },
                            {
                                type: "site-text",
                                content: "Dogs",
                                style: {
                                    marginBlockStart: "5rem",
                                    fontFamily: "Righteous",
                                    fontSize: "2rem",
                                    color: "#5aa55e"
                                }
                            },
                            {
                                type: "site-text",
                                content: "Read All About The Man's Best Friend .",
                                style: {
                                    fontFamily: "Righteous",
                                    color: "#https://images.unsplash.com/photo-1517649281203-dad836b4abe5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80335b3b"
                                }
                            },
                            {
                                type: "site-text",
                                content: "READ MORE",
                                style: {
                                    fontFamily: "Righteous",
                                    color: "#0000000",
                                    marginBlockStart: "2rem",
                                    borderBlockStart: "1px solid black",
                                    width: "100%",
                                    textAlign: "center",
                                    paddingBlockStart: "1rem"
                                }
                            }

                        ]
                    },
                    {
                        type: "site-div",
                        style: {
                            height: "500px",
                            width: "45%",
                            display: "flex",
                            flexDirection: "column",
                            backgroundColor: "#fff",
                            borderRadius: "12px",
                            position: "relative",
                            alignItems: "center",
                            boxShadow: "0 0 3px black"


                        },
                        cmps: [{
                                type: "site-image",
                                content: "https://images.unsplash.com/photo-1517649281203-dad836b4abe5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                                style: {
                                    height: "260px",
                                    objectFit: "cover",
                                    width: "100%",
                                    borderRadius: "12px 12px 0px 0px",
                                }
                            },
                            {
                                type: "site-image",
                                content: "https://images.unsplash.com/photo-1517649281203-dad836b4abe5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                                style: {
                                    height: "100px",
                                    width: "100px",
                                    position: "absolute",
                                    border: "6px white solid",
                                    borderRadius: "50%",
                                    bottom: "38%",
                                    zIndex: "1",
                                    left: "calc(50% - 50px)",
                                    objectFit: "cover"
                                }
                            },
                            {
                                type: "site-text",
                                content: "The King Of The Jungle",
                                style: {
                                    marginBlockStart: "5rem",
                                    fontFamily: "Righteous",
                                    fontSize: "2rem",
                                    color: "#53311d"
                                }
                            },
                            {
                                type: "site-text",
                                content: "Read All About The Mighty Lion.",
                                style: {
                                    fontFamily: "Righteous",
                                    color: "#3d3d3c"
                                }
                            },
                            {
                                type: "site-text",
                                content: "READ MORE",
                                style: {
                                    fontFamily: "Righteous",
                                    color: "#0000000",
                                    marginBlockStart: "2rem",
                                    borderBlockStart: "1px solid black",
                                    width: "100%",
                                    textAlign: "center",
                                    paddingBlockStart: "1rem"
                                }
                            }
                        ]
                    },
                    {
                        type: "site-div",
                        style: {
                            height: "500px",
                            width: "45%",
                            display: "flex",
                            flexDirection: "column",
                            backgroundColor: "#fff",
                            borderRadius: "12px",
                            position: "relative",
                            alignItems: "center",
                            marginBlockStart: "7rem",
                            boxShadow: "0 0 3px black"

                        },
                        cmps: [{
                                type: "site-image",
                                content: "https://images.unsplash.com/photo-1547801939-d3ac28994d19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
                                style: {
                                    height: "260px",
                                    objectFit: "cover",
                                    width: "100%",
                                    borderRadius: "12px 12px 0px 0px",

                                }
                            },
                            {
                                type: "site-image",
                                content: "https://images.unsplash.com/photo-1547801939-d3ac28994d19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
                                style: {
                                    height: "100px",
                                    width: "100px",
                                    position: "absolute",
                                    backgroundSize: "cover",
                                    border: "6px white solid",
                                    borderRadius: "50%",
                                    bottom: "38%",
                                    zIndex: "1",
                                    left: "calc(50% - 50px)",
                                    objectFit: "cover"
                                }
                            },
                            {
                                type: "site-text",
                                content: "JAWS",
                                style: {
                                    marginBlockStart: "5rem",
                                    fontFamily: "Righteous",
                                    fontSize: "2rem",
                                    color: "#3855bc"
                                }
                            },
                            {
                                type: "site-text",
                                content: "Read All About Sharks.",
                                style: {
                                    fontFamily: "Righteous",
                                    color: "#527db4"
                                }
                            },
                            {
                                type: "site-text",
                                content: "READ MORE",
                                style: {
                                    fontFamily: "Righteous",
                                    color: "#0000000",
                                    marginBlockStart: "2rem",
                                    borderBlockStart: "1px solid black",
                                    width: "100%",
                                    textAlign: "center",
                                    paddingBlockStart: "1rem"
                                }
                            }
                        ]
                    },
                    {
                        type: "site-div",
                        style: {
                            height: "500px",
                            width: "45%",
                            display: "flex",
                            flexDirection: "center",
                            backgroundColor: "#ffffff",
                            borderRadius: "12px",
                            position: "relative",
                            flexDirection: "column",
                            alignItems: "center",
                            marginBlockStart: "7rem",
                            boxShadow: "0 0 3px black"


                        },
                        cmps: [{
                                type: "site-image",
                                content: "https://d17fnq9dkz9hgj.cloudfront.net/uploads/2017/10/PF2015_267_Kittens_Shelter-630.jpg",
                                style: {
                                    height: "260px",
                                    objectFit: "cover",
                                    width: "100%",
                                    borderRadius: "12px 12px 0px 0px",

                                }
                            },
                            {
                                type: "site-image",
                                content: "https://d17fnq9dkz9hgj.cloudfront.net/uploads/2017/10/PF2015_267_Kittens_Shelter-630.jpg",
                                style: {
                                    height: "100px",
                                    width: "100px",
                                    position: "absolute",
                                    border: "6px white solid",
                                    borderRadius: "50%",
                                    bottom: "38%",
                                    zIndex: "1",
                                    left: "calc(50% - 50px)",
                                    objectFit: "cover"
                                }
                            },
                            {
                                type: "site-text",
                                content: "Cats",
                                style: {
                                    marginBlockStart: "5rem",
                                    fontFamily: "Righteous",
                                    fontSize: "2rem",
                                    color: "#704a26"
                                }
                            },
                            {
                                type: "site-text",
                                content: "Read All About Cats.",
                                style: {
                                    fontFamily: "Righteous",
                                    color: "#434343"
                                }
                            },
                            {
                                type: "site-text",
                                content: "READ MORE",
                                style: {
                                    fontFamily: "Righteous",
                                    color: "#0000000",
                                    marginBlockStart: "2rem",
                                    borderBlockStart: "1px solid black",
                                    width: "100%",
                                    textAlign: "center",
                                    paddingBlockStart: "1rem"
                                }
                            }
                        ]
                    },
                    {
                        type: "site-div",
                        style: {
                            width: "100%",
                            textAlign: "center"
                        },
                        cmps: [{
                            type: "site-button",
                            content: { text: "MORE ARTICLES...", href: "" },
                            style: {
                                backgroundColor: "#cfaf8987",
                                borderRadius: "20px",
                                padding: "1rem",
                                marginBlockStart: "3rem",
                                width: "50%",
                                fontSize: "1.2rem",
                                boxShadow: "0 0 2px black"
                            }

                        }]
                    }
                ]
            },

            {
                type: "site-section",
                style: {
                    height: "250px",
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    backgroundColor: "#9f611580",
                    color: "white",
                    paddingBlockStart: "2rem"
                },
                cmps: [{
                        type: "site-div",
                        style: {
                            height: "100%"
                        },
                        cmps: [{
                                type: "site-text",
                                content: "DESTINATIONS",
                                style: {
                                    width: "100px",
                                    fontWeigt: "bold",
                                    fontSize: "1.5rem",
                                },
                            },
                            {
                                type: "site-list",
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    color: "#fff",
                                    marginTop: "1rem",
                                },
                                cmps: [

                                    {
                                        type: "site-text",
                                        content: `New-Zealand Australia Argentina Bolivia More...`,
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            width: "100px"
                                        },
                                    },

                                ],
                            }
                        ],
                    },

                    {
                        type: "site-div",
                        style: {
                            height: "100%"
                        },
                        cmps: [{
                                type: "site-text",
                                content: "SHOP",
                                style: {
                                    width: "100px",
                                    fontWeigt: "bold",
                                    fontSize: "1.5rem",
                                },
                            },
                            {
                                type: "site-list",
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    color: "#fff",
                                    marginTop: "1rem",
                                },
                                cmps: [

                                    {
                                        type: "site-text",
                                        content: `Non English Guides Delivery Times Special Offers FAQs`,
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            width: "142px"
                                        },
                                    },

                                ],
                            }
                        ],
                    }, {
                        type: "site-div",
                        style: {
                            height: "100%",
                        },
                        cmps: [{
                                type: "site-text",
                                content: "FORUMS",
                                style: {
                                    width: "100px",
                                    fontWeigt: "bold",
                                    fontSize: "1.5rem",
                                },
                            },
                            {
                                type: "site-list",
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    color: "#fff",
                                    marginTop: "1rem",
                                },
                                cmps: [

                                    {
                                        type: "site-text",
                                        content: `Country Forums Interest Forums Talk To Us`,
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            width: "140px"
                                        },
                                    },

                                ],
                            }
                        ],
                    }, {
                        type: "site-div",
                        style: {
                            height: "100%"
                        },
                        cmps: [{
                                type: "site-text",
                                content: "TRAVEL BOOKING",
                                style: {
                                    width: "100px",
                                    fontWeigt: "bold",
                                    fontSize: "1.5rem",
                                },
                            },
                            {
                                type: "site-list",
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    color: "#fff",
                                    marginTop: "1rem",
                                },
                                cmps: [

                                    {
                                        type: "site-text",
                                        content: `Hotels Flights Insurance`,
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            width: "90px"
                                        },
                                    },

                                ],
                            }
                        ],
                    },
                ],
            },


        ]
    }
]