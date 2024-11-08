import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTriangleFlagTwoStripes = ({
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
			d='M5.333 14v-3.333m0 0 6.482-4.322a.4.4 0 0 0-.01-.673L5.943 2.045a.4.4 0 0 0-.61.34zM5.333 7.333 9.667 4.35'
		/>
	</svg>
);
export default SvgTriangleFlagTwoStripes;
