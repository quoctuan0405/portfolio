import React, {useRef} from 'react';
import { Button, Grid, Grow, makeStyles, Slide, Theme, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { CSSProperties as MuiCSSProperties } from "@material-ui/styles";
import silhouette from '../../assets/SVG/silhouette.svg';
import { BlockTemplate } from './BlockTemplate';

export const IntroductionBlock = React.memo(() => {
    const paragraph = (
        <>
            <Typography variant="body1" paragraph>
                Starting with basic HTML, CSS, vanilla Javascript, I’m now in love with web development.
            </Typography>
            <Typography variant="body1" paragraph>
                Over the course of learning, I’ve created some side project.
            </Typography>
        </>
    );

    const backgroundCSS = (theme: Theme): MuiCSSProperties => ({
        backgroundColor: theme.palette.greyBackground,
        backgroundImage: `url(${silhouette})`,
        backgroundSize: "15rem",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right bottom',
    });

    return (
        <BlockTemplate
            sectionTitle="who am i ↓"
            title="I’m a fullstack web developer"
            paragraph={paragraph}
            buttonText="View my Github page →"
            backgroundCSS={backgroundCSS}
            url="https://github.com/quoctuan0405"
        />
    )
});