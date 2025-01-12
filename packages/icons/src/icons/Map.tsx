import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMap = ({
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
			d='M6 12.6667L2.52649 13.8245C2.26748 13.9109 2 13.7181 2 13.445V3.62164C2 3.44947 2.11017 3.29661 2.27351 3.24217L6 2M6 12.6667L10 14M6 12.6667V2M6 2L10 3.33333M10 14L13.7265 12.7579C13.8898 12.7034 14 12.5505 14 12.3783V2.55497C14 2.28195 13.7325 2.08916 13.4735 2.1755L10 3.33333M10 14V3.33333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgMap;
