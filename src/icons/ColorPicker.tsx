import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgColorPicker = ({
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
			d='m4.667 8.774 3.642-3.643c.26-.26.683-.26.943 0l1.414 1.414c.26.26.26.683 0 .943L9.381 8.774m-4.714 0-1.449 1.448a.7.7 0 0 0-.145.218l-.685 1.664c-.339.822.483 1.644 1.305 1.306l1.665-.686a.7.7 0 0 0 .217-.145l3.806-3.805m-4.714 0H9.38M9.252 2.303l1.414 1.414m0 0 .943-.943c.26-.26.682-.26.943 0l.471.471c.26.26.26.683 0 .943l-.943.943m-1.414-1.414L12.08 5.13m1.415 1.414L12.08 5.131'
		/>
	</svg>
);
export default SvgColorPicker;
