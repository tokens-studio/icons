import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAppleWallet = ({
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
			d='M12.667 14H3.333A1.333 1.333 0 0 1 2 12.667V3.333C2 2.597 2.597 2 3.333 2h9.334C13.403 2 14 2.597 14 3.333v9.334c0 .736-.597 1.333-1.333 1.333Z'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M2 10h4.267c.22 0 .403.185.5.384.137.282.462.616 1.233.616.77 0 1.096-.334 1.233-.616.097-.199.28-.384.5-.384H14M2 4.667h12M2 7.333h12'
		/>
	</svg>
);
export default SvgAppleWallet;
