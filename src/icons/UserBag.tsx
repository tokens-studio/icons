import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgUserBag = ({
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
			d='M6 7.333A2.667 2.667 0 1 0 6 2a2.667 2.667 0 0 0 0 5.333'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M1.333 12a4.667 4.667 0 0 1 7.554-3.667M14.243 11.138l.197 1.333A1.333 1.333 0 0 1 13.121 14H10.88a1.333 1.333 0 0 1-1.32-1.529l.198-1.333A1.33 1.33 0 0 1 11.077 10h1.847c.66 0 1.222.484 1.319 1.138M11.333 8.667h1.334'
		/>
	</svg>
);
export default SvgUserBag;
