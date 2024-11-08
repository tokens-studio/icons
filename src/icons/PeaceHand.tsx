import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPeaceHand = ({
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
			strokeWidth={1.5}
			d='M9.433 6.314V2.408a1.074 1.074 0 1 0-2.15 0V5.63'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeWidth={1.5}
			d='m10.897 8.56 1.45-4.834a1.056 1.056 0 1 0-2.028-.588l-.887 3.176M5.08 6.167l.703 1.56a1.074 1.074 0 1 1-1.959.884L3.121 7.05a1.074 1.074 0 0 1 1.959-.883Z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeWidth={1.5}
			d='M7.813 8.174c.136-.378.12-.795-.045-1.161l-.716-1.587a1.056 1.056 0 1 0-1.91.9l.091.184'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeWidth={1.5}
			d='m9.238 11.784.328-.656a.117.117 0 0 0-.072-.164l-2.367-.697a1.025 1.025 0 0 1 .384-2.003l3.192.297s2.54.391 1.66 2.93c-.879 2.54-1.172 3.419-3.125 3.419H5.917a2.83 2.83 0 0 1-2.832-2.832l-.098-5.47'
		/>
	</svg>
);
export default SvgPeaceHand;
