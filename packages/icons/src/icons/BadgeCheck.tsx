import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBadgeCheck = ({
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
			d='M7.01418 1.74913C7.54312 1.16838 8.45685 1.16838 8.98578 1.74913L9.66592 2.49595C9.93318 2.78947 10.3174 2.9486 10.714 2.93007L11.723 2.88291C12.5076 2.84624 13.1538 3.49239 13.1171 4.27704L13.0699 5.28605C13.0514 5.6826 13.2105 6.06679 13.504 6.33409L14.2508 7.01421C14.8316 7.54315 14.8316 8.45688 14.2508 8.98581L13.504 9.66595C13.2105 9.93321 13.0514 10.3174 13.0699 10.714L13.1171 11.723C13.1538 12.5076 12.5076 13.1538 11.723 13.1171L10.714 13.0699C10.3174 13.0514 9.93318 13.2105 9.66592 13.5041L8.98578 14.2509C8.45685 14.8317 7.54312 14.8317 7.01418 14.2509L6.33406 13.5041C6.06676 13.2105 5.68257 13.0514 5.28602 13.0699L4.277 13.1171C3.49236 13.1538 2.84621 12.5076 2.88288 11.723L2.93004 10.714C2.94857 10.3174 2.78944 9.93321 2.49592 9.66595L1.7491 8.98581C1.16835 8.45688 1.16835 7.54315 1.7491 7.01421L2.49592 6.33409C2.78944 6.06679 2.94857 5.6826 2.93004 5.28605L2.88288 4.27703C2.84621 3.49239 3.49236 2.84624 4.27701 2.88291L5.28602 2.93007C5.68257 2.9486 6.06676 2.78947 6.33406 2.49595L7.01418 1.74913Z'
			stroke='currentColor'
		/>
		<path
			d='M6 7.99999L7.33333 9.33332L10 6.66666'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgBadgeCheck;
