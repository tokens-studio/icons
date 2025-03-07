import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgGlassHalfAlt = ({
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
			d='M2.02612 2.86264C2.00966 2.73915 2.05273 2.61563 2.15422 2.54337C2.61813 2.21306 4.20946 1.33337 8 1.33337C11.7905 1.33337 13.3819 2.21305 13.8458 2.54337C13.9473 2.61563 13.9903 2.73915 13.9739 2.86264L12.8411 11.3586C12.7312 12.183 12.2429 12.9088 11.5209 13.3214L11.3076 13.4433C9.25806 14.6145 6.74193 14.6145 4.6924 13.4433L4.47915 13.3214C3.75706 12.9088 3.26883 12.183 3.15892 11.3586L2.02612 2.86264Z'
			stroke='currentColor'
		/>
		<path
			d='M2 3.33337C3.71429 5.11115 12.2857 5.11112 14 3.33337'
			stroke='currentColor'
		/>
		<path
			d='M2.66663 8.66663C3.3543 9.46889 5.28333 9.90916 7.33329 9.98729C9.82583 10.0824 12.4972 9.64209 13.3333 8.66663'
			stroke='currentColor'
		/>
		<path d='M10 9.88196V13.6666' stroke='currentColor' />
		<path
			d='M2.66663 8.6667C4.19043 6.8889 11.8095 6.88897 13.3333 8.6667'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgGlassHalfAlt;
