import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgThreads = ({
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
			d='M6.61 5.419c1.669-1.343 4.073-.627 4.357 1.58.3 2.344-.3 4.2-2.634 4.2-2.166 0-2.1-1.866-2.1-1.866 0-2 3.434-2.266 5.434-1.266 3.666 2.333 1 6.6-3 6.6-3.314 0-6-1.667-6-6.667s2.686-6.667 6-6.667c2.338 0 4.447 1.205 5.223 3.614'
		/>
	</svg>
);
export default SvgThreads;
