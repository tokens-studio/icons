import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgShirtTankTop = ({
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
			d='M12 14H4s1.107-3.217 1-5.333c-.067-1.326-1.016-2.053-.667-3.334C4.487 4.772 5 4 5 4s1 .667 3 .667S11 4 11 4s.514.772.667 1.333c.349 1.281-.6 2.008-.667 3.334C10.893 10.783 12 14 12 14M5 4V2M11 4V2'
		/>
	</svg>
);
export default SvgShirtTankTop;
