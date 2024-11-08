import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgExtrude = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={16}
		height={16}
		fill='none'
		aria-hidden={!title}
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M14 8.235v2.863a.4.4 0 0 1-.206.35l-5.6 3.11a.4.4 0 0 1-.388 0l-5.6-3.11a.4.4 0 0 1-.206-.35V8.235a.4.4 0 0 1 .206-.35l5.6-3.11a.4.4 0 0 1 .388 0l5.6 3.11a.4.4 0 0 1 .206.35'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m2.352 8.196 5.454 3.03a.4.4 0 0 0 .388 0l5.473-3.04M8 14.333v-3M8 8V1.333m0 0L9.667 3M8 1.333 6.333 3'
		/>
	</svg>
);
export default SvgExtrude;
