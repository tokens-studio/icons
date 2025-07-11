import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMinimize02 = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		width={props.width || 24}
		height={props.height || 24}
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden={!title}
		strokeWidth={props.strokeWidth || 1.5 * (24 / (Number(props.width) || 24))}
		preserveAspectRatio='xMidYMid meet'
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			d='M2.99986 7.99994H3.19986C4.88002 7.99994 5.7201 7.99994 6.36183 7.67296C6.92632 7.38534 7.38526 6.9264 7.67288 6.36191C7.99986 5.72018 7.99986 4.8801 7.99986 3.19994V2.99994M2.99986 15.9999H3.19986C4.88002 15.9999 5.7201 15.9999 6.36183 16.3269C6.92632 16.6145 7.38526 17.0735 7.67288 17.638C7.99986 18.2797 7.99986 19.1198 7.99986 20.7999V20.9999M15.9999 2.99994V3.19994C15.9999 4.8801 15.9999 5.72018 16.3268 6.36191C16.6145 6.9264 17.0734 7.38534 17.6379 7.67296C18.2796 7.99994 19.1197 7.99994 20.7999 7.99994H20.9999M15.9999 20.9999V20.7999C15.9999 19.1198 15.9999 18.2797 16.3268 17.638C16.6145 17.0735 17.0734 16.6145 17.6379 16.3269C18.2796 15.9999 19.1197 15.9999 20.7999 15.9999H20.9999'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgMinimize02;
