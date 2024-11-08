import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgScaleFrameEnlarge = ({
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
			d='M7.333 9.067V14H2.4a.4.4 0 0 1-.4-.4V8.667h4.933c.221 0 .4.179.4.4M7.333 14h2M2 8.667v-2M4 2H2.4a.4.4 0 0 0-.4.4V4M9.333 2H6.667M14 6.667v2.666M12 2h1.6c.22 0 .4.18.4.4V4M12 14h1.6a.4.4 0 0 0 .4-.4V12M7.333 6.667h2v2'
		/>
	</svg>
);
export default SvgScaleFrameEnlarge;
