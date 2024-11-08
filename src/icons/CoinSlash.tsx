import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCoinSlash = ({
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
			d='M3.082 3.499A6.667 6.667 0 0 0 12.41 13M14.202 10.452a6.667 6.667 0 0 0-8.535-8.699'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M6 10c.43.573 1.229.9 2 .927.743.027 1.46-.223 1.798-.798M8 10.927v1.406M6.333 6.333c0 .788.569 1.11 1.258 1.334M10 5.667c-.457-.457-1.26-.775-2-.795V3.667M2 2l12 12'
		/>
	</svg>
);
export default SvgCoinSlash;
