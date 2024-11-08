import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSuggestion = ({
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
			strokeWidth={1.5}
			d='M2 2.4c0-.22.18-.4.4-.4h11.2c.22 0 .4.18.4.4v9.2a.4.4 0 0 1-.4.4h-2.76a.4.4 0 0 0-.292.126l-2.257 2.398a.4.4 0 0 1-.582 0l-2.257-2.398A.4.4 0 0 0 5.16 12H2.4a.4.4 0 0 1-.4-.4z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m8 4.667.95 1.716 1.717.95-1.717.95L8 10l-.95-1.716-1.717-.95 1.717-.95z'
		/>
	</svg>
);
export default SvgSuggestion;
