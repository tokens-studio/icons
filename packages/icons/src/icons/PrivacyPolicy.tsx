import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPrivacyPolicy = ({
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
			d='M13.3333 8.00004V3.83239C13.3333 3.72631 13.2912 3.62457 13.2162 3.54955L11.1171 1.45053C11.0421 1.37551 10.9404 1.33337 10.8343 1.33337H3.06663C2.84571 1.33337 2.66663 1.51246 2.66663 1.73337V14.2667C2.66663 14.4876 2.84571 14.6667 3.06663 14.6667H8.66663'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.33337 6.66667H10.6667M5.33337 4H8.00004M5.33337 9.33333H7.33337'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.6666 1.33337V3.60004C10.6666 3.82095 10.8457 4.00004 11.0666 4.00004H13.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13.3282 10.0834L15.0318 10.516C15.2092 10.5611 15.3342 10.7222 15.3288 10.9051C15.2143 14.744 13 15.3334 13 15.3334C13 15.3334 10.7858 14.744 10.6713 10.9051C10.6658 10.7222 10.7909 10.5611 10.9682 10.516L12.6718 10.0834C12.8872 10.0287 13.1128 10.0287 13.3282 10.0834Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgPrivacyPolicy;
