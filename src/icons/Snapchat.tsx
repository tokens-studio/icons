import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSnapchat = ({
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
		<path fill='#fff' d='M16 0H0v16h16z' />
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M12 5.833c0-6-8-6-8 0v1H2.915a.4.4 0 0 0-.233.726L4 8.499c-.222.779-1.133 2.468-3 3 .222.334.867 1 1.667 1l.666 1L5 13.168c.556.444 1.933 1.333 3 1.333s2.444-.889 3-1.333l1.667.333.666-1c.8 0 1.445-.667 1.667-1-1.867-.533-2.778-2.222-3-3l1.318-.941a.4.4 0 0 0-.233-.726H12z'
		/>
	</svg>
);
export default SvgSnapchat;
