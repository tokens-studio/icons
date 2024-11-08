import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCalculator = ({
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
			d='M1.667 15V3c0-.736.597-1.333 1.333-1.333h12c.736 0 1.333.597 1.333 1.333v12c0 .736-.597 1.333-1.333 1.333H3A1.333 1.333 0 0 1 1.667 15Z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M11 5.667h2.667M11 11.333h2.667M11 13.333h2.667M4.333 5.667h1.334m0 0H7m-1.333 0V4.333m0 1.334V7M4.724 13.276l.943-.943m0 0 .943-.943m-.943.943-.943-.943m.943.943.943.943'
		/>
	</svg>
);
export default SvgCalculator;
