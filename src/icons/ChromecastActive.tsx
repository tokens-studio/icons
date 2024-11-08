import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgChromecastActive = ({
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
			d='m1.333 13.34.007-.007M10 13.333h3.333c.737 0 1.334-.597 1.334-1.333V4c0-.736-.597-1.333-1.334-1.333H2.667c-.737 0-1.334.597-1.334 1.333v.667M1.333 10.667A3.62 3.62 0 0 1 4 13.333M1.333 8c2.667.333 5 2.667 5.334 5.333'
		/>
		<path
			fill='currentColor'
			fillRule='evenodd'
			d='M3.335 5.087c0-.221.179-.4.4-.4h8.536c.22 0 .4.179.4.4v5.888a.4.4 0 0 1-.4.4H8.96a.41.41 0 0 1-.37-.237C8.307 10.543 7.508 8.964 6.543 8c-.947-.946-2.382-1.63-2.957-1.88a.42.42 0 0 1-.252-.38z'
			clipRule='evenodd'
		/>
	</svg>
);
export default SvgChromecastActive;
