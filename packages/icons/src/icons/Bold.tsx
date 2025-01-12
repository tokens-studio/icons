import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBold = ({
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
			d='M7.99998 7.77781H5.33331M7.99998 7.77781C7.99998 7.77781 10.2222 7.77781 10.2222 5.55556C10.2222 3.33336 7.99998 3.33334 7.99998 3.33334H5.73331C5.5124 3.33334 5.33331 3.51243 5.33331 3.73334V7.77781M7.99998 7.77781C7.99998 7.77781 10.6666 7.77781 10.6666 10.2222C10.6666 12.6667 7.99998 12.6667 7.99998 12.6667H5.73331C5.5124 12.6667 5.33331 12.4876 5.33331 12.2667V7.77781'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgBold;
