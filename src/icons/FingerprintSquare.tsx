import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFingerprintSquare = ({
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
			d='M4.667 10.667V7.574c0-.34.067-.666.19-.969m6.476 4.062V8.544M6.148 5.156A3.67 3.67 0 0 1 8 4.666c1.52 0 2.802.888 3.203 2.1M6.667 11.333v-1.45m2.666 1.45V7.902c0-.682-.597-1.235-1.333-1.235s-1.333.553-1.333 1.235v.53'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M14 2.4v11.2a.4.4 0 0 1-.4.4H2.4a.4.4 0 0 1-.4-.4V2.4c0-.22.18-.4.4-.4h11.2c.22 0 .4.18.4.4'
		/>
	</svg>
);
export default SvgFingerprintSquare;
