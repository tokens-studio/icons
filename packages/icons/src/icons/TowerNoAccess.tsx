import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTowerNoAccess = ({
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
			d='M13.2378 10.1333C12.7538 9.63959 12.0794 9.33325 11.3334 9.33325C9.86068 9.33325 8.66675 10.5272 8.66675 11.9999C8.66675 12.7267 8.95748 13.3856 9.42901 13.8666M13.2378 10.1333C13.7093 10.6143 14.0001 11.2731 14.0001 11.9999C14.0001 13.4727 12.8061 14.6666 11.3334 14.6666C10.5874 14.6666 9.91301 14.3603 9.42901 13.8666M13.2378 10.1333L9.42901 13.8666'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6 14.6666H4.66667C3.93029 14.6666 3.33333 14.0697 3.33333 13.3333V7.45438C3.33333 7.37538 3.30996 7.29818 3.26615 7.23245L2.06718 5.43402C2.02337 5.36831 2 5.29111 2 5.21214V1.73325C2 1.51234 2.17909 1.33325 2.4 1.33325H3.6C3.82091 1.33325 4 1.51234 4 1.73325V2.93325C4 3.15417 4.17909 3.33325 4.4 3.33325H6.26667C6.48758 3.33325 6.66667 3.15417 6.66667 2.93325V1.73325C6.66667 1.51234 6.84573 1.33325 7.06667 1.33325H8.93333C9.15427 1.33325 9.33333 1.51234 9.33333 1.73325V2.93325C9.33333 3.15417 9.5124 3.33325 9.73333 3.33325H11.6C11.8209 3.33325 12 3.15417 12 2.93325V1.73325C12 1.51234 12.1791 1.33325 12.4 1.33325H13.6C13.8209 1.33325 14 1.51234 14 1.73325V5.21214C14 5.29111 13.9766 5.36831 13.9328 5.43402L13.3333 6.33325'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgTowerNoAccess;
