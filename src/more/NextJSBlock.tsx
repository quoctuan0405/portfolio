import React, { useEffect } from "react";
import { Grid, Hidden, makeStyles, Typography } from "@material-ui/core";
import reactIcon from '../../assets/SVG/react.svg';
import nextIcon from '../../assets/SVG/nextJS.svg';
import 'aos/dist/aos.css';
import AOS from 'aos';

const useStyles = makeStyles(theme => ({
    NextJSBlock: {
        background: theme.palette.blackBackground,
        textShadow: "0 0 5px black",
        width: "100%",
        paddingBottom: "2rem",
        paddingTop: "3rem",
        marginTop: 0,
        [theme.breakpoints.up('sm')]: {
            paddingLeft: "1rem",
            paddingTop: "5rem",
            paddingBottom: "4rem",
        },
        [theme.breakpoints.up("md")]: {
            paddingLeft: "6rem"
        },
        [theme.breakpoints.up("lg")]: {
            paddingLeft: "13rem",
            paddingRight: "10rem"
        }
    },
    left: {
        [theme.breakpoints.up("sm")]: {
            flex: 2
        },
    },
    title: {
        color: "white",
        textAlign: "center",
        marginBottom: "1rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        width: "100%",
        [theme.breakpoints.up("md")]: {
            textAlign: "left",
        }
    },
    paragraph: {
        color: "#CCCCCC",
        textAlign: "center",
        marginBottom: "2rem",
        paddingLeft: "2rem",
        paddingRight: "2rem",
        [theme.breakpoints.up("md")]: {
            textAlign: "right"
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
    right: {
        [theme.breakpoints.up("sm")]: {
            flex: 1,
            width: "auto",
            marginRight: "1rem",
            height: "100%"
        }
    },
    iconContainer: {
        width: "auto"
    },
    icon: {
        width: "10rem",
        marginBottom: "1rem",
        [theme.breakpoints.up("sm")]: {
            width: "8rem"
        },
        [theme.breakpoints.up("md")]: {
            width: "10rem",
            marginBottom: "2rem"
        },
        [theme.breakpoints.up("lg")]: {
            width: "11rem",
            marginBottom: "2rem"
        }
    }
}));

export const NextJSBlock = React.memo(() => {
    const classes = useStyles();

    useEffect(() => {
        AOS.init({
          duration : 800,
        });
    }, []);

    return (
        <Grid container direction="row" alignContent="center" alignItems="center" className={classes.NextJSBlock}>
            <Grid item container direction="column" className={classes.left}>
                <Grid item style={{margin: "auto"}}>
                    <Typography variant="h4" className={classes.title} data-aos="fade-right">
                        I’m using React with Next.js
                    </Typography>
                    <Hidden smDown>
                        <hr className={classes.customDivider}/>
                    </Hidden>
                    <Hidden smUp>
                        <Grid item container direction="column" alignContent="center" >
                            <Grid item>
                                <img src={reactIcon} alt="React icon" className={classes.icon}/>
                            </Grid>
                        </Grid>
                    </Hidden>
                    <Typography variant="body1" className={classes.paragraph} data-aos="zoom-in">
                        React alongside with Vue and Angular is one of the most popular framework/ technology for frontend development.
                    </Typography>
                    <Hidden smUp>
                        <hr className={classes.customDivider}/>
                    </Hidden>
                    <Hidden smUp>
                        <Grid item container direction="column" alignContent="center">
                            <Grid item>
                                <img src={nextIcon} alt="Next icon" className={classes.icon}/>
                            </Grid>
                        </Grid>
                    </Hidden>
                    <Typography variant="body1" className={classes.paragraph} data-aos="zoom-in">
                        Next.js is a framework that helps you deal with one of the most problem when using React: Server-side rendering.
                    </Typography>
                </Grid>
            </Grid>

            <Hidden xsDown>
                <Grid item className={classes.right}>
                    <Grid container direction="column" alignContent="center" alignItems="center" className={classes.iconContainer}>
                        <img src={reactIcon} alt="React icon" className={classes.icon}/>
                        <img src={nextIcon} alt="Next icon" className={classes.icon}/>
                    </Grid>
                </Grid>
            </Hidden>
        </Grid>
    )
});