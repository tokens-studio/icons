import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCircleSpark = ({
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
			d='M14.667 8A6.667 6.667 0 1 1 8 1.333'
		/>
		<path
			stroke='currentColor'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M8.667 4.333c2.089 0 3-.879 3-3 0 2.121.904 3 3 3-2.096 0-3 .905-3 3 0-2.095-.911-3-3-3Z'
		/>
	</svg>
);
export default SvgCircleSpark;
