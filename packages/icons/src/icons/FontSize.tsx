import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFontSize = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		width={props.width || 16}
		height={props.height || 16}
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden={!title}
		strokeWidth={props.strokeWidth || 2 * (16 / (Number(props.width) || 16))}
		preserveAspectRatio='xMidYMid meet'
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			d='M6 12.9999L12 12.9999M4 16.9999L8.27171 7.60219C8.50308 7.09318 8.61876 6.83867 8.77907 6.75971C8.91837 6.6911 9.08163 6.6911 9.22093 6.75971C9.38124 6.83867 9.49692 7.09318 9.72829 7.60219L14 16.9999M18.5 17V7M18.5 17L20 15.5M18.5 17L17 15.5M18.5 7L20 8.5M18.5 7L17 8.5'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgFontSize;
