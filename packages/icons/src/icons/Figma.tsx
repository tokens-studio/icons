import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFigma = ({
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
			d='M4 4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21071 5.46957 2 6 2H8V6H6C5.46957 6 4.96086 5.78929 4.58579 5.41421C4.21071 5.03914 4 4.53043 4 4Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 2H10C10.2627 2 10.5227 2.05173 10.7654 2.15224C11.008 2.25275 11.2285 2.40007 11.4142 2.58579C11.5999 2.77151 11.7473 2.99198 11.8477 3.23463C11.9483 3.47729 12 3.73735 12 4C12 4.26265 11.9483 4.52271 11.8477 4.76537C11.7473 5.00802 11.5999 5.22849 11.4142 5.41421C11.2285 5.59993 11.008 5.74725 10.7654 5.84776C10.5227 5.94827 10.2627 6 10 6H8V2Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 8C8 7.73733 8.05173 7.47727 8.15227 7.2346C8.25273 6.992 8.40007 6.77153 8.5858 6.58579C8.77153 6.40007 8.992 6.25275 9.2346 6.15224C9.47727 6.05173 9.73733 6 10 6C10.2627 6 10.5227 6.05173 10.7654 6.15224C11.008 6.25275 11.2285 6.40007 11.4142 6.58579C11.5999 6.77153 11.7473 6.992 11.8477 7.2346C11.9483 7.47727 12 7.73733 12 8C12 8.26267 11.9483 8.52273 11.8477 8.7654C11.7473 9.008 11.5999 9.22847 11.4142 9.4142C11.2285 9.59993 11.008 9.74727 10.7654 9.84773C10.5227 9.94827 10.2627 10 10 10C9.73733 10 9.47727 9.94827 9.2346 9.84773C8.992 9.74727 8.77153 9.59993 8.5858 9.4142C8.40007 9.22847 8.25273 9.008 8.15227 8.7654C8.05173 8.52273 8 8.26267 8 8Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4 12C4 11.4696 4.21071 10.9609 4.58579 10.5858C4.96086 10.2107 5.46957 10 6 10H8V12C8 12.5304 7.78927 13.0391 7.4142 13.4142C7.03913 13.7893 6.53043 14 6 14C5.46957 14 4.96086 13.7893 4.58579 13.4142C4.21071 13.0391 4 12.5304 4 12Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4 8C4 7.4696 4.21071 6.96087 4.58579 6.58579C4.96086 6.21071 5.46957 6 6 6H8V10H6C5.46957 10 4.96086 9.78927 4.58579 9.4142C4.21071 9.03913 4 8.5304 4 8Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgFigma;
