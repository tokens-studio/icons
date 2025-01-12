import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAlignHorizontalSpacing = ({
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
			d='M2 14.6667V1.33333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14 14.6667V1.33333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.99996 10.6667H5.99996C5.26358 10.6667 4.66663 10.0697 4.66663 9.33333V6.66666C4.66663 5.93028 5.26358 5.33333 5.99996 5.33333H9.99996C10.7364 5.33333 11.3333 5.93028 11.3333 6.66666V9.33333C11.3333 10.0697 10.7364 10.6667 9.99996 10.6667Z'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgAlignHorizontalSpacing;
