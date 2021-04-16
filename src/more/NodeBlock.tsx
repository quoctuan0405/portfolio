import React, { useEffect, useRef } from "react";
import { Grid, Hidden, makeStyles, Typography } from "@material-ui/core";
import node from '../../assets/SVG/nodeBlur.svg';
import peopleFront from '../../assets/SVG/peopleFront.svg';
import peopleMiddle from '../../assets/SVG/peopleMiddle.svg';
import peopleBack from '../../assets/SVG/peopleBack.svg';
import 'aos/dist/aos.css';
import AOS from 'aos';

const useStyles = makeStyles(theme => ({
    nodeBlock: {
        background: theme.palette.greyBackground,
        backgroundImage: `url(${node})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "8rem",
        textShadow: "0 0 5px black",
        width: "100%",
        marginBottom: 0,
        paddingBottom: 0,
        [theme.breakpoints.up('sm')]: {
            width: "auto",
            backgroundImage: "none",
            paddingTop: "4rem",
        },
        [theme.breakpoints.up("md")]: {
            paddingTop: "6rem",
        }
    },
    left: {
        [theme.breakpoints.up('sm')]: {
            flex: 2,
        },
    },
    contentSection: {
        padding: "2.5rem"
    },
    title: {
        color: "white",
        textAlign: "center",
        marginBottom: "1rem",
        [theme.breakpoints.up("sm")]: {
            maxWidth: "30rem",
            marginLeft: "auto",
            marginRight: "auto"
        },
        [theme.breakpoints.up("md")]: {
            textAlign: "left"
        }
    },
    customDivider: {
        border: `1px solid ${theme.palette.secondary.main}`,
        marginRight: "6rem",
        marginLeft: "6rem",
        marginBottom: "2rem",
        [theme.breakpoints.up("md")]: {
            marginLeft: "10rem",
            marginRight: 0
        }
    },
    paragraph: {
        color: "#CCCCCC",
        textAlign: "center",
        marginBottom: "4rem",
        [theme.breakpoints.up("sm")]: {
            marginBottom: 0,
        },
        [theme.breakpoints.up("md")]: {
            textAlign: "right"
        },
        [theme.breakpoints.up('lg')]: {
            marginRight: "7rem"
        }
    },
    imageSection: {
        marginTop: "auto",
        width: "100%"
    },
    iconWrapper: {
        position: "relative",
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "35rem",
            margin: "auto"
        }
    },
    front: {
        width: "100%",
        height: "14vw",
        zIndex: 3,
        marginTop: 20,
        [theme.breakpoints.up("sm")]: {
            height: "10vw"
        },
        [theme.breakpoints.up("md")]: {
            height: "5rem"
        }
    },
    middle: {
        width: "85%",
        position: "absolute",
        zIndex: 2,
        top: 10
    },
    back: {
        width: "75%",
        position: "absolute",
        zIndex: 1,
        top: 0
    },
    right: {
        [theme.breakpoints.up("sm")]: {
            flex: 1
        }
    },
    nodeIcon: {
        [theme.breakpoints.up("sm")]: {
            width: "10rem",
            height: "35vw",
            margin: "auto"
        },
        [theme.breakpoints.up("md")]: {
            width: "12rem",
            height: "22rem",
            margin: "auto"
        },
    }
}));

export const NodeBlock = React.memo(() => {
    const classes = useStyles();

    useEffect(() => {
        AOS.init({
          duration : 800,
        });
    }, []);

    return (
        <Grid container direction="row" className={classes.nodeBlock}>
            <Grid item container direction="column" className={classes.left}>
                <Grid item className={classes.contentSection}>
                    <Typography variant="h4" className={classes.title} data-aos="fade-right">
                        I love Node.js
                    </Typography>
                    <Hidden smDown>
                        <hr className={classes.customDivider}/>
                    </Hidden>
                    <Typography variant="body1" paragraph className={classes.paragraph} data-aos="zoom-in">
                        Node.js is gaining popularity with a vibrant ecosystem and comunity.
                    </Typography>
                </Grid>

                <Grid item className={classes.imageSection}>
                    <Grid container direction="column" alignContent="center" alignItems="center" className={classes.iconWrapper}>
                        <img src={peopleFront} className={classes.front} data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay={0}/>
                        <img src={peopleMiddle} className={classes.middle} data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay={150}/>
                        <img src={peopleBack} className={classes.back} data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay={300}/>
                    </Grid>
                </Grid>
            </Grid>

            <Hidden xsDown>
                <Grid className={classes.right} item container direction="column" alignContent="center" alignItems="center">
                    <img src={node} alt="Node Icon" className={classes.nodeIcon}/>
                </Grid>
            </Hidden>
        </Grid>
    )
});