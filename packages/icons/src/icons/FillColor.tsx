import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFillColor = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		width={props.width || 16}
		height={props.height || 16}
		viewBox='0 0 16 16'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden={!title}
		strokeWidth={props.strokeWidth || 1.5 * (16 / (Number(props.width) || 16))}
		preserveAspectRatio='xMidYMid meet'
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			d='M1.75722 6.86178L6.47127 2.14777L12.1281 7.80465L7.41405 12.5186C6.89338 13.0394 6.04916 13.0394 5.52846 12.5186L1.75722 8.74745C1.23653 8.22671 1.23653 7.38251 1.75722 6.86178Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.52856 1.20508L6.47137 2.14788'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M13.3327 10C13.3327 10 15.3327 11.9956 15.3329 13.2577C15.3331 14.3615 14.4367 15.2577 13.3331 15.2577C12.2294 15.2577 11.3413 14.3615 11.3333 13.2577C11.3398 11.9949 13.3327 10 13.3327 10Z'
			stroke='currentColor'
			strokeMiterlimit={1.5}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgFillColor;
