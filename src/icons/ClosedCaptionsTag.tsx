import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgClosedCaptionsTag = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={18}
		height={16}
		fill='none'
		aria-hidden={!title}
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M1.667 10V6a4 4 0 0 1 4-4h6.666a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4H5.667a4 4 0 0 1-4-4Z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeWidth={1.5}
			d='m8 6.667-.114-.115a1.886 1.886 0 0 0-3.22 1.334v.228a1.886 1.886 0 0 0 3.22 1.334L8 9.333M13.333 6.667l-.114-.115A1.885 1.885 0 0 0 10 7.886v.228a1.886 1.886 0 0 0 3.219 1.334l.114-.115'
		/>
	</svg>
);
export default SvgClosedCaptionsTag;
