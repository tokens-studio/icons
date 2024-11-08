import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBicycle = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={18}
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
			d='M4.333 12.667a2.667 2.667 0 1 0 0-5.334 2.667 2.667 0 0 0 0 5.334M6.667 5h4m0 0H11l2.667 5m-3-5L12 3m0 0h-1.667M12 3h1.333'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m4.333 10 2.334-5L9 9.333h2M6.667 5c-.223-.667-1-2-2.334-2'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M13.667 12.667a2.667 2.667 0 1 0 0-5.334 2.667 2.667 0 0 0 0 5.334'
		/>
	</svg>
);
export default SvgBicycle;
