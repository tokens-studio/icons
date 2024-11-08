import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFace3DDraft = ({
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
			d='M13.333 5.186v5.198a.4.4 0 0 1-.18.335l-4.41 2.898a.4.4 0 0 1-.166.062l-6.79.926a.4.4 0 0 1-.454-.397v-8.2a.4.4 0 0 1 .2-.346l7.192-4.187a.4.4 0 0 1 .458.04l4.008 3.365a.4.4 0 0 1 .142.306'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m1.667 6 6.818 1.948a.4.4 0 0 0 .337-.056L13 5M8.667 13.667V8M11 9.34l.007-.007M14.667 11.34l.006-.007'
		/>
	</svg>
);
export default SvgFace3DDraft;
