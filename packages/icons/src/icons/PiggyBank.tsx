import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPiggyBank = ({
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
			d='M9.66663 5.66671C9.14616 5.53178 8.42289 5.33337 7.84309 5.33337C4.9842 5.33337 2.66663 7.11177 2.66663 9.30557C2.66663 10.5662 3.43192 11.6897 4.62545 12.4174L4.30208 13.484C4.22419 13.7408 4.41643 14 4.68487 14H5.86094C5.94753 14 6.03178 13.972 6.10103 13.92L7.03076 13.2222H8.65536L9.58509 13.92C9.65436 13.972 9.73863 14 9.82523 14H11.0013C11.2697 14 11.462 13.7408 11.384 13.484L11.0607 12.4174C11.7718 11.9839 12.3308 11.4098 12.6666 10.75'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.66663 5.66663L12.6666 4.66663L12.6106 7.08549L14 7.66663V9.99996L12.716 10.6666'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.3333 8.66667C10.1493 8.66667 10 8.5174 10 8.33333C10 8.14927 10.1493 8 10.3333 8C10.5174 8 10.6667 8.14927 10.6667 8.33333C10.6667 8.5174 10.5174 8.66667 10.3333 8.66667Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.33337 6.66663C1.33337 6.66663 1.33337 8.26663 2.66671 8.66663'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.53387 5.16864C8.61987 4.92087 8.66667 4.65424 8.66667 4.37648C8.66667 3.06399 7.622 2 6.33333 2C5.04467 2 4 3.06399 4 4.37648C4 5.00425 4.23899 5.57517 4.62936 6'
			stroke='currentColor'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgPiggyBank;
