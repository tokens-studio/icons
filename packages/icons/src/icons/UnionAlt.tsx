import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgUnionAlt = ({
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
			d='M5.99992 14.6666C8.57725 14.6666 10.6666 12.5773 10.6666 9.99992C10.6666 7.42259 8.57725 5.33325 5.99992 5.33325C3.42259 5.33325 1.33325 7.42259 1.33325 9.99992C1.33325 12.5773 3.42259 14.6666 5.99992 14.6666Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.99992 10.6666C12.5773 10.6666 14.6666 8.57725 14.6666 5.99992C14.6666 3.42259 12.5773 1.33325 9.99992 1.33325C7.42259 1.33325 5.33325 3.42259 5.33325 5.99992C5.33325 8.57725 7.42259 10.6666 9.99992 10.6666Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgUnionAlt;
