import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBitcoinCircle = ({
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
			d='M6 8v2.93c0 .22.18.4.4.4 1.977.012 3.6.051 3.6-1.663C10 7.837 8 8 6 8Zm0 0V5.07c0-.22.18-.4.4-.4 1.977-.012 3.6-.051 3.6 1.663C10 8.163 8 8 6 8Z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M8 4.667v-1M8 12.333v-1M8 14.667A6.667 6.667 0 1 1 8 1.333a6.667 6.667 0 0 1 0 13.334'
		/>
	</svg>
);
export default SvgBitcoinCircle;
