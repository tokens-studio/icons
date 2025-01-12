import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgVideoCamera = ({
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
			d='M10 8.00008V10.9334C10 11.1543 9.82093 11.3334 9.6 11.3334H2.4C2.17909 11.3334 2 11.1543 2 10.9334V5.06675C2 4.84583 2.17909 4.66675 2.4 4.66675H9.6C9.82093 4.66675 10 4.84583 10 5.06675V8.00008ZM10 8.00008L13.3439 5.21347C13.6045 4.99637 14 5.18163 14 5.52077V10.4794C14 10.8185 13.6045 11.0038 13.3439 10.7867L10 8.00008Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgVideoCamera;
