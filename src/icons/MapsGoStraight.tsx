import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMapsGoStraight = ({
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
			d='m2.91 13.191 4.869-4.328a.333.333 0 0 1 .442 0l4.87 4.328c.253.226.047.641-.286.577l-4.741-.922a.3.3 0 0 0-.128 0l-4.741.922c-.333.064-.539-.351-.285-.577M8 7V2.667m0 0L5.333 4.333M8 2.667l2.667 1.666'
		/>
	</svg>
);
export default SvgMapsGoStraight;
