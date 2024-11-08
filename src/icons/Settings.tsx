import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSettings = ({
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
			d='M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m13.082 6.93-.732-1.767L13.333 4 12 2.667l-1.157.988-1.804-.742-.415-1.58H7.32l-.422 1.601-1.763.743L4 2.667 2.667 4l.969 1.193-.721 1.771-1.582.37v1.333l1.601.437.743 1.763L2.667 12 4 13.333l1.194-.973 1.737.715.402 1.592h1.334l.403-1.591 1.767-.732c.294.21 1.163.99 1.163.99L13.333 12l-.989-1.167.732-1.768 1.59-.413V7.333z'
		/>
	</svg>
);
export default SvgSettings;
