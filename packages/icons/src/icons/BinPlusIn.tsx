import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBinPlusIn = ({
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
			d='M5.99487 9.33334H7.99488M7.99488 9.33334H9.99488M7.99488 9.33334V7.33334M7.99488 9.33334V11.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2.02612 2.86261C2.00966 2.73912 2.05273 2.6156 2.15422 2.54334C2.61813 2.21303 4.20946 1.33334 8 1.33334C11.7905 1.33334 13.3819 2.21302 13.8458 2.54334C13.9473 2.6156 13.9903 2.73912 13.9739 2.86261L12.8411 11.3585C12.7312 12.1829 12.2429 12.9088 11.5209 13.3214L11.3076 13.4433C9.25806 14.6145 6.74193 14.6145 4.6924 13.4433L4.47915 13.3214C3.75706 12.9088 3.26883 12.1829 3.15892 11.3585L2.02612 2.86261Z'
			stroke='currentColor'
		/>
		<path
			d='M2 3.33334C3.71429 5.11112 12.2857 5.11109 14 3.33334'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgBinPlusIn;
