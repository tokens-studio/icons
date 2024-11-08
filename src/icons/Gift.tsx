import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgGift = ({
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
			d='M13.333 8v6.267a.4.4 0 0 1-.4.4H3.067a.4.4 0 0 1-.4-.4V8M14.267 4.667H1.733a.4.4 0 0 0-.4.4V7.6c0 .22.18.4.4.4h12.534a.4.4 0 0 0 .4-.4V5.067a.4.4 0 0 0-.4-.4M8 14.667v-10M8 4.667H5a1.667 1.667 0 0 1 0-3.334c2.333 0 3 3.334 3 3.334M8 4.667h3a1.667 1.667 0 0 0 0-3.334c-2.333 0-3 3.334-3 3.334'
		/>
	</svg>
);
export default SvgGift;
