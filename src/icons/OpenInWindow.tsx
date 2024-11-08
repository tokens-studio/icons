import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgOpenInWindow = ({
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
			d='M5.333 14H13.6a.4.4 0 0 0 .4-.4V2.4a.4.4 0 0 0-.4-.4H2.4a.4.4 0 0 0-.4.4v8.267M2.333 13.667 8 8m0 0v2.667M8 8H5.333'
		/>
	</svg>
);
export default SvgOpenInWindow;
