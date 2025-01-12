import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgRocket = ({
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
			d='M10.7076 6.93579L9.33337 11.3333H6.66671L5.29247 6.93579C4.90061 5.68181 5.14949 4.31537 5.95829 3.28009L7.68484 1.07012C7.84497 0.865135 8.15511 0.865135 8.31524 1.07012L10.0418 3.28009C10.8506 4.31537 11.0994 5.68181 10.7076 6.93579Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.66663 13.3334C6.66663 14.6667 7.99996 15.3334 7.99996 15.3334C7.99996 15.3334 9.33329 14.6667 9.33329 13.3334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.66661 8.33337C3.33328 10 4.66661 12.6667 4.66661 12.6667L6.66661 11.3334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.6208 8.33337C12.9542 10 11.6208 12.6667 11.6208 12.6667L9.62085 11.3334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.99996 7.33329C7.26356 7.33329 6.66663 6.73636 6.66663 5.99996C6.66663 5.26358 7.26356 4.66663 7.99996 4.66663C8.73636 4.66663 9.33329 5.26358 9.33329 5.99996C9.33329 6.73636 8.73636 7.33329 7.99996 7.33329Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgRocket;
