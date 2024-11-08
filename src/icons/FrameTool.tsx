import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFrameTool = ({
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
			d='M1.333 4.667H2m-.667 6.666H2m12-6.666h.667M14 11.333h.667M11.333 2v-.667M4.667 2v-.667m6.666 13.334V14m-6.666.667V14M12 4.4v7.2a.4.4 0 0 1-.4.4H4.4a.4.4 0 0 1-.4-.4V4.4c0-.22.179-.4.4-.4h7.2a.4.4 0 0 1 .4.4'
		/>
	</svg>
);
export default SvgFrameTool;
