import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgEvStation = ({
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
			d='M14 3.333V6'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M3.333 12.667V6c0-.736.597-1.333 1.334-1.333h6C11.403 4.667 12 5.264 12 6v6.667c0 .736-.597 1.333-1.333 1.333h-6a1.333 1.333 0 0 1-1.334-1.333Z'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M3.333 6.667V3.333C3.333 2.597 3.93 2 4.667 2h6C11.403 2 12 2.597 12 3.333v3.334'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m7.444 7.333-1.11 2H9l-1.111 2'
		/>
	</svg>
);
export default SvgEvStation;
