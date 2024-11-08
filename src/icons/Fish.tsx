import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFish = ({
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
			d='M7 6s0-1.333-.667-2.667C9 3.333 10.667 5 10.667 5s2.333-.333 4 3c-.667 3.667-4 4-4 4L8 13.667v-2C6.333 11 4.667 9.333 4.667 8.333S7 6 7 6m0 0s.667-.333 1.333-.333M1.333 6.333l.667 2-.667 2s3.334 0 3.334-2-3.334-2-3.334-2M11.333 8.007l.007-.008'
		/>
	</svg>
);
export default SvgFish;
