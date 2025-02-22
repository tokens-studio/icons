import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCity = ({
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
			d='M4.66663 6.00667L4.67329 5.99927'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.33337 6.00667L7.34004 5.99927'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.66663 8.67335L4.67329 8.66595'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.33337 8.67335L7.34004 8.66595'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.66663 11.34L4.67329 11.3326'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.33337 11.34L7.34004 11.3326'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10 14H2.4C2.17909 14 2 13.8209 2 13.6V3.73333C2 3.51242 2.17909 3.33333 2.4 3.33333H6V2.4C6 2.17909 6.17909 2 6.4 2H9.6C9.82093 2 10 2.17909 10 2.4V6M10 14H13.6C13.8209 14 14 13.8209 14 13.6V6.4C14 6.17909 13.8209 6 13.6 6H10M10 14V11.3333M10 6V8.66667M10 11.3333V8.66667M10 11.3333H11.3333M10 8.66667H11.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgCity;
