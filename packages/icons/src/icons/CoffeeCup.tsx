import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCoffeeCup = ({
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
			d='M11.3333 7.73331V9.99998C11.3333 12.2091 9.54247 14 7.33333 14H6C3.79086 14 2 12.2091 2 9.99998V7.73331C2 7.51238 2.17909 7.33331 2.4 7.33331H10.9333C11.1543 7.33331 11.3333 7.51238 11.3333 7.73331Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 5.99998C8 5.33331 8.4762 4.66665 9.4286 4.66665C10.4805 4.66665 11.3333 3.81385 11.3333 2.76189V2.33331'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.33325 6V5.66667C5.33325 4.5621 6.22869 3.66667 7.33325 3.66667C8.06965 3.66667 8.66659 3.06971 8.66659 2.33333V2'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.6667 7.33331H12.3334C13.2539 7.33331 14.0001 8.07951 14.0001 8.99998C14.0001 9.92045 13.2539 10.6666 12.3334 10.6666H11.3334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgCoffeeCup;
