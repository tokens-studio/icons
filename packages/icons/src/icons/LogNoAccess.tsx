import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgLogNoAccess = ({
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
			d='M11.9043 6.13337C11.4203 5.63968 10.7459 5.33337 9.99992 5.33337C8.52719 5.33337 7.33325 6.52728 7.33325 8.00004C7.33325 8.72684 7.62399 9.38571 8.09552 9.86671M11.9043 6.13337C12.3759 6.61437 12.6666 7.27324 12.6666 8.00004C12.6666 9.47277 11.4727 10.6667 9.99992 10.6667C9.25392 10.6667 8.57952 10.3604 8.09552 9.86671M11.9043 6.13337L8.09552 9.86671'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12.6666 4V3.33333C12.6666 2.59695 12.0697 2 11.3333 2H4.66659C3.93021 2 3.33325 2.59695 3.33325 3.33333V12.6667C3.33325 13.4031 3.93021 14 4.66659 14H11.3333C12.0697 14 12.6666 13.4031 12.6666 12.6667V12'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgLogNoAccess;
