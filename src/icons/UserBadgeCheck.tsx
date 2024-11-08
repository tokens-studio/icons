import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgUserBadgeCheck = ({
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
			d='M1.333 13.333v-.666A4.667 4.667 0 0 1 6 8'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M10.536 8.209a1.08 1.08 0 0 1 1.595 0c.216.238.527.366.848.351a1.08 1.08 0 0 1 1.128 1.128c-.015.32.113.632.35.848.47.428.47 1.167 0 1.595a1.08 1.08 0 0 0-.35.848 1.08 1.08 0 0 1-1.128 1.128 1.08 1.08 0 0 0-.848.35c-.428.47-1.167.47-1.595 0a1.08 1.08 0 0 0-.848-.35 1.08 1.08 0 0 1-1.128-1.128 1.08 1.08 0 0 0-.351-.848 1.08 1.08 0 0 1 0-1.595c.237-.216.366-.527.351-.848A1.08 1.08 0 0 1 9.688 8.56c.32.015.632-.113.848-.351Z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m10.242 11.333.728.727 1.454-1.454M6 8a2.667 2.667 0 1 0 0-5.333A2.667 2.667 0 0 0 6 8'
		/>
	</svg>
);
export default SvgUserBadgeCheck;
