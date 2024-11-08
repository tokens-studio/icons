import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgChurchSide = ({
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
			d='M5.05 4.95a.4.4 0 0 1 .566 0l2.267 2.266A.4.4 0 0 1 8 7.5v6.768a.4.4 0 0 1-.4.4H3.067a.4.4 0 0 1-.4-.4V7.499a.4.4 0 0 1 .117-.283zM5.333 4.667v-2m0 0V1.333m0 1.334H4m1.333 0h1.334'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M8 14.667h4.933a.4.4 0 0 0 .4-.4V7.166a.4.4 0 0 0-.117-.283l-2.099-2.1a.4.4 0 0 0-.283-.116h-5.5M5.333 14.667v-3.334M5.333 8.673l.007-.007'
		/>
	</svg>
);
export default SvgChurchSide;
