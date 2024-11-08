import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPcFirewall = ({
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
			d='M4.667 14.667h6.666'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M1.333 11.333V2.667c0-.737.597-1.334 1.334-1.334h10.666c.737 0 1.334.597 1.334 1.334v8.666c0 .737-.597 1.334-1.334 1.334H2.667a1.333 1.333 0 0 1-1.334-1.334Z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m8.323 4.08 2.04.51a.394.394 0 0 1 .3.391C10.545 9.333 8 10 8 10s-2.545-.667-2.662-5.019a.39.39 0 0 1 .298-.39l2.04-.51c.213-.053.435-.053.647 0'
		/>
	</svg>
);
export default SvgPcFirewall;
