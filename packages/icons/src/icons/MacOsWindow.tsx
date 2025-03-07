import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMacOsWindow = ({
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
			d='M1.33331 11.8095V4.19043C1.33331 3.34886 1.99659 2.66663 2.81479 2.66663H13.1852C14.0034 2.66663 14.6666 3.34886 14.6666 4.19043V11.8095C14.6666 12.6511 14.0034 13.3333 13.1852 13.3333H2.81479C1.99659 13.3333 1.33331 12.6511 1.33331 11.8095Z'
			stroke='currentColor'
		/>
		<path
			d='M3.33331 4.67342L3.33998 4.66602'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.66669 4.67342L4.67335 4.66602'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6 4.67342L6.00667 4.66602'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgMacOsWindow;
