import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCloud = ({
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
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M9 2.667c-4 0-4 2.666-4 4-1.111 0-3.333.666-3.333 3.333S3.889 13.333 5 13.333h8c1.111 0 3.333-.666 3.333-3.333S14.111 6.667 13 6.667c0-1.334 0-4-4-4Z'
		/>
	</svg>
);
export default SvgCloud;
