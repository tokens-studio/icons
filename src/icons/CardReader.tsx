import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCardReader = ({
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
			d='M3.333 12.667V2h9.334v10.667c0 .736-.597 1.333-1.334 1.333H4.667a1.333 1.333 0 0 1-1.334-1.333Z'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M3.333 4h-1a1 1 0 1 1 0-2h11.334a1 1 0 1 1 0 2h-1'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M10 2v12'
		/>
	</svg>
);
export default SvgCardReader;
