import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBell = ({
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
			d='M12 5.6a4.42 4.42 0 0 0-1.172-3.017A3.88 3.88 0 0 0 8 1.333c-1.06 0-2.078.45-2.828 1.25A4.42 4.42 0 0 0 4 5.6C4 10.578 2 12 2 12h12s-2-1.422-2-6.4M9.153 14a1.332 1.332 0 0 1-2.306 0'
		/>
	</svg>
);
export default SvgBell;
