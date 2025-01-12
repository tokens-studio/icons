import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPost = ({
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
			d='M1.93735 11.67L3.55806 2.47849C3.68594 1.7533 4.37748 1.26908 5.10267 1.39694L12.9811 2.78613C13.7063 2.914 14.1905 3.60554 14.0627 4.33074L12.4419 13.5222C12.3141 14.2474 11.6225 14.7317 10.8973 14.6038L3.0189 13.2146C2.2937 13.0868 1.80948 12.3952 1.93735 11.67Z'
			stroke='currentColor'
		/>
		<path
			d='M5.9527 4.25452L11.205 5.18064'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M5.48962 6.88086L10.7419 7.80699'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M5.02655 9.50708L8.30924 10.0859'
			stroke='currentColor'
			strokeLinecap='round'
		/>
	</svg>
);
export default SvgPost;
