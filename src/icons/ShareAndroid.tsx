import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgShareAndroid = ({
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
			d='M12 14.667a2 2 0 1 0 0-4 2 2 0 0 0 0 4M12 5.333a2 2 0 1 0 0-4 2 2 0 0 0 0 4M4 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M10.333 4.333 5.667 7M5.667 9l4.666 2.667'
		/>
	</svg>
);
export default SvgShareAndroid;
