import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSwitchOff = ({
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
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M4.667 8.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M11.333 11.333H4.667a3.333 3.333 0 0 1 0-6.666h6.666a3.333 3.333 0 1 1 0 6.666Z'
		/>
	</svg>
);
export default SvgSwitchOff;
