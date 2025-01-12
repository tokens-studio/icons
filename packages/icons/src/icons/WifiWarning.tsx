import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgWifiWarning = ({
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
			d='M1.41755 5.54915C1.28376 5.37507 1.31421 5.14587 1.47436 5.02329C3.52684 3.45226 5.70188 2.66675 7.99951 2.66675C10.2971 2.66675 12.4721 3.45226 14.5246 5.02329C14.6925 5.1648 14.7117 5.39523 14.5814 5.54919L8.27824 12.9979C8.26518 13.0133 8.25084 13.0277 8.23538 13.0407C8.08144 13.171 7.85098 13.1518 7.72071 12.9979L1.41755 5.54915Z'
			stroke='currentColor'
		/>
		<path
			d='M8 5.33325V6.66659'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 9.33992L8.00667 9.33252'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgWifiWarning;
