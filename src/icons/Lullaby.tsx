import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgLullaby = ({
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
			d='M2 7.671a6.329 6.329 0 0 0 12 2.813C8.329 10.484 5.516 7.67 5.516 2A6.33 6.33 0 0 0 2 7.671'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeWidth={1.5}
			d='M12.667 6.333a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 0V2.4a.4.4 0 0 1 .4-.4H14'
		/>
	</svg>
);
export default SvgLullaby;
