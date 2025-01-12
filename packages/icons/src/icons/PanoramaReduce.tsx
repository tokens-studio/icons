import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPanoramaReduce = ({
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
			d='M14 4.57478V11.4253C14 11.7039 13.7232 11.9001 13.4591 11.8115C12.3638 11.4438 9.8324 10.6667 8 10.6667C6.16759 10.6667 3.63618 11.4438 2.54093 11.8115C2.27682 11.9001 2 11.7039 2 11.4253V4.57478C2 4.29618 2.27682 4.09998 2.54093 4.18865C3.63618 4.55633 6.16759 5.33339 8 5.33339C9.8324 5.33339 12.3638 4.55633 13.4591 4.18865C13.7232 4.09998 14 4.29618 14 4.57478Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgPanoramaReduce;
