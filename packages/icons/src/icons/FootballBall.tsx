import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFootballBall = ({
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
			d='M2.74366 9.34325C2.6382 10.257 2.63996 11.1143 2.67469 11.7863C2.71827 12.6292 3.37075 13.2818 4.21371 13.3253C4.8857 13.36 5.74306 13.3618 6.65676 13.2564M2.74366 9.34325C2.9292 7.73571 3.44663 5.95373 4.70021 4.70015C5.95379 3.44657 7.73577 2.92914 9.34331 2.7436M2.74366 9.34325L6.65676 13.2564M6.65676 13.2564C8.26431 13.0708 10.0463 12.5534 11.2998 11.2998C12.5534 10.0462 13.0709 8.26425 13.2564 6.6567M9.34331 2.7436C10.257 2.63814 11.1144 2.6399 11.7864 2.67463C12.6293 2.71821 13.2818 3.37069 13.3254 4.21365C13.3601 4.88564 13.3619 5.743 13.2564 6.6567M9.34331 2.7436L13.2564 6.6567M6.11443 9.88558L7.05724 8.94278M7.05724 8.94278L6.11443 7.99998M7.05724 8.94278L8.00004 9.88558M7.05724 8.94278L8.94284 7.05718M8.94284 7.05718L9.88564 6.11437M8.94284 7.05718L8.00004 6.11437M8.94284 7.05718L9.88564 7.99998'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgFootballBall;
