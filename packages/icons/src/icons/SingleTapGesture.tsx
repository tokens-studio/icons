import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSingleTapGesture = ({
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
			d='M8.00004 13.6666C10.5774 13.6666 12.6667 11.5773 12.6667 8.99992C12.6667 6.42259 10.5774 4.33325 8.00004 4.33325C5.42271 4.33325 3.33337 6.42259 3.33337 8.99992C3.33337 11.5773 5.42271 13.6666 8.00004 13.6666Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2.66663 4.85989C3.66411 3.35911 5.67801 2.33325 7.99996 2.33325C10.3219 2.33325 12.3358 3.35911 13.3333 4.85989'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgSingleTapGesture;
