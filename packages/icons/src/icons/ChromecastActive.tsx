import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgChromecastActive = ({
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
			d='M1.33331 13.34L1.33998 13.3326'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.99998 13.3334H13.3333C14.0697 13.3334 14.6666 12.7364 14.6666 12V4.00002C14.6666 3.26364 14.0697 2.66669 13.3333 2.66669H2.66665C1.93027 2.66669 1.33331 3.26364 1.33331 4.00002V4.66669'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.33331 10.6667C2.66665 11 3.66665 12 3.99998 13.3334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.33331 8C3.99998 8.33333 6.33331 10.6667 6.66665 13.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M3.33466 5.08683C3.33466 4.86592 3.51374 4.68683 3.73466 4.68683H12.2706C12.4915 4.68683 12.6706 4.86592 12.6706 5.08683V10.9746C12.6706 11.1956 12.4915 11.3746 12.2706 11.3746H8.96089C8.80196 11.3746 8.65842 11.2817 8.59029 11.1381C8.30836 10.5433 7.50889 8.96432 6.5438 7.99998C5.59724 7.05418 4.16228 6.3709 3.5866 6.11988C3.43544 6.05396 3.33466 5.90578 3.33466 5.74086V5.08683Z'
			fill='currentColor'
		/>
	</svg>
);
export default SvgChromecastActive;
