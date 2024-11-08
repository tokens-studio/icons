import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgNumberedListRight = ({
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
			d='M2 3.333h8M13.667 4.667V2l-1 1M14 9.333h-1.333l1.27-1.975a.28.28 0 0 0 .048-.215c-.039-.173-.174-.476-.652-.476-.666 0-.666.592-.666.592v.148M13 12.667h.333a.667.667 0 0 1 0 1.333h-.666M12.667 11.333H14l-1 1.334M2 8h8M2 12.667h8'
		/>
	</svg>
);
export default SvgNumberedListRight;
