import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgGroup = ({
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
			d='M1.66675 13.3333V12.6667C1.66675 10.0893 3.75609 8 6.33341 8C8.91075 8 11.0001 10.0893 11.0001 12.6667V13.3333'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M9.66675 9.33333C9.66675 7.4924 11.1591 6 13.0001 6C14.841 6 16.3334 7.4924 16.3334 9.33333V9.66667'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M6.33341 7.99996C7.80615 7.99996 9.00008 6.80603 9.00008 5.33329C9.00008 3.86053 7.80615 2.66663 6.33341 2.66663C4.86065 2.66663 3.66675 3.86053 3.66675 5.33329C3.66675 6.80603 4.86065 7.99996 6.33341 7.99996Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13 6C14.1046 6 15 5.10457 15 4C15 2.89543 14.1046 2 13 2C11.8954 2 11 2.89543 11 4C11 5.10457 11.8954 6 13 6Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgGroup;
