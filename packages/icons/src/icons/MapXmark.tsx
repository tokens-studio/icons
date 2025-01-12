import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMapXmark = ({
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
			d='M6 12.6667L2.52649 13.8245C2.26748 13.9109 2 13.7181 2 13.445V3.62164C2 3.44947 2.11017 3.29661 2.27351 3.24217L6 2M6 12.6667L9.47353 13.8245C9.73253 13.9109 10 13.7181 10 13.445V3.62164C10 3.44947 9.8898 3.29661 9.72647 3.24217L6 2M6 12.6667V2'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10 3.33333L13.4735 2.1755C13.7325 2.08916 14 2.28194 14 2.55497V10'
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
export default SvgMapXmark;
