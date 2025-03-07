import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgHorizDistributionLeft = ({
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
			d='M12.6667 11.3333V4.66663M12.6667 11.3333H9.06675C8.84581 11.3333 8.66675 11.1542 8.66675 10.9333V5.06663C8.66675 4.84571 8.84581 4.66663 9.06675 4.66663H12.6667M12.6667 11.3333V13.3333M12.6667 4.66663V2.66663'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.99992 11.3333V4.66663M5.99992 11.3333H3.73325C3.51234 11.3333 3.33325 11.1542 3.33325 10.9333V5.06663C3.33325 4.84571 3.51234 4.66663 3.73325 4.66663H5.99992M5.99992 11.3333V13.3333M5.99992 4.66663V2.66663'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgHorizDistributionLeft;
