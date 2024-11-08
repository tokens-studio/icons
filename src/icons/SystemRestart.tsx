import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSystemRestart = ({
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
			d='M8 1.333V4M8 12v2.667M14.667 8H12M4 8H1.333M3.286 3.286l1.886 1.886M10.829 10.828l1.885 1.886M12.714 3.286l-1.886 1.886M5.172 10.828l-1.886 1.886'
		/>
	</svg>
);
export default SvgSystemRestart;
