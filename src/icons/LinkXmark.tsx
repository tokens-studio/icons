import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgLinkXmark = ({
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
			d='M9.333 7.998c0-1.66-1.544-3.331-3.428-3.331H4.762c-1.894 0-3.429 1.491-3.429 3.331 0 1.586 1.14 2.913 2.667 3.25q.368.082.762.082M11.238 4.667q.394 0 .762.082c1.527.337 2.667 1.664 2.667 3.25a3.28 3.28 0 0 1-1.09 2.435'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M6.667 7.998c0 1.662 1.544 3.332 3.428 3.332M12 14.828l1.414-1.414m0 0L14.828 12m-1.414 1.414L12 12m1.414 1.414 1.414 1.414'
		/>
	</svg>
);
export default SvgLinkXmark;
