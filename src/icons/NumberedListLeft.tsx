import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgNumberedListLeft = ({
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
			d='M6 3.333h8M3.333 4.667V2l-1 1M3.667 9.333H2.333l1.27-1.975a.28.28 0 0 0 .048-.215c-.038-.173-.174-.476-.651-.476-.667 0-.667.592-.667.592v.148M2.667 12.667H3A.667.667 0 0 1 3 14h-.667M2.333 11.333h1.334l-1 1.334M6 8h8M6 12.667h8'
		/>
	</svg>
);
export default SvgNumberedListLeft;
