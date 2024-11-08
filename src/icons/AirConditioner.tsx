import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAirConditioner = ({
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
			d='M14.667 2.4v4.933H1.333V2.4c0-.22.18-.4.4-.4h12.534a.4.4 0 0 1 .4.4M12 4.667h.667M1.333 7.333l.527 1.723c.171.561.689.944 1.275.944H4M14.667 7.333l-.527 1.723c-.171.561-.689.944-1.275.944H12M6.333 9.667s0 4.666-2.333 4.666M9.667 9.667s0 4.666 2.333 4.666M8 9.667v4.666'
		/>
	</svg>
);
export default SvgAirConditioner;
