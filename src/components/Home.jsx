import React from "react";

const Home = () => {
	return (
		<div className="text-tertiary p-2 text-2xl ">
			<div className="flex justify-center">
				<img
					src="\picture.jpg"
					alt=""
					className="rounded-full h-60 px-3 pb-3 mb-4"
				/>
			</div>
			<div className="">
				Hey! My name is{" "}
				<span className="text-secondary">Armando Valencia</span> and I'm
				a 23 year old software engineer from Birmingham, Alabama.
				<br />
				<br />
			</div>
		</div>
	);
};

export default Home;
