import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAlignVerticalSpacing = ({
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
			d='M14.6666 2H1.33325'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14.6666 14H1.33325'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.33325 10V6.00001C5.33325 5.26363 5.93021 4.66667 6.66659 4.66667H9.33325C10.0697 4.66667 10.6666 5.26363 10.6666 6.00001V10C10.6666 10.7364 10.0697 11.3333 9.33325 11.3333H6.66659C5.93021 11.3333 5.33325 10.7364 5.33325 10Z'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgAlignVerticalSpacing;
