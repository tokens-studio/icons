import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgShortPantsPockets = ({
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
			strokeWidth={1.5}
			d='M2.04 3.77a.4.4 0 0 1 .398-.437h11.124a.4.4 0 0 1 .398.437l-.784 8.533a.4.4 0 0 1-.398.364H10.01a.4.4 0 0 1-.382-.283L8.382 8.316a.4.4 0 0 0-.764 0l-1.246 4.068a.4.4 0 0 1-.382.283H3.222a.4.4 0 0 1-.398-.364L2.429 8z'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M2.667 6.333h1C4.403 6.333 5 5.736 5 5V3.333M13.667 6.333h-1.334A1.333 1.333 0 0 1 11 5V3.333'
		/>
	</svg>
);
export default SvgShortPantsPockets;
