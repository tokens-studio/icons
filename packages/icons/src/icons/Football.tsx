import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFootball = ({
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
			d='M8 9.21875V14'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.33337 2V9.21873H12.6667V2'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.66683 4.48802C9.38063 4.07588 9.62236 3.07896 9.69909 2.59953C9.72476 2.43911 9.63683 2.28685 9.48509 2.22887C9.03156 2.05559 8.04729 1.76648 7.33349 2.17861C6.61963 2.59075 6.3779 3.58767 6.30118 4.06709C6.27551 4.22752 6.36342 4.37979 6.51519 4.43777C6.96876 4.61104 7.95296 4.90015 8.66683 4.48802Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgFootball;
