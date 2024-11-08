import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFingerprintScan = ({
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
			d='M4.667 10.667V7.574c0-.34.067-.666.19-.969m6.476 4.062V8.544M6.148 5.156A3.67 3.67 0 0 1 8 4.666c1.52 0 2.802.888 3.203 2.1M6.667 11.333v-1.45m2.666 1.45V7.902c0-.682-.597-1.235-1.333-1.235s-1.333.553-1.333 1.235v.53M4 2H2v2M12 2h2v2M4 14H2v-2M12 14h2v-2'
		/>
	</svg>
);
export default SvgFingerprintScan;
