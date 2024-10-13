import FlipCard from "../components/flipCard";
import img1 from "../assets/card images/DALL·E 2024-10-11 20.45.13 - A charming birthday card background with pastel-colored balloons, soft fluffy clouds, and sparkling golden confetti. The backdrop includes a whimsical.webp";
import {
	WISH1,
	WISH2,
	WISH3,
	WISH4,
	WISH5,
	WISH6,
} from "../constants/Constants";
import { motion } from "framer-motion";
import img2 from "../assets/card images/DALL·E 2024-10-11 20.45.06 - A beautiful and festive birthday card background featuring vibrant colors, soft pastel gradients, balloons, confetti, and soft glowing lights. The des.webp";
import img3 from "../assets/card images/DALL·E 2024-10-11 20.45.01 - A colorful and elegant birthday card background with a mix of bright pastel shades, abstract floral swirls, shimmering stars, and radiant bokeh effect.webp";
import img4 from "../assets/card images/42a720296c66c224595dc3cdd9bbd5a6.jpg";
import img5 from "../assets/card images/538a06d75bfd06bdc0df4b5f74a35579.jpg";
import img6 from "../assets/card images/6c3d160e430baa0c9d29befd8526d331.jpg";
import { Link } from "react-router-dom";
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

export default function Wishes() {
	return (
		<motion.div
			className="wishes"
			exit={{ opacity: 0, x: "-100vw" }}
			transition={{ duration: 0.3 }}
		>
			<p className="text"> To my girlfriend and partner</p>
			<p className="text">I am eternally grateful for you</p>
			<p className="text">
				Here's a few birthday cards, click them to flip them over
			</p>
			<div className="cardContainer">
				<FlipCard
					image={img1}
					wish={WISH1}
				/>
				<FlipCard
					image={img2}
					wish={WISH2}
				/>
				<FlipCard
					image={img3}
					wish={WISH3}
				/>
				<FlipCard
					image={img4}
					wish={WISH4}
				/>
				<FlipCard
					image={img5}
					wish={WISH5}
				/>
				<FlipCard
					image={img6}
					wish={WISH6}
				/>
			</div>
			<Link to="/interact">
				<motion.button
					className="funBtn"
					variants={buttonVariant}
					initial="hidden"
					animate="visible"
					whileInView="hover"
				>
					Let's Keep Going
				</motion.button>
			</Link>
		</motion.div>
	);
}
