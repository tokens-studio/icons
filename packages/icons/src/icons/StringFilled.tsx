import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgStringFilled = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		width={props.width || 16}
		height={props.height || 16}
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden={!title}
		strokeWidth={props.strokeWidth || 2 * (16 / (Number(props.width) || 16))}
		preserveAspectRatio='xMidYMid meet'
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			d='M22 16C22.5523 16 23 16.4477 23 17V18C23 18.5752 22.7224 19.0667 22.3945 19.3945C22.0667 19.7224 21.5752 20 21 20H3C2.42479 20 1.9333 19.7224 1.60547 19.3945C1.27765 19.0667 1 18.5752 1 18V17C1.00003 16.4478 1.44776 16 2 16C2.55226 16 2.99997 16.4477 3 17V17.958L3.01953 17.9805C3.02728 17.9882 3.03497 17.995 3.04199 18H20.958C20.965 17.995 20.9727 17.9882 20.9805 17.9805L21 17.958V17C21 16.4478 21.4478 16 22 16Z'
			fill='currentColor'
		/>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M10 8C10.5523 8.00003 11 8.44774 11 9V15C11 15.5523 10.5523 16 10 16C9.59437 16 9.24573 15.7582 9.08887 15.4111C8.48082 15.7843 7.7657 16 7 16C4.79086 16 3 14.2091 3 12C3 9.79086 4.79086 8 7 8C7.76552 8.00001 8.48092 8.2149 9.08887 8.58789C9.24591 8.24126 9.59469 8 10 8ZM7 10C5.89543 10 5 10.8954 5 12C5 13.1046 5.89543 14 7 14C8.10454 14 9 13.1045 9 12C9 10.8955 8.10454 10 7 10Z'
			fill='currentColor'
		/>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M14 6C14.5523 6 15 6.44772 15 7V8.53613C15.5884 8.19563 16.2713 8.00001 17 8C19.2091 8 21 9.79086 21 12C21 14.2091 19.2091 16 17 16C16.234 16 15.5184 15.7846 14.9102 15.4111C14.7532 15.758 14.4055 16 14 16C13.4478 16 13 15.5522 13 15V7C13 6.44774 13.4477 6.00003 14 6ZM17 10C15.8955 10 15 10.8955 15 12C15 13.1045 15.8955 14 17 14C18.1046 14 19 13.1046 19 12C19 10.8954 18.1046 10 17 10Z'
			fill='currentColor'
		/>
	</svg>
);
export default SvgStringFilled;
