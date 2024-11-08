import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTemperatureHigh = ({
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
			d='M4 8a3.333 3.333 0 1 0 4 0M4 8V2h4v6M8 2h1.333M8 4h1.333M8 6h1.333M12.667 4.667a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M6 9.333A1.333 1.333 0 1 0 6 12a1.333 1.333 0 0 0 0-2.667m0 0V4'
		/>
	</svg>
);
export default SvgTemperatureHigh;
