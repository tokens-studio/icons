import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPalette = ({
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
			d='M13.6731 6.36C13.6162 6.51955 13.5279 6.66606 13.4134 6.79087C13.2989 6.91567 13.1605 7.01627 13.0064 7.08667C12.1864 7.45373 11.4898 8.04967 11.0002 8.803C10.5106 9.55633 10.2489 10.4349 10.2464 11.3333C10.2474 11.6467 10.2787 11.9593 10.3398 12.2667C10.3805 12.4545 10.3832 12.6487 10.3477 12.8376C10.3122 13.0265 10.2392 13.2064 10.1331 13.3667C10.0433 13.5069 9.92517 13.6269 9.78624 13.7187C9.64731 13.8105 9.49064 13.8723 9.32644 13.9C8.97031 13.9669 8.60877 14.0004 8.24644 14C7.44257 14.0004 6.64678 13.8392 5.90639 13.5261C5.16599 13.2129 4.49607 12.7543 3.93641 12.1771C3.37675 11.6001 2.93875 10.9165 2.64845 10.1668C2.35813 9.41713 2.22143 8.6168 2.24643 7.81333C2.29817 6.31519 2.90577 4.88997 3.95085 3.81531C4.99594 2.74065 6.40365 2.09352 7.89977 2H8.23977C9.35691 2.00028 10.4518 2.31246 11.4012 2.90138C12.3505 3.49029 13.1166 4.33257 13.6131 5.33333C13.7659 5.64999 13.7875 6.01419 13.6731 6.34667V6.36Z'
			stroke='currentColor'
		/>
		<path
			d='M5.33337 10.6733L5.34004 10.6659'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4 8.00667L4.00667 7.99927'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.33337 5.34005L5.34004 5.33264'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 4.00667L8.00667 3.99927'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.6666 5.34005L10.6733 5.33264'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgPalette;
