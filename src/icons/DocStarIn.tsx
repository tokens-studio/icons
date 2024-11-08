import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDocStarIn = ({
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
			d='M2.667 14.267V1.733c0-.22.179-.4.4-.4h7.767a.4.4 0 0 1 .283.117l2.1 2.1a.4.4 0 0 1 .116.282v10.435a.4.4 0 0 1-.4.4H3.067a.4.4 0 0 1-.4-.4'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m7.09 6.943.693-1.468a.238.238 0 0 1 .434 0l.693 1.468 1.549.237c.199.03.278.286.134.433l-1.12 1.143.264 1.614c.034.207-.174.365-.352.267L8 9.875l-1.385.762c-.178.098-.386-.06-.352-.268l.265-1.613-1.121-1.143c-.144-.147-.065-.402.134-.433zM10.667 1.333V3.6c0 .22.179.4.4.4h2.266'
		/>
	</svg>
);
export default SvgDocStarIn;
