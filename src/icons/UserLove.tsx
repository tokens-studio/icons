import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgUserLove = ({
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
			d='M8 8a2.667 2.667 0 1 0 0-5.333A2.667 2.667 0 0 0 8 8'
		/>
		<path
			stroke='currentColor'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M14.667 11.52c0 .4-.159.786-.441 1.07-.651.657-1.283 1.34-1.958 1.973a.4.4 0 0 1-.548-.012l-1.946-1.96a1.52 1.52 0 0 1 0-2.142 1.52 1.52 0 0 1 2.155 0l.07.071.072-.071a1.518 1.518 0 0 1 2.596 1.07Z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M3.333 13.333v-.666A4.667 4.667 0 0 1 10 8.449'
		/>
	</svg>
);
export default SvgUserLove;
