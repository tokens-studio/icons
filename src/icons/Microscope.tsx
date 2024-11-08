import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMicroscope = ({
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
			d='M12.667 14.667h-8m0 0H3.333m1.334 0v-2M12.667 10.667h-6M10.667 1.333H8M8 4.667c-2 0-3.333.666-3.333 2.666v1.334M10.667 3.067V7.6a.4.4 0 0 1-.4.4H8.4a.4.4 0 0 1-.4-.4V3.067c0-.221.18-.4.4-.4h1.867c.22 0 .4.179.4.4'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M4.667 12.667a2 2 0 1 1 0-4 2 2 0 0 1 0 4'
		/>
	</svg>
);
export default SvgMicroscope;
