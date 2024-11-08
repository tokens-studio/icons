import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSoap = ({
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
			d='M4.667 7.333a2.667 2.667 0 0 1 2.666-2.666h1.334a2.667 2.667 0 0 1 2.666 2.666V13.6a.4.4 0 0 1-.4.4H5.067a.4.4 0 0 1-.4-.4zM4.667 8.667h6.666M8 4.667V2m0 0H6m2 0h.667'
		/>
	</svg>
);
export default SvgSoap;
