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
		xmlns='http://www.w3.org/2000/svg'
		width={16}
		height={17}
		fill='none'
		aria-hidden={!title}
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeMiterlimit={1.5}
			strokeWidth={1.5}
			d='M2.667 6.333c0 3.048 3.81 5.334 3.81 5.334h3.047s3.81-2.286 3.81-5.334S10.944 1 8 1C5.054 1 2.667 3.286 2.667 6.333'
		/>
		<path
			stroke='currentColor'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M6 1.333c-2 4 .667 10.334.667 10.334M9.923 1.333c2 4-.667 10.334-.667 10.334'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeWidth={1.5}
			d='M8.933 15.333H7.067a.4.4 0 0 1-.4-.4v-1.2a.4.4 0 0 1 .4-.4h1.866a.4.4 0 0 1 .4.4v1.2a.4.4 0 0 1-.4.4Z'
		/>
	</svg>
);
export default SvgHotAirBalloon;
