import ella1 from "../assets/slides/IMG_2837.jpg";
import ella2 from "../assets/slides/IMG_3185.jpg";
import ella3 from "../assets/slides/IMG_4048.jpg";
import ella4 from "../assets/slides/IMG_5265.jpg";
import ella5 from "../assets/slides/IMG_5354.jpg";
import ella6 from "../assets/slides/IMG_5615.jpg";
import ella7 from "../assets/slides/IMG_5993.jpg";
import ella8 from "../assets/slides/IMG_5994.jpg";
import ella9 from "../assets/slides/IMG_5995.jpg";
import ella10 from "../assets/slides/IMG_5996.jpg";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
const variant = {
	hide: (direction) => {
		return {
			x: direction > 0 ? 200 : -200,
			opacity: 0,
		};
	},
	show: {
		x: 0,
		opacity: 1,
	},
	exit: (direction) => {
		return {
			x: direction > 0 ? -200 : 200,
			opacity: 0,
		};
	},
};

const buttonVariant = {
	hidden: {
		x: "-100vw",
		opacity: 0,
	},
	visible: {
		x: 0,
		opacity: 1,
	},
	hover: {
		scale: 1.1,
		textShadow: "0px 0px 8px #fff",
		boxShadow: "0px 0px 8px #fff",
		transition: {
			duration: 0.7,
			repeat: Infinity,
			repeatType: "reverse",
		},
	},
};

const images = [
	ella1,
	ella2,
	ella3,
	ella4,
	ella5,
	ella6,
	ella7,
	ella8,
	ella9,
	ella10,
];

export default function Interactive() {
	const [index, setindex] = useState(0);
	const [direction, setDirection] = useState(0);

	const next = () => {
		setDirection(1);
		if (index === images.length - 1) {
			setindex(0);
			return;
		}
		setindex(index + 1);
	};

	const prev = () => {
		setDirection(-1);
		if (index === 0) {
			setindex(images.length - 1);
			return;
		}
		setindex(index - 1);
	};
	return (
		<motion.div
			className="container"
			exit={{ opacity: 0, x: "-100vw" }}
			transition={{ duration: 0.3 }}
		>
			<h4 className="text">TO THE BABE I LOVE AND CHERISH</h4>
			<p className="text">
				Some memories and pictures of you that i hold dearly
			</p>
			<p className="text">I'm so proud of you</p>
			<div className="slideshow">
				<AnimatePresence
					initial={false}
					custom={direction}
				>
					<motion.img
						variants={variant}
						initial="hide"
						animate="show"
						exit="exit"
						key={images[index]}
						src={images[index]}
						alt="slide"
						className="slides"
						transition={{ duration: 0.5, type: "tween" }}
					/>
				</AnimatePresence>

				<button
					className="prev"
					onClick={prev}
				>
					&#8656;
				</button>
				<button
					className="next"
					onClick={next}
				>
					&#8658;
				</button>
			</div>
			<Link to="/">
				<motion.button
					className="funBtn"
					variants={buttonVariant}
					initial="hidden"
					animate="visible"
					whileInView="hover"
				>
					The End
				</motion.button>
			</Link>
		</motion.div>
	);
}
