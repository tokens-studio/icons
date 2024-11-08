import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBrightness = ({
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
			d='m8 4.667 1.02.87 1.337.106.107 1.337.87 1.02-.87 1.02-.107 1.337-1.336.107-1.02.87-1.021-.87-1.337-.107-.107-1.337L4.666 8l.87-1.02.107-1.337 1.337-.107z'
		/>
		<path
			fill='currentColor'
			d='m6.98 10.464 1.02.87V4.666l-1.02.87-1.337.106-.107 1.337L4.666 8l.87 1.02.107 1.337z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M14 2.4v11.2a.4.4 0 0 1-.4.4H2.4a.4.4 0 0 1-.4-.4V2.4c0-.22.18-.4.4-.4h11.2c.22 0 .4.18.4.4'
		/>
	</svg>
);
export default SvgBrightness;
