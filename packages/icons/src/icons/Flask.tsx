import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFlask = ({
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
			d='M12.3334 10H3.66669'
			stroke='currentColor'
			strokeLinejoin='round'
		/>
		<path
			d='M10.6666 2.66669H5.33331'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6 3V6.84013C6 7.1584 5.88615 7.46613 5.67901 7.7078L2.32099 11.6255C2.11385 11.8672 2 12.1749 2 12.4932V12.6667C2 13.4031 2.59695 14 3.33333 14H12.6667C13.4031 14 14 13.4031 14 12.6667V12.4932C14 12.1749 13.8861 11.8672 13.679 11.6255L10.321 7.7078C10.1139 7.46613 10 7.1584 10 6.84013V3'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 6.00667L8.00667 5.99927'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.33331 1.33999L7.33998 1.33258'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgFlask;
