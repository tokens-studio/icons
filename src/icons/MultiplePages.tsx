import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMultiplePages = ({
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
			d='M4.667 12h4.666M4.667 9.333h.666M4.667 6.667h2M4.667 1.333H11l3 3v8.334'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M2 13.667V4.333a1 1 0 0 1 1-1h6.501a.4.4 0 0 1 .283.118l2.099 2.099a.4.4 0 0 1 .117.282v7.835a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M9.333 3.333V5.6c0 .221.18.4.4.4H12'
		/>
	</svg>
);
export default SvgMultiplePages;
