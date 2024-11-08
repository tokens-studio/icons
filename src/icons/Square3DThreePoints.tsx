import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSquare3DThreePoints = ({
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
			strokeWidth={1.5}
			d='M2 14V2.4c0-.22.18-.4.4-.4H14'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M11.333 14H13.6a.4.4 0 0 0 .4-.4v-2.267M14 4.667V6M14 8v1.333M4.667 14H6M8 14h1.333'
		/>
		<path
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M2 2.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334M2 14.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334M14 2.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334'
		/>
	</svg>
);
export default SvgSquare3DThreePoints;
