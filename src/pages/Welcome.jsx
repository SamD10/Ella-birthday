import { Link } from "react-router-dom";
import splitstrings from "../utils/splitString";
import { easeInOut, motion } from "framer-motion";

const text1 = `Hey babe, hope you had a great birthday so far`;
const text2 = `I just want to add something more to your day`;

const charVariant = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
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

export default function Welcome() {
	const text1Split = splitstrings(text1);
	const text2Split = splitstrings(text2);

	return (
		<motion.div
			className="welcome"
			exit={{ opacity: 0, x: "-100vw" }}
			transition={{ duration: 0.3 }}
		>
			<motion.h1>HAPPY BIRTHDAY ELLA!!</motion.h1>
			<motion.p
				className="text"
				initial="hidden"
				whileInView="visible"
				transition={{ staggerChildren: 0.07 }}
				variants={charVariant}
			>
				{text1Split.map((char) => (
					<motion.span
						key={char}
						transition={{ duration: 0.5 }}
						variants={charVariant}
					>
						{char}
					</motion.span>
				))}
			</motion.p>
			<motion.p
				className="text"
				initial="hidden"
				whileInView="visible"
				transition={{ staggerChildren: 0.1 }}
				variants={charVariant}
			>
				{text2Split.map((char, index) => (
					<motion.span
						key={index}
						transition={{ duration: 0.5 }}
						variants={charVariant}
					>
						{char}
					</motion.span>
				))}
			</motion.p>

			<Link to="/wishes">
				<motion.button
					className="funBtn"
					variants={buttonVariant}
					initial="hidden"
					animate="visible"
					whileInView="hover"
				>
					Have Fun!!
				</motion.button>
			</Link>
		</motion.div>
	);
}
