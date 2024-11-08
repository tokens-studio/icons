import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFacetime = ({
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
			d='M1.333 10.667V5.333a4 4 0 0 1 4-4h5.334a4 4 0 0 1 4 4v5.334a4 4 0 0 1-4 4H5.333a4 4 0 0 1-4-4Z'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M4 8.667V7.333C4 6.597 4.597 6 5.333 6h2c.737 0 1.334.597 1.334 1.333v1.334C8.667 9.403 8.07 10 7.333 10h-2A1.333 1.333 0 0 1 4 8.667Z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M11.36 6.147 9.316 7.68a.4.4 0 0 0 0 .64l2.044 1.533a.4.4 0 0 0 .64-.32V6.467a.4.4 0 0 0-.64-.32'
		/>
	</svg>
);
export default SvgFacetime;
