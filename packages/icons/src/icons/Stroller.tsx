import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgStroller = ({
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
			d='M7.66667 2C4.53705 2 2 4.53705 2 7.66667C2 8.7684 2.3144 9.79667 2.85837 10.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12.475 10.6666C13.0189 9.79659 13.3333 8.76832 13.3333 7.66659V6.33325H15'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.33333 13.9999C4.59695 13.9999 4 13.403 4 12.6666C4 11.9302 4.59695 11.3333 5.33333 11.3333C6.06971 11.3333 6.66667 11.9302 6.66667 12.6666C6.66667 13.403 6.06971 13.9999 5.33333 13.9999Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.99996 13.9999C9.26356 13.9999 8.66663 13.403 8.66663 12.6666C8.66663 11.9302 9.26356 11.3333 9.99996 11.3333C10.7364 11.3333 11.3333 11.9302 11.3333 12.6666C11.3333 13.403 10.7364 13.9999 9.99996 13.9999Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.66663 2V8'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2.33337 8H13'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgStroller;
