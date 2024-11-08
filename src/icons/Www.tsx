import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgWww = ({
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
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M3.225 11.333A6.66 6.66 0 0 0 9 14.667a6.66 6.66 0 0 0 5.775-3.334M3.225 4.667A6.66 6.66 0 0 1 9 1.333a6.66 6.66 0 0 1 5.775 3.334'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M9.667 14.634s.938-1.236 1.53-3.3M9.667 1.366s.938 1.236 1.53 3.3M8.333 14.634s-.938-1.236-1.53-3.3M8.333 1.366s-.938 1.236-1.53 3.3M7 6.667 8 10l1-3.333L10 10l1-3.333M1.667 6.667l1 3.333 1-3.333 1 3.333 1-3.333M12.333 6.667l1 3.333 1-3.333 1 3.333 1-3.333'
		/>
	</svg>
);
export default SvgWww;
