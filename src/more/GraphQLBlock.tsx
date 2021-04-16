import React from "react";
import { Grid, Hidden, makeStyles, Typography } from "@material-ui/core";
import graphql from '../../assets/SVG/graphql.svg';

const useStyles = makeStyles(theme => ({
    GraphQLBlock: {
        background: theme.palette.greyBackground,
        textShadow: "0 0 5px black",
        width: "100%",
        paddingTop: "3rem",
        paddingBottom: "2rem",
        [theme.breakpoints.up('sm')]: {
            paddingLeft: "1rem",
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
        flex: 2,
    },
    title: {
        color: "white",
        textAlign: "center",
        marginBottom: "1rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
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
            textAlign: "right"
        }
    },
    right: {
        flex: 1
    },
    icon: {
        width: "10rem",
        marginBottom: "1rem"
    }
}));

export const GraphQLBlock = React.memo(() => {
    const classes = useStyles();

    return (
        <Grid container direction="row" className={classes.GraphQLBlock}>
            <Grid item container direction="column" className={classes.left}>
                <Grid item>
                    <Typography variant="h4" className={classes.title} data-aos="fade-right">
                        My frontend is powered by GraphQL
                    </Typography>
                    <Hidden smDown>
                        <hr className={classes.customDivider}/>
                    </Hidden>
                </Grid>
                <Hidden smUp>
                    <Grid item container direction="column" alignContent="center" >
                        <Grid item>
                            <img src={graphql} alt="GraphQL icon" className={classes.icon}/>
                        </Grid>
                    </Grid>
                </Hidden>
                <Grid item>
                    <Typography variant="body1" className={classes.paragraph} data-aos="zoom-in">
                        GraphQL is a newly technology developed by Facebook that helps you create your API in an efficient, scalable way.
                    </Typography>
                </Grid>
            </Grid>

            <Hidden xsDown>
                <Grid item container direction="column" alignContent="center" className={classes.right}>
                    <Grid item>
                        <img src={graphql} alt="GraphQL icon" className={classes.icon}/>
                    </Grid>
                </Grid>
            </Hidden>
        </Grid>
    )
});