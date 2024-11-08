import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSoccerBall = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={16}
		height={16}
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
			strokeWidth={1.5}
			d='m8 5.333 2.536 1.843M8 5.333 5.464 7.176M8 5.333v-2m2.536 3.843-.969 2.981m.97-2.981 1.796-.843m-6.87.843.97 2.981m-.97-2.981-1.796-.843m4.333-3-2.25-1.61M8 3.333l2.25-1.61m-.683 8.434H6.433m3.134 0 1.1 1.51m1.666-5.334 2.3 2.334m-2.3-2.334L13 3.59m-6.567 6.567-1.1 1.51m5.334 0 3.108-.334m-3.108.334L9 14.592m-3.667-2.925-3.108-.334m3.108.334L7 14.592M3.667 6.333l-2.3 2.334m2.3-2.334L3 3.59M14.667 8A6.667 6.667 0 1 1 1.333 8a6.667 6.667 0 0 1 13.334 0'
		/>
	</svg>
);
export default SvgSoccerBall;
