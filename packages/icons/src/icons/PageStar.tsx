import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPageStar = ({
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
			d='M13.3333 8.00004V3.83239C13.3333 3.72631 13.2912 3.62457 13.2162 3.54955L11.1171 1.45053C11.0421 1.37551 10.9404 1.33337 10.8343 1.33337H3.06663C2.84571 1.33337 2.66663 1.51246 2.66663 1.73337V14.2667C2.66663 14.4876 2.84571 14.6667 3.06663 14.6667H7.33329'
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
			d='M10.8704 11.4089L11.4765 10.1238C11.5543 9.95875 11.7791 9.95875 11.8569 10.1238L12.463 11.4089L13.8184 11.6162C13.9923 11.6428 14.0616 11.8665 13.9357 11.9949L12.9551 12.9945L13.1865 14.4067C13.2162 14.588 13.0344 14.7264 12.8788 14.6407L11.6667 13.9736L10.4546 14.6407C10.299 14.7264 10.1172 14.588 10.1469 14.4067L10.3783 12.9945L9.3977 11.9949C9.27184 11.8665 9.3411 11.6428 9.51504 11.6162L10.8704 11.4089Z'
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
	</svg>
);
export default SvgPageStar;
