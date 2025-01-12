import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDoubleCheck = ({
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
			d='M1 8.33331L3.71716 11.0504C3.87337 11.2067 4.12663 11.2067 4.28284 11.0504L6 9.33331'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M10.6667 4.66669L8 7.33335'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M4.66663 8.00002L7.71709 11.0505C7.87336 11.2068 8.12656 11.2068 8.28283 11.0505L14.6666 4.66669'
			stroke='currentColor'
			strokeLinecap='round'
		/>
	</svg>
);
export default SvgDoubleCheck;
