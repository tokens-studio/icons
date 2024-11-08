import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgNavigatorAlt = ({
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
			d='M8 14.667A6.667 6.667 0 1 0 8 1.333a6.667 6.667 0 0 0 0 13.334Z'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M9.287 11.913c-.215.62-1.092.619-1.306-.001l-1.08-3.13-3.046-1.295c-.603-.257-.543-1.131.09-1.302l6.822-1.841a.69.69 0 0 1 .832.893z'
			clipRule='evenodd'
		/>
	</svg>
);
export default SvgNavigatorAlt;
