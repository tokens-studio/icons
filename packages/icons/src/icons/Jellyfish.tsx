import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgJellyfish = ({
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
			d='M8 1.33337C11.3137 1.33337 14 4.06941 14 7.44451C14 7.49004 13.9995 7.53544 13.9985 7.58077C13.9849 8.21651 13.4221 8.66671 12.7861 8.66671H3.21385C2.57793 8.66671 2.01512 8.21651 2.00146 7.58077C2.00049 7.53544 2 7.49004 2 7.44451C2 4.06941 4.68629 1.33337 8 1.33337Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4 8.66663L4.66667 9.41663C5.04687 9.84436 5.04687 10.4889 4.66667 10.9166C4.28647 11.3444 4.28647 11.9889 4.66667 12.4166C5.04687 12.8444 5.04687 13.4889 4.66667 13.9166L4 14.6666'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.33337 8.66663L8.00004 9.41663C8.38024 9.84436 8.38024 10.4889 8.00004 10.9166C7.61984 11.3444 7.61984 11.9889 8.00004 12.4166C8.38024 12.8444 8.38024 13.4889 8.00004 13.9166L7.33337 14.6666'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.6666 8.66663L11.3333 9.41663C11.7135 9.84436 11.7135 10.4889 11.3333 10.9166C10.9531 11.3444 10.9531 11.9889 11.3333 12.4166C11.7135 12.8444 11.7135 13.4889 11.3333 13.9166L10.6666 14.6666'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgJellyfish;
