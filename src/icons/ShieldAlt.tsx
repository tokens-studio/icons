import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgShieldAlt = ({
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
			d='m2.38 5.333-.293-2.056a.666.666 0 0 1 .516-.744L7.71 1.398c.19-.043.388-.043.578 0l5.108 1.135c.34.075.565.4.516.744l-.294 2.056m-11.238 0h11.238m-11.238 0L3.048 10m10.571-4.667L12.952 10m-9.904 0 .285 2c.047.33.334 2.333 4.667 2.333S12.62 12.33 12.667 12l.285-2m-9.904 0h9.904'
		/>
	</svg>
);
export default SvgShieldAlt;
