import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgGas = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		width={props.width || 16}
		height={props.height || 16}
		viewBox='0 0 16 16'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden={!title}
		strokeWidth={props.strokeWidth || 1.5 * (16 / (Number(props.width) || 16))}
		preserveAspectRatio='xMidYMid meet'
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			d='M6 5.33331C6 4.22875 6.8954 3.33331 8 3.33331C9.1046 3.33331 10 4.22875 10 5.33331V14.2666C10 14.4876 9.82093 14.6666 9.6 14.6666H6.4C6.17909 14.6666 6 14.4876 6 14.2666V5.33331Z'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path d='M6 7.33331H10' stroke='currentColor' strokeLinecap='round' />
		<path
			d='M7.99992 3.33331V1.33331M7.99992 1.33331H7.33325M7.99992 1.33331H8.66659'
			stroke='currentColor'
			strokeLinecap='round'
		/>
	</svg>
);
export default SvgGas;
