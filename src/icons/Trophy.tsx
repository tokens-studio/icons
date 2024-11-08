import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTrophy = ({
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
			d='M4.497 2.667h7.045s-.587 8.838-3.522 8.838c-1.434 0-2.308-2.11-2.827-4.267-.542-2.259-.696-4.571-.696-4.571'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M11.542 2.667s.614-.655 1.125-.667c1-.023 1.185.667 1.185.667.195.406.352 1.463-.588 2.438-.939.975-1.99 1.828-2.418 2.133M4.497 2.667S3.857 2.004 3.333 2c-1-.008-1.185.667-1.185.667-.195.406-.352 1.463.588 2.438a20 20 0 0 0 2.457 2.133M5.671 13.333c0-1.219 2.348-1.828 2.348-1.828s2.349.61 2.349 1.828z'
		/>
	</svg>
);
export default SvgTrophy;
