import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgStrategy = ({
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
			d='M4 13.667C4.667 7.333 7.667 5.333 13.333 4'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m10.606 2.54 2.99 1.394-1.394 2.99M3.333 4.667a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667M10.667 13.495l1.414-1.414m0 0 1.414-1.414m-1.414 1.414-1.414-1.414m1.414 1.414 1.414 1.414'
		/>
	</svg>
);
export default SvgStrategy;
