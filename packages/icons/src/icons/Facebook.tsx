import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFacebook = ({
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
			d='M11.3333 1.33331H9.33333C8.44927 1.33331 7.6014 1.6845 6.97633 2.30963C6.35119 2.93475 6 3.78259 6 4.66665V6.66665H4V9.33331H6V14.6666H8.66667V9.33331H10.6667L11.3333 6.66665H8.66667V4.66665C8.66667 4.48983 8.73693 4.32027 8.86193 4.19524C8.98693 4.07022 9.15653 3.99998 9.33333 3.99998H11.3333V1.33331Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgFacebook;
