import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgStarHalfDashed = ({
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
			d='M8.54335 2.00259C8.32109 1.5548 7.67889 1.5548 7.45655 2.00259L7.12622 2.668'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.99997 12.4519L6.9519 12.9999'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.78097 12.9126L3.65763 13.6276C3.57272 14.1198 4.09239 14.4952 4.53697 14.2627L5.10182 13.9674'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.16839 10.6667L4.31884 9.79455L3.85559 9.34595'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2.46588 8L1.51721 7.08127C1.15749 6.73287 1.35552 6.12563 1.85239 6.05341L2.59288 5.9458'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.66663 5.64432L5.72487 5.49053L6.26037 4.41187'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.2751 5.49073L8.5434 2.00259C8.43227 1.77869 8.21613 1.66675 8 1.66675V12.4521L11.463 14.2628C11.9076 14.4953 12.4273 14.1199 12.3423 13.6277L11.6811 9.79462L14.4829 7.08135C14.8425 6.73301 14.6445 6.12573 14.1477 6.05353L10.2751 5.49073Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgStarHalfDashed;
