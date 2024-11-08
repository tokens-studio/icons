import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPriorityDown = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={16}
		height={16}
		fill='none'
		aria-hidden={!title}
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M7.717.95a.4.4 0 0 1 .566 0l6.768 6.767a.4.4 0 0 1 0 .566L8.282 15.05a.4.4 0 0 1-.566 0L.95 8.282a.4.4 0 0 1 0-.566zM8 10.667 10.667 8M8 10.667 5.333 7.889M8 10.667v-6'
		/>
	</svg>
);
export default SvgPriorityDown;
