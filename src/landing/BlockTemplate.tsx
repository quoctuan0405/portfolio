import React, { useEffect } from "react";
import { CSSProperties as MuiCSSProperties } from "@material-ui/styles";
import { Button, Grid, makeStyles, Theme, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import Link from 'next/link';
import 'aos/dist/aos.css';
import AOS from 'aos';

interface Props {
    sectionTitle: string,
    title: string,
    paragraph: JSX.Element,
    buttonText: string,
    backgroundCSS: (theme: Theme) => MuiCSSProperties,
    image?: JSX.Element,
    url: string
}

export const BlockTemplate: React.FC<Props> = ({sectionTitle, title, paragraph, buttonText, backgroundCSS, image, url}) => {
    const useStyles = makeStyles(theme => ({
        introductionBlock: {
            ...backgroundCSS(theme),
            color: "white",
            textShadow: "0 0 5px black",
            width: "100vw",
            padding: "2.5rem",
            minHeight: 400,
            [theme.breakpoints.up("sm")]: {
                minHeight: 600
            },
            [theme.breakpoints.up("md")]: {
                minHeight: 800
            }
        },
        sectionTitle: {
            position: "relative",
            width: "3rem",
            marginBottom: "2rem",
        },
        sectionTitleText: {
            position: "absolute",
            width: 400,
            [theme.breakpoints.up("sm")]: {
                width: 600,
                transformOrigin: "80px 80px",
                transform: "rotate(-90deg)",
            },
            [theme.breakpoints.up("md")]: {
                width: 800,
                transformOrigin: "90px 90px"
            }
        },
        contentOuter: {
            flex: 1,
            paddingTop: "2rem",
            [theme.breakpoints.up("md")]: {
                paddingTop: image ? "3rem" : 0
            }
        },
        content: {
            maxWidth: 400,
            margin: "auto",
            [theme.breakpoints.up("sm")]: {
                maxWidth: 500
            },
            [theme.breakpoints.up("md")]: {
                maxWidth: 600,
            }
        },
        title: {
            textAlign: "center",
            marginBottom: "1rem",
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
            textAlign: "center",
            color: "#CCCCCC",
            [theme.breakpoints.up("md")]: {
                textAlign: "left"
            }
        },
        button: {
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            color: theme.palette.secondary.main,
            borderColor: theme.palette.secondary.main,
            [theme.breakpoints.up("md")]: {
                marginRight: 0
            }
        },
        imageOuter: {
            width: "100%",
            marginTop: "2rem",
            [theme.breakpoints.up("md")]: {
                flex: image ? 1 : "auto",
            }
        },
        picture: {
            width: "40vw",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "1rem",
            [theme.breakpoints.up("sm")]: {
                width: "30vw"
            },
            [theme.breakpoints.up("md")]: {
                width: "25vw"
            },
            [theme.breakpoints.up("lg")]: {
                width: "20vw"
            }
        }
    }));

    const classes = useStyles();

    useEffect(() => {
        AOS.init({
          duration : 800,
        });
    }, []);

    const theme = useTheme();
    const matchesMd = useMediaQuery(theme.breakpoints.up("sm"));

    return (
        <Grid container direction={matchesMd ? "row" : "column"} className={classes.introductionBlock}>
            <Grid item className={classes.sectionTitle}>
                <Typography variant="body1" className={classes.sectionTitleText}>{sectionTitle}</Typography>
            </Grid>
            <Grid item container alignItems="center" alignContent="center" className={classes.contentOuter}>
                <Grid item className={classes.content}>
                    <Typography variant="h4" className={classes.title} data-aos="fade-right">{title}</Typography>
                    <hr className={classes.customDivider}/>
                    <div className={classes.paragraph} data-aos="zoom-in">
                        {paragraph}
                    </div>
                    <Link href={url}>
                        <Button variant="outlined" className={classes.button}>
                            {buttonText}
                        </Button>
                    </Link>
                </Grid>
            </Grid>
            { 
                image ? <>
                    <Grid item container alignItems="center" alignContent="center" className={classes.imageOuter}>
                        <picture className={classes.picture}>
                            {image}
                        </picture>
                    </Grid>
                </> : null
            }
        </Grid>
    )
}