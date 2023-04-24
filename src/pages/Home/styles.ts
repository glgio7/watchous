import styled from "styled-components";

export const Container = styled.main`
	width: 100%;
	/* margin-top: 60px; */
	padding: 2rem;

	.loading {
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 90;
		background-color: #000;
	}

	.loading img {
		width: 25%;
		object-fit: contain;
	}

	.buttonDisclaimer {
		background-color: rgba(0, 174, 255, 0.65);
		font-weight: bold;
		color: #fff;
		font-size: 1.5rem;
		width: 3rem;
		height: 3rem;
		border-radius: 50%;
		border: none;
		position: fixed;
		z-index: 99;
		bottom: 1rem;
		right: 1rem;
		cursor: pointer;
	}
	.disclaimer {
		display: none;
		opacity: 0;
		pointer-events: none;
	}

	.disclaimer.active {
		background: rgb(0, 162, 211);
		background: linear-gradient(
			0deg,
			rgba(0, 120, 200, 1) 0%,
			rgba(0, 60, 150, 0.95) 25%,
			rgba(0, 60, 150, 0.9) 75%,
			rgba(0, 80, 160, 0.95) 100%
		);
		display: flex;
		opacity: 1;
		pointer-events: all;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: fixed;
		z-index: 99;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		animation: flash;
		animation-duration: 0.5s;

		h2 {
			color: #fff;
			font-size: 1.25rem;
			line-height: 2rem;
			text-align: center;
			width: 90%;
		}

		.closeDisclaimer {
			display: flex;
			position: absolute;
			top: 20px;
			right: 20px;
			color: #fff;
			font-size: 2rem;
			cursor: pointer;
		}
	}

	@keyframes flash {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	@keyframes sub {
		0% {
			opacity: 0;
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	h1 {
		font-size: 1.5rem;
		color: #fff;
		text-shadow: 0px 1px 3px #0070ff;

		&::first-letter {
			text-transform: uppercase;
			color: #0040ff;
		}
	}

	@media screen and (max-width: 768px) {
		padding: 1rem;
	}
`;

export const Banner = styled.div`
	position: relative;
	z-index: 5;

	height: 224px;

	overflow: hidden;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	background-color: #000;

	animation: sub;
	animation-duration: 1s;

	h1 {
		color: #fff;

		font-size: 1.75rem;
		font-weight: bold;
		text-align: center;

		max-width: 80%;

		animation: sub;
		animation-duration: 4s;
	}
	h2 {
		color: #fff;

		font-size: 1.25rem;
		font-weight: bold;
		text-align: center;

		animation: sub;
		animation-duration: 6.5s;
	}
	span {
		color: #00aeff;
	}

	video {
		z-index: -1;

		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;

		width: 100%;
	}
`;

export const Wrapper = styled.div`
	position: relative;
	width: 100%;
	padding: 1rem 0;
`;
