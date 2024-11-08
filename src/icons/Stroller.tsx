import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgStroller = ({
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
			d='M7.667 2a5.667 5.667 0 0 0-4.809 8.667M12.475 10.667a5.64 5.64 0 0 0 .858-3V6.333H15M5.333 14a1.333 1.333 0 1 1 0-2.667 1.333 1.333 0 0 1 0 2.667M10 14a1.333 1.333 0 1 1 0-2.667A1.333 1.333 0 0 1 10 14M7.667 2v6M2.333 8H13'
		/>
	</svg>
);
export default SvgStroller;
