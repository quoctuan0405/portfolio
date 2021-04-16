import React, { useRef, useState } from "react";
import {useScrollPosition} from '@n8tb1t/use-scroll-position';
import { Grid, Grow, makeStyles, Slide, Typography } from "@material-ui/core";
import wave from '../../assets/SVG/technologyWave.svg';
import Link from "next/link";

const useStyles = makeStyles(theme => ({
    heroBlock: {
        backgroundImage: `url(${wave})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'black',
        backgroundPosition: 'center',
        backgroundSize: '120vw',
        width: "100%",
        height: 530,
        [theme.breakpoints.up("sm")]: {
            height: 750
        },
        [theme.breakpoints.up("md")]: {
            height: "120vh",
            backgroundAttachment: "fixed",
            backgroundPosition: 'center',
            backgroundSize: '120vw'
        }
    },
    myPortfolio: {
        paddingLeft: "1rem",
        paddingTop: "1rem",
        marginBottom: 80,
        [theme.breakpoints.up("sm")]: {
            paddingLeft: "2rem",
            paddingTop: "2rem",
            marginBottom: 200,
        },
        [theme.breakpoints.up("md")]: {
            paddingLeft: "3rem",
            paddingTop: "3rem",
            marginBottom: "30vh"
        }
    },
    myPortfolioText: {
        color: "white",
        fontVariantCaps: "small-caps",
        cursor: "pointer"
    },
    title: {
        color: "white",
        fontVariantCaps: "small-caps",
        textShadow: "0 0 10px black",
    },
    description: {
        color: "white",
        fontVariantCaps: "small-caps",
        paddingRight: "2rem",
        fontStyle: "italic",
        textShadow: "0 0 5px black",
        [theme.breakpoints.up("sm")]: {
            paddingRight: "15vw"
        },
        [theme.breakpoints.up("md")]: {
            paddingRight: 0
        }
    },
    customDivider: {
        marginRight: "2rem",
        marginLeft: "50vw",
        marginBottom: 0,
        border: "1px solid #0071BC",
        [theme.breakpoints.up("sm")]: {
            marginLeft: "60vw",
            marginRight: "15vw"
        },
        [theme.breakpoints.up("md")]: {
            marginLeft: "20vw",
            marginRight: 0
        }
    },
    titleBlock: {
        [theme.breakpoints.up("md")]: {
            marginRight: "60vw"
        }
    }
}));

export const HeroBlock = React.memo(() => {
    const classes = useStyles();

    const [openTitle, setOpenTitle] = useState<boolean>(true);

    const titleRef = useRef<HTMLElement>();

    useScrollPosition(({prevPos, currPos}: any) => {
        if (titleRef.current) {
            const bottomBlock = titleRef.current.offsetTop + titleRef.current.getBoundingClientRect().height;
            const currentPosition = 0 - currPos.y;
            const previousPosition = 0 - prevPos.y;

            if (currentPosition > bottomBlock) {
                setOpenTitle(false);

            } else if (currentPosition < previousPosition && currentPosition < bottomBlock + 100) {
                setOpenTitle(true);

            } else {
                setOpenTitle(true);
            }
        }
    });

    return (
        <Grid container direction="column" className={classes.heroBlock}>
            <Grid item className={classes.myPortfolio}>
                <Link href="/">
                    <Typography variant="h6" className={classes.myPortfolioText}>My Portfolio</Typography>
                </Link>
            </Grid>
            <Grid item className={classes.titleBlock}>
                <Grow timeout={1000} in={openTitle} ref={titleRef}>
                    <Typography variant="h3" align="center" className={classes.title}>Quoc Tuan</Typography>
                </Grow>
                <hr className={classes.customDivider}/>
                <Slide direction="right" timeout={1000} in={openTitle}>
                    <Typography variant="h6" align="right" className={classes.description}>full stack developer</Typography>
                </Slide>
            </Grid>
        </Grid>
    )
});