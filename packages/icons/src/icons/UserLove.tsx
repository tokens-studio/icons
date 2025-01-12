import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgUserLove = ({
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
			d='M8.00001 8.00008C9.47274 8.00008 10.6667 6.80615 10.6667 5.33341C10.6667 3.86065 9.47274 2.66675 8.00001 2.66675C6.52725 2.66675 5.33334 3.86065 5.33334 5.33341C5.33334 6.80615 6.52725 8.00008 8.00001 8.00008Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14.6667 11.5199C14.6667 11.9208 14.5083 12.3059 14.2255 12.5907C13.5746 13.2467 12.9433 13.9307 12.2681 14.5629C12.1133 14.7057 11.8678 14.7005 11.7197 14.5512L9.77434 12.5907C9.18634 11.9981 9.18634 11.0415 9.77434 10.4489C10.3681 9.85053 11.3355 9.85053 11.9292 10.4489L11.9999 10.5202L12.0706 10.4489C12.3553 10.1619 12.7431 10 13.1481 10C13.5531 10 13.9409 10.1619 14.2255 10.4489C14.5083 10.7338 14.6667 11.1189 14.6667 11.5199Z'
			stroke='currentColor'
			strokeLinejoin='round'
		/>
		<path
			d='M3.33334 13.3333V12.6667C3.33334 10.0893 5.42268 8 8.00001 8C8.71574 8 9.39381 8.16113 10 8.44907'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgUserLove;
