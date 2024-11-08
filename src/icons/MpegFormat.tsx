import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMpegFormat = ({
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
			strokeWidth={1.5}
			d='M2.667 4V2.4c0-.22.179-.4.4-.4h9.866c.221 0 .4.18.4.4V4M2.667 12v1.6c0 .22.179.4.4.4h9.866a.4.4 0 0 0 .4-.4V12'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M5 10V8m0 0V6h2v2zM1 10V6l1 2 1-2v4M11 6H9v4h2M15 6h-2v4h2V8.4M9 8h1.333'
		/>
	</svg>
);
export default SvgMpegFormat;
