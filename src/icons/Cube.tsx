import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCube = ({
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
			d='M14 4.902v6.196a.4.4 0 0 1-.206.35l-5.6 3.11a.4.4 0 0 1-.388 0l-5.6-3.11a.4.4 0 0 1-.206-.35V4.902a.4.4 0 0 1 .206-.35l5.6-3.11a.4.4 0 0 1 .388 0l5.6 3.11a.4.4 0 0 1 .206.35'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m2.352 4.862 5.454 3.03a.4.4 0 0 0 .388 0l5.473-3.04M8 14V8'
		/>
	</svg>
);
export default SvgCube;
