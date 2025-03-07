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
		width={props.width || 16}
		height={props.height || 16}
		viewBox='0 0 16 16'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden={!title}
		strokeWidth={props.strokeWidth || 1.5 * (16 / (Number(props.width) || 16))}
		preserveAspectRatio='xMidYMid meet'
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			d='M12.6667 14H3.33333C2.59695 14 2 13.4031 2 12.6667V3.33333C2 2.59695 2.59695 2 3.33333 2H12.6667C13.4031 2 14 2.59695 14 3.33333V12.6667C14 13.4031 13.4031 14 12.6667 14Z'
			stroke='currentColor'
		/>
		<path
			d='M2 10H6.26667C6.48758 10 6.6702 10.1855 6.76693 10.3841C6.90427 10.6661 7.22947 11 8 11C8.77053 11 9.09573 10.6661 9.23307 10.3841C9.3298 10.1855 9.5124 10 9.73333 10H14'
			stroke='currentColor'
		/>
		<path d='M2 4.66667H14' stroke='currentColor' />
		<path d='M2 7.33333H14' stroke='currentColor' />
	</svg>
);
export default SvgAppleWallet;
