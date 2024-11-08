import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBoxingGlove = ({
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
			d='M5.66 11.818h6.577m-6.578 0V14h6.578v-2.182m-6.578 0c-2.192-1.454-3.288-5.09-2.923-6.182.292-.872 1.584-.606 2.193-.363C4.929 2.727 6.025 2 8.949 2s4.384.727 4.384 4.364c0 2.909-.73 4.848-1.096 5.454'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M4.928 5.273c.244.242.95.727 1.828.727h3.288M4.928 5.273c0 2.545 1.097 2.909 1.828 2.909'
		/>
	</svg>
);
export default SvgBoxingGlove;
