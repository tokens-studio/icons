import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPngFormat = ({
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
			d='M3 10V8m0 0V6h2v2zM7 10V6l2 4V6M13 6h-2v4h2V8.4'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeWidth={1.5}
			d='M2.667 4V2.4c0-.22.179-.4.4-.4h9.866a.4.4 0 0 1 .4.4V4M2.667 12v1.6c0 .22.179.4.4.4h9.866a.4.4 0 0 0 .4-.4V12'
		/>
	</svg>
);
export default SvgPngFormat;
