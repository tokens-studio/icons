import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBoxShadowOuter = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={17}
		height={17}
		fill='none'
		aria-hidden={!title}
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<circle cx={8} cy={8} r={6} stroke='currentColor' strokeWidth={1.5} />
		<path
			fill='currentColor'
			fillRule='evenodd'
			d='M13.047 3.997a6.8 6.8 0 1 1-9.343 9.371l.481-.298a6.233 6.233 0 1 0 8.564-8.59z'
			clipRule='evenodd'
			opacity={0.05}
		/>
		<path
			fill='currentColor'
			fillRule='evenodd'
			d='M13.853 5.342a6.233 6.233 0 1 1-8.814 8.815l.404-.397a5.667 5.667 0 1 0 8.013-8.014z'
			clipRule='evenodd'
			opacity={0.2}
		/>
		<path
			fill='currentColor'
			fillRule='evenodd'
			d='M14.364 6.903a5.667 5.667 0 0 1-7.821 7.731l.295-.484a5.1 5.1 0 0 0 7.039-6.958z'
			clipRule='evenodd'
			opacity={0.35}
		/>
		<path
			fill='currentColor'
			fillRule='evenodd'
			d='M14.446 8.591q.14.58.142 1.201a5.1 5.1 0 0 1-6.377 4.939l.141-.549q.546.142 1.136.143a4.533 4.533 0 0 0 4.407-5.6z'
			clipRule='evenodd'
			opacity={0.5}
		/>
		<path
			fill='currentColor'
			fillRule='evenodd'
			d='M13.926 10.723a4.54 4.54 0 0 1-3.54 3.513l-.112-.555a3.97 3.97 0 0 0 3.097-3.074z'
			clipRule='evenodd'
			opacity={0.65}
		/>
	</svg>
);
export default SvgBoxShadowOuter;
