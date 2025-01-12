import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPcMouse = ({
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
			d='M8.00008 1.33337C10.9456 1.33337 13.3334 3.72119 13.3334 6.66671V9.33337C13.3334 12.2789 10.9456 14.6667 8.00008 14.6667C5.05456 14.6667 2.66675 12.2789 2.66675 9.33337V6.66671C2.66675 3.72119 5.05456 1.33337 8.00008 1.33337ZM8.00008 1.33337V6.00004'
			stroke='currentColor'
			strokeLinecap='round'
		/>
	</svg>
);
export default SvgPcMouse;
