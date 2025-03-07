import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPeerlist = ({
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
			d='M5.9135 2H10.0865C12.1247 2 13.8369 3.53254 14.062 5.55827L14.2025 6.82207C14.2895 7.60493 14.2895 8.39507 14.2025 9.17793L14.062 10.4417C13.8369 12.4675 12.1247 14 10.0865 14H5.9135C3.8753 14 2.16305 12.4675 1.93796 10.4417L1.79754 9.17793C1.71055 8.39507 1.71055 7.60493 1.79754 6.82207L1.93796 5.55827C2.16305 3.53254 3.8753 2 5.9135 2Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6 11.3333V8.66663M6 8.66663V4.66663H8.66667C9.77127 4.66663 10.6667 5.56206 10.6667 6.66663C10.6667 7.77123 9.77127 8.66663 8.66667 8.66663H6Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgPeerlist;
