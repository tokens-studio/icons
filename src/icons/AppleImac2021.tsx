import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAppleImac2021 = ({
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
			d='M1.333 10.333v-8.6c0-.22.18-.4.4-.4h12.534c.22 0 .4.18.4.4v8.6m-13.334 0V11.6c0 .22.18.4.4.4h12.534a.4.4 0 0 0 .4-.4v-1.267m-13.334 0h13.334M6 14.667h1m0 0V12m0 2.667h2m0 0h1m-1 0V12'
		/>
	</svg>
);
export default SvgAppleImac2021;
