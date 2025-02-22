import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgUmbrella = ({
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
			d='M14.1854 3.69566C12.8004 2.38724 10.9588 1.66675 8.99996 1.66675C7.04116 1.66675 5.19952 2.38734 3.81443 3.69566C2.42945 5.00419 1.66663 6.74379 1.66663 8.59415C1.66663 8.81835 1.85898 9.00008 2.09621 9.00008C2.33355 9.00008 2.5259 8.81835 2.5259 8.59415C2.5259 7.91901 3.10745 7.36967 3.82215 7.36967C5.08378 7.36967 4.62088 9.00008 5.54809 9.00008C6.47529 9.00008 6.01243 7.36967 7.27402 7.36967C8.53563 7.36967 8.99996 9.00008 8.99996 9.00008C8.99996 9.00008 9.46429 7.36967 10.7259 7.36967C11.9875 7.36967 11.6586 9.00008 12.4518 9.00008C13.2451 9.00008 12.9162 7.36967 14.1778 7.36967C14.8925 7.36967 15.474 7.91901 15.474 8.59415C15.474 8.81835 15.6664 9.00008 15.9037 9.00008C16.141 9.00008 16.3333 8.81835 16.3333 8.59415C16.3333 6.74379 15.5706 5.00419 14.1854 3.69566Z'
			stroke='currentColor'
		/>
		<path
			d='M9 9C9 9 9 11.7299 9 14.3333C9 17 5 17 5 14.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgUmbrella;
