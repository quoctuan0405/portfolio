import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    footer: {
        background: "black",
        color: "white",
        minHeight: "7rem",
        width: "100%"
    },
    content: {
        margin: "auto"
    }
}));

export const Footer = React.memo(() => {
    const classes = useStyles();

    return (
        <Grid container direction="column" alignContent="center" alignItems="center" className={classes.footer}>
            <Grid item className={classes.content}>
                <Typography variant="body1">©2021 by me</Typography>
            </Grid>
        </Grid>
    )
});