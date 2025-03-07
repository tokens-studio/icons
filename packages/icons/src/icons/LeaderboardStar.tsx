import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgLeaderboardStar = ({
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
			d='M10 14H6V8.4C6 8.17907 6.17909 8 6.4 8H9.6C9.82093 8 10 8.17907 10 8.4V14Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13.6 14H10V12.0666C10 11.8457 10.1791 11.6666 10.4 11.6666H13.6C13.8209 11.6666 14 11.8457 14 12.0666V13.6C14 13.8209 13.8209 14 13.6 14Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6 14V10.7334C6 10.5124 5.82091 10.3334 5.6 10.3334H2.4C2.17909 10.3334 2 10.5124 2 10.7334V13.6C2 13.821 2.17909 14 2.4 14H6Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.20369 3.40883L7.80976 2.12374C7.88756 1.95875 8.11236 1.95875 8.19016 2.12374L8.79623 3.40883L10.1516 3.61618C10.3256 3.64279 10.3948 3.86651 10.269 3.99486L9.28836 4.99447L9.51976 6.40666C9.54949 6.58802 9.36763 6.72634 9.21203 6.64066L7.99996 5.97354L6.78789 6.64066C6.6323 6.72634 6.45041 6.58802 6.48013 6.40666L6.71156 4.99447L5.73097 3.99486C5.60507 3.86651 5.67438 3.64279 5.84828 3.61618L7.20369 3.40883Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgLeaderboardStar;
