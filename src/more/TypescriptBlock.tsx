import React from "react";
import { Grid, Hidden, makeStyles, Typography } from "@material-ui/core";
import typescriptIcon from '../../assets/SVG/typescript.svg';

const useStyles = makeStyles(theme => ({
    TypescriptBlock: {
        background: theme.palette.blackBackground,
        textShadow: "0 0 5px black",
        width: "100%",
        paddingBottom: "2rem",
        paddingTop: "3rem",
        [theme.breakpoints.up("sm")]: {
            paddingTop: "5rem",
            paddingBottom: "4rem",
        },
        [theme.breakpoints.up('md')]: {
            paddingLeft: "6rem",
        },
        [theme.breakpoints.up("lg")]: {
            paddingLeft: "13rem",
            paddingRight: "10rem"
        }
    },
    left: {
        flex: 2
    },
    title: {
        color: "white",
        textAlign: "center",
        marginBottom: "1rem",
        padding: ".5rem",
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
        marginBottom: "2rem",
        paddingLeft: "2rem",
        paddingRight: "2rem",
        [theme.breakpoints.up("md")]: {
            textAlign: "right",
        }
    },
    right: {
        flex: 1,
    },
    icon: {
        width: "10rem",
        marginBottom: "1rem",
        [theme.breakpoints.up("md")]: {
            height: "15rem"
        }
    }
}));

export const TypescriptBlock = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.TypescriptBlock}>
            <Grid item container direction="column" className={classes.left}>
                <Grid item>
                    <Typography variant="h4" className={classes.title} data-aos="fade-right">
                        I love Typescript
                    </Typography>
                    <Hidden smDown>
                        <hr className={classes.customDivider}/>
                    </Hidden>
                </Grid>
                <Hidden smUp>
                    <Grid item container direction="column" alignContent="center" >
                        <Grid item>
                            <img src={typescriptIcon} alt="Typescript icon" className={classes.icon}/>
                        </Grid>
                    </Grid>
                </Hidden>
                <Grid item>
                    <Typography variant="body1" className={classes.paragraph} data-aos="zoom-in">
                        Typescript greatly enhance Javascript developer experience. It is now taking the world by storm.
                    </Typography>
                </Grid>
            </Grid>

            <Hidden xsDown>
                <Grid item container direction="column" alignContent="center" className={classes.right}>
                    <Grid item>
                        <img src={typescriptIcon} alt="Typescript icon" className={classes.icon}/>
                    </Grid>
                </Grid>
            </Hidden>
        </Grid>
    )
}