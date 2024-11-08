import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDatabaseTag = ({
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
			d='M1.333 10V6a4 4 0 0 1 4-4h5.334a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4H5.333a4 4 0 0 1-4-4Z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M10.905 8c.476 0 1.428 0 1.428-1.333 0-1.334-.952-1.334-1.428-1.334H9V8m1.905 0H9m1.905 0c.476 0 1.428 0 1.428 1.333 0 1.334-.952 1.334-1.428 1.334H9V8M5.571 5.333H3.667v5.334H5.57c.477 0 1.429 0 1.429-1.334V6.667c0-1.334-.952-1.334-1.429-1.334'
		/>
	</svg>
);
export default SvgDatabaseTag;
