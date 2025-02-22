import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSettings = ({
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
			d='M8 10C9.1046 10 10 9.1046 10 8C10 6.8954 9.1046 6 8 6C6.8954 6 6 6.8954 6 8C6 9.1046 6.8954 10 8 10Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13.0816 6.93031L12.3498 5.16324L13.3334 4.00004L12 2.66671L10.8432 3.65534L9.03857 2.9132L8.62357 1.33337H7.32071L6.89944 2.93413L5.13631 3.67735L4.00004 2.66671L2.66671 4.00004L3.63562 5.19261L2.91504 6.96424L1.33337 7.33337V8.66671L2.93411 9.10371L3.67721 10.8665L2.66671 12L4.00004 13.3334L5.19415 12.3602L6.93137 13.0749L7.33337 14.6667H8.66671L9.06971 13.0755L10.8368 12.3437C11.1313 12.5542 12 13.3334 12 13.3334L13.3334 12L12.344 10.833L13.076 9.06537L14.6666 8.65151L14.6667 7.33337L13.0816 6.93031Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgSettings;
