import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPuzzle = ({
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
			d='M2.667 9.333v2.934c0 .22.179.4.4.4h3.6M12.667 9.333v2.934a.4.4 0 0 1-.4.4H9.333M9.333 3.333h2.934c.22 0 .4.18.4.4v2.934M2.667 6.667V3.733c0-.22.179-.4.4-.4h3.6M9.333 12.667v.666a1.333 1.333 0 1 1-2.666 0v-.666M2.667 6.667h.666a1.333 1.333 0 1 1 0 2.666h-.666M12.667 6.667h.666a1.333 1.333 0 1 1 0 2.666h-.666M9.333 3.333v-.666a1.333 1.333 0 1 0-2.666 0v.666'
		/>
	</svg>
);
export default SvgPuzzle;
