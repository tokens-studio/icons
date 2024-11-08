import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTifFormat = ({
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
			d='M2.667 4V2.4c0-.22.179-.4.4-.4h9.866c.221 0 .4.18.4.4V4'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M10 10V6h2M4.333 6h1m0 0h1m-1 0v4M10 8h1.667M8 10V6'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeWidth={1.5}
			d='M2.667 12v1.6c0 .22.179.4.4.4h9.866a.4.4 0 0 0 .4-.4V12'
		/>
	</svg>
);
export default SvgTifFormat;
