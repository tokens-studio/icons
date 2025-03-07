import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgClipboardCheck = ({
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
			d='M5.66663 3.66669H3.99996C3.26358 3.66669 2.66663 4.26364 2.66663 5.00002V14.3334C2.66663 15.0698 3.26358 15.6667 3.99996 15.6667H7.99996'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M10.3334 3.66669H12C12.7364 3.66669 13.3334 4.26364 13.3334 5.00002V11'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M5.33337 5.26669V4.00002C5.33337 3.81593 5.48261 3.66669 5.66671 3.66669C5.8508 3.66669 6.00285 3.51738 6.03439 3.33601C6.13316 2.76783 6.51603 1.66669 8.00004 1.66669C9.48404 1.66669 9.86691 2.76783 9.96571 3.33601C9.99724 3.51738 10.1493 3.66669 10.3334 3.66669C10.5174 3.66669 10.6667 3.81593 10.6667 4.00002V5.26669C10.6667 5.4876 10.4876 5.66669 10.2667 5.66669H5.73337C5.51246 5.66669 5.33337 5.4876 5.33337 5.26669Z'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M10.3334 14.6667L11.6667 16L15 12.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgClipboardCheck;
