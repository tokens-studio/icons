import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgRawFormat = ({
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
			d='M11 6v4l1-2 1 2V6M7 10V8m0 0V7a1 1 0 0 1 2 0v1M7 8h2m0 0v2M3 10V6h1.6c.22 0 .4.18.4.4V7a1 1 0 0 1-1 1'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M3 8h1a1 1 0 0 1 1 1v1'
		/>
	</svg>
);
export default SvgRawFormat;
