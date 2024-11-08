import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgOffTag = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={18}
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
			d='M1.667 10V6a4 4 0 0 1 4-4h6.666a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4H5.667a4 4 0 0 1-4-4Z'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M5.667 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M9 10V6h2M12.333 10V6h2M9 8h1.714M12.334 8h1.714'
		/>
	</svg>
);
export default SvgOffTag;
