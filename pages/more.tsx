import React, { useEffect, useState } from 'react';
import { Grid, makeStyles } from '@material-ui/core';

import background from '../assets/SVG/background.svg';
import triangles from '../assets/SVG/triangles.svg';

import { HeroBlock } from '../src/more/HeroBlock';
import { NodeBlock } from '../src/more/NodeBlock';
import { NextJSBlock } from '../src/more/NextJSBlock';
import { GraphQLBlock } from '../src/more/GraphQLBlock';
import { TypescriptBlock } from '../src/more/TypescriptBlock';
import { DockerBlock } from '../src/more/DockerBlock';
import { Footer } from '../src/Footer';

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

function App() {
	const classes = useStyles();
	const handleScroll = () => setOffsetY(window.pageYOffset);

	const [offsetY, setOffsetY] = useState<number>(0);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className={classes.container}>
			<Grid container direction="column" style={{position: "relative"}}>
				<Grid item>
					<HeroBlock/>
				</Grid>
				<Grid item>
					<NodeBlock/>
				</Grid>
				<Grid item style={{zIndex: 7}}>
					<NextJSBlock/>
				</Grid>
				<Grid item>
					<GraphQLBlock/>
				</Grid>
				<Grid item>
					<TypescriptBlock/>
				</Grid>
				<Grid item>
					<DockerBlock/>
				</Grid>
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

export default App;
