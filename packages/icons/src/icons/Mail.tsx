import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMail = ({
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
			d='M4.66669 6L8.00002 8.33333L11.3334 6'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.33331 11.3334V4.66671C1.33331 3.93033 1.93027 3.33337 2.66665 3.33337H13.3333C14.0697 3.33337 14.6666 3.93033 14.6666 4.66671V11.3334C14.6666 12.0698 14.0697 12.6667 13.3333 12.6667H2.66665C1.93027 12.6667 1.33331 12.0698 1.33331 11.3334Z'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgMail;
