import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgLaptopFix = ({
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
			d='M13.867 9.481H2.436a.4.4 0 0 0-.385.292l-.905 3.197a1.333 1.333 0 0 0 1.283 1.697H13.57c.885 0 1.524-.846 1.284-1.697zm0 0V5.407M2.133 9.482V2.667c0-.737.597-1.334 1.334-1.334H8M7.333 12.667h1.334M11.771 3.219 9.886 5.104M13.657 3.219a1.333 1.333 0 1 1-1.886-1.886M9.886 6.99A1.333 1.333 0 1 0 8 5.105'
		/>
	</svg>
);
export default SvgLaptopFix;
