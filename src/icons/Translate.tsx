import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTranslate = ({
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
			d='M1.333 3.333H6m0 0h3m-3 0V2m4.667 1.333H9m0 0C8.453 5.157 7.307 6.88 6 8.395m0 0c-1.083 1.255-2.276 2.366-3.333 3.272M6 8.395C5.333 7.667 4.267 6.2 4 5.667m2 2.728 2 1.938M9 14l.762-2m0 0 1.905-5 1.904 5m-3.81 0h3.81m.762 2-.762-2'
		/>
	</svg>
);
export default SvgTranslate;
