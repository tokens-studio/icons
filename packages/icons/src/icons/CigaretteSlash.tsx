import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCigaretteSlash = ({
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
			d='M12 10V12'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12 7.33331C12 6.66665 11.3333 5.99998 9.99998 5.99998C9.79851 5.99998 9.56998 5.99998 9.33345 5.99998C8.22891 5.99998 7.33331 5.10455 7.33331 3.99998V1.33331'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14.6667 7.33331C14.6667 3.33331 12 3.33331 12 3.33331C12 3.33331 14.6667 3.99998 14.6667 1.33331'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14.6667 10V12'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.73331 12H12L9.99998 10H1.73331C1.5124 10 1.33331 10.1791 1.33331 10.4V11.6C1.33331 11.8209 1.5124 12 1.73331 12Z'
			stroke='currentColor'
		/>
		<path
			d='M2 2L14 14'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgCigaretteSlash;
