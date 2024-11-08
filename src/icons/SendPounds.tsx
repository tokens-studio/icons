import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSendPounds = ({
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
			d='M8.667 8H14m0 0-2.56-2.667M14 8l-2.56 2.667M4.667 8.667c-.445 1.11-1.111 2.222-2 2.666h4.222s.666 0 1.111-.444M6.444 8.667H2M7.333 6.667a2 2 0 1 0-2 2'
		/>
	</svg>
);
export default SvgSendPounds;
