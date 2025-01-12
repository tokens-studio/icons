import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgControlSlider = ({
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
			d='M4.50314 11.5218L3.55076 4.85521C3.43601 4.05197 4.05929 3.33331 4.87069 3.33331H7.12935C7.94075 3.33331 8.56401 4.05196 8.44928 4.85521L7.49688 11.5218C7.40308 12.1787 6.84048 12.6666 6.17695 12.6666H5.82307C5.15954 12.6666 4.59698 12.1787 4.50314 11.5218Z'
			stroke='currentColor'
		/>
		<path
			d='M1.33331 8H3.99998M14.6666 8H7.99998'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgControlSlider;
