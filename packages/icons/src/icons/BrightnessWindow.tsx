import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBrightnessWindow = ({
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
			d='M7.99992 14H2.66659C1.93021 14 1.33325 13.4031 1.33325 12.6667V3.33333C1.33325 2.59695 1.93021 2 2.66659 2H13.3333C14.0697 2 14.6666 2.59695 14.6666 3.33333V8'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M1.33325 4.66666H14.6666'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.33325 3.33999L3.33992 3.33258'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.33325 3.33999L5.33992 3.33258'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.33325 3.33999L7.33992 3.33258'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.9999 9.33334L12.8163 10.0291L13.8855 10.1144L13.9709 11.1836L14.6666 12L13.9709 12.8164L13.8855 13.8856L12.8163 13.9709L11.9999 14.6667L11.1835 13.9709L10.1143 13.8856L10.029 12.8164L9.33325 12L10.029 11.1836L10.1143 10.1144L11.1835 10.0291L11.9999 9.33334Z'
			stroke='currentColor'
		/>
		<path
			d='M11.1835 13.9709L11.9999 14.6667V9.33334L11.1835 10.0291L10.1143 10.1144L10.029 11.1836L9.33325 12L10.029 12.8164L10.1143 13.8856L11.1835 13.9709Z'
			fill='currentColor'
		/>
	</svg>
);
export default SvgBrightnessWindow;
