import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAppleImac2021 = ({
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
			d='M1.33333 10.3333V1.73333C1.33333 1.51241 1.51241 1.33333 1.73333 1.33333H14.2667C14.4876 1.33333 14.6667 1.51241 14.6667 1.73333V10.3333M1.33333 10.3333V11.6C1.33333 11.8209 1.51241 12 1.73333 12H14.2667C14.4876 12 14.6667 11.8209 14.6667 11.6V10.3333M1.33333 10.3333H14.6667M5.99999 14.6667H6.99999M6.99999 14.6667V12M6.99999 14.6667H8.99999M8.99999 14.6667H9.99999M8.99999 14.6667V12'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgAppleImac2021;
