import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPlanet = ({
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
			d='M8 13.333A5.333 5.333 0 1 0 8 2.667a5.333 5.333 0 0 0 0 10.666Z'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M11.666 4.232c1.532-.359 2.63-.317 2.892.208.488.977-2.105 3.26-5.79 5.097S1.7 12.072 1.212 11.094c-.261-.524.363-1.423 1.566-2.427'
		/>
	</svg>
);
export default SvgPlanet;
