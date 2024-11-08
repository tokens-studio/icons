import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgElectronicsTransistor = ({
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
			d='M4.667 10.667V2.4c0-.22.179-.4.4-.4h5.866c.221 0 .4.18.4.4v8.267m-6.666 0H6m-1.333 0H3.333m8 0H10m1.333 0h1.334m-6.667 0h2m-2 0v4m4-4H8m2 0v4m-2-4v4'
		/>
	</svg>
);
export default SvgElectronicsTransistor;
