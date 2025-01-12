import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgKeyframeMinus = ({
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
			d='M10.6667 3.33337H12.6667H14.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.2126 9.55241L7.66319 13.5455C7.13279 14.1422 6.2005 14.1422 5.67011 13.5455L2.12072 9.55241C1.67167 9.04728 1.67167 8.28594 2.12072 7.78081L5.67011 3.78772C6.2005 3.19104 7.13279 3.19104 7.66319 3.78772L11.2126 7.78081C11.6617 8.28594 11.6617 9.04728 11.2126 9.55241Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgKeyframeMinus;
