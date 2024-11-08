import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPhoneDisabled = ({
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
			d='m5.853 5.667.327-1.754-.97-2.58H2.709c-.752 0-1.344.621-1.231 1.364.191 1.268.638 3.241 1.672 5.134M7.294 9c.558.496 1.231.928 2.04 1.333l2.745-.532 2.588.986v2.39c0 .795-.688 1.4-1.465 1.232-1.886-.41-5.22-1.405-7.72-3.622M14 2 2 14'
		/>
	</svg>
);
export default SvgPhoneDisabled;
