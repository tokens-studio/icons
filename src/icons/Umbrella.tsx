import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgUmbrella = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={18}
		height={18}
		fill='none'
		aria-hidden={!title}
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M14.185 3.696C12.8 2.387 10.96 1.666 9 1.666s-3.8.721-5.186 2.03C2.43 5.004 1.667 6.744 1.667 8.594c0 .224.192.406.43.406.237 0 .429-.182.429-.406 0-.675.581-1.224 1.296-1.224C5.084 7.37 4.621 9 5.548 9s.464-1.63 1.726-1.63S9 9 9 9s.464-1.63 1.726-1.63c1.261 0 .933 1.63 1.726 1.63s.464-1.63 1.726-1.63c.714 0 1.296.549 1.296 1.224 0 .224.192.406.43.406.237 0 .43-.182.43-.406 0-1.85-.763-3.59-2.149-4.898Z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M9 9v5.333C9 17 5 17 5 14.333'
		/>
	</svg>
);
export default SvgUmbrella;
