import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgHotAirBalloon = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		width={props.width || 16}
		height={props.height || 16}
		viewBox='0 0 16 16'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden={!title}
		strokeWidth={props.strokeWidth || 1.5 * (16 / (Number(props.width) || 16))}
		preserveAspectRatio='xMidYMid meet'
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			d='M2.66667 6.33333C2.66667 9.38093 6.4762 11.6667 6.4762 11.6667H9.5238C9.5238 11.6667 13.3333 9.38093 13.3333 6.33333C13.3333 3.28571 10.9455 1 8 1C5.05448 1 2.66667 3.28571 2.66667 6.33333Z'
			stroke='currentColor'
			strokeMiterlimit={1.5}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.99999 1.33337C3.99997 5.33337 6.66666 11.6667 6.66666 11.6667'
			stroke='currentColor'
			strokeLinejoin='round'
		/>
		<path
			d='M9.92286 1.33337C11.9229 5.33337 9.2562 11.6667 9.2562 11.6667'
			stroke='currentColor'
			strokeLinejoin='round'
		/>
		<path
			d='M8.93334 15.3334H7.06667C6.84574 15.3334 6.66667 15.1543 6.66667 14.9334V13.7334C6.66667 13.5124 6.84574 13.3334 7.06667 13.3334H8.93334C9.15427 13.3334 9.33334 13.5124 9.33334 13.7334V14.9334C9.33334 15.1543 9.15427 15.3334 8.93334 15.3334Z'
			stroke='currentColor'
			strokeLinecap='round'
		/>
	</svg>
);
export default SvgHotAirBalloon;
