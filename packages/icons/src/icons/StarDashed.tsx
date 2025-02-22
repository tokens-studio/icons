import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgStarDashed = ({
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
			d='M9.20409 3.33341L8.54335 2.00259C8.32109 1.5548 7.67889 1.5548 7.45655 2.00259L7.12622 2.668'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.0073 4.95142L10.2751 5.49074L11.2432 5.63144'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13.1796 5.91284L14.1477 6.05354C14.6446 6.12575 14.8426 6.73302 14.4829 7.08135L13.7824 7.75968'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12.3816 9.11621L11.6812 9.79454L11.8465 10.7528'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12.1771 12.6692L12.3424 13.6275C12.4273 14.1197 11.9076 14.4951 11.463 14.2626L10.5973 13.8099'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.9519 12.9999L7.99997 12.4519L8.8657 12.9046'
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
	</svg>
);
export default SvgStarDashed;
