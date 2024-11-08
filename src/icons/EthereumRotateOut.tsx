import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgEthereumRotateOut = ({
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
			d='M14.112 5.333a6.668 6.668 0 0 0-12.746 2'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M12 5.333h2.267a.4.4 0 0 0 .4-.4V2.667M1.92 10.667a6.668 6.668 0 0 0 12.747-2'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M4.033 10.667H1.766a.4.4 0 0 0-.4.4v2.266M4.667 8 8 12.667 11.333 8M4.667 8 8 3.333M4.667 8 8 8.667M11.333 8 8 3.333M11.333 8 8 8.667m0-5.334v5.334'
		/>
	</svg>
);
export default SvgEthereumRotateOut;
