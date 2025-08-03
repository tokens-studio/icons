import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgNumberList = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		width={props.width || 16}
		height={props.height || 16}
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden={!title}
		strokeWidth={props.strokeWidth || 2 * (16 / (Number(props.width) || 16))}
		preserveAspectRatio='xMidYMid meet'
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			d='M21 12H10M21 6H10M21 18H10M3 15H4.5C4.66643 14.9875 4.83357 14.9875 5 15C5.2499 15.0422 5.48047 15.1611 5.65968 15.3403C5.83888 15.5195 5.95783 15.7501 6 16C6.014 16.1764 6.014 16.3536 6 16.53C6.011 16.6865 6.011 16.8435 6 17C5.95783 17.2499 5.83888 17.4805 5.65968 17.6597C5.48047 17.8389 5.2499 17.9578 5 18C4.82361 18.014 4.64639 18.014 4.47 18C4.31353 17.989 4.15647 17.989 4 18C3.7501 18.0422 3.51953 18.1611 3.34032 18.3403C3.16112 18.5195 3.04217 18.7501 3 19C2.986 19.1764 2.986 19.3536 3 19.53V20.43C3 20.71 3 20.85 3.09 20.94C3.18 21.03 3.32 21.03 3.6 21.03H6M3 3H4.2C4.23977 2.9986 4.27941 3.0054 4.31644 3.01999C4.35347 3.03457 4.3871 3.05662 4.41524 3.08476C4.44338 3.1129 4.46543 3.14653 4.48001 3.18356C4.49459 3.22059 4.5014 3.26022 4.5 3.3V9M4.5 9H3M4.5 9H6'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgNumberList;
