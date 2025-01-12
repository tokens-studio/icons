import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCombine = ({
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
			d='M14 6.4V13.6C14 13.8209 13.8209 14 13.6 14H6.4C6.17909 14 6 13.8209 6 13.6V6.4C6 6.17909 6.17909 6 6.4 6H13.6C13.8209 6 14 6.17909 14 6.4Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10 2.4V9.6C10 9.82093 9.82093 10 9.6 10H2.4C2.17909 10 2 9.82093 2 9.6V2.4C2 2.17909 2.17909 2 2.4 2H9.6C9.82093 2 10 2.17909 10 2.4Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgCombine;
