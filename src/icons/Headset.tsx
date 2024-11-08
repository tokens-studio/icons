import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgHeadset = ({
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
			d='m2.667 9-.324.08a1.33 1.33 0 0 0-1.01 1.294v1.252c0 .611.417 1.145 1.01 1.293l1.16.29A.4.4 0 0 0 4 12.821V9.179a.4.4 0 0 0-.497-.388zm0 0v-.333c0-3.314 2.387-6 5.333-6 2.945 0 5.333 2.686 5.333 6V9m0 0 .324.08c.593.15 1.01.682 1.01 1.294v1.252c0 .611-.417 1.145-1.01 1.293l-1.16.29a.4.4 0 0 1-.497-.388V9.179a.4.4 0 0 1 .497-.388z'
		/>
	</svg>
);
export default SvgHeadset;
