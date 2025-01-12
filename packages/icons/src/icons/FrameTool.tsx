import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFrameTool = ({
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
			d='M1.33325 4.66665H1.99992M1.33325 11.3333H1.99992M13.9999 4.66665H14.6666M13.9999 11.3333H14.6666M11.3333 1.99998V1.33331M4.66659 1.99998V1.33331M11.3333 14.6666V14M4.66659 14.6666V14M11.9999 4.39998V11.6C11.9999 11.8209 11.8209 12 11.5999 12H4.39992C4.17901 12 3.99992 11.8209 3.99992 11.6V4.39998C3.99992 4.17907 4.17901 3.99998 4.39992 3.99998H11.5999C11.8209 3.99998 11.9999 4.17907 11.9999 4.39998Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgFrameTool;
