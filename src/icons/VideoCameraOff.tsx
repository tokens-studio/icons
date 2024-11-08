import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgVideoCameraOff = ({
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
			d='M4.333 4.667H2.4a.4.4 0 0 0-.4.4v5.866c0 .221.18.4.4.4h7.2a.4.4 0 0 0 .4-.4V10M7.667 4.667H9.6c.22 0 .4.179.4.4v2.08a.4.4 0 0 0 .656.306l2.688-2.24a.4.4 0 0 1 .656.308v4.812M2 2l12 12'
		/>
	</svg>
);
export default SvgVideoCameraOff;
