import React from "react";
import { CSSProperties as MuiCSSProperties } from "@material-ui/styles";
import { Theme, Typography } from "@material-ui/core";
import { BlockTemplate } from "./BlockTemplate";
import clusteredLogo from "../../assets/SVG/clusteredLogo.svg";


export const MoreAboutBlock = React.memo(() => {
    const paragraph = (
        <>
            <Typography variant="body1" paragraph>
                The web technology is fast moving, go from the classic old PHP with Bootstrap, Ajax to Node.js, React, Angular, Vue.js, to Docker and Kubernetes.
            </Typography>
            <Typography variant="body1" paragraph>
                I’ve learn and come in love with some of the great cutting-edge technology.
            </Typography>
        </>
    );

    const backgroundCSS = (theme: Theme): MuiCSSProperties => ({
        backgroundColor: theme.palette.blackBackground,
    });

    const image = (
        <img src={clusteredLogo} alt="React, Next JS and GraphQL" style={{width: "100%", display: "block", margin: "auto"}}/>
    );

    return (
        <BlockTemplate
            sectionTitle="more about me ↓"
            title="Something more about me"
            paragraph={paragraph}
            buttonText="View more about me →"
            backgroundCSS={backgroundCSS}
            image={image}
            url="more"
        />
    );
});