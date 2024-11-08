import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFilterAlt = ({
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
			d='M2 4.667v-2C2 2.298 2.298 2 2.667 2h10.666c.369 0 .667.298.667.667v2m-12 0 4.434 3.8a.67.67 0 0 1 .233.506v4.173c0 .434.407.752.828.647l1.333-.333a.67.67 0 0 0 .505-.647v-3.84c0-.194.085-.38.233-.506L14 4.667m-12 0h12'
		/>
	</svg>
);
export default SvgFilterAlt;
