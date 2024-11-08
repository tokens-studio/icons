import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBasketballField = ({
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
			strokeWidth={1.5}
			d='M8 3.333h6.267c.22 0 .4.18.4.4v8.534a.4.4 0 0 1-.4.4H8m0-9.334H1.733a.4.4 0 0 0-.4.4v8.534c0 .22.18.4.4.4H8m0-9.334v9.334'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M8 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4M1.333 11.333a3.333 3.333 0 1 0 0-6.666M14.667 11.333a3.333 3.333 0 0 1 0-6.666'
		/>
	</svg>
);
export default SvgBasketballField;
