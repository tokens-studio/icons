import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgGitBranch = ({
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
			d='M12 5.33329C12.7364 5.33329 13.3333 4.73634 13.3333 3.99996C13.3333 3.26358 12.7364 2.66663 12 2.66663C11.2636 2.66663 10.6667 3.26358 10.6667 3.99996C10.6667 4.73634 11.2636 5.33329 12 5.33329Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.99999 13.3333C4.73637 13.3333 5.33332 12.7364 5.33332 12C5.33332 11.2636 4.73637 10.6666 3.99999 10.6666C3.26361 10.6666 2.66666 11.2636 2.66666 12C2.66666 12.7364 3.26361 13.3333 3.99999 13.3333Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4 10.6667V2'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.33334 12H6.00001C8.33334 12 12 10.6 12 6.33337V5.33337'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgGitBranch;
