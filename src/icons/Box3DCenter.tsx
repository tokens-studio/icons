import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBox3DCenter = ({
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
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M8 11.333A.667.667 0 1 0 8 10a.667.667 0 0 0 0 1.333'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M14 4.902v6.196a.4.4 0 0 1-.206.35l-5.6 3.11a.4.4 0 0 1-.388 0l-5.6-3.11a.4.4 0 0 1-.206-.35V4.902a.4.4 0 0 1 .206-.35l5.6-3.11a.4.4 0 0 1 .388 0l5.6 3.11a.4.4 0 0 1 .206.35'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m13.667 11.148-5.473-3.04a.4.4 0 0 0-.388 0l-5.473 3.04M2.352 4.862l5.454 3.03a.4.4 0 0 0 .388 0l5.473-3.04M8 2v6M8 13v1.667'
		/>
	</svg>
);
export default SvgBox3DCenter;
