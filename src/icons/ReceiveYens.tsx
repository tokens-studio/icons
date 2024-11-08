import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgReceiveYens = ({
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
			d='M14 8H8.667m0 0 2.56-2.667M8.667 8l2.56 2.667M2 8.667h5.333M2 4.667l2.667 3.666m0 0 2.666-3.666M4.667 8.333V12M2 10h5.333'
		/>
	</svg>
);
export default SvgReceiveYens;
