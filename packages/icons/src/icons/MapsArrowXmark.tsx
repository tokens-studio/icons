import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMapsArrowXmark = ({
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
			d='M9.33331 11.5185L8.12078 11.0469C8.04311 11.0167 7.95684 11.0167 7.87918 11.0469L2.86784 12.9957C2.57615 13.1092 2.30306 12.7945 2.4565 12.5217L7.70944 3.18309C7.83691 2.95655 8.16304 2.95655 8.29051 3.18309L12.3333 10.3703'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.4142 14.9093L12.8285 13.4951M12.8285 13.4951L14.2427 12.0808M12.8285 13.4951L11.4142 12.0808M12.8285 13.4951L14.2427 14.9093'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgMapsArrowXmark;
