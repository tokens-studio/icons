import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgUnionHorizAlt = ({
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
			d='M6.33341 12.6666C8.91075 12.6666 11.0001 10.5773 11.0001 7.99992C11.0001 5.42259 8.91075 3.33325 6.33341 3.33325C3.75609 3.33325 1.66675 5.42259 1.66675 7.99992C1.66675 10.5773 3.75609 12.6666 6.33341 12.6666Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.6667 12.6666C14.244 12.6666 16.3333 10.5773 16.3333 7.99992C16.3333 5.42259 14.244 3.33325 11.6667 3.33325C9.08933 3.33325 7 5.42259 7 7.99992C7 10.5773 9.08933 12.6666 11.6667 12.6666Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgUnionHorizAlt;
