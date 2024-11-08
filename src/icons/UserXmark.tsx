import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgUserXmark = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={17}
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
			d='m13.414 8.08 1.414-1.413m0 0 1.415-1.415m-1.415 1.415-1.414-1.415m1.414 1.415 1.415 1.414M1.667 13.333v-.666a4.667 4.667 0 1 1 9.333 0v.666'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M6.333 8a2.667 2.667 0 1 0 0-5.333 2.667 2.667 0 0 0 0 5.333'
		/>
	</svg>
);
export default SvgUserXmark;
