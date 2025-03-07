import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgShortPants = ({
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
			d='M8.00003 11.2001H12.6442C12.8471 11.2001 13.0178 11.0481 13.0414 10.8466L13.9477 3.1133C13.9756 2.87557 13.7898 2.66675 13.5504 2.66675H2.43928C2.20362 2.66675 2.01903 2.86945 2.04103 3.10409L2.96603 12.9707C2.9853 13.1763 3.15783 13.3334 3.36428 13.3334H7.60003C7.82096 13.3334 8.00003 13.1543 8.00003 12.9334V8.00008'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgShortPants;
