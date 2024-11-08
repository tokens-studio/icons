import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMicrophone = ({
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
			d='M10 3.333a2 2 0 1 0-4 0v4a2 2 0 1 0 4 0z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M3.333 6.667v.666a4.667 4.667 0 1 0 9.334 0v-.666M8 12v2.667m0 0H6m2 0h2'
		/>
	</svg>
);
export default SvgMicrophone;
