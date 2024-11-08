import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgYoutube = ({
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
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M9.333 8 7 9.333V6.667z'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M1.333 8.472v-.944c0-1.93 0-2.895.604-3.516s1.554-.648 3.455-.702c.9-.025 1.82-.043 2.608-.043.787 0 1.707.018 2.608.043 1.9.054 2.851.081 3.455.702.604.62.604 1.586.604 3.516v.944c0 1.93 0 2.895-.604 3.516-.604.62-1.554.648-3.455.702-.9.025-1.82.043-2.608.043a96 96 0 0 1-2.608-.043c-1.901-.054-2.851-.081-3.455-.702s-.604-1.586-.604-3.516Z'
		/>
	</svg>
);
export default SvgYoutube;
