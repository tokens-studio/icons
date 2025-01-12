import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgGlasses = ({
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
			d='M1.33337 9.33333C1.33337 10.8061 2.52728 12 4.00004 12C5.4728 12 6.66671 10.8061 6.66671 9.33333C6.66671 7.8606 5.4728 6.66667 4.00004 6.66667C2.52728 6.66667 1.33337 7.8606 1.33337 9.33333ZM1.33337 9.33333V4'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14.6667 9.33333C14.6667 10.8061 13.4728 12 12 12C10.5273 12 9.33337 10.8061 9.33337 9.33333C9.33337 7.8606 10.5273 6.66667 12 6.66667C13.4728 6.66667 14.6667 7.8606 14.6667 9.33333ZM14.6667 9.33333V4'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.33329 9.33337H6.66663'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgGlasses;
