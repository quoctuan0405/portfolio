import React from "react";
import { Grid, Hidden, makeStyles, Typography } from "@material-ui/core";
import docker from '../../assets/SVG/docker.svg';
import kubernetes from '../../assets/SVG/kubernetes.svg';
import wave from '../../assets/SVG/wave.svg';
import waveBig from '../../assets/SVG/waveBig.svg';

const useStyles = makeStyles(theme => ({
    DockerBlock: {
        background: theme.palette.greyBackground,
        textShadow: "0 0 5px black",
        width: "100%",
        paddingTop: "3rem",
        [theme.breakpoints.up('sm')]: {
            paddingTop: "5rem",
        },
        [theme.breakpoints.up('md')]: {
            paddingTop: "6rem",
        }
    },
    content: {
        [theme.breakpoints.up("sm")]: {
            marginBottom: "3rem"
        },
        [theme.breakpoints.up("md")]: {
            paddingLeft: "15rem",
            paddingRight: "15rem",
            marginBottom: "4rem"
        },
    },
    title: {
        color: "white",
        textAlign: "center",
        padding: ".5rem",
        marginBottom: "1rem",
        [theme.breakpoints.up("md")]: {
            marginBottom: "1.5rem",
        },
        [theme.breakpoints.up("lg")]: {
            marginBottom: "2rem"
        }
    },
    paragraph: {
        color: "#CCCCCC",
        textAlign: "center",
        marginBottom: "2rem",
        paddingLeft: "2rem",
        paddingRight: "2rem",
    },
    iconSection: {
        backgroundImage: `url(${wave})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100vw',
        backgroundPosition: "bottom",
        paddingBottom: "1rem",
        [theme.breakpoints.up('sm')]: {
            height: '10rem',
        },
        [theme.breakpoints.up('md')]: {
            backgroundImage: `url(${waveBig})`,
        }
    },
    iconWrapper: {
        margin: "auto"  
    },
    dockerIcon: {
        width: "7rem",
        [theme.breakpoints.up('sm')]: {
            width: '9rem'
        },
        [theme.breakpoints.up('lg')]: {
            width: '11rem',
            marginBottom: "3rem"
        }
    },
    kubernetesIcon: {
        width: "6rem",
        [theme.breakpoints.up('sm')]: {
            width: '8rem'
        },
        [theme.breakpoints.up('lg')]: {
            width: '10rem',
            marginBottom: "3rem"
        }
    }
}));

export const DockerBlock = () => {
    const classes = useStyles();

    return (
        <Grid container direction="column" className={classes.DockerBlock}>
            <Grid item className={classes.content}>
                <Typography variant="h4" className={classes.title} data-aos="fade-right">
                    I’m learning Docker and Kubernetes
                </Typography>
                <Typography variant="body1" className={classes.paragraph} data-aos="zoom-in">
                    Docker and Kubernetes helps you easily deploy all kind of web application that you can imagine.
                </Typography>
                <Typography variant="body1" className={classes.paragraph} data-aos="zoom-in">
                    It also power one of the most cutting-edge architecture that are gaining popularity right now: Microservices
                </Typography>
            </Grid>
            <Grid item container direction="row" alignContent="center" alignItems="center" className={classes.iconSection}>
                <Grid item className={classes.iconWrapper}>
                    <img src={docker} alt="Docker icon" className={classes.dockerIcon}/>
                </Grid>
                <Grid item className={classes.iconWrapper}>
                    <img src={kubernetes} alt="Kubernetes icon" className={classes.kubernetesIcon}/>
                </Grid>
            </Grid>
        </Grid>
    )
}