import React from "react";
import { Theme, Typography } from "@material-ui/core";
import { CSSProperties as MuiCSSProperties } from "@material-ui/styles";

import softwareEngineeringStudent from '../../assets/SVG/softwareEngineeringStudent.svg';
import { BlockTemplate } from "./BlockTemplate";

export const StudentLifeBlock: React.FC = React.memo(() => {
    const paragraph = (
        <>
            <Typography variant="body1" paragraph>
                Take a look at some "fascinating" story!!!
            </Typography>
        </>
    );

    const image = (
        <img src={softwareEngineeringStudent} alt="Software Engineering Student" style={{width: "100%", display: "block", margin: "auto"}}/>
    );
    
    const backgroundCSS = (theme: Theme): MuiCSSProperties => ({
        backgroundColor: theme.palette.greyBackground,
    });

    return (
        <BlockTemplate
            sectionTitle="my story ↓"
            title="Life as an software-engineering student"
            paragraph={paragraph}
            image={image}
            buttonText="My story →"
            url="story"
            backgroundCSS={backgroundCSS}
        />
    )
});