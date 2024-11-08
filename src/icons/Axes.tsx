import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAxes = ({
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
			d='M14 12.968 8 8.562m0 0V2m0 6.562-6 4.406M13.625 11.14 14 12.968l-1.875.365M6.5 3.462 8 2l1.5 1.462M3.875 13.333 2 12.968l.375-1.828'
		/>
	</svg>
);
export default SvgAxes;
