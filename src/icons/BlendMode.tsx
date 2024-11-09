import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBlendMode = ({
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
			d='m3 11 9.333-4.333M13.333 9.333c0-2.945-5.333-8-5.333-8s-5.333 5.055-5.333 8a5.333 5.333 0 1 0 10.666 0Z'
		/>
		<path
			fill='currentColor'
			d='M13.333 9.333A5.333 5.333 0 0 1 2.98 11.14l9.41-4.49c.56.954.943 1.895.943 2.684'
		/>
	</svg>
);
export default SvgBlendMode;
