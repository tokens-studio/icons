import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSafeArrowRight = ({
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
			d='M2 12.667V3.333C2 2.597 2.597 2 3.333 2H8c.736 0 1.333.597 1.333 1.333v9.334C9.333 13.403 8.736 14 8 14H3.333A1.333 1.333 0 0 1 2 12.667Z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M8 2h4.667C13.403 2 14 2.597 14 3.333v.334M8 14h4.667c.736 0 1.333-.597 1.333-1.333v-.334M5.667 10c-.553 0-1-.895-1-2s.447-2 1-2 1 .895 1 2-.448 2-1 2M6.333 6.333 7 5.667M5 6.333l-.667-.666M4.333 10.333 5 9.667M7 10.333l-.667-.666M1.333 5.333H2M1.333 4H2M2 10.667h-.667M2 12h-.667M10 8h4.667m0 0-2.334-2.333M14.667 8l-2.334 2.333'
		/>
	</svg>
);
export default SvgSafeArrowRight;
