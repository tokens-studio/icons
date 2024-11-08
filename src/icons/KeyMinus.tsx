import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgKeyMinus = ({
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
			d='M9.995 12h4M8.275 6.895a2.667 2.667 0 1 0 3.771-3.77 2.667 2.667 0 0 0-3.771 3.77m0 0-5.657 5.657 1.414 1.415M4.504 10.667l1.414 1.414'
		/>
	</svg>
);
export default SvgKeyMinus;
