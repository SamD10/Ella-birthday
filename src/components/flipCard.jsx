import { motion } from "framer-motion";
import { useState } from "react";

export default function FlipCard({ image, wish }) {
	const [isFlipped, setIsFlipped] = useState(false);
	const [isAnimating, setIsAnimating] = useState(false);

	const handleFlip = () => {
		if (!isAnimating) {
			setIsFlipped(!isFlipped);
			setIsAnimating(true);
		}
	};
	return (
		<div className="flipCard">
			<motion.div
				className="flipCard-inner"
				onClick={handleFlip}
				initial={false}
				animate={{ rotateY: isFlipped ? 180 : 360 }}
				transition={{ duration: 0.6, animationDirection: "normal" }}
				onAnimationComplete={() => setIsAnimating(false)}
			>
				<div
					className="front"
					style={{ backgroundImage: `url(${image})` }}
				>
					
				</div>

				<div className="back">
					<p>{wish}</p>
				</div>
			</motion.div>
		</div>
	);
}
