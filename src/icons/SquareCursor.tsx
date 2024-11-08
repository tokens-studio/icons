import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSquareCursor = ({
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
			strokeWidth={1.5}
			d='M14 8V3.333C14 2.597 13.403 2 12.667 2H3.333C2.597 2 2 2.597 2 3.333v9.334C2 13.403 2.597 14 3.333 14H8'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M13.92 11.278c.329.203.308.695-.03.734l-1.712.194-.767 1.542c-.152.306-.622.155-.7-.223l-.837-4.077c-.066-.32.222-.522.5-.35z'
		/>
	</svg>
);
export default SvgSquareCursor;
