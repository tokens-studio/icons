import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgLearning = ({
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
			d='M4.54545 14.6667L4.54547 12.762C4.34602 10.7771 2 9.71451 2 6.66697C1.99999 3.61947 3.81825 1.29587 7.45459 1.33383C10.0729 1.36117 12.5455 2.85759 12.5455 5.90511L14 8.19071C14 9.71451 12.5455 9.71451 12.5455 9.71451C12.5455 9.71451 12.9091 13.5239 9.63633 13.5239V14.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.33333 8.00004C8.06973 8.00004 8.66667 7.40311 8.66667 6.66671C8.66667 5.93033 8.06973 5.33337 7.33333 5.33337C7.09047 5.33337 6.8628 5.3983 6.66667 5.51175C6.26813 5.74229 6 6.17319 6 6.66671C6 7.16024 6.26813 7.59111 6.66667 7.82164C6.8628 7.93511 7.09047 8.00004 7.33333 8.00004Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.33337 8.66663C8.43797 8.66663 9.33337 7.77123 9.33337 6.66663C9.33337 5.56206 8.43797 4.66663 7.33337 4.66663C6.22881 4.66663 5.33337 5.56206 5.33337 6.66663C5.33337 7.77123 6.22881 8.66663 7.33337 8.66663Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeDasharray='0.3 2'
		/>
	</svg>
);
export default SvgLearning;
