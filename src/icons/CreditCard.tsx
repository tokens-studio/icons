import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCreditCard = ({
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
			d='M14.667 6v5.333c0 .737-.597 1.334-1.334 1.334H2.667a1.333 1.333 0 0 1-1.334-1.334V4.667c0-.737.597-1.334 1.334-1.334h10.666c.737 0 1.334.597 1.334 1.334zm0 0H4'
		/>
	</svg>
);
export default SvgCreditCard;
