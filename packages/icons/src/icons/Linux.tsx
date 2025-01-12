import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgLinux = ({
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
			d='M1.66663 13.3333C2.33329 13.3333 2.99996 12.8 2.99996 12C2.99996 11.2 2.99996 8.88883 2.99996 7.33329C2.99996 4.99996 5.06663 2.66663 7.99996 2.66663'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M14.3333 13.3333C13.6667 13.3333 13 12.8 13 12V7.33329C13 4.99996 10.9333 2.66663 8 2.66663'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M7.99996 12.6667C9.84089 12.6667 11.3333 11.9205 11.3333 11C11.3333 10.0796 9.84089 9.33337 7.99996 9.33337C6.15901 9.33337 4.66663 10.0796 4.66663 11C4.66663 11.9205 6.15901 12.6667 7.99996 12.6667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.16687 10C4.85817 9.57647 4.66663 8.9862 4.66663 8.33333C4.66663 7.04467 5.41282 6 6.33329 6C7.25376 6 7.99996 7.04467 7.99996 8.33333C7.99996 8.63693 7.95856 8.92693 7.88323 9.193'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.8331 10C11.1418 9.57647 11.3333 8.9862 11.3333 8.33333C11.3333 7.04467 10.5871 6 9.66667 6C8.7462 6 8 7.04467 8 8.33333C8 8.63693 8.0414 8.92693 8.11673 9.193'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.33337 8V9.33333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.66663 8V9.33333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgLinux;
