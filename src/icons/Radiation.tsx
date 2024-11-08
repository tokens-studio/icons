import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgRadiation = ({
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
			d='M11.333 13.774A6.64 6.64 0 0 1 8 14.666a6.64 6.64 0 0 1-3.333-.892l2-3.107s.666.266 1.333.266 1.333-.266 1.333-.266zM11.332 2.226a6.64 6.64 0 0 1 2.439 2.44c.607 1.052.895 2.2.894 3.333l-3.691-.178s-.103-.71-.436-1.288c-.333-.577-.898-1.021-.898-1.021zM1.332 8a6.64 6.64 0 0 1 .895-3.333 6.64 6.64 0 0 1 2.439-2.44l1.69 3.285s-.563.444-.897 1.021c-.333.578-.435 1.288-.435 1.288zM8 9.333a1.333 1.333 0 1 1 0-2.667 1.333 1.333 0 0 1 0 2.667'
		/>
	</svg>
);
export default SvgRadiation;
