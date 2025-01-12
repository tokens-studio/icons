import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSpades = ({
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
			d='M8 9.66659C10 12.6666 14 12.647 14 9.33325C14 6.66659 11.3333 4.66659 8 1.33325C4.66667 4.66659 2 6.66659 2 9.33325C2 12.647 6 12.6666 8 9.66659Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.64706 10.3284L5.64705 14.0784C5.50495 14.3449 5.69803 14.6667 5.99999 14.6667H9.99999C10.302 14.6667 10.4951 14.3449 10.3529 14.0784L8.35293 10.3284C8.20233 10.0461 7.79766 10.0461 7.64706 10.3284Z'
			stroke='currentColor'
			strokeLinecap='round'
		/>
	</svg>
);
export default SvgSpades;
