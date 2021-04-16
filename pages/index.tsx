import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React, { useEffect, useState } from "react";
import { Footer } from "../src/Footer";
import { HeroBlock } from "../src/landing/HeroBlock";
import { IntroductionBlock } from "../src/landing/IntroductionBlock";
import { MoreAboutBlock } from "../src/landing/MoreAboutBlock";
import triangles from '../assets/SVG/trianglesShort.svg';
import background from '../assets/SVG/backgroundShort.svg';
import { StudentLifeBlock } from "../src/landing/StudentLifeBlock";

const useStyles = makeStyles(theme => ({
	container: {
		position: "relative",
		overflow: "hidden",
	},
	content: {

	},
	background: {
		position: "absolute",
		top: "33rem",
		zIndex: -2
	},
	triangle: {
		position: "absolute",
		top: "33rem",
		zIndex: -1
	},
	backgroundImage: {
		width: "150vw",
		marginLeft: "-25vw"
	}
}));

const Home: React.FC = () => {
    const classes = useStyles();
	const handleScroll = () => setOffsetY(window.pageYOffset);

	const [offsetY, setOffsetY] = useState<number>(0);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);
    
    return (
        <div className={classes.container}>
            <Grid container direction="column" style={{position: 'relative'}}>
                <Grid item>
                    <HeroBlock/>
                </Grid>
                <Grid item>
                    <IntroductionBlock/>
                </Grid>
                <Grid item>
                    <MoreAboutBlock/>
                </Grid>
				{/* <Grid item>
					<StudentLifeBlock/>
				</Grid> */}
                <Grid item>
                    <Footer/>
                </Grid>
            </Grid>
            <div className={classes.background} style={{ transform: `translateY(-${offsetY * 0.5}px)`}}>
				<img src={background} alt="background" className={classes.backgroundImage}/>
			</div>
			<div className={classes.triangle} style={{ transform: `translateY(-${offsetY * 0.8}px)`}}>
				<img src={triangles} alt="triangle" className={classes.backgroundImage}/>
			</div>
        </div>
    );
}

export default Home;