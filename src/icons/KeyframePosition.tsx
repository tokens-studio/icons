import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgKeyframePosition = ({
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
			d='M11.12 6.256 8.307 9.631a.4.4 0 0 1-.614 0L4.88 6.256a.4.4 0 0 1 0-.512l2.813-3.375a.4.4 0 0 1 .614 0l2.813 3.375a.4.4 0 0 1 0 .512M2 13.333h6m0 0h6m-6 0v-2'
		/>
	</svg>
);
export default SvgKeyframePosition;
