import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDistributeVertical = ({
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
			d='M6.25 12V12.5C6.25 12.9142 6.58579 13.25 7 13.25H17C17.4142 13.25 17.75 12.9142 17.75 12.5V12M6.25 12V11.5C6.25 11.0858 6.58579 10.75 7 10.75H17C17.4142 10.75 17.75 11.0858 17.75 11.5V12M6.25 12H17.75'
			stroke='currentColor'
		/>
		<path
			opacity={0.5}
			d='M21 4H3M21 20H3'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgDistributeVertical;
