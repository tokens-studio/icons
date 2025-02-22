import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSuitcase = ({
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
			d='M5.33325 4.66667H2.66659C1.93021 4.66667 1.33325 5.26362 1.33325 6V12.6667C1.33325 13.4031 1.93021 14 2.66659 14H13.3333C14.0697 14 14.6666 13.4031 14.6666 12.6667V6C14.6666 5.26362 14.0697 4.66667 13.3333 4.66667H10.6666M5.33325 4.66667V2.4C5.33325 2.17909 5.51234 2 5.73325 2H10.2666C10.4875 2 10.6666 2.17909 10.6666 2.4V4.66667M5.33325 4.66667H10.6666'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgSuitcase;
