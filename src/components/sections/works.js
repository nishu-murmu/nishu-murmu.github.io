import React, { Fragment } from "react";

const List = [
	{
		id: 1,
		href: "https://github.com/nishu-murmu/psychedelic-waves",
		src: require("../../static/psychedelic.png"),
		name: "psychedelic-waves",
		className: "section_content_one",
		info: "Psychedelic waves made by perlin noise and GLSL.",
	},
	{
		id: 2,
		href: "https://github.com/nishu-murmu/Eva-Unit-01",
		src: require("../../static/eva.png"),
		name: "eva",
		className: "section_content_two",
		info: "Eva robot smooth scroll info display.",
	},
	{
		id: 3,
		href: "https://github.com/nishu-murmu/psychedelic-waves",
		src: require("../../static/psychedelic.png"),
		name: "psychedelic-waves",
		className: "section_content_three",
		info: "Psychedelic waves made by perlin noise and GLSL.",
	},
	{
		id: 4,
		href: "https://github.com/nishu-murmu/Eva-Unit-01",
		src: require("../../static/eva.png"),
		name: "eva",
		className: "section_content_four",
		info: "Eva robot smooth scroll info display.",
	}
];

const Works = () => {
	const list = List.map((index) => {
		return (
			// 1
			<div key={index.id} className="item">
				<a href={index.href}>
					<img
						src={index.src}
						alt={index.name}
						// height="180"
						// width="280"
					/>
					<p>{index.info}</p>
				</a>
			</div>
		);
	});
	return <Fragment>{list}</Fragment>;
};

export default Works;
