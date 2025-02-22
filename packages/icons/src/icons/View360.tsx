import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgView360 = ({
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
			d='M2.66667 5.66659H3.83333M3.83333 5.66659C4.47767 5.66659 5 6.18892 5 6.83325C5 7.47759 4.47767 7.99992 3.83333 7.99992H2M3.83333 5.66659C4.47767 5.66659 5 5.14425 5 4.49992C5 3.85559 4.47767 3.33325 3.83333 3.33325H2'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14 10C14 12.2091 11.3137 14 8 14C4.68629 14 2 12.2091 2 10'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.33329 3.33325H8.66663C7.56203 3.33325 6.66663 4.22869 6.66663 5.33325V6.66659M6.66663 6.66659C6.66663 7.40299 7.26356 7.99992 7.99996 7.99992H8.33329C9.06969 7.99992 9.66663 7.40299 9.66663 6.66659V6.33325C9.66663 5.59687 9.06969 4.99992 8.33329 4.99992H7.99996C7.26356 4.99992 6.66663 5.59687 6.66663 6.33325V6.66659Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.3334 5.66659V4.66659C11.3334 3.93021 11.9303 3.33325 12.6667 3.33325H13C13.7364 3.33325 14.3334 3.93021 14.3334 4.66659V5.66659V6.66659C14.3334 7.40299 13.7364 7.99992 13 7.99992H12.6667C11.9303 7.99992 11.3334 7.40299 11.3334 6.66659V5.66659Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgView360;
