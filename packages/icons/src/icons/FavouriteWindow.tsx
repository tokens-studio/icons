import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFavouriteWindow = ({
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
			d='M8.66658 14H2.66659C1.93021 14 1.33325 13.4031 1.33325 12.6667V3.33333C1.33325 2.59695 1.93021 2 2.66659 2H13.3333C14.0697 2 14.6666 2.59695 14.6666 3.33333V8.66667'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M14.6666 11.5199C14.6666 11.9208 14.5083 12.3059 14.2255 12.5907C13.5745 13.2467 12.9433 13.9307 12.268 14.5629C12.1133 14.7057 11.8677 14.7005 11.7196 14.5512L9.77425 12.5907C9.18625 11.9981 9.18625 11.0415 9.77425 10.4489C10.3681 9.85053 11.3354 9.85053 11.9291 10.4489L11.9999 10.5202L12.0705 10.4489C12.3553 10.1619 12.743 10 13.148 10C13.5531 10 13.9408 10.1619 14.2255 10.4489C14.5083 10.7338 14.6666 11.1189 14.6666 11.5199Z'
			stroke='currentColor'
			strokeLinejoin='round'
		/>
		<path
			d='M1.33325 4.66669H14.6666'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.33325 3.33999L3.33992 3.33258'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.33325 3.33999L5.33992 3.33258'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.33325 3.33999L7.33992 3.33258'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgFavouriteWindow;
