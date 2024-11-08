import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgHandbag = ({
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
			d='M6 5.333H2.667c-.737 0-1.334.597-1.334 1.334v6c0 .736.597 1.333 1.334 1.333h10.666c.737 0 1.334-.597 1.334-1.333v-6c0-.737-.597-1.334-1.334-1.334H10m-4 0V2.4c0-.22.18-.4.4-.4h3.2c.22 0 .4.18.4.4v2.933m-4 0h4m-4 0v4m4-4v4'
		/>
	</svg>
);
export default SvgHandbag;
