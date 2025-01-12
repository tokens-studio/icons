import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgVideoCameraOff = ({
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
			d='M4.33333 4.66675H2.4C2.17909 4.66675 2 4.84583 2 5.06675V10.9334C2 11.1543 2.17909 11.3334 2.4 11.3334H9.6C9.82093 11.3334 10 11.1543 10 10.9334V10.0001M7.66667 4.66675H9.6C9.82093 4.66675 10 4.84583 10 5.06675V7.14608C10 7.48521 10.3955 7.67048 10.6561 7.45335L13.3439 5.21347C13.6045 4.99637 14 5.18163 14 5.52077V10.3334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2 2L14 14'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgVideoCameraOff;
