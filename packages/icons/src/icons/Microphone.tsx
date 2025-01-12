import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMicrophone = ({
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
			d='M10 3.33337C10 2.2288 9.10457 1.33337 8 1.33337C6.89543 1.33337 6 2.2288 6 3.33337V7.33337C6 8.43794 6.89543 9.33337 8 9.33337C9.10457 9.33337 10 8.43794 10 7.33337V3.33337Z'
			stroke='currentColor'
		/>
		<path
			d='M3.33331 6.66663V7.33329C3.33331 9.91063 5.42265 12 7.99998 12C10.5773 12 12.6666 9.91063 12.6666 7.33329V6.66663'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 12V14.6667M8 14.6667H6M8 14.6667H10'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgMicrophone;
