import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFingerprint = ({
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
			d='M4.667 2.344a6.003 6.003 0 0 1 9.099 3.323M14 14.667V9.333M2 14.667V7.333c0-.701.12-1.374.341-2'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M12 14.667V7.533c0-2.32-1.79-4.2-4-4.2s-4 1.88-4 4.2v1.8M4 14.667V12'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M6 14.667V7.433c0-1.16.895-2.1 2-2.1.577 0 1.097.257 1.462.667M10 14.667V9.333M8 14.667v-2.334M8 7.333v2'
		/>
	</svg>
);
export default SvgFingerprint;
